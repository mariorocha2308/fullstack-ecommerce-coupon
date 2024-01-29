import { useEffect, useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Textarea, Select, useToast } from '@chakra-ui/react'
import { createCouponQuery, updateCouponQuery } from '../../utils/apiQueries/admin'
import { useMutation, useQueryClient } from 'react-query'

const ModalCoupon = props => {
  const [data, setData] = useState({})
  const toast = useToast()
  const queryClient = useQueryClient()
  const { mutate: createCoupon } = useMutation(createCouponQuery)
  const { mutate: updateCoupon } = useMutation(updateCouponQuery)
  
  const handleInputEvent = (e) => setData({...data, [e.target.name]: e.target.value})
  const handleSuccess = (data) => {
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
    queryClient.invalidateQueries('coupons')
    props.onClose()
    setData({})
  }

  const handleSubmit = () => {
    let { id, title, type, price, discount, description, isSuitable } = data
    price = Number(price)
    discount = Number(discount)
    isSuitable = JSON.parse(isSuitable)

    if (props.dispatch === 'UPDATE') {
      updateCoupon({id, data: {
        title, type, price, discount, description, isSuitable
      }}, {
        onSuccess: handleSuccess
      })
    } else if (props.dispatch === 'CREATE') {
      createCoupon({data: {
        title, type, price, discount, description, isSuitable
      }}, {
        onSuccess: handleSuccess
      })
    }
  }
  
  useEffect(() => {
    if(props.editCoupon) {
      setData(props.editCoupon)
    }
  }, [props.editCoupon]);

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>{props.header}</ModalHeader>
        <ModalCloseButton/>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel fontSize='sm'>Title</FormLabel>
            <Input size='sm' name='title' placeholder='Title' defaultValue={data.title} onChange={handleInputEvent}/>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel fontSize='sm'>Type</FormLabel>
            <Input size='sm' name='type' placeholder='Type' defaultValue={data.type} onChange={handleInputEvent}/>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel fontSize='sm' mt={3}>Price: MIN 5 - MAX 25</FormLabel>
            <Input size='sm' name='price' placeholder='price' defaultValue={data.price} type='number' onChange={handleInputEvent}/>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel fontSize='sm' mt={3}>Discount: MIN 5 - MAX 75</FormLabel>
            <Input size='sm' name='discount' placeholder='discount' defaultValue={data.discount} type='number' onChange={handleInputEvent}/>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel fontSize='sm'>Description</FormLabel>
            <Textarea size='sm' name='description' placeholder='Description' defaultValue={data.description} onChange={handleInputEvent}/>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel fontSize='sm'>Suitable</FormLabel>
            <Select size='sm' name='isSuitable' onChange={handleInputEvent} defaultValue=''>
              <option hidden disabled value="">Select option</option>
              <option value='true'>Avalaible</option>
              <option value='false'>Sold Out</option>
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='purple' size='sm' mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button size='sm' onClick={props.onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalCoupon;