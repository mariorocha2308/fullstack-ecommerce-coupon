import React from 'react';
import { Box } from '@chakra-ui/react'
import Landing from '../components/Landing';
import Catalogue from '../components/Catalogue';

const Home = () => {
  
  return (
    <Box>
      <Landing/>
      <Catalogue/>
    </Box> 
  );
}

export default Home;