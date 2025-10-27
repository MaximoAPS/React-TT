import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import { Register } from './components/Register.jsx'
import { Login } from './components/Login.jsx'
import { Carrito } from './components/Carrito.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/carrito" element={<Carrito />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
