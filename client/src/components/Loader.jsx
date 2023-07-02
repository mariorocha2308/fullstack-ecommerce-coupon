import { Box } from "@chakra-ui/react";

const LazyGlobal = () => {

  return (
    <Box display='grid' placeItems='center' height='92vh'>
      <div className="lds-facebook"><div></div><div></div><div></div></div>
    </Box> 
  );
}

export default LazyGlobal;
