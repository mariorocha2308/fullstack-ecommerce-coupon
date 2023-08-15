import { Avatar, Box, Button, Divider, Text } from "@chakra-ui/react";
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getCouponQuery } from "../utils/apiQueries/coupon";
import { useFavoritesPersist } from "../zustand/stores/useFavoritesPersist";
import { useWhitelistPersist } from "../zustand/stores/useWhitelistPersist";
import { RiChatOffFill, RiHandCoinFill } from "react-icons/ri";
import Coupon from "../components/Coupon";
import Review from "../components/Review";
import NotFound from "../components/fragments/NotFound";
import TooltipCheck from "../components/fragments/TooltipCheck";
import moment from 'moment'

const CouponDetail = () => {

  const { id } = useParams()
  const { addFavorites } = useFavoritesPersist()
  const { addWhitelist } = useWhitelistPersist()

  const { data: coupon } = useQuery(['coupon', id], () => getCouponQuery(id))

  const RenderListReviews = () => {
    return coupon.reviews.reverse().slice(0, 3).map((review, idx) => (
      <Box p='1rem' key={idx}>
        <Avatar size='sm' name='' src={review.userImage} />
        <Text>{review.content}</Text>
        <Text>{moment(review.createdAt).format('DD/MM/YYYY, h:mm a')}</Text>
        <Text>{review.creator}</Text>
      </Box>
    ))
  }

  return ( 
    <Box display='flex' alignItems='center' h='90vh' justifyContent='space-between'>
      <Box w='320px'>
        <Coupon 
          id={coupon?.id}
          title={coupon?.title} 
          type={coupon?.type} 
          promoCode={coupon?.promoCode}
          discount={coupon?.discount} 
          price={coupon?.price}
          onFavorite={addFavorites}
          onWhitelist={addWhitelist}
        />
        <TooltipCheck>
          <Button size='md' w='100%' bgColor='blackAlpha.900' variant='unstyled' color='whiteAlpha.900' fontFamily='Poppins-Bold' mt='3rem'
            display='flex' alignItems='center' _hover={{ boxShadow: 'lg'}}
            leftIcon={<RiHandCoinFill/>}>
            Buy now
          </Button>
        </TooltipCheck>
      </Box>
      <Box display='flex' flexDirection='column' gap='1.5rem' w='65%' h='90%'>
        <Box display='flex' flexDirection='column' gap='1rem'>
          <Text fontFamily='Poppins-Medium' fontSize='17px'>Description</Text>
          <Text as='p' fontSize='14px' w='90%'>{coupon?.description}</Text>
        </Box>
        <Divider/>
        <Box display='flex' flexDirection='column' gap='1rem'>
          <Review detailId={id}>
            {coupon?.reviews.length 
              ? <RenderListReviews/> 
              : <NotFound message='No reviews' w='100%' h='100%' sizeMessage='14px'>
                <RiChatOffFill size='2rem'/>
              </NotFound>
            }
          </Review>
        </Box>
      </Box>
    </Box>
  );
}

export default CouponDetail;