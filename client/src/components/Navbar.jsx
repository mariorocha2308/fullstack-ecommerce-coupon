import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Text, Button, Stack, useColorMode } from '@chakra-ui/react'
import { getItem } from 'react-safe-storage';
import { useAuthStore } from '../zustand/stores/authCreator';
import AvatarMenu from './AvatarMenu';
import { HiOutlineTicket } from 'react-icons/hi'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';

const Navbar = () => {

  const navigation = useNavigate()

  const { colorMode, toggleColorMode } = useColorMode()
  const { isAuth, logOut } = useAuthStore()
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))
  
  return (
    <Box fontFamily='Poppins' maxWidth='1200px' width='85%' margin='auto' userSelect='none' className='dark'>

      <Box display='flex' alignItems='center' justifyContent='space-between' py='6'>
        <Box display='flex' alignItems='center' gap='1' cursor='pointer' onClick={() => navigation('/')}>
          <HiOutlineTicket fontSize='30' />
          <Text fontWeight='black'>Coupons</Text>
        </Box>

        <Box display='flex' alignItems='center' gap='5'>
          {
            colorMode === 'light' ? 
            <MdDarkMode onClick={toggleColorMode} size={23} cursor='pointer'/> :
            <FaSun onClick={toggleColorMode} size={23} cursor='pointer'/> 
          }

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

      </Box>
      <Outlet/>
    </Box> 
  );
}

export default Navbar;