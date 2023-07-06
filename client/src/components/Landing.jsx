import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import image from '../assets/12.12 Sale-cuate.svg'

const Landing = () => {
  return (  
    <Box display='flex' py='10' justifyContent='space-evenly' alignItems='center'>
      <Box display='column' >
        <Text fontSize='35px' mb='3' fontFamily='Poppins-Bold'>Coupons Store!</Text>
        <Text width='400px' fontFamily='Poppins-Bold' mb='0.5rem' fontSize='18px'>
          Enjoy 24/7 special offers on our platform, 
          we want you to be able to live reactively!. Click on categories to discover hotsales 
        </Text>
        <Text width='400px' fontFamily='Poppins-Bold' fontSize='18px'>This and more benefits for our users.</Text>
      </Box>
      <Image src={image} height='300px' alt='halloween coupons'/>
    </Box>
  );
}

export default Landing;