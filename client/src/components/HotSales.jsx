import { Box, Stack, Text, Icon } from '@chakra-ui/react';
import { FaHotjar } from 'react-icons/fa'
import Coupon from './Coupon'
import { useQuery } from 'react-query';
import { getHotSales } from '../utils/apiQueries/coupon';

const HotSales = () => {

  const { data: hotsales } = useQuery(['hotsales'], getHotSales)

  return ( 
    <Box py='4'>
      <Box display='flex' alignItems='center'>
        <Icon as={FaHotjar} mr='2'/>
        <Text>Hot Sales</Text>
      </Box>
      <Stack wrap='nowrap' direction='row' spacing='5' py='4' overflow='auto' px='2'>
        {hotsales?.map(coupon => (
          <Coupon
            id={coupon.id}
            key={coupon.id}
            title={coupon.title} 
            type={coupon.type} 
            promoCode={coupon.promoCode} 
            discount={coupon.discount} 
            price={coupon.price}
            stock={coupon.stock}/>
        ))}
      </Stack>
    </Box>
  );
}

export default HotSales;