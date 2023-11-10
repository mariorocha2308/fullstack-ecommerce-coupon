import React, { lazy, useEffect } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './zustand/stores/useAuth'
import { getItem } from 'react-safe-storage'
import Dashboard from './pages/Dashboard'

//* PAGES
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

//* COMPONENTS
const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))

function App() {

  const { setAuth, isAuth } = useAuth()
  const isStorage = getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user')

  const color = useColorModeValue('blackAlpha.800', 'whiteAlpha')

  useEffect(() => {
    if (isStorage) setAuth(true)
  }, [isStorage, setAuth])


  return (
    <Box color={color} bg='#F8F9F9'>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar/>
            <Footer/>
          </>
        }>
          <Route path='/auth/login' element={
            isAuth
            ? (<Navigate to='/'/>)
            : (<Login/>)
          }/>
  
          <Route path='/auth/register' element={
            isAuth
            ? (<Navigate to='/'/>)
            : (<Register/>)
          }/>

          <Route index element={<Home/>}/>
          
          <Route path='/dashboard/profile' element={
            isAuth 
            ? (<Dashboard/>)
            : (<Navigate to='/'/>)
          }/>
          
        </Route>
      </Routes>
    </Box>
  )
}

export default App