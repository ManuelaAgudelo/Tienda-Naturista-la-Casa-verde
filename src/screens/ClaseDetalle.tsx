import { useEffect, useState } from 'react'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { buscarClase, claseAnterior, claseSiguiente } from '../data/curso'
import { useProgreso } from '../lib/progreso'
import { PrimaryButton, Card } from '../components/ui'
import revista1 from '../assets/revista-1.png'
import revista2 from '../assets/revista-2.png'

const IMAGENES: Record<string, string> = {
  'revista-1': revista1,
  'revista-2': revista2,
}

export default function ClaseDetalle() {
  const { claseId } = useParams<{ claseId: string }>()
  const navigate = useNavigate()
  const encontrado = claseId ? buscarClase(claseId) : null
  const { estaCompletada, marcarCompletada, registrarVisita, completadasCount, totalActivas } = useProgreso()
  const [visorAbierto, setVisorAbierto] = useState<string | null>(null)

  useEffect(() => {
    if (encontrado) registrarVisita(encontrado.clase.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [claseId])

  if (!encontrado) return <Navigate to="/curso" replace />
  const { modulo, clase } = encontrado

  const completada = estaCompletada(clase.id)
  const anterior = claseAnterior(clase.id)
  const siguiente = claseSiguiente(clase.id)

  return (
    <div className="pb-32">
      <header className="px-5 pt-6 pb-3">
        <Link to={`/curso/modulo/${modulo.id}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink-muted)] mb-3">
          <ArrowLeft size={16} /> {modulo.titulo}
        </Link>
        <p className="text-[11px] font-semibold text-[var(--color-primary-dark)] uppercase tracking-wide">
          Módulo {modulo.numero} · Clase {clase.numero}
        </p>
        <h1 className="text-[20px] font-semibold text-[var(--color-ink)] mt-0.5">{clase.titulo}</h1>
      </header>

      <div className="px-5">
        {clase.estado === 'video' || clase.estado === 'en_revision' ? (
          <div className="rounded-[var(--radius-card)] overflow-hidden bg-black aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${clase.youtubeId}`}
              title={clase.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : clase.estado === 'imagenes' ? (
          <div className="flex flex-col gap-3">
            {clase.imagenes?.map(imgKey => (
              <button
                key={imgKey}
                onClick={() => setVisorAbierto(imgKey)}
                className="rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)] active:scale-[0.98] transition-transform"
              >
                <img src={IMAGENES[imgKey]} alt={`${clase.titulo} — imagen`} className="w-full h-auto object-cover" />
              </button>
            ))}
          </div>
        ) : (
          <Card className="p-8 flex flex-col items-center text-center gap-2">
            <Clock size={28} className="text-[var(--color-ink-muted)]" />
            <p className="font-medium text-[15px]">Contenido en actualización</p>
            <p className="text-sm text-[var(--color-ink-muted)]">Pronto vamos a agregar el recurso de esta clase.</p>
          </Card>
        )}

        {clase.notaPendiente && (
          <div className="mt-3 rounded-[var(--radius-button)] bg-[var(--color-warn-light)] px-3.5 py-2.5 text-[13px] text-[var(--color-warn)]">
            ⚠️ {clase.notaPendiente}
          </div>
        )}

        {clase.recurso && (
          <p className="text-sm text-[var(--color-ink-muted)] mt-3">{clase.recurso}</p>
        )}
      </div>

      {/* Espacio reservado para la actividad de aprendizaje de esta clase.
          No se inventan preguntas: se activa cuando el dueño del curso las proporcione. */}
      <div className="px-5 mt-5">
        <Card className="p-4 border-dashed">
          <p className="text-[11px] font-semibold text-[var(--color-ink-muted)] uppercase tracking-wide mb-1">
            Actividad de aprendizaje
          </p>
          <p className="text-sm text-[var(--color-ink-muted)]">
            Todavía no hay una actividad cargada para esta clase. En cuanto esté disponible, la vas a poder
            responder aquí mismo, sin salir de la app.
          </p>
        </Card>
      </div>

      <div className="px-5 mt-5">
        <button
          onClick={() => {
            const completando = !completada
            marcarCompletada(clase.id, completando)
            if (completando && completadasCount + 1 >= totalActivas) {
              navigate('/certificado')
            }
          }}
          className={`w-full h-12 rounded-[var(--radius-button)] font-semibold text-[15px] flex items-center justify-center gap-2 active:scale-[0.97] transition-all border ${
            completada
              ? 'bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] border-[var(--color-primary-light)]'
              : 'bg-[var(--color-surface)] text-[var(--color-ink)] border-[var(--color-border)]'
          }`}
        >
          <Check size={18} />
          {completada ? 'Clase completada' : 'Marcar como completada'}
        </button>
      </div>

      <div className="px-5 mt-4 flex items-center gap-3">
        <button
          onClick={() => anterior && navigate(`/curso/${anterior.id}`)}
          disabled={!anterior}
          className="flex-1 h-11 rounded-[var(--radius-button)] border border-[var(--color-border)] text-sm font-medium flex items-center justify-center gap-1 disabled:opacity-30 active:scale-[0.97] transition-transform"
        >
          <ChevronLeft size={16} /> Anterior
        </button>
        <button
          onClick={() => siguiente && navigate(`/curso/${siguiente.id}`)}
          disabled={!siguiente}
          className="flex-1 h-11 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white text-sm font-medium flex items-center justify-center gap-1 disabled:opacity-30 active:scale-[0.97] transition-transform"
        >
          Siguiente <ChevronRight size={16} />
        </button>
      </div>

      {visorAbierto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVisorAbierto(null)}
        >
          <img src={IMAGENES[visorAbierto]} alt="" className="max-w-full max-h-full rounded-lg" />
          <PrimaryButton onClick={() => setVisorAbierto(null)} className="absolute top-6 right-5 !h-10 !px-4">
            Cerrar
          </PrimaryButton>
        </div>
      )}
    </div>
  )
}
