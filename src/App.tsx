import { Routes, Route } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import Inicio from './screens/Inicio'
import Curso from './screens/Curso'
import ModuloDetalle from './screens/ModuloDetalle'
import ClaseDetalle from './screens/ClaseDetalle'
import AsistenteVerde from './screens/AsistenteVerde'
import Tiendas from './screens/Tiendas'

export default function App() {
  return (
    <div className="min-h-dvh bg-[var(--color-bg)]">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="/curso/modulo/:moduloId" element={<ModuloDetalle />} />
        <Route path="/curso/:claseId" element={<ClaseDetalle />} />
        <Route path="/asistente" element={<AsistenteVerde />} />
        <Route path="/tiendas" element={<Tiendas />} />
      </Routes>
      <BottomNav />
    </div>
  )
}
