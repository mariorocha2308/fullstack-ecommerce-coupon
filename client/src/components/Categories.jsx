import { Stack, Badge, Text, Box } from '@chakra-ui/react'
import { categories } from '../utils/constants/categories';

const Categories = () => {

  return (
    <Box my='2rem'>
      <Text fontFamily='Poppins-Bold' fontSize='25px' mb='2rem'>Categories</Text>
      <Stack py='4' spacing='3' wrap='nowrap' direction='row' overflow='auto' justifyContent={{md: 'center'}}>
        {categories.map((category, idx) => (
          <Badge borderRadius='full' py='2' px='4' variant='solid' cursor='pointer' key={idx}
          // bgColor={category === props.currentCategory ? '#5D6D7E' : '#212F3C'}  
          // onClick={() => props.onCategory(category)}
          >
            <Text># {category}</Text>
          </Badge>
        ))}
      </Stack>
    </Box>
  );
}

export default Categories;