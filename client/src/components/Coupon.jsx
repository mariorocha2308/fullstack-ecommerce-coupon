import React from 'react';
import { Box, Text, Circle, Stat, StatLabel, StatNumber, TagLabel, Tag } from '@chakra-ui/react';
import { couponColorizer } from '../utils/functions/couponColorizer'

const Coupon = props => {

  return (
    <Box display='flex' w='100%' h='17rem' boxShadow='lg' fontWeight='extrabold' position='relative' borderRadius='5px' overflow='hidden' boxSizing='border-box' p='4' flexDirection='column' minW='230px' maxW={{base: '100%', lg:'230px'}}>
      <Circle size='11rem' bg={couponColorizer(props.discount)} color='white' position='absolute' top='-7' right='-8'>
      </Circle>

      {props.children}

      <Stat>
        <StatLabel fontWeight='semibold'>UP TO</StatLabel>
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