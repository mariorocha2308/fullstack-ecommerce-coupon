import { Box, Text } from "@chakra-ui/react";

const NotFound = props => {

  return (  
    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' w={props.w} h={props.h}>
      {props.children}
      <Text fontSize={props.sizeMessage} fontWeight='Poppins-Medium' mt='1rem'>{props.message ?? 'No search results'}</Text>
    </Box>
  );
}

export default NotFound;