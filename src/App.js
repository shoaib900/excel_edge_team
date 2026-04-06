import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Service from './Routes/Service'
import About from './Routes/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <div>
          <h1>Hello bottom bar</h1>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
