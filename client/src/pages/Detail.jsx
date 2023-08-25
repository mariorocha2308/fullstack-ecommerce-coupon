import { Box, Text } from "@chakra-ui/react";
import { useQuery } from 'react-query'
import { getCouponQuery } from "../utils/apiQueries/coupon";
import Loader from '../components/fragments/Loader'
import ListReview from "../components/ListReview";

const CouponDetail = props => {

  const { data: coupon, isFetching } = useQuery(['coupon', props.id], () => getCouponQuery(props.id))

  if (isFetching) return <Loader h='100%'/>

  return ( 
    <Box display='flex' flexDirection='column' gap='1rem'>
      <Box display='flex' flexDirection='column'>
        <Text fontFamily='Poppins-Bold' fontSize='17px' color='blackAlpha.800'>Description</Text>
        <Text as='p' fontSize='14px' w='100' pt='0.5rem'>{coupon?.description}</Text>
      </Box>

      <Text fontFamily='Poppins-Bold' fontSize='17px' color='blackAlpha.800'>Discussion</Text>
      
      <ListReview coupon={coupon} id={props.id}/>
    </Box>
  );
}

export default CouponDetail;