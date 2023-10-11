import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from '@chakra-ui/react'
import { RiHandCoinFill } from 'react-icons/ri';

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
  return (
    <Button size='md' w='100%' bgColor='blackAlpha.900' variant='unstyled' color='whiteAlpha.900' fontFamily='Poppins-Bold'
      display='flex' alignItems='center' _hover={{ boxShadow: 'lg'}}
      leftIcon={<RiHandCoinFill/>}>
      Buy now
    </Button>
  )
}

export default DrawerView;