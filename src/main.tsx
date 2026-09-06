import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import AuthGate from './components/AuthGate.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthGate>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthGate>
  </StrictMode>,
)
