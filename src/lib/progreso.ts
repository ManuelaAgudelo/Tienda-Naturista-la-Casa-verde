import { useCallback, useEffect, useState } from 'react'
import { MODULOS } from '../data/curso'

const KEY = 'casaverde_progreso_v1'

interface ProgresoData {
  completadas: string[]
  ultimaClaseId: string | null
}

function leer(): ProgresoData {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { completadas: [], ultimaClaseId: null }
    const data = JSON.parse(raw)
    return { completadas: Array.isArray(data.completadas) ? data.completadas : [], ultimaClaseId: data.ultimaClaseId ?? null }
  } catch {
    return { completadas: [], ultimaClaseId: null }
  }
}

function guardar(data: ProgresoData) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    // si el navegador bloquea localStorage, el progreso simplemente no persiste en este dispositivo
  }
}

export function useProgreso() {
  const [data, setData] = useState<ProgresoData>(() => leer())

  useEffect(() => {
    guardar(data)
  }, [data])

  const marcarCompletada = useCallback((claseId: string, completada: boolean) => {
    setData(prev => {
      const set = new Set(prev.completadas)
      if (completada) set.add(claseId)
      else set.delete(claseId)
      return { ...prev, completadas: [...set] }
    })
  }, [])

  const registrarVisita = useCallback((claseId: string) => {
    setData(prev => ({ ...prev, ultimaClaseId: claseId }))
  }, [])

  const estaCompletada = useCallback((claseId: string) => data.completadas.includes(claseId), [data.completadas])

  const totalActivas = MODULOS.filter(m => !m.bloqueado).reduce((acc, m) => acc + m.clases.length, 0)
  const completadasCount = data.completadas.length
  const porcentaje = totalActivas > 0 ? Math.round((completadasCount / totalActivas) * 100) : 0

  const progresoPorModulo = (moduloId: string) => {
    const modulo = MODULOS.find(m => m.id === moduloId)
    if (!modulo) return { completadas: 0, total: 0, porcentaje: 0 }
    const completadas = modulo.clases.filter(c => data.completadas.includes(c.id)).length
    const total = modulo.clases.length
    return { completadas, total, porcentaje: total > 0 ? Math.round((completadas / total) * 100) : 0 }
  }

  return {
    completadas: data.completadas,
    ultimaClaseId: data.ultimaClaseId,
    marcarCompletada,
    registrarVisita,
    estaCompletada,
    totalActivas,
    completadasCount,
    porcentaje,
    progresoPorModulo,
  }
}
