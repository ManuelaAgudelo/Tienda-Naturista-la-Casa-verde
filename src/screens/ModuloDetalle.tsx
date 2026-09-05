import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Check, PlayCircle, Image as ImageIcon, Clock, ChevronRight } from 'lucide-react'
import { MODULOS } from '../data/curso'
import { useProgreso } from '../lib/progreso'
import { Card, ProgressBar } from '../components/ui'

export default function ModuloDetalle() {
  const { moduloId } = useParams<{ moduloId: string }>()
  const modulo = MODULOS.find(m => m.id === moduloId)
  const { estaCompletada, progresoPorModulo } = useProgreso()

  if (!modulo) return <Navigate to="/curso" replace />

  const prog = progresoPorModulo(modulo.id)

  const iconoDe = (estado: string) => {
    if (estado === 'imagenes') return ImageIcon
    if (estado === 'pendiente' || estado === 'en_revision') return Clock
    return PlayCircle
  }

  return (
    <div className="pb-28">
      <header className="px-5 pt-6 pb-3">
        <Link to="/curso" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink-muted)] mb-3">
          <ArrowLeft size={16} /> Curso
        </Link>
        <p className="text-[11px] font-semibold text-[var(--color-primary-dark)] uppercase tracking-wide">
          Módulo {modulo.numero}
        </p>
        <h1 className="text-[21px] font-semibold text-[var(--color-ink)] mt-0.5">{modulo.titulo}</h1>
        <div className="mt-3">
          <ProgressBar percent={prog.porcentaje} />
          <p className="text-xs text-[var(--color-ink-muted)] mt-1.5">
            {prog.completadas}/{prog.total} clases completadas
          </p>
        </div>
      </header>

      <div className="px-5 flex flex-col gap-2.5">
        {modulo.clases.map(clase => {
          const completada = estaCompletada(clase.id)
          const Icon = iconoDe(clase.estado)
          const esPendiente = clase.estado === 'pendiente'

          return (
            <Link key={clase.id} to={`/curso/${clase.id}`}>
              <Card className="p-3.5 flex items-center gap-3 active:scale-[0.98] transition-transform">
                <span
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    completada ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-surface-sunken)] text-[var(--color-ink-muted)]'
                  }`}
                >
                  {completada ? <Check size={17} /> : <Icon size={17} />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-[var(--color-ink-muted)]">Clase {clase.numero}</p>
                  <p className="font-medium text-[14px] truncate">{clase.titulo}</p>
                  {esPendiente && (
                    <p className="text-[11px] text-[var(--color-warn)] mt-0.5">Contenido en actualización</p>
                  )}
                  {clase.estado === 'en_revision' && (
                    <p className="text-[11px] text-[var(--color-warn)] mt-0.5">Video en revisión</p>
                  )}
                </div>
                <ChevronRight size={18} className="text-[var(--color-ink-muted)] shrink-0" />
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
