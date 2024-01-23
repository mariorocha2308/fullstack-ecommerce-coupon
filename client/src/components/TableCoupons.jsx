import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, IconButton, Badge } from '@chakra-ui/react'
import { RiEdit2Fill, RiDeleteBin3Fill } from 'react-icons/ri'

const TableCoupons = () => {
  return (  
    <TableContainer border='1px' p='1rem' borderRadius='0.4rem' borderColor='gray.300'>
      <Table variant='simple' colorScheme='gray'>
        <TableCaption>This prices and discounts can be outdated reload page</TableCaption>
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th>PromoCode</Th>
            <Th>Price ($)</Th>
            <Th>Discount (%)</Th>
            <Th>Suitable</Th>
            <Th display='flex' justifyContent='center'>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>millimetres (mm)</Td>
            <Td><Badge colorScheme='red'>Sold out</Badge></Td>
            <Td display='flex' justifyContent='center' gap='1rem'>
              <IconButton rounded='full' icon={<RiEdit2Fill/>}/>
              <IconButton rounded='full' icon={<RiDeleteBin3Fill/>}/>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableCoupons;