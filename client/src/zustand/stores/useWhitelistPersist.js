import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useWhitelistPersist = create(
  persist(
    (set) => ({
      whitelist: [],
      addWhitelist: async (payload) => {
        set((state) => ({ whitelist: [...state.whitelist, payload]}))
      },
    }),
    {
      name: 'whitelist-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)