import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
