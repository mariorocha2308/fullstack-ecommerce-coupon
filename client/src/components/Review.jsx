import { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

const Review = () => {

  const [isOpen, setOpen] = useState(false)

  const handleBoxInput = () => {
    setOpen(!isOpen)
  }

  return (
    <Box display='flex' flexDirection='column' gap='1.5rem'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Text fontFamily='Poppins-Medium' fontSize='17px'>Reviews</Text>
        <Button size='sm' colorScheme='purple' variant='outline' onClick={handleBoxInput}>{!isOpen ? 'add review' : 'cancel'}</Button>
      </Box>
      {isOpen && (
        <Box>
          <Input placeholder='write your review'/>
        </Box>
      )}
    </Box>
  );
}

export default Review;