import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'

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

export default DrawerView;