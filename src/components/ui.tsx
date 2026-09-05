import type { ReactNode } from 'react'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-[var(--color-surface)] rounded-[var(--radius-card)] shadow-[var(--shadow-1)] border border-[var(--color-border)] ${className}`}
    >
      {children}
    </div>
  )
}

export function Chip({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'primary' | 'warn' }) {
  const tones: Record<string, string> = {
    default: 'bg-[var(--color-surface-sunken)] text-[var(--color-ink-muted)]',
    primary: 'bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]',
    warn: 'bg-[var(--color-warn-light)] text-[var(--color-warn)]',
  }
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-[var(--radius-chip)] text-[11px] font-semibold ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-[var(--color-surface-sunken)] overflow-hidden">
      <div
        className="h-full rounded-full bg-[var(--color-primary)] transition-[width] duration-500 ease-out"
        style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
      />
    </div>
  )
}

export function PrimaryButton({
  children,
  onClick,
  disabled,
  className = '',
  type = 'button',
}: {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit'
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 h-12 px-5 rounded-[var(--radius-button)] font-semibold text-[15px] transition-all active:scale-[0.97] disabled:opacity-40 disabled:active:scale-100 ${
        disabled ? 'bg-[var(--color-surface-sunken)] text-[var(--color-ink-muted)]' : 'bg-[var(--color-primary)] text-white shadow-[var(--shadow-1)]'
      } ${className}`}
    >
      {children}
    </button>
  )
}

export function ScreenHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="px-5 pt-6 pb-2">
      <h1 className="text-[22px] font-semibold text-[var(--color-ink)]">{title}</h1>
      {subtitle && <p className="text-sm text-[var(--color-ink-muted)] mt-1">{subtitle}</p>}
    </header>
  )
}
