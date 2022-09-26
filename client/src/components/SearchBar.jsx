import React from 'react';
import { Box, Input } from '@chakra-ui/react';

const SearchBar = () => {
  
  return (
    <Box py='2'>
      <Input placeholder='Search' fontWeight='semibold'/>
    </Box> 
  );
}

export default SearchBar;