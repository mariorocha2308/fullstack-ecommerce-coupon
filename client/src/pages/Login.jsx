import React from 'react';
import { Box, Button, Input, Text, FormErrorMessage, Stack, FormControl } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { postLoginUser } from '../utils/apiQueries/auth'
import { setItem } from 'react-safe-storage'
import { useNavigate } from 'react-router-dom'
import useError from '../hooks/useError';

const Login = () => {

  const navigate = useNavigate()
  const [error, handlingError] = useError()
  const { handleSubmit, register, formState: { errors, isSubmitting }} = useForm()

  const onSubmit = async (input) => {
    const authUser = await postLoginUser(input)

    if (authUser.error) {
      handlingError(authUser.error)
      return
    } else {
      setItem(import.meta.env.VITE_SECRET_PASSPHRASE, 'user', JSON.stringify(authUser))
      navigate('/')
    }
  }

  return ( 
    <Box display='flex' justifyContent='center' flexDirection='column'>
      <Text>Login</Text>
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

          {error && <Text  >{error}</Text>}

          <Button isLoading={isSubmitting} type='submit'>Login</Button>
        </Stack>

      </form>
    </Box>
  );
}

export default Login;