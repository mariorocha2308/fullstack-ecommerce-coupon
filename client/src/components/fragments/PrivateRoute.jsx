import React from 'react';
import { Navigate, useParams } from 'react-router-dom'
import { getItem } from 'react-safe-storage'

const PrivateRoute = props => {

  const url = useParams()
  const isLogged = getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user')


  console.log(url);
  return (isLogged) ? <Navigate to='/'/> : props.children
}

export default PrivateRoute;