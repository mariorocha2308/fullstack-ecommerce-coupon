import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Text, Button, Stack, Avatar } from '@chakra-ui/react'
import { getItem } from 'react-safe-storage';
import { useAuthStore } from '../zustand/stores/authCreator';
import AvatarMenu from './AvatarMenu';

const Navbar = () => {

  const navigation = useNavigate()
  const { isAuth, logOut } = useAuthStore()
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))
  
  return (
    <Box color='blackAlpha.700' fontFamily='Poppins' maxWidth='1200px' width='85%' margin='auto' userSelect='none'>

      <Box display='flex' alignItems='center' justifyContent='space-between' py='6'>
        <Text fontWeight='bold' fontSize='25' onClick={() => navigation('/')} cursor='pointer'>Hey! Welcome</Text>
        
        {isAuth && (
          <AvatarMenu image={user.image} logOut={() => logOut(user.role)} rol={user.role} name={user.userName}/>
        )}

        {!isAuth && (
          <Stack spacing='3' direction='row' >
            <Button variant='outline' size={{base: 'sm'}} colorScheme='green' onClick={() => navigation('/auth/login')}>
              Login
            </Button>
            <Button variant='solid' size={{base: 'sm'}} colorScheme='teal' onClick={() => navigation('/auth/register')}>
              Register
            </Button>
          </Stack>
        )}
      </Box>
      <Outlet/>
    </Box> 
  );
}

export default Navbar;