import React, { useState } from 'react';

const useError = () => {

  const [error, setError] = useState('')

  const handlingError = (err) => {
    setError(err)
    setTimeout(() => setError(''), 4000)
  }

  return [error, handlingError];
}

export default useError;
