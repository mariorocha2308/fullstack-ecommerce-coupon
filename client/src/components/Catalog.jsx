import React from 'react';
import Coupon from './Coupon';
import { Box, Stack, Text } from '@chakra-ui/react';

const Catalog = props => {

  return ( 
    <Box py='4'>
      <Text>Catalog</Text>
      <Stack spacing='8' py='4'>
        {props.data?.map(coupon => (
          <Coupon 
            key={coupon.id}
            title={coupon.title} 
            type={coupon.type} 
            promoCode={coupon.promoCode} 
            discount={coupon.discount} 
            price={coupon.price}/>
        ))}
      </Stack>
    </Box>
  );
}
 
export default Catalog;