import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuthStore } from './zustand/stores/authCreator'
import { getItem } from 'react-safe-storage'

import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  const { setAuth } = useAuthStore()
  const isStorage = getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user')

  useEffect(() => {
    if (isStorage) setAuth(true)
  }, [])

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