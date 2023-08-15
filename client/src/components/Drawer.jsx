import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'

const DrawerView = props => {

  return (  
    <Drawer isOpen={props.isOpen} placement='right' onClose={props.onClose} finalFocusRef={props.btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{props.titleDrawer}</DrawerHeader>
        <DrawerBody>
          {props.children}
        </DrawerBody>
        <DrawerFooter>
          {props.footerTemplate}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerView;