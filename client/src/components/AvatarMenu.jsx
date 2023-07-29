import { getItem } from 'react-safe-storage';
import { useAuthStore } from '../zustand/stores/useAuthCreator';
import { Avatar, Badge, Box, Menu, MenuButton, MenuItem, MenuList, Stack, Text, AvatarBadge } from '@chakra-ui/react';
import { MdOutlineLogout } from 'react-icons/md'

const AvatarMenu = () => {

  const { logOut } = useAuthStore()
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))

  return (  
    <Menu>
      <MenuButton>
        <Stack direction='row' alignItems='center'>
          <Box>
            <Text fontWeight='bold' textTransform='capitalize' >{user.name}</Text>
            <Badge colorScheme='green' fontSize='10px'>{user.rol}</Badge>
          </Box>
          <Avatar size='sm' src={user.image}>
            <AvatarBadge boxSize='1rem' bg='green.500' />
          </Avatar>
        </Stack>
      </MenuButton>
      <MenuList>
        <MenuItem icon={<MdOutlineLogout fontSize='15'/>} onClick={logOut}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AvatarMenu;