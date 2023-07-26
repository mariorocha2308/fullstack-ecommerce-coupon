import { Box, Divider, IconButton, Input, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, Text } from '@chakra-ui/react';
import { RiEqualizerFill, RiStackFill } from 'react-icons/ri'
import { categories } from '../utils/constants/categories';

const FilterAndSort = props => {

  return (
    <Box display='flex' gap='0.5rem'>
      <Menu>
        <MenuButton as={IconButton}
          variant='outline'
          aria-label='Filter Coupons'
          icon={<RiStackFill/>}/>
        <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue='' type='radio'>
            <MenuItemOption value='' onClick={() => props.onHandleCategory('')}>All</MenuItemOption>
            {categories.map((category, idx ) => (
              <MenuItemOption value={category} key={idx}
                onClick={() => props.onHandleCategory(category)}>{category}</MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={IconButton}
          variant='outline'
          aria-label='Sort Coupons'
          icon={<RiEqualizerFill/>}/>
        <MenuList p='4' width='230px' fontWeight='semibold' zIndex={2} gap='5'>
          <Text fontSize='sm'>Price 5 - 25</Text>
          <Box display='flex' py='2' alignItems='center'>
            <Input type='number' placeholder='min' name='min' id='price' onChange={(e) => props.onHandleRange(e)}/>
            <Divider width='100px' marginX='2'/>
            <Input type='number' placeholder='max' name='max' id='price' onChange={(e) => props.onHandleRange(e)}/>
          </Box>
          <Text fontSize='sm' mt='1rem'>Discount 5 - 75</Text>
          <Box display='flex' py='2' alignItems='center'>
            <Input type='number' placeholder='min' name='min' id='discount' onChange={(e) => props.onHandleRange(e)}/>
            <Divider width='100px' marginX='2'/>
            <Input type='number' placeholder='max' name='max' id='discount' onChange={(e) => props.onHandleRange(e)}/>
          </Box>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default FilterAndSort;