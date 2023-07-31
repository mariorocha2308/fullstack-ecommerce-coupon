import { getItem } from 'react-safe-storage';
import { useAuth } from '../zustand/stores/useAuth';
import { Avatar, Menu, MenuButton, MenuItem, MenuList, Stack, AvatarBadge } from '@chakra-ui/react';
import { MdOutlineLogout } from 'react-icons/md'

const AvatarMenu = () => {

  const { logOut } = useAuth()
  const user = JSON.parse(getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user'))

  return (
    <Menu>
      <MenuButton>
        <Stack direction='row' alignItems='center'>
          <Avatar size='sm' src={user.image}>
            <AvatarBadge boxSize='1rem' bg='green.500' />
          </Avatar>
        </Stack>
      </MenuButton>
      <MenuList>
        <MenuItem icon={<MdOutlineLogout fontSize='15'/>} onClick={() => logOut(user.role)}>
          Log Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default AvatarMenu;