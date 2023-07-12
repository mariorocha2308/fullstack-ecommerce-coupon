import React, { useState, useEffect } from 'react';
import { Box, Divider, IconButton, Input, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, Text } from '@chakra-ui/react';
import { findCouponsQuery } from '../utils/apiQueries/coupon'
import { useResetManangerStore } from '../zustand/stores/useResetManager';
import { useQuery } from 'react-query'
import { RiEqualizerFill } from 'react-icons/ri'
import { usePaginationStore } from '../zustand/stores/paginationCreator';
import { categories } from '../utils/constants/categories';

const FilterAndSort = () => {

  const { setReset } = useResetManangerStore()
  const { currentPage, pageSize, setCurrentPage } = usePaginationStore()
  const [input, setInput] = useState({
    type: '',
    discount: { min: 5, max: 75 },
    price: { min: 5, max: 25 }
  })
  const { refetch } = useQuery(['coupons', currentPage], () => findCouponsQuery(input, currentPage, pageSize), {
    enabled: false
  })

  useEffect(() => {
    if (input.type || input.price.min || input.price.max || input.discount.min || input.discount.max) {
      refetch()
    } else if (input.type === ''){
      setReset('RESET_FILTER', true)
    }
  }, [refetch, input.type, currentPage, pageSize, input.price.min, input.price.max, input.discount.min, input.discount.max])

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
    <Menu>
      <MenuButton as={IconButton}
        variant='outline'
        aria-label='Sort Coupons'
        icon={<RiEqualizerFill/>}/>
      <MenuList p='4' width='230px' fontWeight='semibold' zIndex={2} gap='5'>
        {/* PRICE */}
        <Text fontSize='sm'>Price 5-25</Text>
        <Box display='flex' py='2' alignItems='center'>
          <Input type='number' placeholder='min' max={5} name='min' id='price' onChange={onHandleRange}/>
          <Divider width='100px' marginX='2'/>
          <Input type='number' placeholder='max' max={25} name='max' id='price' onChange={onHandleRange}/>
        </Box>
        {/* DISCOUNT */}
        <Text fontSize='sm'>Discount 5-75</Text>
        <Box display='flex' py='2' alignItems='center'>
          <Input type='number' placeholder='min' name='min' id='discount' onChange={onHandleRange}/>
          <Divider width='100px' marginX='2'/>
          <Input type='number' placeholder='max' name='max' id='discount' onChange={onHandleRange}/>
        </Box>
      </MenuList>
    </Menu>
  );
}

export default FilterAndSort;