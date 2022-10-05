import React from 'react';
import { Stack, Badge, Text } from '@chakra-ui/react'
import { categories } from '../utils/constants/categories'

const Categories = () => {

  return (
    <Stack py='4' spacing='3' wrap='nowrap' direction='row' overflow='auto' justifyContent={{md: 'center'}}>
      {categories.map((category, idx) => (
        <Badge borderRadius='full' py='2' px='4' colorScheme='green' variant='solid' cursor='pointer' key={idx}>
          <Text># {category}</Text>
        </Badge>
      ))}
    </Stack>
  );
}

export default Categories;