import { Avatar, Badge, Box, Menu, MenuButton, MenuItem, MenuList, Stack, Text, AvatarBadge } from '@chakra-ui/react';
import { MdOutlineLogout } from 'react-icons/md'

const AvatarMenu = props => {

  return (  
    <Menu>
      <MenuButton>
        <Stack direction='row' alignItems='center'>
          <Box>
            <Text fontWeight='bold' textTransform='capitalize' >{props.name}</Text>
            <Badge colorScheme='green' fontSize='10px'>{props.rol}</Badge>
          </Box>
          <Avatar size='sm' src={props.image}>
            <AvatarBadge boxSize='1rem' bg='green.500' />
          </Avatar>
        </Stack>
      </MenuButton>
      <MenuList>
        <MenuItem icon={<MdOutlineLogout fontSize='15'/>} onClick={() => props.logOut()}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AvatarMenu;