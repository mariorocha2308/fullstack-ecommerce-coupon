import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    body: 'Poppins-Regular'
  }
}

const theme = extendTheme(config)

export default theme