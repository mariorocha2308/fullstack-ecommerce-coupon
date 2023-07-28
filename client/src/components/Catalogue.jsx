import { useRef } from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getCouponsQuery } from '../utils/apiQueries/coupon';
import { usePaginationStore } from '../zustand/stores/paginationCreator';
import SortCoupons from './SortCoupons'
import Coupon from './Coupon';
import NotFound from './NotFound';

const Catalogue = () => {

  const category = useRef('');
  const sort = useRef({
    price: { min: 5, max: 25 },
    discount: { min: 5, max: 75 }
  })

  const { currentPage, pageSize, setDataLength, setCurrentPage } = usePaginationStore()
  const { data: coupons, refetch } = useQuery(['coupons', category.current || 'all', currentPage, ], () => getCouponsQuery({
      type: category.current,
      price: sort.current.price,
      discount: sort.current.discount,
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
    if (Number(e.target.value) === 0 && e.target.name === 'min') {
      sort.current[e.target.id][e.target.name] = 5
      return refetch()
    }

    if (Number(e.target.value) === 0 && e.target.name === 'max') { 
      sort.current[e.target.id][e.target.name] = e.target.id === 'price' ? 25 : 75
      return refetch()
    }
    sort.current[e.target.id][e.target.name] = Number(e.target.value)
  }

  return ( 
    <Box my='2rem'>
      <Box display='flex'  justifyContent='space-between' mb='2rem'>
        <Text fontFamily='Poppins-Bold' fontSize='25px'>Catalogue</Text>
        <SortCoupons onHandleRange={(e) => handleRange(e)} onHandleCategory={handleCategory} onRefetch={() => refetch()}/>
      </Box>
      {coupons?.count !== 0 
        ? <Grid gap='8' 
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
        : <NotFound w='100%' h='912px' sizeIcon='8rem'/>
      }
    </Box>
  );
}

export default Catalogue;