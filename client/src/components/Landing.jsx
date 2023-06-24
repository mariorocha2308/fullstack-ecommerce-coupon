import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import image from '../assets/12.12 Sale-cuate.svg'

const Landing = () => {
  return (  
    <Box display='flex' py='10' justifyContent='space-evenly' alignItems='center'>
      <Box display='column' >
        <Text fontSize='30' mb='3' fontFamily='Monserrat'>Coupons Store!</Text>
        <Text width='400px' fontFamily='Poppins-Bold' mb='0.5rem'>
          Enjoy 24/7 special offers on our platform, 
          we want you to be able to live reactively! 
        </Text>
        <Text width='400px' fontFamily='Poppins-Bold'>This and more benefits for our users.</Text>
      </Box>
      <Image src={image} height='300px' alt='halloween coupons'/>
    </Box>
  );
}

export default Landing;