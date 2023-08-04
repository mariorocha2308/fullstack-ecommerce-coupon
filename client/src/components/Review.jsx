import { useRef, useState } from "react";
import { Alert, AlertDescription, AlertTitle, Box, Button, ButtonGroup, IconButton, Input, Text } from "@chakra-ui/react";
import { useAuth } from "../zustand/stores/useAuth";
import { RiCloseLine } from "react-icons/ri";

const Review = props => {

  const reviewRef = useRef('')
  const { isAuth } = useAuth()
  const [isOpen, setOpen] = useState(false)

  

  const handleBoxInput = () => {
    setOpen(!isOpen)
  }

  const RenderInput = () => {
    if (!isAuth) return (
      <Alert status='error'>
        <AlertTitle fontSize='13px'>NOTE!</AlertTitle>
        <AlertDescription fontSize='13px'>You need to be logged.</AlertDescription>
      </Alert>
    )

    return (
      <Box display='flex' gap='1rem' w='100%' justifyContent='space-between'>
        <Input size='sm' w='90%' fontSize='14px' placeholder='your feedback' maxLength='150' ref={reviewRef}/>
        <ButtonGroup size='sm' variant='outline' >
          <Button variant='solid' colorScheme="purple">Save</Button>
          <IconButton aria-label='Add to friends' icon={<RiCloseLine/>} onClick={handleBoxInput}/>
        </ButtonGroup>
      </Box>
    )
  }

  return (
    <Box display='flex' flexDirection='column' gap='1.5rem'>
      {isOpen 
        ? <RenderInput/>
        :  <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Text fontFamily='Poppins-Medium' fontSize='17px'>Reviews</Text>
          <Button size='sm' colorScheme='purple' variant='outline' onClick={handleBoxInput}>add review</Button>
        </Box>
      }
      <Box border='1px' height='45vh' borderColor='blackAlpha.100' borderRadius='5px'>
        {props.children}
      </Box>
    </Box>
  );
}

export default Review;