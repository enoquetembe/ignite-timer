import React from 'react'
import './styles/global.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { CyclesContextProvider } from './contexts/CyclesContext.tsx'
import { AppRouter } from './routes/Router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CyclesContextProvider>
        <AppRouter />
      </CyclesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
