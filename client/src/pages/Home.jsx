import React from 'react';
import { Box } from '@chakra-ui/react'
import Landing from '../components/Landing';
import Catalog from '../components/Catalog';
import Pagination from '../components/Pagination'

const Home = () => {
  
  return (
    <Box>
      <Landing/>
      <Catalog/>
      <Pagination/>
    </Box> 
  );
}

export default Home;