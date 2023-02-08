import React from 'react';
import { Box } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import HotSales from '../components/HotSales';
import Catalog from '../components/Catalog';
import Pagination from '../components/Pagination'
import Landing from '../components/Landing';

const Home = () => {
  
  return (
    <Box fontWeight='bold' fontSize='2xl'>
      <Landing/>
      <SearchBar/>
      <HotSales/>
      <Catalog/>
      <Pagination/>
    </Box> 
  );
}

export default Home;