import React, { lazy, useEffect } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { useAuthStore } from './zustand/stores/useAuthCreator'
import { getItem } from 'react-safe-storage'

//* PAGES
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Detail = lazy(() => import('./pages/Detail'))

//* COMPONENTS
const PrivateRoute = lazy(() => import('./components/fragments/PrivateRoute'))
const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))

function App() {

  const { setAuth } = useAuthStore()
  const isStorage = getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user')

  const color = useColorModeValue('blackAlpha.800', 'whiteAlpha')

  useEffect(() => {
    if (isStorage) setAuth(true)
  }, [isStorage, setAuth])


  return (
    <Box color={color} bg='#F8F9F9'>
      {/* <HashRouter> */}

        <Routes>
          <Route path='/' element={
            <>
              <Navbar/>
              <Footer/>
            </>
          }>
            <Route index element={<Home/>}/>

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

            <Route path='/coupons/detail/:id' element={
              <Detail/>
            }/>
          </Route>
        </Routes>
      {/* </HashRouter> */}
    </Box>
  )
}

export default App