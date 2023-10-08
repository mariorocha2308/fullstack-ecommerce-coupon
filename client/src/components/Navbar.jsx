import React, { Suspense, lazy, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import { useAuth } from '../zustand/stores/useAuth';
import { RiShoppingBag3Fill, RiHeart2Fill, RiNotification4Fill, RiFireFill } from 'react-icons/ri'
import Loader from './fragments/Loader';
import { smoothWindowTop } from '../utils/functions/scrollTop';
import DrawerView from './DrawerView';

const AvatarMenu = lazy(() => import('./AvatarMenu'))

const Navbar = () => {

  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const [drawer, setDrawer] = useState({
    hotsales: false,
    favorites: false,
    notifications: false,
    whitelist: false
  })

  const onNavigation = (url) => {
    smoothWindowTop()
    navigate(url)
  }

  const handleDrawer = (toogle) => {
    setDrawer({...drawer, [toogle]: !drawer[toogle]})
  }
  
  return (
    <Box>
      <Box boxShadow='sm' height='9vh' bg='white' w='100vw' zIndex='2' position='fixed'>
        <Box display='flex' justifyContent='space-between' alignItems='center' maxWidth='1200px' margin='auto' h='100%' w='1200px'>
          <Box display='flex' gap='3rem' alignItems='center'>
            <Text fontFamily='Monserrat' onClick={() => onNavigation('/')} cursor='pointer'>CPNSTORE</Text>
          </Box>

          <Box display='flex' gap='2rem' alignItems='center'>
            <Box display='flex' gap='1.2rem'>
              <RiFireFill size='22px' onClick={() => handleDrawer('hotsales')} className='navicon'/>
              <RiNotification4Fill size='22px' onClick={() => handleDrawer('notifications')} className='navicon'/>
              <RiHeart2Fill size='22px' onClick={() => handleDrawer('favorites')} className='navicon'/>
              <RiShoppingBag3Fill size='22px' onClick={() => handleDrawer('whitelist')} className='navicon'/>
            </Box>
            <Box>
              <Suspense>
                {!isAuth 
                ? <Box display='flex' gap='2rem'>
                  <Button size='sm' variant='unstyled' fontFamily='Poppins-Bold'
                    onClick={() => onNavigation('/auth/login')}>Login</Button>
                  <Button colorScheme='purple' size='sm' variant='solid' 
                    onClick={() => onNavigation('/auth/register')}>Register</Button>
                </Box>
                : <AvatarMenu/>}
              </Suspense>
            </Box>
          </Box>
        </Box>
      </Box>
      <Suspense fallback={<Loader h='100vh'/>}>
        <Box maxWidth='1200px' margin='auto' pt='10vh'>
          <Outlet/>
        </Box> 
      </Suspense>

      <DrawerView isOpen={drawer.hotsales} onClose={() => handleDrawer('hotsales')} size='md'>

      </DrawerView>

      <DrawerView isOpen={drawer.notifications} onClose={() => handleDrawer('notifications')} size='md'>

      </DrawerView>

      <DrawerView isOpen={drawer.favorites} onClose={() => handleDrawer('favorites')} size='md'>

      </DrawerView>

      <DrawerView isOpen={drawer.whitelist} onClose={() => handleDrawer('whitelist')} size='md'>

      </DrawerView>
    </Box>
  );
}

export default Navbar;