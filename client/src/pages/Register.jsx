import { useRef } from 'react';
import { Box, Input, Text, Button, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react';
import { RiLockFill, RiMailFill, RiUser2Fill } from 'react-icons/ri';
import { useMutation } from 'react-query';
import { postRegisterUser } from '../utils/apiQueries/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const toast = useToast()
  const navigate = useNavigate()
  const registerForm = useRef({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: ''
  })

  const { mutate } = useMutation(postRegisterUser)

  const handleInput = (e) => {
    registerForm.current[e.target.name] = e.target.value
  }

  const handleSubmitRegister = () => {

    registerForm.current.image = `https://source.boringavatars.com/beam/40/${registerForm.current.name}?colors=264653,f4a261,e76f51`
    if (Object.values(registerForm.current).includes('')) return toast({title: 'Some fields are empty', duration: 3000, status: 'error', position: 'bottom-right'})
    if (registerForm.current.password !== registerForm.current.confirmPassword) return toast({title: 'Password doesnt match', duration: 3000, status: 'error', position: 'bottom-right'})

    mutate(registerForm.current, {
      onSuccess: (data) => {
        toast({
          title: data.message ?? data.error,
          status: data.message ? 'success' : 'error',
          position: 'bottom-right',
          duration: 3000
        })
        navigate('/auth/login')
      }
    })
  }

  return (  
    <Box display='flex' alignItems='center' flexDirection='column' width='30%' margin='auto' height='90vh' justifyContent='center'>
      <Text fontFamily='Poppins-Bold' fontSize='28px' py='2'>Get started</Text>
      <Text fontFamily='Poppins-Medium' fontSize='15' marginBottom='3rem' color='blackAlpha.800'>Create your account now, it`s free</Text>

      <Box display='flex' flexDirection='column' gap='1rem' w='100%'>        
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <RiUser2Fill/>
          </InputLeftElement>
          <Input name='name' onChange={handleInput} placeholder='Name' fontSize='15px' fontFamily='Poppins-Medium'/>
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <RiMailFill/>
          </InputLeftElement>
          <Input placeholder='Email' name='email' onChange={handleInput} fontSize='15px' fontFamily='Poppins-Medium'/>
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <RiLockFill/>
          </InputLeftElement>
          <Input type='password' placeholder='Password' name='password' onChange={handleInput} fontSize='15px' fontFamily='Poppins-Medium'/>
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <RiLockFill/>
          </InputLeftElement>
          <Input type='password' placeholder='Confirm password' name='confirmPassword' onChange={handleInput} fontSize='15px' fontFamily='Poppins-Medium'/>
        </InputGroup>
      </Box>

      <Button variant='unstyled' bgColor='blackAlpha.900' _hover={{ boxShadow: 'lg'}} color='white' marginTop='10' w='100%' size='md' onClick={handleSubmitRegister}>Register</Button>
    </Box> 
  );
}

export default Register;