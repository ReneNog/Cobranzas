import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ClientesProvider } from './contex/ClientesContex.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ClientesProvider>
    <App />
    </ClientesProvider>
    </BrowserRouter>
  </StrictMode>,
)
