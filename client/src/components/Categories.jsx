import React from 'react';
import { Stack, Badge, Text } from '@chakra-ui/react'
import { categories } from '../utils/constants/categories'

const Categories = props => {

  return (
    <Stack py='4' spacing='3' wrap='nowrap' direction='row' overflow='auto' justifyContent={{md: 'center'}}>
      {categories.map((category, idx) => (
        <Badge borderRadius='full' py='2' px='4' bgColor={category === props.currentCategory ? '#5D6D7E' : '#212F3C'} variant='solid' cursor='pointer' key={idx} onClick={() => props.onCategory(category)}>
          <Text># {category}</Text>
        </Badge>
      ))}
    </Stack>
  );
}

export default Categories;