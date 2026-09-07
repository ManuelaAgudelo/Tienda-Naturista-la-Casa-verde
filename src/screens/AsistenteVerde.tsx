import { useRef, useState, useEffect } from 'react'
import { Send, Leaf } from 'lucide-react'
import { responderAsistente, MENSAJE_BIENVENIDA, SUBTITULO_BIENVENIDA, AVISO_SEGURIDAD, type ContextoConversacion } from '../lib/asistenteVerde'

interface Mensaje {
  id: string
  autor: 'usuario' | 'asistente'
  texto: string
}

export default function AsistenteVerde() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([])
  const [texto, setTexto] = useState('')
  const [contexto, setContexto] = useState<ContextoConversacion | null>(null)
  const finRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensajes])

  const enviar = () => {
    const contenido = texto.trim()
    if (!contenido) return
    const idUsuario = crypto.randomUUID()
    const idAsistente = crypto.randomUUID()
    const respuesta = responderAsistente(contenido, contexto)
    setContexto(respuesta.contexto)
    setMensajes(prev => [
      ...prev,
      { id: idUsuario, autor: 'usuario', texto: contenido },
      { id: idAsistente, autor: 'asistente', texto: respuesta.texto },
    ])
    setTexto('')
  }

  return (
    <div className="flex flex-col h-[100dvh]">
      <header className="px-5 pt-6 pb-4 shrink-0">
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center shrink-0">
            <Leaf size={22} className="text-[var(--color-primary-dark)]" />
          </span>
          <div>
            <h1 className="text-[17px] font-semibold text-[var(--color-ink)]">{MENSAJE_BIENVENIDA}</h1>
            <p className="text-xs text-[var(--color-ink-muted)] mt-0.5 max-w-xs">{SUBTITULO_BIENVENIDA}</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-5 pb-3 flex flex-col gap-3">
        <div className="bg-[var(--color-surface-sunken)] rounded-[var(--radius-card)] px-3.5 py-2.5 text-[12px] text-[var(--color-ink-muted)]">
          {AVISO_SEGURIDAD}
        </div>

        {mensajes.length === 0 && (
          <div className="flex flex-col gap-2 mt-2">
            {['¿Qué productos tienen para el sistema digestivo?', '¿Qué productos tienen para las articulaciones?', 'Aceite de aguacate'].map(sugerencia => (
              <button
                key={sugerencia}
                onClick={() => setTexto(sugerencia)}
                className="text-left text-sm px-3.5 py-2.5 rounded-[var(--radius-button)] border border-[var(--color-border)] text-[var(--color-ink-muted)] active:scale-[0.98] transition-transform"
              >
                {sugerencia}
              </button>
            ))}
          </div>
        )}

        {mensajes.map(m => (
          <div key={m.id} className={`flex ${m.autor === 'usuario' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] whitespace-pre-line rounded-[var(--radius-card)] px-4 py-2.5 text-[14px] leading-relaxed ${
                m.autor === 'usuario'
                  ? 'bg-[var(--color-primary)] text-white rounded-br-sm'
                  : 'bg-[var(--color-surface)] border border-[var(--color-border)] rounded-bl-sm'
              }`}
            >
              {m.texto}
            </div>
          </div>
        ))}
        <div ref={finRef} />
      </div>

      <div className="shrink-0 px-5 pt-2 pb-[calc(env(safe-area-inset-bottom)+96px)] bg-[var(--color-bg)]">
        <div className="flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-button)] pl-4 pr-1.5 h-12">
          <input
            value={texto}
            onChange={e => setTexto(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && enviar()}
            placeholder="Escribe tu pregunta..."
            className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-[var(--color-ink-muted)]"
          />
          <button
            onClick={enviar}
            disabled={!texto.trim()}
            className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 disabled:opacity-30 active:scale-[0.92] transition-transform"
            aria-label="Enviar"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
