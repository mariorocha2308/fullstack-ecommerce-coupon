import React, { useState, useEffect } from 'react';
import { Box, Input } from '@chakra-ui/react';
import { findCouponsQuery } from '../utils/apiQueries/coupon'
import { useQuery } from 'react-query'

const SearchBar = props => {

  const [input, setInput] = useState('')
  const { refetch } = useQuery(['coupons'], () => findCouponsQuery(input), {
    enabled: false
  })

  const onHandleInput = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    if (input || !input) {
      props.onReset()
      refetch()
    } 
  }, [refetch, input])
  
  return (
    <Box py='2'>
      <Input placeholder='Search' fontWeight='semibold' value={input} onChange={onHandleInput} variant='filled'/>
    </Box> 
  );
}

export default SearchBar;