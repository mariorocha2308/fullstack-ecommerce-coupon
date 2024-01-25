import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, IconButton, Badge } from '@chakra-ui/react'
import { RiEdit2Fill, RiDeleteBin3Fill } from 'react-icons/ri'
import { getCouponsTableQuery } from '../utils/apiQueries/admin';
import { useQuery } from 'react-query'

const TableCoupons = () => {
  const { data: itemsCoupons } = useQuery(['itemsCoupons'], () => getCouponsTableQuery({ currentPage: 1 }))

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
          {itemsCoupons?.rows.map((coupon) => (
            <Tr key={coupon.id}>
              <Td>{coupon.type}</Td>
              <Td>{coupon.promoCode}</Td>
              <Td>{coupon.price}</Td>
              <Td>{coupon.discount}</Td>
              <Td>{coupon.isSuitable 
                ? <Badge colorScheme='green'>Avalaible</Badge>
                : <Badge colorScheme='red'>Sold Out</Badge>}</Td>
              <Td display='flex' justifyContent='center' gap='1rem'>
                <IconButton rounded='full' icon={<RiEdit2Fill/>}/>
                <IconButton rounded='full' icon={<RiDeleteBin3Fill/>}/>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableCoupons;