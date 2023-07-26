import React from 'react';
import { RiShoppingBag3Fill, RiHeart2Fill } from 'react-icons/ri'
import { Box, Text, Circle, Stack, Icon } from '@chakra-ui/react';
import { couponColorizer } from '../utils/functions/couponColorizer'

const Coupon = props => {

  return (
    <Box display='flex' flexDirection='column' w='100%' h='17rem' boxShadow='lg' fontFamily='Poppins-Regular' position='relative' borderRadius='5px' 
      overflow='hidden' boxSizing='border-box' p='4' minW='230px' bg='white' justifyContent='flex-end'>
      <Circle size='11rem' bg={couponColorizer(props.discount)} color='white' position='absolute' top='-7' right='-8'>
      </Circle>

      <Stack spacing='3' direction='column' align='center' px='2' position='absolute' top='4' right='2' color='whiteAlpha.800'>
        <Icon as={RiHeart2Fill} cursor='pointer' fontSize='24px'/>
        <Icon as={RiShoppingBag3Fill} cursor='pointer' fontSize='24px'/>
      </Stack>

      <Text fontSize='20px' fontFamily='Poppins-Bold'>{props.type}</Text>
      <Box display='flex' w='100%' h='5vh' alignItems='center' borderColor='blackAlpha.900' border='2px' borderRadius='5px' mt='0.5rem'>
        <Box display='flex' alignItems='center' justifyContent='center' w='50%' bgColor='blackAlpha.900' h='100%' color='white'>
          <Text fontSize='16px' fontFamily='Poppins-Bold'>${props.price}</Text>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' w='50%' textAlign='center' h='100%'>
          <Text fontSize='16px' fontFamily='Poppins-Bold'>{props.discount}%</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Coupon;