import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import theme from './theme'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      keepPreviousData: true,
      staleTime: 30 * 1000, // 20 seconds
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <App/>
        <ReactQueryDevtools/>
      </BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
)
