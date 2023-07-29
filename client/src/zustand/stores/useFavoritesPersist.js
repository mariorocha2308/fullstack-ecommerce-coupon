import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useFavoritesPersist = create(
  persist(
    (set) => ({
      favorites: [],
      addFavorites: async (payload) => {
        set((state) => ({ favorites: [...state.favorites, payload]}))
      },
    }),
    {
      name: 'favorites-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)