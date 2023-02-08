import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Input, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { RiArrowDownSLine } from 'react-icons/ri'
import { findCouponsQuery } from '../utils/apiQueries/coupon'
import { useResetManangerStore } from '../zustand/stores/useResetManager';
import { useQuery } from 'react-query'
import Categories from './Categories'
import { usePaginationStore } from '../zustand/stores/paginationCreator';

const SearchBar = () => {

  const { setReset } = useResetManangerStore()
  const { currentPage, pageSize, setCurrentPage } = usePaginationStore()
  const [input, setInput] = useState({
    type: '',
    discount: { min: 0, max: 0 },
    price: { min: 0, max: 0 }
  })
  const { refetch } = useQuery(['coupons'], () => findCouponsQuery(input, currentPage, pageSize), {
    enabled: false
  })

  useEffect(() => {
    if (input.type || input.discount.length !== 0 || input.price.length !== 0) {
      refetch()
    } else if (input.type === ''){
      setReset('RESET_FILTER', true)
    }
  }, [refetch, input.type, currentPage, pageSize])

  const onHandleCategory = (item) => {
    setCurrentPage(1)
    if(input.type === item) {
      return setInput({...input, type: ''})
    }
    setInput({...input, type: item})
  }

  const onHandleRange = (e) => {
    setInput({...input, [e.target.id]: { ...input[e.target.id], [ e.target.name ]: Number(e.target.value) }})
  } 
  
  return (
    <Box display='flex' py='2' justifyContent='space-between' alignItems='center' mt='7'>

      <Categories onCategory={onHandleCategory} currentCategory={input.type}/>

      <Menu>
        <MenuButton as={Button} rightIcon={<RiArrowDownSLine/>}>
          Sort By
        </MenuButton>
        <MenuList p='4' width='230px' fontWeight='semibold' zIndex={2}>
          {/* PRICE */}
          <Text fontSize='15'>Price 5-25</Text>
          <Box display='flex' py='2' alignItems='center'>
            <Input type='number' placeholder='min' max={5} name='min' id='price' onChange={onHandleRange}/>
            <Divider width='100px' marginX='2'/>
            <Input type='number' placeholder='max' max={25} name='max' id='price' onChange={onHandleRange}/>
          </Box>
          <Text fontSize='15'>Discount 5-75</Text>
          <Box display='flex' py='2' alignItems='center'>
            <Input type='number' placeholder='min' name='min' id='discount' onChange={onHandleRange}/>
            <Divider width='100px' marginX='2'/>
            <Input type='number' placeholder='max' name='max' id='discount' onChange={onHandleRange}/>
          </Box>
        </MenuList>
      </Menu>
    </Box> 
  );
}

export default SearchBar;