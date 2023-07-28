import { useEffect, useRef, useState } from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getCouponsQuery } from '../utils/apiQueries/coupon';
import { usePaginationStore } from '../zustand/stores/paginationCreator';
import SortCoupons from './SortCoupons'
import Coupon from './Coupon';

const Catalogue = () => {

  const category = useRef('');
  const [sort, setSort] = useState({
    price: { min: 5, max: 25 },
    discount: { min: 5, max: 75 }
  })

  const { currentPage, pageSize, setDataLength, setCurrentPage } = usePaginationStore()
  const { data: coupons, refetch } = useQuery(['coupons', category.current || 'all', currentPage, ], () => getCouponsQuery({
      type: category.current,
      price: sort.price,
      discount: sort.discount,
      currentPage, pageSize}), {
    onSuccess: (data) => {
      setDataLength(data?.count)
    },
    staleTime: Infinity
  })

  const handleCategory = (item) => {
    setCurrentPage(1)
    category.current = item
  }

  const handleRange = (e) => {
    setSort({...sort, [e.target.id]: { ...sort[e.target.id], [ e.target.name ]: Number(e.target.value) }})
  }

  useEffect(() => {
    refetch()
  }, [refetch, sort.price.min, sort.price.max, sort.discount.min, sort.discount.max]);

  console.log(sort.price.min);

  return ( 
    <Box my='2rem'>
      <Box display='flex'  justifyContent='space-between' mb='2rem'>
        <Text fontFamily='Poppins-Bold' fontSize='25px'>Catalogue</Text>
        <SortCoupons onHandleRange={handleRange} onHandleCategory={handleCategory}/>
      </Box>
      <Grid gap='8' 
        templateColumns={['repeat(1, 100%)','repeat(1, 70%)', 'repeat(2, 45%)', 'repeat(3, 230px)','repeat(4, 230px)']} 
        templateRows='repeat(3, 17rem)' py='4' w='100%' minHeight='912px'
          justifyContent={{base: 'center', sm: 'center', lg: 'space-between'}} >
        {coupons?.rows?.map(coupon => (
          <GridItem w='100%' h='100%' key={coupon.id}>
            <Coupon
              id={coupon.id}
              title={coupon.title} 
              type={coupon.type} 
              promoCode={coupon.promoCode} 
              titleDiscount='UP TO'
              discount={coupon.discount} 
              price={coupon.price}/>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Catalogue;