import { create } from 'zustand'

const usePaginationStore = create((set) => ({
  pageSize: 12,
  currentPage: {
    table: 1,
    grid: 1
  },
  setCurrentPage: (target, value) => set((state) => ({currentPage: {...state.currentPage, [target]: value }})),
}))

export { usePaginationStore }