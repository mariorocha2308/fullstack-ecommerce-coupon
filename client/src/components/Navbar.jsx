import React, { Suspense, lazy } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import { useAuthStore } from '../zustand/stores/authCreator';
import Loader from './Loader';

const AvatarMenu = lazy(() => import('./AvatarMenu'))

const Navbar = () => {

  const navigation = useNavigate()
  const { isAuth } = useAuthStore()
  
  return (
    <Box>
      <Box boxShadow='sm' height='8vh' bg='white' w='100vw' zIndex='2' position='fixed'>
        <Box display='flex' justifyContent='space-between' alignItems='center' maxWidth='1200px' margin='auto' h='100%' w='1200px'>
          <Box display='flex' gap='3rem'>
            <Text fontFamily='Monserrat' onClick={() => navigation('/')} cursor='pointer'>CPNSTORE</Text>
          </Box>
            <Box>
              {!isAuth 
              ? <Box display='flex' gap='1rem'>
                <Button colorScheme='purple' size='sm' variant='ghost' 
                  onClick={() => navigation('/auth/login')}>Login</Button>
                <Button colorScheme='purple' size='sm' variant='solid' 
                  onClick={() => navigation('/auth/register')}>Register</Button>
              </Box>
              : <AvatarMenu/>}
            </Box>
        </Box>
      </Box>
      <Suspense fallback={<Loader/>}>
        <Box maxWidth='1200px' margin='auto' pt='10vh'>
          <Outlet/>
        </Box> 
      </Suspense>
    </Box>
  );
}

export default Navbar;