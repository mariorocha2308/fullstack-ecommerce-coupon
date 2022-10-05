import React from 'react';
import { Navigate } from 'react-router-dom'
import { getItem } from 'react-safe-storage'

const PrivateRoute = props => {

  const isLogged = getItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user')

  return (isLogged) ? <Navigate to='/'/> : props.children
}

export default PrivateRoute;