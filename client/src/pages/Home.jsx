import React from 'react';
import { Box } from '@chakra-ui/react'
import Landing from '../components/Landing';
import Catalogue from '../components/Catalogue';
import Pagination from '../components/Pagination'

const Home = () => {
  
  return (
    <Box>
      <Landing/>
      <Catalogue/>
      <Pagination/>
    </Box> 
  );
}

export default Home;