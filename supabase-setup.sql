-- Tabla de perfiles de usuario para Mi Tienda Naturista / La Casa Verde.
-- Guarda nombre y telefono (el correo ya vive en auth.users, no se duplica).
-- Se crea automaticamente cuando alguien se registra (trigger sobre auth.users).

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nombre text not null,
  telefono text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "usuarios pueden ver su propio perfil"
  on public.profiles for select
  using ((select auth.uid()) = id);

create policy "usuarios pueden actualizar su propio perfil"
  on public.profiles for update
  using ((select auth.uid()) = id);

-- Crea el perfil automaticamente al registrarse, tomando nombre/telefono
-- de la metadata que manda el formulario de registro.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, nombre, telefono)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'nombre', ''),
    new.raw_user_meta_data ->> 'telefono'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
