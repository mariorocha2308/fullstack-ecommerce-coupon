import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import image from '../assets/Halloween tickets-pana.svg'

const Landing = () => {
  return (  
    <Box display='flex' py='8' justifyContent='space-evenly' alignItems='center' backgroundColor='red.500' boxSizing='border-box'borderRadius='10px' color='white'>
      <Box display='column' >
        <Text fontWeight='black' fontSize='35' mb='3'>Coupons!</Text>
        <Text width='400px'>For you, the best hot sales rigth now. Enjoy, buy now!</Text>
      </Box>
      <Image src={image} height='300px'/>
    </Box>
  );
}

export default Landing;