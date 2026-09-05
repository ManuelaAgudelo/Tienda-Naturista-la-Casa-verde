import { Link } from 'react-router-dom'
import { GraduationCap, MessageCircle, MapPin, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'
import { useProgreso } from '../lib/progreso'
import { buscarClase, MODULOS } from '../data/curso'
import { TIENDAS } from '../data/tiendas'
import { Card, ProgressBar } from '../components/ui'

export default function Inicio() {
  const { completadasCount, totalActivas, porcentaje, ultimaClaseId } = useProgreso()
  const ultima = ultimaClaseId ? buscarClase(ultimaClaseId) : null
  const primeraClase = MODULOS[0].clases[0]
  const continuarHacia = ultima ? ultima.clase : primeraClase

  return (
    <div className="pb-28">
      <div className="px-5 pt-8 pb-4 flex flex-col items-center text-center">
        <img src={logo} alt="Mi Tienda Naturista - La Casa Verde" className="w-24 h-24 object-contain mb-3" />
        <h1 className="text-2xl font-semibold text-[var(--color-ink)]">Mi Tienda Naturista</h1>
        <p className="text-sm text-[var(--color-ink-muted)] mt-1 max-w-xs">
          Aprende, consulta y fortalece tus conocimientos sobre el mundo naturista.
        </p>
      </div>

      <div className="px-5">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[var(--color-ink-muted)]">Tu progreso</span>
            <span className="text-sm font-semibold text-[var(--color-primary-dark)]">{porcentaje}%</span>
          </div>
          <ProgressBar percent={porcentaje} />
          <p className="text-xs text-[var(--color-ink-muted)] mt-2">
            {completadasCount} de {totalActivas} clases completadas
          </p>
          {ultima && (
            <p className="text-xs text-[var(--color-ink-muted)] mt-1">
              Última clase: {ultima.modulo.titulo} · {ultima.clase.titulo}
            </p>
          )}
          <Link to={`/curso/${continuarHacia.id}`}>
            <button className="mt-4 w-full h-12 rounded-[var(--radius-button)] bg-[var(--color-primary)] text-white font-semibold text-[15px] flex items-center justify-center gap-2 active:scale-[0.97] transition-transform">
              Continuar aprendiendo
              <ArrowRight size={18} />
            </button>
          </Link>
        </Card>
      </div>

      <div className="px-5 mt-5 flex flex-col gap-3">
        <Link to="/curso">
          <Card className="p-4 flex items-center gap-3 active:scale-[0.98] transition-transform">
            <span className="w-11 h-11 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center shrink-0">
              <GraduationCap size={22} className="text-[var(--color-primary-dark)]" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[15px]">Continuar mi curso</p>
              <p className="text-xs text-[var(--color-ink-muted)]">6 módulos, a tu ritmo</p>
            </div>
            <ArrowRight size={18} className="text-[var(--color-ink-muted)] shrink-0" />
          </Card>
        </Link>

        <Link to="/asistente">
          <Card className="p-4 flex items-center gap-3 active:scale-[0.98] transition-transform">
            <span className="w-11 h-11 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center shrink-0">
              <MessageCircle size={22} className="text-[var(--color-primary-dark)]" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[15px]">Pregúntale al Asistente Verde</p>
              <p className="text-xs text-[var(--color-ink-muted)]">Información oficial de productos</p>
            </div>
            <ArrowRight size={18} className="text-[var(--color-ink-muted)] shrink-0" />
          </Card>
        </Link>

        <Link to="/tiendas">
          <Card className="p-4 flex items-center gap-3 active:scale-[0.98] transition-transform">
            <span className="w-11 h-11 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center shrink-0">
              <MapPin size={22} className="text-[var(--color-primary-dark)]" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[15px]">Encuentra una tienda</p>
              <p className="text-xs text-[var(--color-ink-muted)]">{TIENDAS.length} tiendas en Colombia</p>
            </div>
            <ArrowRight size={18} className="text-[var(--color-ink-muted)] shrink-0" />
          </Card>
        </Link>
      </div>
    </div>
  )
}
