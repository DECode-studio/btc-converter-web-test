import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MainPage from './page'
import './style/style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)
