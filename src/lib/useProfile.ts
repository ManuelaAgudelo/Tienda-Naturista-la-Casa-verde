import { useEffect, useState } from 'react'
import { supabase } from './supabase'

export function useProfile() {
  const [nombre, setNombre] = useState<string | null>(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    let activo = true
    supabase.auth.getUser().then(async ({ data }) => {
      const usuario = data.user
      if (!usuario) {
        if (activo) setCargando(false)
        return
      }
      const { data: perfil } = await supabase
        .from('profiles')
        .select('nombre')
        .eq('id', usuario.id)
        .single()
      if (activo) {
        setNombre(perfil?.nombre ?? (usuario.user_metadata?.nombre as string | undefined) ?? null)
        setCargando(false)
      }
    })
    return () => {
      activo = false
    }
  }, [])

  return { nombre, cargando }
}
