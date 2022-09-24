import React from 'react';
import { useQuery } from 'react-query'
import { getCouponsQuery } from '../utils/functions/apiQueries';

const Home = () => {

  const { data: coupons } = useQuery(['coupons'], getCouponsQuery)
  console.log(coupons)

  return ( 
    <div>

    </div>
   );
}
 
export default Home;