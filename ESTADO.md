# ESTADO — Mi Tienda Naturista / La Casa Verde

## 🔖 CHECKPOINT (2026-09-07, publicada con registro real — lista para compartir)
App publicada y funcionando en **https://tienda-naturista-la-casa-verde.vercel.app**, con
GitHub (`ManuelaAgudelo/Tienda-Naturista-la-Casa-verde`) → Vercel conectado (cada push a `main`
redespliega solo). Se agregó registro/inicio de sesión real con Supabase (proyecto `casa-verde`):
nombre, correo y teléfono quedan guardados en la tabla `profiles`; la sesión se guarda sola en el
dispositivo tras el primer registro. Verificado extremo a extremo en producción.
- ⚠️ Bug encontrado y resuelto: al pegar la `VITE_SUPABASE_ANON_KEY` en Vercel, quedó guardado el
  texto enmascarado (los puntitos •••• que Vercel muestra para ocultar el valor) en vez de la
  clave real — el registro fallaba en producción (pero funcionaba local) sin ningún error visible
  en consola. Se detectó revisando directamente el bundle publicado (buscando el fragmento
  `eyJhbGci` del JWT). Si vuelve a pasar algo similar: comparar el HTML de producción
  (`curl` al dominio) contra el valor esperado antes de asumir que el código tiene un bug.
- Pendiente de decisión futura: migrar el progreso del curso (hoy en `localStorage`) a la cuenta
  del usuario en Supabase, para que sea multi-dispositivo. No bloqueante para compartir la app.

## Fase actual
Primera versión funcional y visual construida y PUBLICADA. Tiene registro real (nombre, correo,
teléfono) — ya se puede compartir el link con cualquier persona.

## Qué existe hoy
- **Stack**: Vite + React + TypeScript + Tailwind v4 + react-router-dom + lucide-react.
- **Identidad visual**: paleta verde/blanco derivada del logo oficial (`src/assets/logo.png`),
  tokens en `src/index.css`. Tipografía display Fraunces (fallback Georgia) + Figtree.
- **Navegación**: 4 secciones con barra inferior persistente (Inicio / Curso / Asistente / Tiendas),
  sin sección de compra ni pagos (excluido a propósito, pedido explícito del dueño).
- **Curso** (`src/data/curso.ts`): estructura EXACTA de `Mi_Tienda_Naturista_Base_Maestra.pdf` —
  6 módulos, 27 clases activas + 1 bloqueada (Módulo 6 "Próximamente"). Videos embebidos dentro de
  la app (`youtube-nocookie.com/embed`), clase 1.4 con galería de las 2 imágenes reales de la
  Revista Física Nacional. Las clases 1.8, 2.1 y 2.2 muestran un aviso "en revisión" (el propio PDF
  marca que el dueño aún no confirma si esos videos son los correctos). 3.2 y 3.6 muestran
  "contenido en actualización" (el PDF no trae su recurso todavía) — NADA de esto se inventó.
  Progreso guardado en `localStorage` del dispositivo (sin backend todavía, ver Decisiones técnicas).
- **Asistente Verde** (`src/lib/asistenteVerde.ts` + `src/screens/AsistenteVerde.tsx`): interfaz de
  chat completa, con aviso de seguridad visible y detector de síntomas de alerta. Conectado a DOS
  catálogos reales: `src/data/productos.ts` (239 productos de terceros de
  lacasaverdecolombia.com/tienda/, con descripción oficial) y `src/data/lineaPropia.ts` (139
  productos de MARCA PROPIA de La Casa Verde, extraídos de "linea natural casa verde.pptx" que
  mandó el dueño — beneficios tal cual los publica el fabricante, con aviso de que no sustituyen
  valoración médica). Busca por nombre exacto de producto o por categoría/necesidad (con mapa de
  sinónimos, ej. "articulaciones" → sistema articular). Si no encuentra nada en ninguna fuente,
  responde con honestidad en vez de inventar.
- **Tiendas** (`src/data/tiendas.ts`): **196 tiendas reales**, de la base de datos interna del
  dueño (`Directorio.xlsx`) — nombre, dirección y teléfono público únicamente; el nombre del
  propietario que traía el Excel se excluyó a propósito, como pidió el dueño. 196/196 tienen
  teléfono, 194/196 tienen dirección (2 venían con "-" en la fuente, se muestran sin dirección en
  vez de inventar una). Buscador por ciudad/dirección con normalización de tildes.

## ⚠️ Problemas conocidos (heredados de la fuente oficial, no del código)
- 2 fichas duplicadas "Casa Verde Pitalito" sin ningún dato de contacto cargado por su dueño en el
  sitio oficial.
- La ficha de "Tienda Naturista La Casa Verde Ibagué" traía en el sitio oficial una dirección mal
  geocodificada (apuntaba a Manhattan, Nueva York) — se quitó esa dirección de la app (queda como
  "no disponible") en vez de mostrar algo claramente falso a un usuario real.
- Una ficha (Montelíbano, Córdoba) solo traía coordenadas GPS crudas como "dirección" — se trató
  igual, como dirección no disponible.
- Esto es responsabilidad de datos del sitio de La Casa Verde, no algo que el agente deba
  "arreglar" inventando la dirección correcta.

## Decisiones técnicas (documentadas aquí, no se le preguntan al dueño)
- Sin backend/login en esta primera versión — el dueño pidió ver la experiencia visual y funcional
  antes de integrar nada real. El progreso vive en el dispositivo (localStorage); si se borra el
  navegador, se pierde. Cuando se conecte backend real, migrar a una tabla `progreso_usuario`.
- Vite (no Next.js): no hay landing pública ni necesidad de SEO — es una herramienta interna para
  estudiantes del curso.
- Videos: `youtube-nocookie.com/embed/{id}` — reproducción dentro de la app, sin salir a YouTube.

## Pendiente / próximos pasos posibles
- Que el dueño confirme los videos "en revisión" (1.8, 2.1, 2.2) y mande los recursos faltantes de
  3.2 y 3.6.
- Cuando el dueño quiera progreso multi-dispositivo, se necesita backend + login simple (se decide
  y ejecuta en su momento, sin bloquear esta versión).
- Ronda de pulido/revisor-visual antes de considerar esto "terminado" a nivel de detalle fino —
  esta v1 prioriza que el dueño vea y pruebe el flujo completo primero, como él pidió.
- Quedaron 20 imágenes "WhatsApp Image..." sueltas en la carpeta del proyecto — son duplicados de
  productos ya procesados desde el pptx, no se volvieron a procesar. Se pueden borrar cuando el
  dueño confirme que no hacen falta.

## Fuentes de datos reales cargadas (2026-09-05)
- `Directorio.xlsx` → `src/data/tiendas.ts` (196 tiendas).
- `linea natural casa verde.pptx` (227 diapositivas, 144 imágenes de producto) → todas procesadas
  visualmente una por una → `src/data/lineaPropia.ts` (139 productos de marca propia). El dueño
  aclaró explícitamente: esta info es SOLO para el conocimiento del Asistente Verde, no para crear
  una sección/pantalla nueva de "línea propia" en la app.
