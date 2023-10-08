import { useRef } from 'react'
import { Box, Button, Input, Text, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react'
import { postLoginUser } from '../utils/apiQueries/auth'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../zustand/stores/useAuth'
import { useMutation } from 'react-query'
import { RiLockFill, RiMailFill } from 'react-icons/ri'
import { smoothWindowTop } from '../utils/functions/scrollTop'

const Login = () => {

  const navigate = useNavigate()
  const toast = useToast()
  const { login } = useAuth()

  const loginForm = useRef({
    email: '',
    password: ''
  })

  const { mutate } = useMutation(postLoginUser)

  const handleInput = (e) => {
    loginForm.current[e.target.name] = e.target.value
  }

  const handleSubmitLogin = () => {
    mutate(loginForm.current, {
      onSuccess: (data) => {
        if (data.error) {
          return toast({
            title: data.error,
            status: 'error',
            position: 'bottom-right'
          })
        }
        
        login(data)
        toast({
          title: 'Login success',
          status: 'success',
          position: 'bottom-right'
        })
        smoothWindowTop()
        navigate('/')
      }
    })
  }

  return ( 
    <Box display='flex' alignItems='center' flexDirection='column' width='30%' margin='auto' height='90vh' justifyContent='center'>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Text fontFamily='Poppins-Bold' fontSize='28px' py='2'>Log in</Text>
        <Text fontFamily='Poppins-Medium' fontSize='15' marginBottom='3rem' color='blackAlpha.800'>Use your account created</Text>
      </Box>
      <Box display='flex' flexDirection='column' gap='1rem' w='100%'>
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <RiMailFill/>
            </InputLeftElement>
            <Input name='email' onChange={handleInput} placeholder='Email' fontSize='15px' fontFamily='Poppins-Medium'/>
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <RiLockFill/>
            </InputLeftElement>
            <Input type='password' placeholder='Password' name='password' onChange={handleInput} fontSize='15px' fontFamily='Poppins-Medium'/>
          </InputGroup>
      </Box>
      <Button variant='unstyled' bgColor='blackAlpha.900' _hover={{ boxShadow: 'lg'}} color='white' marginTop='10' w='100%' size='md' onClick={handleSubmitLogin}>Log in</Button>
    </Box>
  );
}

export default Login;