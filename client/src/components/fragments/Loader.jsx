import { Box } from "@chakra-ui/react";

const LazyGlobal = props => {

  return (
    <Box display='grid' placeItems='center' height={props.h}>
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </Box> 
  );
}

export default LazyGlobal;
