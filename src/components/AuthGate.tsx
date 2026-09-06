import { useState, type ReactNode } from 'react'
import { useAuth } from '../lib/useAuth'
import Registro from '../screens/Registro'
import Login from '../screens/Login'
import logo from '../assets/logo.png'

export default function AuthGate({ children }: { children: ReactNode }) {
  const { cargando, autenticado } = useAuth()
  const [pantalla, setPantalla] = useState<'registro' | 'login'>('registro')

  if (cargando) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-[var(--color-bg)]">
        <img src={logo} alt="" className="w-14 h-14 object-contain animate-pulse" />
      </div>
    )
  }

  if (!autenticado) {
    return pantalla === 'registro'
      ? <Registro onIrALogin={() => setPantalla('login')} />
      : <Login onIrARegistro={() => setPantalla('registro')} />
  }

  return <>{children}</>
}
