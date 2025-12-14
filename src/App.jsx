import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import { Header } from './components/header'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { Carrito } from './components/Carrito'
import { RutaProtegida } from './components/RutaProtegida'
import { FormProduct } from './components/FormProduct'

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') ? true : false

  return (
    <>
      <Header />
      <Navbar />
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={
          <RutaProtegida isAuthenticated={isAuthenticated}>
            <Carrito />
          </RutaProtegida>
        } />
        <Route path="/formProduct" element={
          <RutaProtegida isAuthenticated={isAuthenticated}>
            <FormProduct />
          </RutaProtegida>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
