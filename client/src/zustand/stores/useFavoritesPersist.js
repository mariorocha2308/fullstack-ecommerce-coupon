import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useFavoritesPersist = create(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorites: async (payload) => {
        if (get().favorites.includes(payload)) {
          const cleaned = get().favorites.filter(favorite => favorite !== payload)

          return set({favorites: cleaned})
        }
        set((state) => ({ favorites: [...state.favorites, payload]}))
      }
    }),
    {
      name: 'favorites-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)