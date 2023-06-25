import React from 'react';
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { MdFavorite } from 'react-icons/md'
import { Box, Text, Circle, Stat, StatLabel, StatNumber, Stack, Icon } from '@chakra-ui/react';
import { couponColorizer } from '../utils/functions/couponColorizer'

const Coupon = props => {

  return (
    <Box display='flex' w='100%' h='17rem' boxShadow='lg' fontFamily='Poppins-Regular' position='relative' borderRadius='5px' overflow='hidden' boxSizing='border-box' p='4' flexDirection='column' minW='230px' maxW={{base: '100%', lg:'230px'}}>
      <Circle size='11rem' bg={couponColorizer(props.discount)} color='white' position='absolute' top='-7' right='-8'>
      </Circle>

      <Stack spacing='3' direction='column' align='center' px='2' position='absolute' top='4' right='2' color='whiteAlpha.800' zIndex={1}>
        <Icon as={MdFavorite} cursor='pointer' fontSize='24px'/>
        <Icon as={RiShoppingBag3Fill} cursor='pointer' fontSize='24px'/>
      </Stack>

      <Stat>
        <StatLabel>{props.titleDiscount}</StatLabel>
        <Text fontSize='16px' fontFamily='Poppins-Bold'>{props.discount}%</Text>
      </Stat>
      <Stat>
        <StatLabel>Price</StatLabel>
        <Text fontSize='16px' fontFamily='Poppins-Bold'>${props.price}</Text>
      </Stat>

      <Text fontSize='20px' fontFamily='Poppins-Bold'>{props.type}</Text>
    </Box>
  );
}

export default Coupon;