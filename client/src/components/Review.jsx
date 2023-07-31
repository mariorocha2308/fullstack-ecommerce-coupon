import { useState } from "react";
import { Alert, AlertDescription, AlertTitle, Box, Button, Input, Text } from "@chakra-ui/react";
import { useAuth } from "../zustand/stores/useAuth";

const Review = () => {

  const [isOpen, setOpen] = useState(false)
  const { isAuth } = useAuth()

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
      <Box>
        <Input placeholder='write your review'/>
      </Box>
    )
  }

  return (
    <Box display='flex' flexDirection='column' gap='1.5rem'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Text fontFamily='Poppins-Medium' fontSize='17px'>Reviews</Text>
        <Button size='sm' colorScheme='purple' variant='outline' onClick={handleBoxInput}>{!isOpen ? 'add review' : 'cancel'}</Button>
      </Box>
      {isOpen && (
        <RenderInput/>
      )}
    </Box>
  );
}

export default Review;