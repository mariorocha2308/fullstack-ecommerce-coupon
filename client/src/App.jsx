import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path='/auth/login' element={
          <PrivateRoute>
            <Login/>
          </PrivateRoute>
        }/>
        
        <Route path='/auth/register' element={
          <PrivateRoute>
            <Register/>
          </PrivateRoute>
        }/>

        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
