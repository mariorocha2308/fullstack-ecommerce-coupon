import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import Coupon from './Coupon'

const HotSales = props => {
  
  return ( 
    <Box py='4'>
      <Text>Hot Sales</Text>
      <Stack wrap='nowrap' direction='row' spacing='5' py='4' overflow='auto' px='2'>
        {props.data?.filter(coupon => coupon.discount > 50 && coupon.price < 12).map(coupon => (
          <Coupon
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