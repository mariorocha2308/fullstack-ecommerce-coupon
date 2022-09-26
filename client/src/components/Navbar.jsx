import React from 'react';
import { Outlet } from 'react-router-dom'
import { Box, Icon, Text, Button, Stack } from '@chakra-ui/react'
import { RiCoupon3Fill } from 'react-icons/ri'

const Navbar = () => {
  
  return (
    <Box color='blackAlpha.700' fontFamily='Poppins'>
      <Box boxShadow='base'>

        {/* NAVBAR SECTION */}
        <Box display='flex' alignItems='center' justifyContent='space-between' maxWidth='1200px' width='85%' margin='auto' py='3'>
          <Box display='flex' alignItems='center'>
            <Icon as={RiCoupon3Fill} fontSize='23'/>
            <Text ml='2' fontWeight='bold'>E-Coupons</Text>
          </Box>
          <Stack spacing='3' direction='row'>
            <Button variant='outline'>
              Login
            </Button>
            <Button variant='solid'>
              Register
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* CONTENT BELOW OF NAVBAR */}
      <Box maxWidth='1200px' width='85%' margin='auto' py='3'>
        <Outlet/>
      </Box> 
    </Box> 
  );
}

export default Navbar;