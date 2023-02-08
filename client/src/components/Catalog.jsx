import { useEffect, useState } from 'react';
import { Box, Grid, GridItem, Text, Icon } from '@chakra-ui/react';
import { RiCoupon2Fill } from 'react-icons/ri'
import { useQuery } from 'react-query';
import { getCouponsQuery } from '../utils/apiQueries/coupon';
import { usePaginationStore } from '../zustand/stores/paginationCreator';
import Coupon from './Coupon';
import { useResetManangerStore } from '../zustand/stores/useResetManager';

const Catalog = () => {

  const { currentPage, pageSize, setDataLength } = usePaginationStore()
  const { RESET_FILTER } = useResetManangerStore()
  const { data: coupons, refetch } = useQuery(['coupons'], () => getCouponsQuery({currentPage, pageSize}), {
    onSuccess: (data) => {
      setDataLength(data?.count)
    }
  })

  useEffect(() => {
    if (RESET_FILTER === true) {
      refetch()
    }
  }, [currentPage, coupons, RESET_FILTER]);

  return ( 
    <Box py='4'>
      <Box display='flex' alignItems='center'>
        <Icon as={RiCoupon2Fill} mr='2'/>
        <Text> Catalogue</Text>
      </Box>
      <Grid gap='8' templateColumns={['repeat(1, 100%)','repeat(1, 70%)', 'repeat(2, 45%)', 'repeat(3, 230px)','repeat(4, 230px)']} templateRows='repeat(3, 17rem)' py='4' justifyContent={{base: 'center', sm: 'center', lg: 'space-between'}} w='100%'>
        {coupons?.rows?.map(coupon => (
          <GridItem w='100%' h='100%' key={coupon.id}>
            <Coupon 
              id={coupon.id}
              title={coupon.title} 
              type={coupon.type} 
              promoCode={coupon.promoCode} 
              titleDiscount='UP TO'
              discount={coupon.discount} 
              price={coupon.price}
              stock={coupon.stock}>
              </Coupon>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Catalog;