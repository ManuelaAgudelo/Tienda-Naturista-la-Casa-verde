import { useState } from 'react'
import { Leaf } from 'lucide-react'
import logo from '../assets/logo.png'
import { supabase } from '../lib/supabase'
import { PrimaryButton } from '../components/ui'

export default function Registro({ onIrALogin }: { onIrALogin: () => void }) {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [listo, setListo] = useState(false)

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    setCargando(true)
    const { error: errorRegistro } = await supabase.auth.signUp({
      email: correo.trim(),
      password,
      options: { data: { nombre: nombre.trim(), telefono: telefono.trim() } },
    })
    setCargando(false)

    if (errorRegistro) {
      if (errorRegistro.message.toLowerCase().includes('already registered') || errorRegistro.message.toLowerCase().includes('already exists')) {
        setError('Ese correo ya tiene una cuenta creada. Intenta iniciar sesión.')
      } else {
        setError('No pudimos crear tu cuenta. Revisa los datos e intenta de nuevo.')
      }
      return
    }

    setListo(true)
  }

  if (listo) {
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center px-6 text-center bg-[var(--color-bg)]">
        <span className="w-16 h-16 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center mb-4">
          <Leaf size={28} className="text-[var(--color-primary-dark)]" />
        </span>
        <h1 className="text-xl font-semibold text-[var(--color-ink)] mb-2">¡Cuenta creada!</h1>
        <p className="text-sm text-[var(--color-ink-muted)] max-w-xs mb-6">
          Tu cuenta quedó lista. Ya puedes entrar a la app con tu correo y contraseña.
        </p>
        <PrimaryButton onClick={onIrALogin} className="w-full max-w-xs">Ir a iniciar sesión</PrimaryButton>
      </div>
    )
  }

  return (
    <div className="min-h-dvh flex flex-col justify-center px-6 py-10 bg-[var(--color-bg)]">
      <div className="flex flex-col items-center mb-6">
        <img src={logo} alt="La Casa Verde" className="w-16 h-16 object-contain mb-3" />
        <h1 className="text-xl font-semibold text-[var(--color-ink)]">Crea tu cuenta</h1>
        <p className="text-sm text-[var(--color-ink-muted)] text-center mt-1">
          Es gratis, solo toma un minuto y no vuelves a hacerlo en este celular.
        </p>
      </div>

      <form onSubmit={enviar} className="flex flex-col gap-3 max-w-sm w-full mx-auto">
        <input
          required
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder="Nombre completo"
          className="h-12 px-4 rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[15px] outline-none focus-visible:border-[var(--color-primary)]"
        />
        <input
          required
          type="email"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
          placeholder="Correo electrónico"
          className="h-12 px-4 rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[15px] outline-none focus-visible:border-[var(--color-primary)]"
        />
        <input
          required
          type="tel"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
          placeholder="Teléfono / WhatsApp"
          className="h-12 px-4 rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[15px] outline-none focus-visible:border-[var(--color-primary)]"
        />
        <input
          required
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Crea una contraseña"
          className="h-12 px-4 rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[15px] outline-none focus-visible:border-[var(--color-primary)]"
        />

        {error && <p className="text-sm text-[var(--color-danger)]">{error}</p>}

        <PrimaryButton type="submit" disabled={cargando} className="w-full mt-2">
          {cargando ? 'Creando tu cuenta...' : 'Crear mi cuenta'}
        </PrimaryButton>
      </form>

      <p className="text-center text-sm text-[var(--color-ink-muted)] mt-6">
        ¿Ya tienes cuenta?{' '}
        <button onClick={onIrALogin} className="text-[var(--color-primary-dark)] font-semibold">
          Inicia sesión
        </button>
      </p>
    </div>
  )
}
