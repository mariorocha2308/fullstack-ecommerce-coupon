import { Tooltip } from '@chakra-ui/react'
import { useAuth } from '../../zustand/stores/useAuth';

const TooptipCheck = props => {

  const { isAuth } = useAuth()

  return (  
    <Tooltip bg='red.600' hasArrow fontFamily='Poppins-Medium' label='You need to be logged' isDisabled={isAuth}>
      {props.children}
    </Tooltip>
  );
}

export default TooptipCheck;