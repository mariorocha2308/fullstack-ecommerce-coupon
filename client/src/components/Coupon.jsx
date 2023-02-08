import React from 'react';
import { RiShoppingBag3Fill } from 'react-icons/ri'
import { MdFavorite } from 'react-icons/md'
import { Box, Text, Circle, Stat, StatLabel, StatNumber, TagLabel, Tag, Stack, Icon } from '@chakra-ui/react';
import { couponColorizer } from '../utils/functions/couponColorizer'

const Coupon = props => {

  return (
    <Box display='flex' w='100%' h='17rem' boxShadow='lg' fontWeight='extrabold' position='relative' borderRadius='5px' overflow='hidden' boxSizing='border-box' p='4' flexDirection='column' minW='230px' maxW={{base: '100%', lg:'230px'}}>
      <Circle size='11rem' bg={couponColorizer(props.discount)} color='white' position='absolute' top='-7' right='-8'>
      </Circle>

      <Stack spacing='3' direction='column' align='center' px='2' position='absolute' top='4' right='2' color='whiteAlpha.800' zIndex={1}>
        <Icon as={MdFavorite} cursor='pointer'/>
        <Icon as={RiShoppingBag3Fill} cursor='pointer'/>
      </Stack>

      <Stat>
        <StatLabel fontWeight='semibold'>{props.titleDiscount}</StatLabel>
        <StatNumber>{props.discount}%</StatNumber>
      </Stat>
      <Stat>
        <StatLabel fontWeight='semibold'>Price</StatLabel>
        <StatNumber>${props.price}</StatNumber>
      </Stat>

      <Box>
        <Text fontSize='20px'>{props.type}</Text>
        <Tag size='md' colorScheme='green' borderRadius='full' mt='2'>
          <TagLabel>Stock: {props.stock}</TagLabel>
        </Tag>
      </Box>
    </Box>
  );
}

export default Coupon;