import { Box, Text } from "@chakra-ui/react";

const Payment = () => {
  return (  
    <Box display='flex' flexDirection='column' gap='3rem' my='3rem'>
      <Box>
        <Text fontFamily='Poppins-Bold' fontSize='20px'>Payment Details</Text>
        <Text fontFamily='Poppins-Medium' fontSize='15px' color='gray.500'>Enter your personal details to complete your purchase</Text>
      </Box>
      <Box display='flex' gap='2rem' h='55vh'>
        <Box w='70%' bgColor='whiteAlpha.800' borderRadius='md' boxShadow='lg'>
        </Box>
        <Box w='30%' bgColor='whiteAlpha.800' borderRadius='md' boxShadow='lg'>
        </Box>
      </Box>
    </Box>
  );
}

export default Payment;