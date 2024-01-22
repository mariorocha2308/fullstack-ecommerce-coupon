import { Tooltip } from '@chakra-ui/react'
import { useAuth } from '../../zustand/stores/useAuth';

const TootilpSession = props => {
  const { isAuth } = useAuth()

  return (  
    <Tooltip label={props.label} isDisabled={isAuth}>
      {props.children}
    </Tooltip>
  );
}

export default TootilpSession;