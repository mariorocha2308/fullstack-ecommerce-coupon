import React from 'react';
import { Outlet } from 'react-router-dom'
import { Box, Icon, Text, Button, Stack } from '@chakra-ui/react'
import { RiCoupon3Fill } from 'react-icons/ri'

const Navbar = () => {
  
  return ( 
    <Box boxShadow='base'>
      <Box maxWidth='1200px' width='85%' margin='auto' py='3' fontFamily='Poppins'>
        <Box display='flex' alignItems='center' justifyContent='space-between' color='blackAlpha.700'>
          <Box display='flex' alignItems='center'>
            <Icon as={RiCoupon3Fill} fontSize='25'/>
            <Text ml='2' fontWeight='bold'>E-Coupons</Text>
          </Box>
          <Stack spacing='3' direction='row'>
            <Button colorScheme='teal' variant='ghost'>
              Wishlist
            </Button>
            <Button colorScheme='red' variant='ghost'>
              Car
            </Button>
          </Stack>
        </Box>
        <Outlet/>
      </Box>
    </Box> 
  );
}

export default Navbar;