import React, { useState } from 'react';
import { useQuery } from 'react-query'
import { getCouponsQuery } from '../utils/apiQueries/coupon';
import { Box } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import HotSales from '../components/HotSales';
import Catalog from '../components/Catalog';
import Pagination from '../components/Pagination'

const Home = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const { data: coupons } = useQuery(['coupons'], getCouponsQuery)
  
  let pageSize = 12;
  const firstPageIndex = (currentPage - 1) * pageSize;
  const lastPageIndex = firstPageIndex + pageSize;
  const offsetCoupons = coupons?.slice(firstPageIndex, lastPageIndex);
  
  return (
    <Box fontWeight='bold' fontSize='2xl'>
      <SearchBar onReset={() => setCurrentPage(1)}/>
      <HotSales data={coupons}/>
      <Catalog data={offsetCoupons}/>
      <Pagination
        currentPage={currentPage}
        dataLength={coupons?.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </Box> 
  );
}

export default Home;