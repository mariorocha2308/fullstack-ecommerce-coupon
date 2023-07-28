import { Box, Text, Divider } from "@chakra-ui/react";
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'

const Footer = () => {

  const onNavigation = (url) => window.open(url)

  return (  
    <Box h='20rem' bg='white'>
      <Box display='flex' flexDirection='column' py='3rem' boxSizing='border-box' h='100%' justifyContent='space-between'
        maxWidth='1200px' w='1200px' margin='auto'>

        <Box display='flex' justifyContent='space-between'>
          <Box w='300px' textAlign='start'>
            <Text fontFamily='Poppins-Medium' mb='1rem'>Support</Text>
          </Box>

          <Box w='300px' textAlign='center'>
            <Text fontFamily='Poppins-Medium' mb='1rem'>FAQS</Text>
          </Box>

          <Box w='300px' textAlign='end'>
            <Text fontFamily='Poppins-Medium' mb='1rem'>Account</Text>
          </Box>
        </Box>

        <Box>
          <Divider mb='0.5rem'/>
          <Text color='blackAlpha.700' fontSize='13px' textAlign='end'> created by Mario Rocha, 2023</Text>
          <Box display='flex' justifyContent='flex-end' gap='1rem' mt='0.5rem'>
            <FaLinkedin fontSize='25px' cursor='pointer'
              onClick={() => onNavigation('https://www.linkedin.com/in/mario-de-jesus-rocha/')}/> 
            <FaSquareGithub fontSize='25px' cursor='pointer' 
              onClick={() => onNavigation('https://github.com/mariorocha2308')}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;