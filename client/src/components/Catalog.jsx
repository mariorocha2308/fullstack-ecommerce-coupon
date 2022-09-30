import React from 'react';
import { Box, Grid, GridItem, Text, Icon } from '@chakra-ui/react';
import { RiCoupon2Fill } from 'react-icons/ri'
import Coupon from './Coupon';
  
const Catalog = props => {

  return ( 
    <Box py='4'>
      <Box display='flex' alignItems='center'>
        <Icon as={RiCoupon2Fill} mr='2'/>
        <Text> Catalog</Text>
      </Box>
      <Grid gap='8' templateColumns={['repeat(1, 100%)','repeat(1, 70%)', 'repeat(2, 45%)', 'repeat(3, 230px)','repeat(4, 230px)']} templateRows='repeat(3, 17rem)' py='4' justifyContent={{base: 'center', sm: 'center', lg: 'space-between'}} w='100%'>
        {props.data?.map(coupon => (
          <GridItem w='100%' h='100%' key={coupon.id}>
            <Coupon 
              id={coupon.id}
              title={coupon.title} 
              type={coupon.type} 
              promoCode={coupon.promoCode} 
              discount={coupon.discount} 
              price={coupon.price}
              stock={coupon.stock}/>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Catalog;