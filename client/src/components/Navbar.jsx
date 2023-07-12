import React, { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
// import { getItem } from 'react-safe-storage';
// import { useAuthStore } from '../zustand/stores/authCreator';
import AvatarMenu from './AvatarMenu';
import Loader from './Loader';

const Navbar = () => {

  const navigation = useNavigate()

  // const { isAuth, logOut } = useAuthStore()
  // const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))
  
  return (
    <Box>
      <Box boxShadow='sm' height='8vh' bg='white' w='100vw' zIndex='2' position='fixed'>
        <Box display='flex' justifyContent='space-between' alignItems='center' maxWidth='1200px' margin='auto' h='100%' w='1200px'>
          <Box display='flex' gap='3rem'>
            <Text fontFamily='Monserrat' onClick={() => navigation('/')} cursor='pointer'>CPNSTORE</Text>
          </Box>
          <Box>
            <AvatarMenu/>
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