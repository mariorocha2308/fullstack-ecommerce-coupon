import React from 'react';
import { Box, Text, Icon, Stack } from '@chakra-ui/react';
import { MdFavorite } from 'react-icons/md'
import { RiShoppingBag3Fill} from 'react-icons/ri'
import { couponColorizer } from '../utils/functions/couponColorizer'

const Coupon = props => {

  return (  
    <Box display='flex' width='350px' height='10rem' boxShadow='xl' fontSize='25' fontWeight='extrabold' position='relative'>

      <Box display='flex' position='absolute' top='1' right='1' bg='whiteAlpha.500' borderRadius='3' p='1' width='125px' justifyContent='center'>
        <Stack spacing='3' direction='row' color='white' align='center' px='2'>
          <Text fontSize='20' color='blackAlpha.700'>${props.price}</Text>
          <Icon as={MdFavorite}/>
          <Icon as={RiShoppingBag3Fill}/>
        </Stack>
      </Box>

      <Box width='20%' display='flex' justifyContent='center' alignItems='center' border='4px'>
        <Text style={{writingMode: 'vertical-rl'}}>{props.title}</Text>
      </Box>

      <Box width='80%' bgColor={couponColorizer(props.discount)} boxSizing='border-box' p='3' display='flex' flexDirection='column' color='white'>
        <Text >{props.type}</Text>

        <Box display='flex' bgColor='white' boxSizing='border-box' p='1' justifyContent='space-between' alignItems='center' fontWeight='black' fontSize='30' mt='2'>
          <Text color={couponColorizer(props.discount)} width='100%' align='center'>{props.promoCode}</Text>
          <Text bgColor={couponColorizer(props.discount)} p='1' width='100px' align='center'>{props.discount}%</Text>
        </Box>
      </Box>
    </Box>
  );
}
 
export default Coupon;