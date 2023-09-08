import { Box, Button, Divider, Input, Text } from "@chakra-ui/react";
import { deleteReview, postReview, updateReview } from "../utils/apiQueries/review";
import { useToastHook } from '../hooks/useCustomToast.js'
import { useMutation, useQueryClient } from "react-query";
import { useAuth } from '../zustand/stores/useAuth' 
import { useRef, useState } from "react";
import { getItem } from "react-safe-storage";
import Review from "./Review";

const ListReview = props => {

  const reviewIdRef = useRef('')
  const [content, setContent] = useState('')
  const [, toast] = useToastHook()
  const { isAuth } = useAuth()
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))

  const queryClient = useQueryClient()
  const onPost = useMutation(postReview)
  const onDelete = useMutation(deleteReview)
  const onUpdate = useMutation(updateReview)

  const handleSubmit = () => {
    if (reviewIdRef.current) {
      onUpdate.mutate({payload: {
          content: content,
          id: reviewIdRef.current
        }, token: user.userToken}, {
        onSuccess: () => {
          setContent('')
          reviewIdRef.current = ''
          queryClient.invalidateQueries(['coupon', props.id])
        }
      })
      return;
    }
    if (content) {
      onPost.mutate({payload: {
          content: content,
          uidUser: user.uid,
          creator: user.userName,
          userImage: user.image,
          couponRef: props.id
        }, token: user.userToken}, {
        onSuccess: () => {
          setContent('')
          queryClient.invalidateQueries(['coupon', props.id])
        }
      })
      return;
    }
    
    toast({ message: 'Empty feedback',status: 'warning' })
  }

  const handleDelete = (idx) => {
    onDelete.mutate({payload: {
        id: idx 
      }, token: user.userToken}, {
      onSuccess: () => {
        queryClient.invalidateQueries(['coupon', props.id])
      }
    })
  }

  const handleUpdate = (content, id) => {
    setContent(content)
    reviewIdRef.current = id
  }

  return (  
    <Box border='1px' borderColor='blackAlpha.100' borderRadius='5px'>
      <Box display='flex' p='1rem' gap='0.5rem' flexDirection='column'>
        {!isAuth && (<Text color='tomato' fontFamily='Poppins-Medium' fontSize='12px'>* logged, is required</Text>)}
        <Input size='sm' mt='0.5rem' fontSize='14px' placeholder='your feedback' maxLength='150'
          defaultValue={content} 
          onChange={(e) => setContent(e.target.value) }/>
        <Button size='sm' mt='0.5rem' onClick={isAuth ? handleSubmit : null}>
          { props.coupon.reviews.length ? 'Submit' : 'Start discussion'}
        </Button>
      </Box>
      <Divider/>
      { props.coupon?.reviews?.map((review) => (
        <Review review={review} key={review.id} 
          onUpdate={() => handleUpdate(review.content, review.id)} 
          onDelete={() => handleDelete(review.id)}
        />
      ))}
    </Box>
  );
}

export default ListReview;