import React from 'react';
import { Stack, Badge, Text } from '@chakra-ui/react'
import { categories } from '../utils/constants/categories'

const Categories = props => {

  return (
    <Stack py='4' spacing='3' wrap='nowrap' direction='row' overflow='auto' justifyContent={{md: 'center'}}>
      {categories.map((category, idx) => (
        <Badge borderRadius='full' py='2' px='4' colorScheme={category === props.currentCategory ? 'blue' : 'green'} variant='solid' cursor='pointer' key={idx} onClick={() => props.onCategory(category)}>
          <Text># {category}</Text>
        </Badge>
      ))}
    </Stack>
  );
}

export default Categories;