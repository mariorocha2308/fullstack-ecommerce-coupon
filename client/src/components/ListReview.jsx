import { Avatar, Box, Button, Divider, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { deleteReview, postReview, updateReview } from "../utils/apiQueries/review";
import { useToastHook } from '../hooks/useCustomToast.js'
import { useMutation, useQueryClient } from "react-query";
import { useAuth } from '../zustand/stores/useAuth' 
import { RiMore2Fill } from "react-icons/ri";

import moment from "moment";
import { useRef, useState } from "react";
import { getItem } from "react-safe-storage";

const ListReview = (props) => {

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
        onSuccess: (data) => {
          toast({ message: data.message ?? data.error, status: data.message ? 'success' : 'error' })
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
          creator: user.userName,
          userImage: user.image,
          couponRef: props.id
        }, token: user.userToken}, {
        onSuccess: (data) => {
          toast({ message: data.message ?? data.error, status: data.message ? 'success' : 'error' })
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
      onSuccess: (data) => {
        toast({ message: data.message ?? data.error, status: data.message ? 'success' : 'error' })
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
      { props.coupon?.reviews?.map((review, idx) => (
        <Box display='flex' p='1rem' gap='1rem' key={idx} alignItems='center'>
          <Avatar size='sm' src={review.userImage} />
          <Box w='full'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Text fontFamily='Poppins-Bold' fontSize='14px'>{review.creator}</Text>
              <Text fontFamily='Poppins-Bold' fontSize='12px' textAlign='end' color='blackAlpha.800'>
                {moment(review.updatedAt).format('DD/MM/YYYY, h:mm a')}
              </Text>
            </Box>
            <Text fontFamily='Poppins-Medium' fontSize='13px' pt='0.5rem'>{review.content}</Text>
          </Box>
          <Menu>
            <MenuButton as={IconButton} aria-label='More' isRound='true' size='sm' icon={<RiMore2Fill />}/>
            <MenuList>
              <MenuItem onClick={() => handleUpdate(review.content, review.id)}>
                Edit
              </MenuItem>
              <MenuItem onClick={() => handleDelete(review.id)}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      ))}
    </Box>
  );
}

export default ListReview;