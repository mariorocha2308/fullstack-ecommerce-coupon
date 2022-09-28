import React from 'react';
import { Box, Stack, Text, Icon } from '@chakra-ui/react';
import { FaHotjar } from 'react-icons/fa'
import Coupon from './Coupon'

const HotSales = props => {
  
  return ( 
    <Box py='4'>
      <Box display='flex' alignItems='center'>
        <Icon as={FaHotjar} mr='2'/>
        <Text>Hot Sales</Text>
      </Box>
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