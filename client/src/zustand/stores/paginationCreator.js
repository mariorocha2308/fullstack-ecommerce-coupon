import create from 'zustand'

const usePaginationStore = create((set, get) => ({
  pageSize: 12,
  dataLength: 0,
  currentPage: 1,
  setCurrentPage: (value) => set({currentPage: value}),
  setDataLength: (size) => set({dataLength: size})
}))

export { usePaginationStore }