import React, { Suspense, lazy } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Button, IconButton, Text } from '@chakra-ui/react'
import { useAuthStore } from '../zustand/stores/useAuthCreator';
import { RiShoppingBag3Fill, RiHeart2Fill } from 'react-icons/ri'
import Loader from './fragments/Loader';

const AvatarMenu = lazy(() => import('./AvatarMenu'))

const Navbar = () => {

  const navigation = useNavigate()
  const { isAuth } = useAuthStore()
  
  return (
    <Box>
      <Box boxShadow='sm' height='8vh' bg='white' w='100vw' zIndex='2' position='fixed'>
        <Box display='flex' justifyContent='space-between' alignItems='center' maxWidth='1200px' margin='auto' h='100%' w='1200px'>
          <Box display='flex' gap='3rem' alignItems='center'>
            <Text fontFamily='Monserrat' onClick={() => navigation('/')} cursor='pointer'>CPNSTORE</Text>
          </Box>

          <Box display='flex' gap='3rem' alignItems='center'>
            <Box display='flex' gap='0.8rem'>
              <IconButton icon={<RiHeart2Fill size='20px'/>} borderRadius='full' size='md'/>
              <IconButton icon={<RiShoppingBag3Fill size='20px'/>}  borderRadius='full' size='md'/>
            </Box>
            <Box>
              {!isAuth 
              ? <Box display='flex' gap='0.8rem'>
                <Button size='sm' variant='solid' 
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