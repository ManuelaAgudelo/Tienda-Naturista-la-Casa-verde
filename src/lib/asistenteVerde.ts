// El Asistente Verde responde SOLO con el catálogo oficial de La Casa Verde
// (src/data/productos.ts, extraído de https://www.lacasaverdecolombia.com/tienda/).
// Nunca inventa beneficios, ingredientes, indicaciones ni dosis que no estén en esa fuente.

import { PRODUCTOS, type Producto } from '../data/productos'
import { LINEA_PROPIA, type ProductoLineaPropia } from '../data/lineaPropia'

const SIN_INFORMACION =
  'No tengo suficiente información oficial de La Casa Verde para responder esa consulta.'

const SALUDOS = ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'hey']

const SINTOMAS_ALERTA = [
  'dolor en el pecho', 'no puedo respirar', 'sangrado', 'desmayo', 'convulsion',
  'intento de suicidio', 'emergencia', 'urgencia', 'me quiero morir',
]

// Sinónimos de uso cotidiano -> categorías reales del catálogo oficial.
// Solo se listan categorías que EXISTEN en productos.ts; no se inventa ninguna relación.
const SINONIMOS_CATEGORIA: Record<string, string> = {
  'digestion': 'sistema-digestivo',
  'estomago': 'sistema-digestivo',
  'digestivo': 'sistema-digestivo',
  'respiratorio': 'sistema-respiratorio',
  'respirar': 'sistema-respiratorio',
  'pulmones': 'sistema-respiratorio',
  'gripa': 'sistema-respiratorio',
  'tos': 'sistema-respiratorio',
  'articulaciones': 'sistema-articular',
  'articular': 'sistema-articular',
  'huesos': 'sistema-articular',
  'dolor de espalda': 'sistema-articular',
  'circulacion': 'sistema-circulatorio',
  'circulatorio': 'sistema-circulatorio',
  'venas': 'sistema-circulatorio',
  'inmune': 'sistema-inmunologico',
  'inmunologico': 'sistema-inmunologico',
  'defensas': 'sistema-inmunologico',
  'piel': 'dermo-cosmeticos',
  'cosmeticos': 'dermo-cosmeticos',
  'cabello': 'dermo-cosmeticos',
  'adelgazar': 'adelgazantes',
  'bajar de peso': 'adelgazantes',
  'peso': 'adelgazantes',
  'nervios': 'sistema-nervioso',
  'estres': 'sistema-nervioso',
  'ansiedad': 'sistema-nervioso',
  'dormir': 'sistema-nervioso',
  'musculos': 'sistema-muscular',
  'muscular': 'sistema-muscular',
  'hormonas': 'sistema-endocrino',
  'endocrino': 'sistema-endocrino',
  'riñones': 'sistema-urinario',
  'urinario': 'sistema-urinario',
  'reproductor': 'sistema-reproductor',
  'homeopatico': 'sistema-homeopatico',
  'homeopatia': 'sistema-homeopatico',
  'linfatico': 'sistema-linfatico',
}

// Enfermedades/diagnósticos que el usuario puede nombrar -> productos de la línea propia que,
// según el fabricante, PUEDEN AYUDAR como complemento (nunca se presentan como cura). Todos estos
// productos y sus beneficios ya existen en lineaPropia.ts; aquí solo se indexan por diagnóstico.
const DIAGNOSTICO_A_PRODUCTOS: Record<string, string[]> = {
  'diabetes': ['Glidit'],
  'azucar alta': ['Glidit'],
  'glucosa alta': ['Glidit'],
  'hipertension': ['Bar-Press', 'Viacir'],
  'presion alta': ['Bar-Press', 'Viacir'],
  'colesterol': ['Cholaverd', 'Bar-Press'],
  'trigliceridos': ['Cholaverd', 'Bar-Press'],
  'artritis': ['Art', 'Nutriflex', 'Gl-Samin'],
  'artrosis': ['Art', 'Nutriflex', 'Gl-Samin'],
  'osteoporosis': ['Cicalmag', 'Colmin'],
  'gastritis': ['Ulcik', 'Gast-Calen', 'Gaflox'],
  'ulcera': ['Ulcik', 'Gast-Calen', 'Gaflox'],
  'colon irritable': ['Viscum', 'Veralverd'],
  'estreñimiento': ['Casklax', 'Barremax (laxante adultos)'],
  'prostata': ['Gland Prot', 'Prost-San'],
  'menopausia': ['Femever'],
  'menstrual': ['Femever', 'Verafem (jarabe)'],
  'ansiedad': ['Ashwagandha Complex (con orégano y citrato de magnesio)', 'Aswagandha (tabletas)'],
  'estres': ['Ashwagandha Complex (con orégano y citrato de magnesio)', 'Aswagandha (tabletas)'],
  'insomnio': ['Valeriana + Toronjil + Pasiflora'],
  'anemia': ['Ferronaf', 'Vita-franc'],
  'calculos renales': ['Renaver', 'Chancapiedra'],
  'higado graso': ['Lim-Est', 'Heplop', 'Bilax'],
  'cirrosis': ['Lim-Est', 'Carduus Mariannus 3D'],
  'varices': ['Viacir', 'Cirfin'],
  'mala circulacion': ['Viacir', 'Cirfin'],
  'cancer': ['Grabiola', 'Clorofil Med'],
  'alzheimer': ['Sangritor'],
  'parkinson': ['Sangritor'],
  'disfuncion erectil': ['Forza Maxin'],
  'migraña': ['Certyl'],
  'dolor de cabeza': ['Certyl'],
  'acne': ['Gualasan', 'Llenodig'],
  'sinusitis': ['Luffa Oper 6CH Spray Nasal', 'Argentin'],
  'rinitis': ['Argentin'],
  'bronquitis': ["Bronki'Flu", 'Eukmeil'],
}

