import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
