// Fuente oficial: Mi_Tienda_Naturista_Base_Maestra.pdf (proporcionado por el dueño del proyecto).
// No se inventan clases, videos, URLs ni actividades que no estén en ese documento.

export type EstadoRecurso = 'video' | 'imagenes' | 'pendiente' | 'en_revision'

export interface Clase {
  id: string
  numero: string
  titulo: string
  recurso: string | null
  youtubeId: string | null
  imagenes?: string[]
  estado: EstadoRecurso
  notaPendiente?: string
}

export interface Modulo {
  id: string
  numero: number
  titulo: string
  bloqueado: boolean
  textoBloqueado?: string
  clases: Clase[]
}

export const MODULOS: Modulo[] = [
  {
    id: 'mod-1',
    numero: 1,
    titulo: 'Introducción de la Plataforma',
    bloqueado: false,
    clases: [
      { id: '1.1', numero: '1.1', titulo: 'Bienvenida', recurso: 'Bienvenidos al Curso Mi Tienda Naturista', youtubeId: 'bmQoFndca0A', estado: 'video' },
      { id: '1.2', numero: '1.2', titulo: 'Cómo Usar la Plataforma', recurso: 'Uso de Plataforma Digital Casa Verde', youtubeId: 'lRzSHgpeKek', estado: 'video' },
      { id: '1.3', numero: '1.3', titulo: 'Escuela Verde', recurso: 'Ingreso a la Escuela Verde', youtubeId: 'osE_5-_-beE', estado: 'video' },
      { id: '1.4', numero: '1.4', titulo: 'Revista Física Nacional', recurso: 'Material visual: portada y páginas interiores de la Revista Física Nacional', youtubeId: null, imagenes: ['revista-1', 'revista-2'], estado: 'imagenes' },
      { id: '1.5', numero: '1.5', titulo: 'Directorio Nacional Online', recurso: 'Cómo agregar mi Tienda Naturista La Casa Verde en el Directorio', youtubeId: '2d7frjtKqLQ', estado: 'video' },
      { id: '1.6', numero: '1.6', titulo: 'Carnet Verde Digital', recurso: 'Cómo crear el Carnet Verde Digital', youtubeId: 'ym2KWkL3VdE', estado: 'video' },
      { id: '1.7', numero: '1.7', titulo: 'Citas Médica Online', recurso: 'Cómo Solicitar Cita Médica Virtual', youtubeId: 'BdGWAFAs10M', estado: 'video' },
      { id: '1.8', numero: '1.8', titulo: 'Descargar Publicidad', recurso: 'No pierdas clientes por no estar en redes!', youtubeId: 'GeFvlmrjBrk', estado: 'en_revision', notaPendiente: 'El dueño del curso aún está confirmando si este es el video correcto para esta clase.' },
    ],
  },
  {
    id: 'mod-2',
    numero: 2,
    titulo: 'Introducción al Naturismo',
    bloqueado: false,
    clases: [
      { id: '2.1', numero: '2.1', titulo: 'Introducción al Naturismo', recurso: 'Historia y Evolución de la Medicina Natural', youtubeId: 'oAN6EX93Ml8', estado: 'en_revision', notaPendiente: 'El dueño del curso aún está confirmando si este es el video correcto para esta clase.' },
      { id: '2.2', numero: '2.2', titulo: 'Introducción al Naturismo II', recurso: 'Medicina Natural II', youtubeId: 'JsF_XLoSc8M', estado: 'en_revision', notaPendiente: 'El dueño del curso aún está confirmando si este es el video correcto para esta clase.' },
    ],
  },
  {
    id: 'mod-3',
    numero: 3,
    titulo: 'Creación, Normatividad y Legalidad de Tienda Naturista',
    bloqueado: false,
    clases: [
      { id: '3.1', numero: '3.1', titulo: 'Tienda Naturista X vs Tienda Naturista La Casa Verde', recurso: 'Tienda Naturista X VS Tienda Naturista La Casa Verde', youtubeId: '8frEeK2sc0U', estado: 'video' },
      { id: '3.2', numero: '3.2', titulo: 'Normatividad I', recurso: null, youtubeId: null, estado: 'pendiente' },
      { id: '3.3', numero: '3.3', titulo: 'Fitoterapéutico', recurso: 'Fitoterapéuticos', youtubeId: 'JK1lIBu0UxY', estado: 'video' },
      { id: '3.4', numero: '3.4', titulo: 'Alimentos', recurso: 'Alimentos', youtubeId: 'Qhy_EGY65GE', estado: 'video' },
      { id: '3.5', numero: '3.5', titulo: 'Cosméticos y Nutrición', recurso: 'Cosméticos y Nutrición', youtubeId: '6Tc_uLpGNhc', estado: 'video' },
      { id: '3.6', numero: '3.6', titulo: 'Creación de Empresas', recurso: null, youtubeId: null, estado: 'pendiente' },
    ],
  },
  {
    id: 'mod-4',
    numero: 4,
    titulo: 'Anatomía, Patología y Enfoques Terapéuticos por Sistemas',
    bloqueado: false,
    clases: [
      { id: '4.1', numero: '4.1', titulo: 'Introducción al Sistema Digestivo', recurso: 'Introducción Sistema Digestivo', youtubeId: 'ODRwW7KyfsI', estado: 'video' },
      { id: '4.2', numero: '4.2', titulo: 'Sistema Digestivo', recurso: 'Sistema Digestivo', youtubeId: '7czdwFnQP_4', estado: 'video' },
      { id: '4.3', numero: '4.3', titulo: 'Sistema Respiratorio', recurso: 'Sistema Respiratorio', youtubeId: 'MeO05tFL3vs', estado: 'video' },
      { id: '4.4', numero: '4.4', titulo: 'Sistema Musculoesquelético', recurso: 'Musculoesquelético', youtubeId: 'Y5eYhkHvSoQ', estado: 'video' },
      { id: '4.5', numero: '4.5', titulo: 'Sistema Circulatorio', recurso: 'Sistema Circulatorio', youtubeId: '8x9Qmcqdy8Y', estado: 'video' },
      { id: '4.6', numero: '4.6', titulo: 'Sistema Nervioso', recurso: 'Sistema Nervioso', youtubeId: 'hUzif0UC9bg', estado: 'video' },
      { id: '4.7', numero: '4.7', titulo: 'Sistema Endocrino e Inmunológico', recurso: 'Sistema Endocrino e Inmunológico', youtubeId: 'T8LgqEoqHyY', estado: 'video' },
    ],
  },
  {
    id: 'mod-5',
    numero: 5,
    titulo: 'Medicina Homeopática',
    bloqueado: false,
    clases: [
      { id: '5.1', numero: '5.1', titulo: 'Introducción a la Homeopatía', recurso: 'Historia de la Homeopatía', youtubeId: 'a597O0Fcj8k', estado: 'video' },
      { id: '5.2', numero: '5.2', titulo: 'Homeopatía #1', recurso: 'Módulo: Homeopatía Clase #1', youtubeId: 'uhMI21KbnRs', estado: 'video' },
      { id: '5.3', numero: '5.3', titulo: 'Homeopatía #2', recurso: 'Módulo Homeopatía Clase II', youtubeId: 'bcnovoHn32Q', estado: 'video' },
      { id: '5.4', numero: '5.4', titulo: 'Homeopatía #3', recurso: 'Módulo 2 Homeopático Clase #3', youtubeId: 'Nl08HNDrgOw', estado: 'video' },
    ],
  },
  {
    id: 'mod-6',
    numero: 6,
    titulo: 'Creación de Tienda Online',
    bloqueado: true,
    textoBloqueado: 'Estamos preparando nuevo contenido para ayudarte a llevar tu tienda al mundo digital.',
    clases: [
      { id: '6.1', numero: '6.1', titulo: 'Próximamente', recurso: 'Contenido todavía no publicado', youtubeId: null, estado: 'pendiente' },
    ],
  },
]

