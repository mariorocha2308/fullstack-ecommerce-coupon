import { useRef } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, IconButton, Badge, useDisclosure, useToast } from '@chakra-ui/react'
import { usePaginationStore } from '../zustand/stores/usePaginationCreator';
import { RiEdit2Fill, RiDeleteBin3Fill } from 'react-icons/ri'
import { deleteCouponQuery, getCouponsTableQuery } from '../utils/apiQueries/admin';
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Pagination from '../components/Pagination'
import DialogConfirmation from './DialogConfirmation';
import ModalCoupon from './modals/ModalCoupon';

const TableCoupons = () => {

  const queryClient = useQueryClient()
  const toast = useToast()
  const idRef = useRef(0)
  const couponRef = useRef({})
  const { isOpen: isOpenDialog, onOpen: onOpenDialog, onClose: onCloseDialog } = useDisclosure()
  const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure()
  const { currentPage, pageSize, setCurrentPage } = usePaginationStore()
  const { data: itemsCoupons } = useQuery(['itemsCoupons', currentPage.table ], () => getCouponsTableQuery({ currentPage: currentPage.table, pageSize }))
  const { mutate: deleteCoupon } = useMutation(deleteCouponQuery)

  const handleConfirmation = () => {
    deleteCoupon(idRef.current, {
      onSuccess: (data) => {
        if (data.error) {
          return toast({
            title: data.error,
            status: 'error',
            position: 'bottom-right'
          })
        }

        toast({
          title: data.message,
          status: 'success',
          position: 'bottom-right'
        })
        queryClient.invalidateQueries('itemsCoupons')
        onCloseDialog()
        idRef.current = 0
      }
    })
  }

  const handleOpen = (target, value) => {
    if (target === 'modal') onOpenModal(); couponRef.current = value
    if (target === 'dialog') onOpenDialog(); idRef.current = value
  }

  const handleClose = (target) => {
    if (target === 'modal') onCloseModal(); couponRef.current = {}
    if (target === 'dialog') onCloseDialog(); idRef.current = {}
  }

  return (  
    <>
      <TableContainer border='1px' p='1rem' borderRadius='0.4rem' borderColor='gray.300'>
        <Table variant='simple' colorScheme='gray'>
          <TableCaption>This prices and discounts can be outdated reload page, actually {itemsCoupons?.count} coupons</TableCaption>
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>PromoCode</Th>
              <Th>Price ($)</Th>
              <Th>Discount (%)</Th>
              <Th>Suitable</Th>
              <Th display='flex' justifyContent='center'>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {itemsCoupons?.rows?.map((coupon) => (
              <Tr key={coupon.id}>
                <Td>{coupon.type}</Td>
                <Td>{coupon.promoCode}</Td>
                <Td>{coupon.price}</Td>
                <Td>{coupon.discount}</Td>
                <Td>{coupon.isSuitable 
                  ? <Badge colorScheme='green'>Avalaible</Badge>
                  : <Badge colorScheme='red'>Sold Out</Badge>}</Td>
                <Td display='flex' justifyContent='center' gap='1rem'>
                  <IconButton rounded='full' icon={<RiEdit2Fill/>} onClick={() => handleOpen('modal', coupon)}/>
                  <IconButton rounded='full' icon={<RiDeleteBin3Fill/>} onClick={() => handleOpen('dialog', coupon.id)}/>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Pagination dataLength={itemsCoupons?.count} currentPage={currentPage.table} setCurrentPage={setCurrentPage} pageSize={pageSize} target='table'/>
      </TableContainer>
      <DialogConfirmation header='Delete Coupon' isOpen={isOpenDialog} onClose={() => handleClose('dialog')} onConfirm={handleConfirmation}/>
      <ModalCoupon header='Edit coupon' isOpen={isOpenModal} onClose={() => handleClose('modal')} editCoupon={couponRef.current} dispatch='UPDATE'/>
    </>
  );
}

export default TableCoupons;