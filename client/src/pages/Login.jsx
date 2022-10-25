import React from 'react';
import { Box, Button, Input, Text, FormErrorMessage, Stack, FormControl } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { postLoginUser } from '../utils/apiQueries/auth'
import { useNavigate } from 'react-router-dom'
import useError from '../hooks/useError';
import { useAuthStore } from '../zustand/stores/authCreator'

const Login = () => {

  const navigate = useNavigate()
  const [error, handlingError] = useError()
  const { login } = useAuthStore()
  const { handleSubmit, register, formState: { errors, isSubmitting }} = useForm()

  const onSubmit = async (input) => {
    const authUser = await postLoginUser(input)

    if (authUser.error) return handlingError(authUser.error)
    else {
      login(authUser)
      navigate('/')
    }
  }

  return ( 
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' pt='5rem'>
      <Text fontWeight='bold' fontSize='30'>Login</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='4' direction='column'>
          <FormControl isInvalid={errors.userTag}>
            <Input placeholder='name or email' size='md' variant='filled' 
            {...register('userTag', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}/>
            <FormErrorMessage>
              {errors.userTag && errors.userTag.message}
            </FormErrorMessage>
          </FormControl> 

          <FormControl isInvalid={errors.password}>
            <Input placeholder='password' size='md' variant='filled' type='password'
            {...register('password', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}/>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          {error && <Text>{error}</Text>}

          <Button isLoading={isSubmitting} type='submit'>Login</Button>
        </Stack>

      </form>
    </Box>
  );
}

export default Login;