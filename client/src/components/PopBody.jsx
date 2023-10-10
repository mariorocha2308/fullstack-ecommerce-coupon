import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useQuery } from 'react-query';
import { getHotSales } from '../utils/apiQueries/coupon';
import ItemCoupon from './ItemCoupon';
import { useFavoritesPersist } from '../zustand/stores/useFavoritesPersist';
import { useWhitelistPersist } from '../zustand/stores/useWhitelistPersist';

const PopBody = () => {

  const { addFavorites } = useFavoritesPersist()
  const { addWhitelist } = useWhitelistPersist()

  const { data: hotsales } = useQuery(['hotsales'], getHotSales)

  return (
    <Tabs>
      <TabList>
        <Tab>Whitelist</Tab>
        <Tab>Favorites</Tab>
        <Tab>Hotsales</Tab>
      </TabList>

      <TabPanels >
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel display='flex' flexDirection='column' overflowY='scroll' maxHeight='70vh' marginTop='1rem' gap='1.5rem'>
          {hotsales?.map(coupon => (
            <ItemCoupon key={coupon.id} 
              id={coupon.id}
              title={coupon.type} 
              price={coupon.price} 
              discount={coupon.discount} 
              onFavorite={addFavorites}
              onWhitelist={addWhitelist}
            />
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default PopBody;