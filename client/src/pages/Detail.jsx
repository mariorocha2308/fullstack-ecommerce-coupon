import { useRef } from "react";
import { Avatar, Box, Button, Divider, Input, Text, useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getCouponQuery } from "../utils/apiQueries/coupon";
// import { RiChatOffFill, RiHandCoinFill } from "react-icons/ri";
import { useAuth } from '../zustand/stores/useAuth'
import { postReview } from "../utils/apiQueries/review";
import { getItem } from "react-safe-storage";
import Loader from '../components/fragments/Loader'
import moment from 'moment'

const CouponDetail = props => {

  const reviewRef = useRef('')
  const toast = useToast()
  const queryClient = useQueryClient()
  const { isAuth } = useAuth()
  const { data: coupon, isFetching } = useQuery(['coupon', props.id], () => getCouponQuery(props.id))
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))

  const { mutate } = useMutation(postReview)

  const handleSubmit = () => {
    if (reviewRef.current) {
      mutate({payload: {
          content: reviewRef.current,
          creator: user.userName,
          userImage: user.image,
          couponRef: props.id
        }, token: user.userToken}, {
        onSuccess: (data) => {
          toast({
            title: data.message ?? data.error,
            status: data.message ? 'success' : 'error',
            position: 'bottom-right',
            duration: 3000
          })
          reviewRef.current = ''
          queryClient.invalidateQueries(['coupon', props.id])
        }
      })
    }
  }

  if (isFetching) return <Loader h='100%'/>

  return ( 
    <Box display='flex' flexDirection='column' gap='1rem'>
      <Box display='flex' flexDirection='column'>
        <Text fontFamily='Poppins-Bold' fontSize='17px' color='blackAlpha.800'>Description</Text>
        <Text as='p' fontSize='14px' w='100' pt='0.5rem'>{coupon?.description}</Text>
      </Box>

      <Text fontFamily='Poppins-Bold' fontSize='17px' color='blackAlpha.800'>Discussion</Text>
      
      <Box border='1px' borderColor='blackAlpha.100' borderRadius='5px'>
        <Box display='flex' p='1rem' gap='0.5rem' flexDirection='column'>
          {!isAuth && (<Text color='tomato' fontFamily='Poppins-Medium' fontSize='12px'>* logged, is required</Text>)}
          <Input size='sm' mt='0.5rem' fontSize='14px' placeholder='your feedback' maxLength='150' onChange={(e) => reviewRef.current = e.target.value }/>
          <Button size='sm' mt='0.5rem' onClick={isAuth ? handleSubmit : null}>{ coupon.reviews.length ? 'Submit' : 'Start discussion'}</Button>
        </Box>
        <Divider/>
        { coupon?.reviews?.map((review, idx) => (
          <Box display='flex' p='1rem' gap='1rem' key={idx}>
            <Avatar size='sm' src={review.userImage} />
            <Box w='full'>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Text fontFamily='Poppins-Bold' fontSize='14px'>{review.creator}</Text>
                <Text fontFamily='Poppins-Bold' fontSize='12px' textAlign='end' color='blackAlpha.800'>{moment(review.createdAt).format('DD/MM/YYYY, h:mm a')}</Text>
              </Box>
              <Text fontFamily='Poppins-Medium' fontSize='13px' pt='0.5rem'>{review.content}</Text>
            </Box>
          </Box>
        ))}
      </Box>

        {/* <TooltipCheck>
          <Button size='md' w='100%' bgColor='blackAlpha.900' variant='unstyled' color='whiteAlpha.900' fontFamily='Poppins-Bold' mt='3rem'
            display='flex' alignItems='center' _hover={{ boxShadow: 'lg'}}
            leftIcon={<RiHandCoinFill/>}>
            Buy now
          </Button>
        </TooltipCheck> */}
    </Box>
  );
}

export default CouponDetail;