import React, { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Text, Button, Stack, useColorMode, IconButton } from '@chakra-ui/react'
import { getItem } from 'react-safe-storage';
import { useAuthStore } from '../zustand/stores/authCreator';
// import AvatarMenu from './AvatarMenu';
// import { HiOutlineTicket } from 'react-icons/hi'
// import { MdDarkMode } from 'react-icons/md';
// import { FaSun } from 'react-icons/fa';
import Loader from './Loader';

const Navbar = () => {

  const navigation = useNavigate()

  const { colorMode, toggleColorMode } = useColorMode()
  const { isAuth, logOut } = useAuthStore()
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))
  
  return (
    <Box>
      <Box boxShadow='sm' height='8vh' bg='white' w='100vw' zIndex='2' position='fixed'>
        <Box display='flex' alignItems='center' maxWidth='1200px' margin='auto' h='100%'>
          <Text fontFamily='Monserrat' fontSize='20px'>CPNSTORE</Text>
        </Box>
      </Box>

        {/* <Box display='flex' alignItems='center' justifyContent='space-between' py='6' height='12vh'>
          <HiOutlineTicket fontSize='30' onClick={() => navigation('/')} cursor='pointer'/>
          
          <Box display='flex' alignItems='center' gap='5'>
          {
            colorMode === 'light' ?
            <MdDarkMode size={23} cursor='pointer' onClick={toggleColorMode}/> :
            <FaSun size={23} cursor='pointer' onClick={toggleColorMode}/>
            
          }
          
          {isAuth && (
            <AvatarMenu image={user.image} logOut={() => logOut('user')} rol={user.role} name={user.userName}/>
            )}
            
            {!isAuth && (
              <Stack spacing='3' direction='row' >
              <Button variant='outline' size={{base: 'sm'}} colorScheme='green' onClick={() => navigation('/auth/login')}>
                  Log in
                </Button>
                <Button variant='solid' size={{base: 'sm'}} colorScheme='green' onClick={() => navigation('/auth/register')}>
                Register
                </Button>
                </Stack>
                )}
                </Box>
                
              </Box> */}
        <Suspense fallback={<Loader/>}>
          <Box maxWidth='1200px' margin='auto' pt='10vh'>
            <Outlet/>
          </Box> 
        </Suspense>
    </Box>
  );
}

export default Navbar;