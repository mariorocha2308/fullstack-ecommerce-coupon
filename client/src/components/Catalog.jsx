import React from 'react';
import Coupon from './Coupon';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const Catalog = props => {

  return ( 
    <Box py='4'>
      <Text>Catalog</Text>
      <Grid gap='8' templateColumns={['repeat(1, 100%)', 'repeat(1, 100%)', 'repeat(4, 230px)']} templateRows='repeat(3, 17rem)' py='4' justifyContent='space-between' w='100%'>
        {props.data?.map(coupon => (
          <GridItem w='100%' h='100%' key={coupon.id}>
            <Coupon 
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