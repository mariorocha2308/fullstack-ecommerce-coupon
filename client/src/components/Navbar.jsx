import React, { Suspense, lazy } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import { useAuth } from '../zustand/stores/useAuth';
import { RiShoppingBag3Fill, RiHeart2Fill, RiNotification4Fill, RiFireFill } from 'react-icons/ri'
import Loader from './fragments/Loader';

const AvatarMenu = lazy(() => import('./AvatarMenu'))

const Navbar = () => {

  const navigation = useNavigate()
  const { isAuth } = useAuth()
  
  return (
    <Box>
      <Box boxShadow='sm' height='9vh' bg='blackAlpha.900' w='100vw' zIndex='2' position='fixed'>
        <Box display='flex' justifyContent='space-between' alignItems='center' maxWidth='1200px' margin='auto' h='100%' w='1200px' 
        bgColor='blackAlpha.900' color='white'>
          <Box display='flex' gap='3rem' alignItems='center'>
            <Text fontFamily='Monserrat' onClick={() => navigation('/')} cursor='pointer'>CPNSTORE</Text>
          </Box>

          <Box display='flex' gap='3rem' alignItems='center'>
            <Box display='flex' gap='1.5rem'>
              <RiFireFill size='22px'/>
              <RiNotification4Fill size='22px'/>
              <RiHeart2Fill size='22px'/>
              <RiShoppingBag3Fill size='22px'/>
            </Box>
            <Box>
              {!isAuth 
              ? <Box display='flex' gap='2rem'>
                <Button size='sm' variant='unstyled' fontFamily='Poppins-Bold'
                  onClick={() => navigation('/auth/login')}>Login</Button>
                <Button colorScheme='purple' size='sm' variant='solid' 
                  onClick={() => navigation('/auth/register')}>Register</Button>
              </Box>
              : <AvatarMenu/>}
            </Box>
          </Box>
        </Box>
      </Box>
      <Suspense fallback={<Loader h='100vh'/>}>
        <Box maxWidth='1200px' margin='auto' pt='10vh'>
          <Outlet/>
        </Box> 
      </Suspense>
    </Box>
  );
}

export default Navbar;