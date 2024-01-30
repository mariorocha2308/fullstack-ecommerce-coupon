import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from '@chakra-ui/react'
import { RiHandCoinFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'
import TootilpSession from './fragments/TooltipSession';

const DrawerView = props => {

  return (  
    <Drawer isOpen={props.isOpen} placement='right' onClose={props.onClose} size={props.size}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontSize='17px' fontFamily='Poppins-Bold'>{props.title}</DrawerHeader>
        <DrawerBody>
          {props.children}
        </DrawerBody>
        {props.footerTemplate && (
          <DrawerFooter>
            {props.footerTemplate()}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export const FooterTemplate = () => {
  const navigate = useNavigate()

  return (
    <TootilpSession label='Session is required'>
      <Button size='md' w='100%' bgColor='blackAlpha.900' variant='unstyled' color='whiteAlpha.900' fontFamily='Poppins-Bold'
        display='flex' alignItems='center' _hover={{ boxShadow: 'lg'}}
        leftIcon={<RiHandCoinFill/>} onClick={() => navigate('/confirm/payment')}>
        Buy now
      </Button>
    </TootilpSession>
  )
}

export default DrawerView;