function buscarPorDiagnostico(texto: string): ProductoLineaPropia[] | null {
  const q = normalizar(texto)
  const claves = Object.keys(DIAGNOSTICO_A_PRODUCTOS).sort((a, b) => b.length - a.length)
  for (const clave of claves) {
    if (contienePalabraOFrase(q, clave)) {
      const nombres = DIAGNOSTICO_A_PRODUCTOS[clave]
      const productos = nombres
        .map(n => LINEA_PROPIA.find(p => p.nombre === n))
        .filter((p): p is ProductoLineaPropia => !!p)
      if (productos.length > 0) return productos
    }
  }
  return null
}

function formatearRecomendacionDiagnostico(productos: ProductoLineaPropia[]): string {
  const lineas = ['🌿 Esto es lo que tenemos que puede ayudar como complemento:', '']
  productos.forEach(p => {
    lineas.push(`• ${p.nombre}${p.claims[0] ? ` — ${p.claims[0]}` : ''}`)
  })
  lineas.push('', 'Pregúntame por el nombre de cualquiera para ver todos sus detalles.', '', RECORDATORIO_MEDICO)
  return lineas.join('\n')
}

function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()
}

function distanciaLevenshtein(a: string, b: string): number {
  const filas = a.length + 1
  const columnas = b.length + 1
  const matriz: number[][] = Array.from({ length: filas }, () => new Array(columnas).fill(0))
  for (let i = 0; i < filas; i++) matriz[i][0] = i
  for (let j = 0; j < columnas; j++) matriz[0][j] = j
  for (let i = 1; i < filas; i++) {
    for (let j = 1; j < columnas; j++) {
      const costo = a[i - 1] === b[j - 1] ? 0 : 1
      matriz[i][j] = Math.min(
        matriz[i - 1][j] + 1,
        matriz[i][j - 1] + 1,
        matriz[i - 1][j - 1] + costo,
      )
    }
  }
  return matriz[filas - 1][columnas - 1]
}

interface SugerenciaProducto {
  tipo: 'catalogo' | 'propio'
  nombre: string
  item: Producto | ProductoLineaPropia
}

// Cuando el usuario escribe mal el nombre de un producto (ej. "acaite de agacate"), se busca el
// nombre real más parecido en AMBOS catálogos y se responde "¿quisiste decir...?" en vez de
// simplemente decir que no hay información.
function sugerirProductoParecido(texto: string): SugerenciaProducto | null {
  const q = normalizar(texto)
  if (q.length < 4) return null

  let mejor: SugerenciaProducto | null = null
  let mejorDistancia = Infinity

  const evaluar = (nombre: string, item: Producto | ProductoLineaPropia, tipo: 'catalogo' | 'propio') => {
    const nombreNorm = normalizar(nombre)
    const distancia = distanciaLevenshtein(q, nombreNorm)
    const umbral = Math.max(2, Math.floor(nombreNorm.length * 0.35))
    if (distancia <= umbral && distancia < mejorDistancia) {
      mejorDistancia = distancia
      mejor = { tipo, nombre, item }
    }
  }

  PRODUCTOS.forEach(p => evaluar(p.nombre, p, 'catalogo'))
  LINEA_PROPIA.forEach(p => evaluar(p.nombre, p, 'propio'))

  return mejor
}

function buscarProductoPorNombre(texto: string): Producto | null {
  const q = normalizar(texto)
  // match exacto o por slug primero
  const exacto = PRODUCTOS.find(p => normalizar(p.nombre) === q)
  if (exacto) return exacto
  // luego por inclusion de palabras del nombre del producto en el texto del usuario
  const candidatos = PRODUCTOS.filter(p => q.includes(normalizar(p.nombre)) || normalizar(p.nombre).includes(q))
  if (candidatos.length === 1) return candidatos[0]
  if (candidatos.length > 1) {
    // el nombre mas especifico (mas largo) que calce
    return candidatos.sort((a, b) => b.nombre.length - a.nombre.length)[0]
  }
  return null
}

