import { create } from 'zustand'

const usePaginationHomeStore = create((set) => ({
  pageSize: 12,
  dataLength: 0,
  currentPage: 1,
  setCurrentPage: (value) => set({currentPage: value}),
  setDataLength: (size) => set({dataLength: size})
}))

const usePaginationDashStore = create((set) => ({
  pageSize: 12,
  dataLength: 0,
  currentPage: 1,
  setCurrentPage: (value) => set({currentPage: value}),
  setDataLength: (size) => set({dataLength: size})
}))

export { 
  usePaginationHomeStore, 
  usePaginationDashStore 
}