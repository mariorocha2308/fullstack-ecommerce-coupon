import { Avatar, Badge, Box, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react';
import { MdOutlineLogout } from 'react-icons/md'
import React from 'react';

const AvatarMenu = props => {

  return (  
    <Menu>
      <MenuButton>
        <Stack direction='row'>
          <Box>
            <Text fontWeight='bold' textTransform='capitalize' >{props.name}</Text>
            <Badge colorScheme='green'>{props.rol}</Badge>
          </Box>
          <Avatar size='sm' src={props.image}/>
        </Stack>
      </MenuButton>
      <MenuList>
        <MenuItem icon={<MdOutlineLogout/>} onClick={() => props.logOut()}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AvatarMenu;