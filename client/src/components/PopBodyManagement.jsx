import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, Button } from '@chakra-ui/react'
import { getHotSales, getListCoupons } from '../utils/apiQueries/coupon';
import { useFavoritesPersist } from '../zustand/stores/useFavoritesPersist';
import { useWhitelistPersist } from '../zustand/stores/useWhitelistPersist';
import { RiErrorWarningLine } from 'react-icons/ri';
import ItemCoupon from './ItemCoupon';
import { useNavigate } from 'react-router-dom';

const PopBody = () => {
  const navigate = useNavigate()
  const { addFavorites, favorites } = useFavoritesPersist()
  const { addWhitelist, whitelist } = useWhitelistPersist()

  const { data: hotsales } = useQuery(['hotsales'], getHotSales)
  const { data: listFavorites, refetch: fetchFavorites } = useQuery(['listFavorites'], () => getListCoupons(favorites), { enabled: false })
  const { data: listWhitelist, refetch: fetchWhitelist } = useQuery(['listWhitelist'], () => getListCoupons(whitelist), { enabled: false })

  useEffect(() => {
    if (whitelist.length >= 0) {
      fetchWhitelist()
    } 
    
    if (favorites.length >= 0) {
      fetchFavorites()
    }
  }, [fetchFavorites, fetchWhitelist, favorites, whitelist]);

  const ListEmpty = props => {
    return (
      <Box display='flex' justifyContent='center' gap='0.4rem' alignItems='center' color='gray.600'>
        <RiErrorWarningLine size='22px'/>
        <Text fontWeight='bold' fontSize='14px' >{props.label}</Text>
      </Box>
    )
  }

  return (
    <Tabs isLazy>
      <TabList>
        <Tab>Whitelist</Tab>
        <Tab>Favorites</Tab>
        <Tab>Hotsales</Tab>
      </TabList>
      <TabPanels>
        <TabPanel display='flex'  flexDirection='column' overflowY='scroll' maxHeight='50vh' marginTop='1rem' gap='0.6rem' p={0}>
          {whitelist?.length 
            ? listWhitelist?.map(coupon => (
              <ItemCoupon key={coupon.id} 
                id={coupon.id}
                panelIdx={1}
                title={coupon.type}
                price={coupon.price} 
                discount={coupon.discount} 
                onFavorite={addFavorites}
                onWhitelist={addWhitelist}
              />
            ))
            : <ListEmpty label='Whitelist empty'/>
          }
          {whitelist.length > 0 && (
            <Button size='sm' colorScheme='purple' onClick={() => navigate('confirm/payment')}>Buy All</Button>
          )}
        </TabPanel>
        <TabPanel display='flex' flexDirection='column' overflowY='scroll' maxHeight='50vh' marginTop='1rem' gap='0.6rem' p={0}>
          {favorites?.length ? listFavorites?.map(coupon => (
              <ItemCoupon key={coupon.id} 
                id={coupon.id}
                panelIdx={2}
                title={coupon.type} 
                price={coupon.price} 
                discount={coupon.discount} 
                onFavorite={addFavorites}
                onWhitelist={addWhitelist}
              />
            )): <ListEmpty label='Favorites empty'/>}
        </TabPanel>
        <TabPanel display='flex' flexDirection='column' overflowY='scroll' maxHeight='50vh' marginTop='1rem' gap='0.6rem' p={0}>
          {hotsales?.length ? hotsales?.map(coupon => (
            <ItemCoupon key={coupon.id} 
              id={coupon.id}
              panelIdx={3}
              title={coupon.type} 
              price={coupon.price} 
              discount={coupon.discount} 
              onFavorite={addFavorites}
              onWhitelist={addWhitelist}
            />
          )): <ListEmpty label='Hotsales empty'/>}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default PopBody;