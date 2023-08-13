import { useRef, useState } from "react";
import { Box, Button, ButtonGroup, IconButton, Input, Text } from "@chakra-ui/react";
import { RiCloseLine } from "react-icons/ri";
import { useAuth } from "../zustand/stores/useAuth";
import { useMutation, useQueryClient } from 'react-query'
import { postReview } from "../utils/apiQueries/review";
import { getItem } from "react-safe-storage";
import TooltipCheck from "./fragments/TooltipCheck";


const Review = props => {

  const reviewRef = useRef('')
  const queryClient = useQueryClient()
  const [isOpen, setOpen] = useState(false)
  const { isAuth } = useAuth()
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))

  const { mutate } = useMutation(postReview)

  const handleBoxInput = () => {
    setOpen(!isOpen)
  }

  const handleSubmit = () => {
    mutate({review: reviewRef.current, token: user.userToken}, {
      onSuccess: () => {
        queryClient.invalidateQueries(['coupon', props.detailId])
      }
    })
  }

  const RenderInput = () => {
    return (
      <Box display='flex' gap='1rem' w='100%' justifyContent='space-between'>
        <Input size='sm' w='90%' fontSize='14px' placeholder='your feedback' maxLength='150' ref={reviewRef}/>
        <ButtonGroup size='sm' variant='outline' >
          <Button variant='solid' colorScheme="purple" onClick={handleSubmit}>Save</Button>
          <IconButton aria-label='Add to friends' icon={<RiCloseLine/>} onClick={handleBoxInput}/>
        </ButtonGroup>
      </Box>
    )
  }

  return (
    <Box display='flex' flexDirection='column' gap='1.5rem'>
      {isOpen 
        ? <RenderInput/>
        :  <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Text fontFamily='Poppins-Medium' fontSize='17px'>Reviews</Text>
          <TooltipCheck>
            <Button size='sm' colorScheme='purple' variant='outline' onClick={isAuth && handleBoxInput}>add review</Button>
          </TooltipCheck>
        </Box>
      }
      <Box border='1px' height='45vh' borderColor='blackAlpha.100' borderRadius='5px'>
        {props.children}
      </Box>
    </Box>
  );
}

export default Review;