import React from 'react';
import { useQuery } from 'react-query'
import { getCouponsQuery } from '../utils/apiQueries/coupon';
import { Box } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import HotSales from '../components/HotSales';
import Catalog from '../components/Catalog';

const Home = () => {

  const { data: coupons } = useQuery(['coupons'], getCouponsQuery)

  return (
    <Box fontWeight='bold' fontSize='2xl'>
      <SearchBar/>
      <HotSales data={coupons}/>
      <Catalog data={coupons}/>
    </Box> 
  );
}

export default Home;