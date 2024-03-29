import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import image from '../assets/12.12 Sale-cuate.svg'

const Landing = () => {

  return (  
    <Box display='flex' mt='2rem' py='1rem' justifyContent='space-evenly' alignItems='center' borderRadius='0.4rem' bgColor='white' boxShadow='lg'>
      <Box display='column' >
        <Text fontSize='35px' mb='3' fontFamily='Poppins-Bold'>Coupons Store!</Text>
        <Text width='450px' fontFamily='Poppins-Medium' mb='0.5rem' fontSize='18px'>
          Enjoy 24/7 special offers on our platform, 
          we want you to be able to live reactively.
        </Text>
        <Text width='400px' fontFamily='Poppins-Medium' fontSize='18px'>This and more benefits for our users.</Text>
      </Box>
      <Image src={image} height='300px' w='300px' alt='shopping day 12.12, best sale' />
    </Box>
  );
}

export default Landing;