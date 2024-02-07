import { Box, Text, Divider } from "@chakra-ui/react";
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'

const Footer = () => {

  const onNavigation = (url) => window.open(url)

  return (  
    <Box bg='white' h='15vh'>
      <Box display='flex' flexDirection='column' py='1.5rem' boxSizing='border-box' h='100%' justifyContent='space-between'
        maxWidth='1200px' w='1200px' margin='auto'>

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