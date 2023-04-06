import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Text, Button, Stack, useColorMode, IconButton } from '@chakra-ui/react'
import { getItem } from 'react-safe-storage';
import { useAuthStore } from '../zustand/stores/authCreator';
import AvatarMenu from './AvatarMenu';
import { HiOutlineTicket } from 'react-icons/hi'
import { MdDarkMode } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';

const Navbar = () => {

  const navigation = useNavigate()

  const { colorMode, toggleColorMode } = useColorMode()
  const { isAuth, logOut } = useAuthStore()
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))
  
  return (
    <Box maxWidth='1200px' width='85%' margin='auto' userSelect='none'>

      <Box display='flex' alignItems='center' justifyContent='space-between' py='6' height='12vh'>
        <HiOutlineTicket fontSize='30' onClick={() => navigation('/')} cursor='pointer'/>

        <Box display='flex' alignItems='center' gap='5'>
          {
            colorMode === 'light' ?
            <IconButton icon={<MdDarkMode size={23} cursor='pointer'/>} onClick={toggleColorMode} rounded='full' variant='ghost'/> :
            <IconButton icon={<FaSun size={23} cursor='pointer'/>} onClick={toggleColorMode} rounded='full' variant='ghost'/>
            
          }

          {isAuth && (
            <AvatarMenu image={user.image} logOut={() => logOut('user')} rol={user.role} name={user.userName}/>
          )}

          {!isAuth && (
            <Stack spacing='3' direction='row' >
              <Button variant='outline' size={{base: 'sm'}} colorScheme='teal' onClick={() => navigation('/auth/login')}>
                Log in
              </Button>
              <Button variant='solid' size={{base: 'sm'}} colorScheme='teal' onClick={() => navigation('/auth/register')}>
                Register
              </Button>
            </Stack>
          )}
        </Box>

      </Box>
      <Outlet/>
    </Box> 
  );
}

export default Navbar;