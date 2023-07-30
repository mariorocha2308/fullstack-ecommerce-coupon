import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useWhitelistPersist = create(
  persist(
    (set, get) => ({
      whitelist: [],
      addWhitelist: async (payload) => {
        if (get().whitelist.includes(payload)) {
          const cleaned = get().whitelist.filter(favorite => favorite !== payload)

          return set({whitelist: cleaned})
        }
        set((state) => ({ whitelist: [...state.whitelist, payload]}))
      }
    }),
    {
      name: 'whitelist-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)