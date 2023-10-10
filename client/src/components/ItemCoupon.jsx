import { Box, Icon, Text } from "@chakra-ui/react";
import { RiHeart2Fill, RiHeart2Line, RiShoppingBag3Fill, RiShoppingBag3Line } from "react-icons/ri";
import { useFavoritesPersist } from "../zustand/stores/useFavoritesPersist";
import { useWhitelistPersist } from "../zustand/stores/useWhitelistPersist";

const ItemCoupon = props => {

  const { favorites } = useFavoritesPersist()
  const { whitelist } = useWhitelistPersist()

  return (  
    <Box display='flex' flexDirection='column' gap='0.2rem'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Text fontWeight='bold'>{props.title}</Text>
        <Box display='flex' gap='0.5rem'>
          <Icon as={favorites.some(favorite => favorite === props.id) ? RiHeart2Fill : RiHeart2Line } cursor='pointer' fontSize='24px' 
            onClick={() => props.onFavorite(props.id)}
          />
          <Icon as={whitelist.some(whitelist => whitelist === props.id) ? RiShoppingBag3Fill : RiShoppingBag3Line} cursor='pointer' fontSize='24px' 
            onClick={() => props.onWhitelist(props.id)}
          />
        </Box>
      </Box>
      <Box>
        <Text fontSize='17px' fontFamily='Poppins-Bold'>{props.type}</Text>
        <Box display='flex' w='100%' h='5vh' alignItems='center' borderColor='blackAlpha.900' border='2px' borderRadius='5px' mt='0.5rem'>
          <Box display='flex' alignItems='center' justifyContent='center' w='50%' bgColor='blackAlpha.900' h='100%' color='white'>
            <Text fontSize='16px' fontFamily='Poppins-Bold'>${props.price}</Text>
          </Box>
          <Box display='flex' alignItems='center' justifyContent='center' w='50%' textAlign='center' h='100%'>
            <Text fontSize='16px' fontFamily='Poppins-Bold'>{props.discount}%</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ItemCoupon;