function buscarLineaPropiaPorNombre(texto: string): ProductoLineaPropia | null {
  const q = normalizar(texto)
  const exacto = LINEA_PROPIA.find(p => normalizar(p.nombre) === q)
  if (exacto) return exacto
  // coincidencia por nombre completo contenido en el mensaje (o viceversa) - nunca por una sola
  // palabra suelta, para no confundir "Aceite de aguacate" con "Aceite de Orégano con Aguacate"
  const candidatos = LINEA_PROPIA.filter(p => {
    const nombreNorm = normalizar(p.nombre)
    return q.includes(nombreNorm) || nombreNorm.includes(q)
  })
  if (candidatos.length >= 1) {
    return candidatos.sort((a, b) => b.nombre.length - a.nombre.length)[0]
  }
  return null
}

function contienePalabraOFrase(texto: string, clave: string): boolean {
  const claveNorm = normalizar(clave)
  if (claveNorm.includes(' ')) return texto.includes(claveNorm)
  return new RegExp(`(^|[^a-z])${claveNorm}([^a-z]|$)`).test(texto)
}

function buscarCategoria(texto: string): string | null {
  const q = normalizar(texto)
  // ordenar claves mas largas primero para priorizar frases especificas sobre palabras sueltas
  const claves = Object.keys(SINONIMOS_CATEGORIA).sort((a, b) => b.length - a.length)
  for (const clave of claves) {
    if (contienePalabraOFrase(q, clave)) return SINONIMOS_CATEGORIA[clave]
  }
  const categoriaDirecta = PRODUCTOS.find(p => q.includes(normalizar(p.categoria)))
  return categoriaDirecta ? categoriaDirecta.categoriaSlug : null
}

// Filtro de seguridad: el catálogo oficial (productos.ts) viene de texto libre del sitio web y
// algunas descripciones usan verbos absolutos ("cura", "trata", "elimina el cáncer") que suenan
// a promesa médica. Se puede NOMBRAR la enfermedad (cáncer, Alzheimer, Parkinson, etc.) — lo que
// se corrige es el verbo, para que siempre diga "ayuda/apoya", nunca "cura/sana/trata".
const VERBOS_FUERTES: [RegExp, string][] = [
  [/\bcura(ción|tiva)?\b/gi, 'ayuda'],
  [/\bcurar\b/gi, 'ayudar'],
  [/\bsana\b/gi, 'ayuda'],
  [/\bsanar\b/gi, 'ayudar'],
  [/\btrata\b/gi, 'puede ayudar con'],
  [/\btratamiento (de|del|para)\b/gi, 'apoyo complementario en'],
  [/\bactua contra\b/gi, 'puede ayudar como apoyo frente a'],
  [/\bactúa contra\b/gi, 'puede ayudar como apoyo frente a'],
  [/\banticancer[ií]gen[oa]\b/gi, 'con antioxidantes que pueden ayudar frente al cáncer'],
  [/\bimpide el crecimiento de\b/gi, 'puede ayudar a frenar el crecimiento de'],
  [/\belimina(r)? c[ée]lulas\b/gi, 'puede ayudar a apoyar la eliminación de células'],
  [/\bes util para el\b/gi, 'puede servir de apoyo en el'],
  [/\butil para\b/gi, 'de apoyo para'],
  [/\bprevenci[oó]n del\b/gi, 'apoyo en la prevención del'],
  [/\bfrena la propagaci[oó]n de\b/gi, 'puede ayudar a frenar la propagación de'],
]

function sanitizarDescripcion(texto: string): string {
  return VERBOS_FUERTES.reduce((acc, [patron, reemplazo]) => acc.replace(patron, reemplazo), texto)
}

const RECORDATORIO_MEDICO =
  'Si los síntomas persisten, consulta a tu médico.'

function formatearProducto(p: Producto): string {
  const lineas = [
    `🌿 ${p.nombre}`,
    '',
  ]
  if (p.descripcion) {
    lineas.push(`¿QUÉ ES / PARA QUÉ SE USA?`, sanitizarDescripcion(p.descripcion), '')
  } else {
    lineas.push('Todavía no tengo la descripción oficial detallada de este producto.', '')
  }
  lineas.push(`CATEGORÍA: ${p.categoria}`)
  lineas.push('', RECORDATORIO_MEDICO)
  return lineas.join('\n')
}

