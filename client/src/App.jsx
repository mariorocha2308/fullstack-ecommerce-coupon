import React, { lazy, useEffect } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { useAuth } from './zustand/stores/useAuth'
import { getItem } from 'react-safe-storage'
import Dashboard from './pages/Dashboard'

//* PAGES
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

//* COMPONENTS
const PrivateRoute = lazy(() => import('./components/fragments/PrivateRoute'))
const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))

function App() {

  const { setAuth } = useAuth()
  const isStorage = getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user')

  const color = useColorModeValue('blackAlpha.800', 'whiteAlpha')

  useEffect(() => {
    if (isStorage) setAuth(true)
  }, [isStorage, setAuth])


  return (
    <Box color={color} bg='#F8F9F9'>
      <Routes>
        <Route path='/auth/login' element={
            <Login/>
        }/>

        <Route path='/auth/register' element={
            <Register/>
        }/>
        
        <Route path='/' element={
          <>
            <Navbar/>
            <Footer/>
          </>
        }>
          <Route index element={<Home/>}/>


          <Route path='/dashboard/profile' element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }/>

        </Route>
      </Routes>
    </Box>
  )
}

export default App