import { useState } from 'react';
import { Box, Button, Input, Text, FormErrorMessage, Stack, FormControl, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { MdEmail, MdLock } from 'react-icons/md'
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import { postLoginUser } from '../utils/apiQueries/auth'
import { useNavigate } from 'react-router-dom'
import useError from '../hooks/useError';
import { useAuthStore } from '../zustand/stores/authCreator'

const Login = () => {

  const navigate = useNavigate()
  const [error, handlingError] = useError()
  const [show, setShow] = useState(false)
  const { login } = useAuthStore()
  const { handleSubmit, register, formState: { errors, isSubmitting }} = useForm()
  
  const handleShow = () => setShow(!show)

  const onSubmit = async (input) => {
    const authUser = await postLoginUser(input)
    
    if (authUser.error) return handlingError(authUser.error)
    else {
      login(authUser)
      navigate('/')
    }
  }

  return ( 
    <Box display='flex' flexDirection='column' border='2px' borderRadius='md' height='70vh' width='90%' margin='auto' marginTop='4rem' padding='12'>
      <Text fontWeight='bold' fontSize='18'>Coupons 🎫</Text>
      <Text fontWeight='bold' fontSize='33' marginBottom='2'>Sign in</Text>
      <Text fontWeight='semibold' fontSize='15' marginBottom='3rem' color='blue.500'>Use your account created</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='4' direction='column'>
          <FormControl isInvalid={errors.userTag} >
            <InputGroup>
              <InputLeftElement
                children={<MdEmail/>}
              />
              <Input placeholder='name or email' size='md' variant='filled' 
              {...register('userTag', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}/>
            </InputGroup>
            <FormErrorMessage color='red.500'>
              {errors.userTag && errors.userTag.message}
            </FormErrorMessage>
          </FormControl> 

          <FormControl isInvalid={errors.password}>
            <InputGroup>
              <InputLeftElement
                children={<MdLock/>}
              />
              <Input placeholder='password' size='md' variant='filled' type={show ? 'text' : 'password'}
              {...register('password', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}/>
              <InputRightElement width='4.5rem'>
                { show ? 
                  <BsFillEyeSlashFill onClick={handleShow} style={{cursor: 'pointer'}}/> :
                  <BsFillEyeFill onClick={handleShow} style={{cursor: 'pointer'}}/> 
                }
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage color='red.500'>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
      </form>

      <Text fontWeight='bold' fontSize='13' color='blue.500' marginTop='3'>Forgot password?</Text>

      <Button isLoading={isSubmitting} type='submit' colorScheme='teal' marginTop='10'>Login</Button>

      {error && <Text color='red.500' fontWeight='semibold' fontSize='14' alignSelf='center'>{error}</Text>}
    </Box>
  );
}

export default Login;