function formatearProductoLineaPropia(p: ProductoLineaPropia): string {
  const lineas = [`🌿 ${p.nombre}`, '']
  if (p.claims.length > 0) {
    lineas.push('CÓMO AYUDA SEGÚN EL FABRICANTE:')
    p.claims.forEach(c => lineas.push(`• ${c}`))
    lineas.push('')
  }
  if (p.ingredientesClave) lineas.push(`INGREDIENTES: ${p.ingredientesClave.join(', ')}`)
  if (p.presentacion) lineas.push(`PRESENTACIÓN: ${p.presentacion}`)
  lineas.push('', RECORDATORIO_MEDICO)
  return lineas.join('\n')
}

function formatearListaCategoria(categoriaSlug: string): string {
  const productos = PRODUCTOS.filter(p => p.categoriaSlug === categoriaSlug)
  if (productos.length === 0) return SIN_INFORMACION
  const nombreCategoria = productos[0].categoria
  const lista = productos.slice(0, 10).map(p => `• ${p.nombre}`).join('\n')
  const extra = productos.length > 10 ? `\n...y ${productos.length - 10} más.` : ''
  return `🌿 ¡Claro! Esto es lo que tenemos para ${nombreCategoria.toLowerCase()}:\n\n${lista}${extra}\n\nPregúntame por el nombre de cualquiera para conocer más detalles.`
}

export function responderAsistente(mensaje: string): string {
  const texto = mensaje.toLowerCase().trim()

  if (SINTOMAS_ALERTA.some(s => texto.includes(s))) {
    return 'Esto suena a algo que necesita atención médica inmediata. Por favor busca ayuda profesional o dirígete a un servicio de urgencias — no puedo ayudarte a resolver esto por aquí.'
  }

  if (SALUDOS.some(s => texto.includes(s)) && texto.length < 25) {
    return '¡Hola! 🌿 Qué bueno tenerte por aquí. Pregúntame por el nombre de un producto (ej. "Aceite de aguacate"), por una molestia o necesidad (ej. "¿qué tienen para la digestión?"), o si buscas una tienda cerca de ti. Estoy para ayudarte 😊'
  }

  const producto = buscarProductoPorNombre(texto)
  if (producto) return formatearProducto(producto)

  const productoPropio = buscarLineaPropiaPorNombre(texto)
  if (productoPropio) return formatearProductoLineaPropia(productoPropio)

  const categoria = buscarCategoria(texto)
  if (categoria) return formatearListaCategoria(categoria)

  const porDiagnostico = buscarPorDiagnostico(texto)
  if (porDiagnostico) return formatearRecomendacionDiagnostico(porDiagnostico)

  if (contienePalabraOFrase(texto, 'tienda') || contienePalabraOFrase(texto, 'tiendas') || contienePalabraOFrase(texto, 'sucursal')) {
    return '📍 ¡Con gusto te ayudo a encontrarla! Ve a la pestaña "Tiendas" aquí abajo y escribe tu ciudad o municipio — ahí tengo el listado completo con dirección y teléfono de cada una.'
  }

  if (contienePalabraOFrase(texto, 'receta') || contienePalabraOFrase(texto, 'recetas')) {
    return 'Por ahora no tengo recetas cargadas 🍃 — en cuanto La Casa Verde las publique, te las puedo compartir aquí mismo. Mientras tanto, puedo contarte sobre cualquiera de nuestros productos naturales, ¡pregúntame el que quieras!'
  }

  if (contienePalabraOFrase(texto, 'naturismo') || contienePalabraOFrase(texto, 'medicina natural')) {
    return '🌱 Todo eso lo explicamos a fondo en el Módulo 2 de tu curso, "Introducción al Naturismo" — ahí vas a entender la historia y los fundamentos de la medicina natural paso a paso. Y si quieres, aquí mismo te cuento sobre algún producto puntual o para qué molestia buscas ayuda natural.'
  }

  const sugerencia = sugerirProductoParecido(texto)
  if (sugerencia) {
    const info = sugerencia.tipo === 'catalogo'
      ? formatearProducto(sugerencia.item as Producto)
      : formatearProductoLineaPropia(sugerencia.item as ProductoLineaPropia)
    return `¿Quisiste decir "${sugerencia.nombre}"? 🌿 Aquí te cuento sobre ese:\n\n${info}`
  }

  return `${SIN_INFORMACION} 🌿 Intenta con el nombre de un producto (aunque no estés segura de cómo se escribe, yo te ayudo a encontrarlo), o cuéntame para qué molestia o necesidad buscas algo natural.`
}

export const MENSAJE_BIENVENIDA = '¡Hola! Soy tu Asistente Verde 🌿'
export const SUBTITULO_BIENVENIDA =
  'Pregúntame lo que quieras sobre productos naturales, tiendas o medicina natural — te ayudo a encontrarlo, aunque no recuerdes bien el nombre.'
export const AVISO_SEGURIDAD =
  'Esta información es educativa: los productos ayudan como complemento, no curan ni reemplazan un tratamiento médico. Consulta siempre con tu médico.'
