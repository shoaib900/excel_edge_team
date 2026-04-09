import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Service from './Routes/Service'
import About from './Routes/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <div style={{height:"100vh",backgroundColor:"pink"}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <div className='container-fluid position-absolute bottom-0 bg-dark text-white '>
          <h1 className='text-center'>Hello bottom bar</h1>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
