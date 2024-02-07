import { useEffect } from "react";
import { Box, Button, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import { RiUser3Fill, RiMailFill } from 'react-icons/ri'
import { smoothWindowTop } from '../utils/functions/scrollTop'
import { getItem } from "react-safe-storage";

const Payment = () => {
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))

  useEffect(() => {
    smoothWindowTop()
  }, []);

  return (  
    <Box display='flex' flexDirection='column' gap='1.6rem' my='3rem' h='61vh'>
      <Box>
        <Text fontFamily='Poppins-Bold' fontSize='20px'>Payment Details</Text>
        <Text fontFamily='Poppins-Medium' fontSize='15px' color='gray.500'>Enter your personal details to complete your purchase</Text>
      </Box>
      <Box display='flex' gap='1.5rem' h='50vh'>
        <Box display='flex' flexDirection='column' w='70%' bgColor='whiteAlpha.800' borderRadius='md' boxShadow='lg' p='2rem' gap='1.5rem'>
          <Text fontFamily='Poppins-Bold' fontSize='17px'>Billing Information</Text>
          <Box display='flex' gap='1rem'>
            <Input placeholder="Main Address" variant='filled' flex={1}/>
            <Input placeholder="Postal Code" variant='filled' w='20%' type="number"/>
          </Box>
          <Box display='flex' gap='1rem'>
            <Input placeholder="Card Number" variant='filled' flex={1} type="number"/>
            <Input placeholder="000" variant='filled' w='20%' type="number"/>
            <Input placeholder="00/00" variant='filled' w='15%' type="number"/>
          </Box>
          <hr/>
          <Text fontFamily='Poppins-Bold' fontSize='14px'>This information helps recognize that you are the owner of the coupon you are purchasing.</Text>
          <Box display='flex' gap='1rem'>
            <InputGroup>
              <InputLeftAddon><RiMailFill/></InputLeftAddon>
              <Input placeholder="Email" type="email" variant='outline' defaultValue={user.email}/>
            </InputGroup>
            <InputGroup>
              <InputLeftAddon><RiUser3Fill/></InputLeftAddon>
              <Input placeholder="Holder Name" variant='outline' defaultValue={user.userName}/>
            </InputGroup>
          </Box>
        </Box>
        <Box display='flex' justifyContent='center' w='30%' bgColor='whiteAlpha.800' borderRadius='md' boxShadow='lg' p='2rem'>
          <Button size='md' w='85%' bgColor='blackAlpha.900' variant='unstyled' color='whiteAlpha.900' fontFamily='Poppins-Bold'
        display='flex' alignItems='center' _hover={{ boxShadow: 'lg'}}>Pay</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Payment;