import React, { Suspense, lazy } from 'react';
import { RiCoupon3Fill, RiDashboardFill, RiNotification4Fill, RiStore2Fill } from 'react-icons/ri'
import { Outlet, useNavigate } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import { useAuth } from '../zustand/stores/useAuth';
import { smoothWindowTop } from '../utils/functions/scrollTop';
import Loader from './fragments/Loader';
import PopBody from './PopBody';

const AvatarMenu = lazy(() => import('./AvatarMenu'))
const PopoverView = lazy(() => import('./PopoverView'))

const Navbar = () => {

  const navigate = useNavigate()
  const { isAuth } = useAuth()

  const onNavigation = (url) => {
    smoothWindowTop()
    navigate(url)
  }
  
  return (
    <Box>
      <Box boxShadow='sm' height='9vh' bg='white' w='100vw' zIndex='2' position='fixed'>
        <Box display='flex' justifyContent='space-between' alignItems='center' maxWidth='1200px' margin='auto' h='100%' w='1200px'>
          <Box display='flex' alignItems='center' onClick={() => onNavigation('/')} cursor='pointer' gap='0.3rem'>
            <RiCoupon3Fill size='1.5rem'/>
            <Text fontFamily='Monserrat' lineHeight='normal'>STORE</Text>
          </Box>

          <Box display='flex' gap='2rem' alignItems='center'>
            <Box display='flex' gap='1.2rem'>
              <Suspense>
                <PopoverView header='Notifications'>
                  <Box>
                    <RiNotification4Fill size='22px' className='navicon'/>
                  </Box>
                </PopoverView>
                <PopoverView header='Management' size='md' body={PopBody}>
                  <Box>
                    <RiStore2Fill size='22px' className='navicon'/>
                  </Box>
                </PopoverView>
                <RiDashboardFill size='22px' className='navicon'/>
              </Suspense>
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
    </Box>
  );
}

export default Navbar;