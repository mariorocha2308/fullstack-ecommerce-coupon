import React, { useState } from 'react';
import { Stack, Badge, Text } from '@chakra-ui/react'
import { categories } from '../utils/constants/categories'

const Categories = () => {

  const [categoryItem, setCategory] = useState('')

  const handleCategory = (value) => {
    if (value === categoryItem) {
      return setCategory('')
    }
    setCategory(value)
  }

  return (
    <Stack py='4' spacing='3' wrap='nowrap' direction='row' overflow='auto' justifyContent={{md: 'center'}}>
      {categories.map((category, idx) => (
        <Badge borderRadius='full' py='2' px='4' colorScheme={category === categoryItem ? 'blue' : 'green'} variant='solid' cursor='pointer' key={idx} onClick={() => handleCategory(category)}>
          <Text># {category}</Text>
        </Badge>
      ))}
    </Stack>
  );
}

export default Categories;