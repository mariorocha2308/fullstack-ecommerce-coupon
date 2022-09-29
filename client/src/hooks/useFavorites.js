import React from 'react';
import useLocalStorage from 'use-local-storage'

const useFavorites = () => {

  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  const setLocalCoupon = (id) => {

    if (favorites.includes(id)) {
      return setFavorites(favorites.filter(key => key !== id))
    }
    setFavorites([...favorites, id])
  }

  const isFavorite = (id) => {
    const confirm = favorites.some(key => key === id)

    return confirm ? 'blackAlpha.700' : null
  }

  return [setLocalCoupon, isFavorite]
}

export default useFavorites