import create from 'zustand'

const useResetManangerStore = create((set) => ({
  RESET_FILTER: false,
  RESET_PAGINATION: false,
  setReset: (tag, value) => {
    set({[tag]: value})
    setTimeout(() => {
      set({[tag]: false})
    }, 1000);
  },
}))

export { useResetManangerStore }