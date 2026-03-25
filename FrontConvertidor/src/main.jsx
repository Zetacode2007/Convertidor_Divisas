import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NavBar } from './components/navbar/NavBar'
import { Convertidor } from './components/convertidor/Convertidor'
import { Footer } from './components/footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Convertidor />
    <Footer />
  </StrictMode>,
)
