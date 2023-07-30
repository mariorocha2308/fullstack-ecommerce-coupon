import { create } from 'zustand'
import { setItem } from 'react-safe-storage'

const useAuth = create((set) => ({
  isAuth: false,
  setAuth: (bool) => set({ isAuth: bool }),
  login: (objUser) => {     
    setItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user', JSON.stringify(objUser))
    set({ isAuth: true })
  },
  logOut: (key) => {
    localStorage.removeItem(key)
    set({ isAuth: false })
  } 
}))


export { useAuth }