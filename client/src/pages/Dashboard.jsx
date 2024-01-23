import { Box, Button, Grid, Text } from '@chakra-ui/react'
import TableCoupons from '../components/TableCoupons';

const Dashboard = () => {

  return (
    <Box display='flex' flexDirection='column' gap='3rem' my='3rem'>
      <Text fontFamily='Poppins-Bold' fontSize='20px'>Overview</Text>
      <Box display='flex' gap='2rem' h='22rem' justifyContent='space-between'>
        <Box bgColor='whiteAlpha.800' h='100%' p='1rem' borderRadius='md' boxShadow='lg' w='50%'>
          <Text fontFamily='Poppins-Medium'>Revenue</Text>
        </Box>
        <Grid templateColumns='repeat(2, 50%)' w='50%' h='100%' gap='1rem'>  
            <Box bgColor='purple.600' h='100%' p='1rem' borderRadius='md' boxShadow='lg' w='100%'>
            </Box>
            <Box bgColor='whiteAlpha.800' h='100%' p='1rem' borderRadius='md' boxShadow='lg' w='100%'>
              <Text fontFamily='Poppins-Medium'>Total Earning</Text>
            </Box>
            <Box bgColor='whiteAlpha.800' h='100%' p='1rem' borderRadius='md' boxShadow='lg' w='100%'>
              <Text fontFamily='Poppins-Medium'>Total Orders</Text>
            </Box>
            <Box bgColor='whiteAlpha.800' h='100%' p='1rem' borderRadius='md' boxShadow='lg' w='100%'>
              <Text fontFamily='Poppins-Medium'>Current Users</Text>
            </Box>
        </Grid>
      </Box>
      <Box bgColor='whiteAlpha.800' h='fit-content' p='1rem' borderRadius='md' boxShadow='lg' display='flex' flexDirection='column' gap='1rem'>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Text fontFamily='Poppins-Bold' fontSize='18px'>Coupons</Text>
          <Button size='sm' colorScheme='purple'>Add</Button>
        </Box>
        <TableCoupons/>
      </Box>
    </Box>
  );
}

export default Dashboard;
