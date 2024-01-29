import { useRef } from 'react';
import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from '@chakra-ui/react'

const DialogConfirmation = props => {
  const cancelRef = useRef()

  return (
    <AlertDialog
      isOpen={props.isOpen}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            {props.header}
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? You can`t undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button size='sm' ref={cancelRef} onClick={props.onClose}>
              Cancel
            </Button>
            <Button size='sm' colorScheme='green' onClick={props.onConfirm} ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default DialogConfirmation;