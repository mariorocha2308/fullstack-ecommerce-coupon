import { useRef, Suspense, lazy } from 'react';
import { RiShoppingBag3Fill, RiHeart2Fill } from 'react-icons/ri'
import { Box, Text, Circle, Stack, Icon, useDisclosure } from '@chakra-ui/react';
import { useFavoritesPersist } from '../zustand/stores/useFavoritesPersist';
import { useWhitelistPersist } from '../zustand/stores/useWhitelistPersist';
import { couponColorizer } from '../utils/functions/couponColorizer'
import { FooterTemplate } from './DrawerView';
import { getItem } from 'react-safe-storage';

const DrawerView = lazy(() => import('./DrawerView'))
const Detail = lazy(() => import('../pages/Detail'))

const Coupon = props => {

  const { favorites } = useFavoritesPersist()
  const { whitelist } = useWhitelistPersist()
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Box display='flex' flexDirection='column' w='100%' h='17rem' boxShadow='lg' fontFamily='Poppins-Regular' position='relative' borderRadius='5px' 
      overflow='hidden' boxSizing='border-box' p='4' minW='230px' bgColor='white' justifyContent='flex-end'>
      <Circle size='11rem' bg={couponColorizer(props.discount)} color='white' position='absolute' top='-7' right='-8'>
      </Circle>

      {user?.role !== 'admin-default' && (
        <Stack spacing='3' direction='column' align='center' px='2' position='absolute' top='4' right='2' color='whiteAlpha.800'>
          <Icon as={RiHeart2Fill} cursor='pointer' fontSize='24px' onClick={() => props.onFavorite(props.id)}
            color={favorites.some(favorite => favorite === props.id) ? 'blackAlpha.800' : 'whiteAlpha.800'}
          />
          <Icon as={RiShoppingBag3Fill} cursor='pointer' fontSize='24px' onClick={() => props.onWhitelist(props.id)}
            color={whitelist.some(whitelist => whitelist === props.id) ? 'blackAlpha.800' : 'whiteAlpha.800'}
          />
        </Stack>
      )}

      <Box cursor='pointer' onClick={onOpen} ref={btnRef}>
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

      <Suspense>
        <DrawerView isOpen={isOpen} onClose={onClose} size='sm' title={`Detail > Coupon > ${props.type}`} 
          footerTemplate={user?.role !== 'admin-default' && FooterTemplate}>
          <Detail id={props.id}/>
        </DrawerView>
      </Suspense>
    </Box>
  );
}

export default Coupon;