import { Suspense, lazy, useRef } from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { RiCloseLine, RiFireFill, RiHeart2Fill, RiHeart2Line, RiShoppingBag3Fill, RiShoppingBag3Line } from "react-icons/ri";
import { useFavoritesPersist } from "../zustand/stores/useFavoritesPersist";
import { useWhitelistPersist } from "../zustand/stores/useWhitelistPersist";
import DrawerView, { FooterTemplate } from "./DrawerView";

const Detail = lazy(() => import('../pages/Detail'))

const ItemCoupon = props => {

  const { favorites } = useFavoritesPersist()
  const { whitelist } = useWhitelistPersist()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const PanelMarker = () => {
    return (
      <Box display='grid' placeItems='center' borderRadius='50%' bgColor='#F4F6F6' width='2.4rem' height='2.4rem' cursor='pointer' onClick={onOpen} ref={btnRef}>
        {props.panelIdx === 1 && (<RiShoppingBag3Fill fontSize='20px' color="#34495E"/>)}
        {props.panelIdx === 2 && (<RiHeart2Fill fontSize='20px' color="#34495E"/>)}
        {props.panelIdx === 3 && (<RiFireFill fontSize='20px' color="#34495E"/>)}
      </Box>
    )
  }

  const PanelActions = () => {
    return (
      <>
        {props.panelIdx === 1 && (
          <Box display='grid' placeItems='center' borderRadius='50%' bgColor='#FDEDEC' width='2.2rem' height='2.2rem' 
            onClick={() => props.onWhitelist(props.id)} cursor='pointer'>
            <RiCloseLine fontSize='20px' color="#E74C3C"/>
          </Box>
        )}

        {props.panelIdx === 2 && (
          <Box display='grid' placeItems='center' borderRadius='50%' bgColor='#FDEDEC' width='2.2rem' height='2.2rem' 
            onClick={() => props.onFavorite(props.id)} cursor='pointer'>
            <RiCloseLine fontSize='20px' color="#E74C3C"/>
          </Box>
        )}

        {props.panelIdx === 3 && (
          <Box display='flex' gap='0.5rem'>
            <Box display='grid' placeItems='center' borderRadius='50%' bgColor='#FDEDEC' width='2.2rem' height='2.2rem'
              onClick={() => props.onFavorite(props.id)} cursor='pointer'>
              {favorites.some(whitelist => whitelist === props.id) 
                ? <RiHeart2Fill fontSize='20px' color="#E74C3C"/>
                : <RiHeart2Line fontSize='20px' color="#E74C3C"/>
              }
            </Box>
            <Box display='grid' placeItems='center' borderRadius='50%' bgColor='#F5EEF8' width='2.2rem' height='2.2rem'
              onClick={() => props.onWhitelist(props.id)} cursor='pointer'>
              {whitelist.some(whitelist => whitelist === props.id) 
                ? <RiShoppingBag3Fill fontSize='20px' color="#884EA0"/> 
                : <RiShoppingBag3Line fontSize='20px' color="#884EA0"/>
              }
            </Box>
          </Box>
        )}
      </>
    )
  }

  return (  
    <Box display='flex' gap='0.8rem' alignItems='center'>
      <PanelMarker/>
      
      <Box display='flex' flexDirection='column' flex='1'>
        <Text fontSize='16px' fontFamily='Poppins-Bold'>{props.title}</Text>
        <Box display='flex' gap='0.5rem'>
          <Box>
            <Text fontSize='14px'>Price</Text>
            <Text fontSize='14px' fontWeight='bold'>${props.price}</Text>
          </Box>
          <Box>
            <Text fontSize='14px'>Discount</Text>
            <Text fontSize='14px' fontWeight='bold'>${props.discount}%</Text>
          </Box>
        </Box>
      </Box>

      <PanelActions/>

      <Suspense>
        <DrawerView isOpen={isOpen} onClose={onClose} size='sm' title={`Detail > Coupon > ${props.title}`} 
          footerTemplate={FooterTemplate}>
          <Detail id={props.id}/>
        </DrawerView>
      </Suspense>
    </Box>
  );
}

export default ItemCoupon;