import { useMemo, useState } from 'react'
import { Search, MapPin, Phone } from 'lucide-react'
import { TIENDAS } from '../data/tiendas'
import { Card, ScreenHeader } from '../components/ui'

function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()
}

function formatearTelefono(telefono: string): string {
  const digitos = telefono.replace(/\D/g, '')
  if (digitos.length === 12 && digitos.startsWith('57')) {
    const local = digitos.slice(2)
    return `+57 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`
  }
  return telefono
}

export default function Tiendas() {
  const [busqueda, setBusqueda] = useState('')

  const resultados = useMemo(() => {
    const q = normalizar(busqueda)
    if (!q) return TIENDAS
    return TIENDAS.filter(t => {
      const campos = [t.nombre, t.direccion].filter(Boolean).join(' ')
      return normalizar(campos).includes(q)
    })
  }, [busqueda])

  return (
    <div className="pb-28">
      <ScreenHeader title="Encuentra tu tienda" subtitle="Encuentra La Casa Verde más cerca de ti" />

      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-button)] px-4 h-12">
          <Search size={18} className="text-[var(--color-ink-muted)] shrink-0" />
          <input
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            placeholder="Ej: Medellín, Cali, Pereira..."
            className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[var(--color-ink-muted)]"
          />
        </div>
        <p className="text-xs text-[var(--color-ink-muted)] mt-2">
          {resultados.length} {resultados.length === 1 ? 'tienda encontrada' : 'tiendas encontradas'}
        </p>
      </div>

      <div className="px-5 flex flex-col gap-2.5">
        {resultados.length === 0 && (
          <Card className="p-6 flex flex-col items-center text-center gap-2">
            <MapPin size={26} className="text-[var(--color-ink-muted)]" />
            <p className="font-medium text-[15px]">No encontramos tiendas con ese nombre</p>
            <p className="text-sm text-[var(--color-ink-muted)]">Intenta con otra ciudad o municipio.</p>
          </Card>
        )}

        {resultados.map(t => (
          <Card key={t.id} className="p-4">
            <p className="font-semibold text-[15px] leading-snug">{t.nombre}</p>

            {t.direccion && (
              <div className="flex items-start gap-2 mt-2.5 text-sm text-[var(--color-ink-muted)]">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{t.direccion}</span>
              </div>
            )}

            {t.telefono && (
              <a href={`tel:+${t.telefono}`} className="flex items-center gap-2 mt-1.5 text-sm text-[var(--color-ink-muted)]">
                <Phone size={15} className="shrink-0" />
                <span>{formatearTelefono(t.telefono)}</span>
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
