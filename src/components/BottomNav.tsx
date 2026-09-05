import { NavLink } from 'react-router-dom'
import { Home, GraduationCap, MessageCircle, MapPin } from 'lucide-react'

const items = [
  { to: '/', label: 'Inicio', icon: Home, end: true },
  { to: '/curso', label: 'Curso', icon: GraduationCap, end: false },
  { to: '/asistente', label: 'Asistente', icon: MessageCircle, end: false },
  { to: '/tiendas', label: 'Tiendas', icon: MapPin, end: false },
]

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 bg-[var(--color-surface)] border-t border-[var(--color-border)] pb-[env(safe-area-inset-bottom)]"
      aria-label="Navegación principal"
    >
      <ul className="grid grid-cols-4">
        {items.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors ${
                  isActive ? 'text-[var(--color-primary-dark)]' : 'text-[var(--color-ink-muted)]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                      isActive ? 'bg-[var(--color-primary-light)]' : ''
                    }`}
                  >
                    <Icon size={20} strokeWidth={isActive ? 2.4 : 2} />
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
