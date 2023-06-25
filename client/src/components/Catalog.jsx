import { useEffect } from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getCouponsQuery } from '../utils/apiQueries/coupon';
import { usePaginationStore } from '../zustand/stores/paginationCreator';
import { useResetManangerStore } from '../zustand/stores/useResetManager';
import Coupon from './Coupon';

const Catalog = () => {

  const { currentPage, pageSize, setDataLength } = usePaginationStore()
  const { RESET_FILTER } = useResetManangerStore()
  const { data: coupons, refetch } = useQuery(['coupons'], () => getCouponsQuery({currentPage, pageSize}), {
    onSuccess: (data) => {
      setDataLength(data?.count)
    }
  })

  useEffect(() => {
    refetch()
  }, [currentPage, coupons, RESET_FILTER]);

  return ( 
    <Box my='2rem'>
      <Text fontFamily='Poppins-Bold' fontSize='25px' mb='2rem'>Catalogue</Text>
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
              price={coupon.price}/>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Catalog;