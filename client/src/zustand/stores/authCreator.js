import create from 'zustand'
import { setItem } from 'react-safe-storage'

const useAuthStore = create((set) => ({
  isAuth: false,
  setAuth: (bool) => set({ isAuth: bool }),
  login: (objUser) => {     
    setItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user', JSON.stringify(objUser))
    set({ isAuth: true })
  },
  logOut: (rol) => {
    localStorage.removeItem(rol)
    set({ isAuth: false })
  } 
}))


export { useAuthStore }