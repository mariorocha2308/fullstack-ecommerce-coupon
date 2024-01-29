import { useRef } from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getCouponsQuery } from '../utils/apiQueries/coupon';
import { usePaginationStore } from '../zustand/stores/usePaginationCreator';
import { useFavoritesPersist } from '../zustand/stores/useFavoritesPersist';
import { useWhitelistPersist } from '../zustand/stores/useWhitelistPersist';
import { RiEarthquakeFill } from "react-icons/ri";
import SortCoupons from './SortCoupons'
import NotFound from './fragments/NotFound';
import Loader from './fragments/Loader';
import Coupon from './Coupon';
import Pagination from './Pagination';

const Catalogue = () => {

  const category = useRef('');
  const sort = useRef({
    price: { min: 5, max: 25 },
    discount: { min: 5, max: 75 }
  })
  
  const { addFavorites } = useFavoritesPersist()
  const { addWhitelist } = useWhitelistPersist()
  const { currentPage, pageSize, setCurrentPage } = usePaginationStore()

  const { data: coupons, refetch, isFetching, error, isError } = useQuery(['coupons', category.current || 'all', currentPage.grid, ], () => getCouponsQuery({
      type: category.current,
      price: sort.current.price,
      discount: sort.current.discount,
      currentPage: currentPage.grid, pageSize}), {
    staleTime: Infinity
  })

  const handleCategory = (item) => {
    setCurrentPage('grid', 1)
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

  const RenderCoupons = () => {
    if (isError || coupons?.count === 0) return <NotFound w='100%' h='912px' message={error} sizeMessage='md'>
      <RiEarthquakeFill size='8rem'/>
    </NotFound>
    
    return (
      <Grid gap='8' 
        templateColumns={['repeat(1, 100%)','repeat(1, 70%)', 'repeat(2, 45%)', 'repeat(3, 230px)','repeat(4, 230px)']} 
        templateRows='repeat(3, 17rem)' py='4' w='100%' minHeight='912px'
          justifyContent={{base: 'center', sm: 'center', lg: 'space-between'}} >
        {coupons?.rows?.map(coupon => (
          <GridItem w='100%' h='100%' key={coupon.id}>
            <Coupon
              id={coupon.id}
              type={coupon.type} 
              promoCode={coupon.promoCode}
              discount={coupon.discount} 
              price={coupon.price}
              onFavorite={addFavorites}
              onWhitelist={addWhitelist}
              />
          </GridItem>
        ))}
      </Grid>
    )
  }

  return ( 
    <Box display='flex' flexDirection='column' gap='2rem' my='2rem'>
      <Box display='flex'  justifyContent='space-between' mb='2rem'>
        <Text fontFamily='Poppins-Bold' fontSize='20px'>Catalogue</Text>
        <SortCoupons onHandleRange={(e) => handleRange(e)} onHandleCategory={handleCategory} onRefetch={() => refetch()}/>
      </Box>
      {isFetching ? <Loader h='912px'/> : <RenderCoupons/>}
      <Pagination dataLength={coupons?.count} currentPage={currentPage.grid} setCurrentPage={setCurrentPage} pageSize={pageSize} target='grid'/>
    </Box>
  );
}

export default Catalogue;