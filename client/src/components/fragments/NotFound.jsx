import { Box, Text } from "@chakra-ui/react";
import { RiEarthquakeFill } from "react-icons/ri";

const NotFound = props => {

  return (  
    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' w={props.w} h={props.h}>
      <RiEarthquakeFill size={props.sizeIcon}/>
      <Text fontSize='md' fontWeight='bold' mt='1rem'>{props.message ?? 'No search results'}</Text>
    </Box>
  );
}

export default NotFound;