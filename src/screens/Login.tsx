import { useState } from 'react'
import logo from '../assets/logo.jpg'
import { supabase } from '../lib/supabase'
import { PrimaryButton } from '../components/ui'

export default function Login({ onIrARegistro }: { onIrARegistro: () => void }) {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setCargando(true)
    const { error: errorLogin } = await supabase.auth.signInWithPassword({
      email: correo.trim(),
      password,
    })
    setCargando(false)

    if (errorLogin) {
      setError('Correo o contraseña incorrectos. Intenta de nuevo.')
    }
  }

  return (
    <div className="min-h-dvh flex flex-col justify-center px-6 py-10 bg-[var(--color-bg)]">
      <div className="flex flex-col items-center mb-6">
        <img src={logo} alt="Tienda Naturista La Casa Verde" className="w-16 h-16 object-contain rounded-full mb-3" />
        <h1 className="text-xl font-semibold text-[var(--color-ink)]">Bienvenido de nuevo</h1>
        <p className="text-sm text-[var(--color-ink-muted)] text-center mt-1">
          Inicia sesión para continuar tu curso.
        </p>
      </div>

      <form onSubmit={enviar} className="flex flex-col gap-3 max-w-sm w-full mx-auto">
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
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="h-12 px-4 rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-surface)] text-[15px] outline-none focus-visible:border-[var(--color-primary)]"
        />

        {error && <p className="text-sm text-[var(--color-danger)]">{error}</p>}

        <PrimaryButton type="submit" disabled={cargando} className="w-full mt-2">
          {cargando ? 'Entrando...' : 'Iniciar sesión'}
        </PrimaryButton>
      </form>

      <p className="text-center text-sm text-[var(--color-ink-muted)] mt-6">
        ¿Todavía no tienes cuenta?{' '}
        <button onClick={onIrARegistro} className="text-[var(--color-primary-dark)] font-semibold">
          Créala aquí
        </button>
      </p>
    </div>
  )
}
