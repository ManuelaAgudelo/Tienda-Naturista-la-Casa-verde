import { Link } from 'react-router-dom'
import { Lock, ChevronRight } from 'lucide-react'
import { MODULOS } from '../data/curso'
import { useProgreso } from '../lib/progreso'
import { Card, ProgressBar, ScreenHeader } from '../components/ui'

export default function Curso() {
  const { progresoPorModulo, porcentaje, completadasCount, totalActivas } = useProgreso()

  return (
    <div className="pb-28">
      <ScreenHeader title="Mi Curso" subtitle="Mi Tienda Naturista · Transforma tu pasión en éxito" />

      <div className="px-5 mb-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[var(--color-ink-muted)]">Progreso general</span>
            <span className="text-sm font-semibold text-[var(--color-primary-dark)]">{porcentaje}%</span>
          </div>
          <ProgressBar percent={porcentaje} />
          <p className="text-xs text-[var(--color-ink-muted)] mt-2">{completadasCount} de {totalActivas} clases completadas</p>
        </Card>
      </div>

      <div className="px-5 flex flex-col gap-3">
        {MODULOS.map(modulo => {
          const prog = progresoPorModulo(modulo.id)
          const completoTotal = !modulo.bloqueado && prog.completadas === prog.total && prog.total > 0

          if (modulo.bloqueado) {
            return (
              <Card key={modulo.id} className="p-4 opacity-70">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-[var(--color-surface-sunken)] flex items-center justify-center shrink-0">
                    <Lock size={19} className="text-[var(--color-ink-muted)]" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-[var(--color-ink-muted)] uppercase tracking-wide">
                      Módulo {modulo.numero} · Próximamente
                    </p>
                    <p className="font-semibold text-[15px] truncate">{modulo.titulo}</p>
                  </div>
                </div>
                {modulo.textoBloqueado && (
                  <p className="text-xs text-[var(--color-ink-muted)] mt-3">{modulo.textoBloqueado}</p>
                )}
              </Card>
            )
          }

          return (
            <Link key={modulo.id} to={`/curso/modulo/${modulo.id}`}>
              <Card className="p-4 active:scale-[0.98] transition-transform">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[11px] font-semibold text-[var(--color-primary-dark)] uppercase tracking-wide">
                    Módulo {modulo.numero}
                  </p>
                  {completoTotal && (
                    <span className="text-[11px] font-semibold text-[var(--color-primary-dark)]">Completado</span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-[15px] truncate">{modulo.titulo}</p>
                    <p className="text-xs text-[var(--color-ink-muted)] mt-0.5">{modulo.clases.length} clases</p>
                  </div>
                  <ChevronRight size={20} className="text-[var(--color-ink-muted)] shrink-0" />
                </div>
                <div className="mt-3">
                  <ProgressBar percent={prog.porcentaje} />
                  <p className="text-[11px] text-[var(--color-ink-muted)] mt-1.5">
                    {prog.completadas}/{prog.total} · {prog.porcentaje}% completado
                  </p>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
