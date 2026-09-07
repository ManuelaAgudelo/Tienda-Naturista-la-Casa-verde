import { Link } from 'react-router-dom'
import { ArrowLeft, Printer, Award } from 'lucide-react'
import logo from '../assets/logo.png'
import { useProfile } from '../lib/useProfile'
import { useProgreso } from '../lib/progreso'

const FECHA_HOY = new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })

function Sello() {
  return (
    <svg viewBox="0 0 120 140" className="w-16 h-[74px] shrink-0" aria-hidden="true">
      <circle cx="60" cy="55" r="42" fill="var(--color-primary)" />
      <circle cx="60" cy="55" r="42" fill="none" stroke="var(--color-seal-gold)" strokeWidth="3" />
      <circle cx="60" cy="55" r="34" fill="none" stroke="var(--color-seal-gold)" strokeWidth="1.4" strokeDasharray="2 4" />
      <path d="M60 34 L64 47 L78 47 L67 55 L71 68 L60 60 L49 68 L53 55 L42 47 L56 47 Z" fill="var(--color-seal-gold)" />
      <path d="M35 92 L48 76 L58 84 L48 100 Z" fill="var(--color-seal-gold)" />
      <path d="M85 92 L72 76 L62 84 L72 100 Z" fill="var(--color-seal-gold)" />
    </svg>
  )
}

export default function Certificado() {
  const { nombre, cargando } = useProfile()
  const { porcentaje } = useProgreso()

  if (cargando) {
    return <div className="min-h-dvh flex items-center justify-center bg-[var(--color-bg)]" />
  }

  if (porcentaje < 100) {
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center px-6 text-center bg-[var(--color-bg)]">
        <Award size={40} className="text-[var(--color-ink-muted)] mb-3" />
        <p className="font-semibold text-[var(--color-ink)] mb-1">Todavía no tienes tu certificado</p>
        <p className="text-sm text-[var(--color-ink-muted)] max-w-xs mb-6">
          Termina las clases que te faltan del curso para desbloquearlo. Vas en {porcentaje}%.
        </p>
        <Link to="/curso" className="text-[var(--color-primary-dark)] font-semibold text-sm">
          Volver al curso
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-dvh bg-[var(--color-bg)]">
      <div className="px-5 pt-6 pb-2 flex items-center justify-between print:hidden">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink-muted)]">
          <ArrowLeft size={16} /> Inicio
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary-dark)]"
        >
          <Printer size={16} /> Descargar / Imprimir
        </button>
      </div>

      <div className="px-4 py-6 overflow-x-auto print:p-0 print:overflow-visible">
        <div
          id="certificado"
          className="relative mx-auto bg-[var(--color-surface)] aspect-[1.42/1] w-full max-w-2xl min-w-[560px] rounded-[6px] shadow-[var(--shadow-2)] print:shadow-none overflow-hidden"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, var(--color-primary-light) 0, var(--color-primary-light) 1px, transparent 1px, transparent 14px)',
          }}
        >
          {/* Marco doble */}
          <div className="absolute inset-3 border-[3px] border-[var(--color-primary-dark)] rounded-[3px]">
            <div className="absolute inset-[6px] border border-[var(--color-seal-gold)]" />
          </div>

          {/* Esquinas decorativas */}
          {[
            'top-4 left-4 border-t-2 border-l-2',
            'top-4 right-4 border-t-2 border-r-2',
            'bottom-4 left-4 border-b-2 border-l-2',
            'bottom-4 right-4 border-b-2 border-r-2',
          ].map(pos => (
            <span key={pos} className={`absolute w-6 h-6 border-[var(--color-seal-gold)] ${pos}`} />
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 py-8">
            <img src={logo} alt="La Casa Verde" className="w-14 h-14 object-contain mb-2" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-seal-gold-dark)]">
              La Casa Verde · Escuela Verde
            </p>
            <h1 className="font-display text-[26px] leading-tight text-[var(--color-primary-dark)] mt-1">
              Certificado de Finalización
            </h1>

            <div className="w-24 h-px bg-[var(--color-seal-gold)] my-3" />

            <p className="text-[13px] text-[var(--color-ink-muted)]">Se otorga el presente certificado a</p>
            <p className="font-display text-[32px] text-[var(--color-ink)] my-2 break-words max-w-lg">
              {nombre || 'Estudiante de La Casa Verde'}
            </p>
            <p className="text-[13px] text-[var(--color-ink-muted)] max-w-md leading-relaxed">
              por completar exitosamente el curso <strong className="text-[var(--color-ink)]">"Mi Tienda Naturista — Transforma tu pasión en éxito"</strong>,
              cursando sus 6 módulos de formación en medicina natural y emprendimiento.
            </p>

            <div className="flex items-end justify-center gap-10 mt-6 w-full max-w-md">
              <div className="flex-1 text-center">
                <p className="font-display text-[15px] text-[var(--color-ink)] border-b border-[var(--color-border)] pb-1">Dr. Felipe López</p>
                <p className="text-[10px] uppercase tracking-wide text-[var(--color-ink-muted)] mt-1">Instructor</p>
              </div>
              <Sello />
              <div className="flex-1 text-center">
                <p className="font-display text-[15px] text-[var(--color-ink)] border-b border-[var(--color-border)] pb-1">{FECHA_HOY}</p>
                <p className="text-[10px] uppercase tracking-wide text-[var(--color-ink-muted)] mt-1">Fecha</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-[var(--color-ink-muted)] mt-3 print:hidden max-w-2xl mx-auto">
          Consejo: gírate el celular en horizontal antes de descargarlo para verlo completo.
        </p>
      </div>
    </div>
  )
}