export const TOTAL_CLASES_ACTIVAS = MODULOS.filter(m => !m.bloqueado).reduce((acc, m) => acc + m.clases.length, 0)

export function buscarClase(id: string): { modulo: Modulo; clase: Clase; index: number } | null {
  for (const modulo of MODULOS) {
    const index = modulo.clases.findIndex(c => c.id === id)
    if (index !== -1) return { modulo, clase: modulo.clases[index], index }
  }
  return null
}

export function claseSiguiente(id: string): Clase | null {
  const activos = MODULOS.filter(m => !m.bloqueado)
  const flat: { modId: string; clase: Clase }[] = []
  activos.forEach(m => m.clases.forEach(c => flat.push({ modId: m.id, clase: c })))
  const idx = flat.findIndex(f => f.clase.id === id)
  if (idx === -1 || idx === flat.length - 1) return null
  return flat[idx + 1].clase
}

export function claseAnterior(id: string): Clase | null {
  const activos = MODULOS.filter(m => !m.bloqueado)
  const flat: { modId: string; clase: Clase }[] = []
  activos.forEach(m => m.clases.forEach(c => flat.push({ modId: m.id, clase: c })))
  const idx = flat.findIndex(f => f.clase.id === id)
  if (idx <= 0) return null
  return flat[idx - 1].clase
}
