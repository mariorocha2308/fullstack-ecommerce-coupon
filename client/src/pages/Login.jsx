import { Box, Button, Input, Text, FormErrorMessage, Stack, FormControl, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react'
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { postLoginUser } from '../utils/apiQueries/auth'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../zustand/stores/authCreator'

const Login = () => {

  const navigate = useNavigate()
  const toast = useToast()
  const { login } = useAuthStore()
  const { handleSubmit, register, formState: { errors, isSubmitting }} = useForm()

  const onSubmit = async (input) => {
    const authUser = await postLoginUser(input)
    
    if (authUser.error) {
      toast({
        description: authUser.error,
        status: 'error',
        duration: 5000,
      })
    } else {
      login(authUser)
      navigate('/')
    }
  }

  return ( 
    <Box display='flex' flexDirection='column' height='70vh' width='30%' margin='auto' marginTop='4rem'>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Text fontWeight='bold' fontSize='33' marginBottom='2'>Log in</Text>
        <Text fontWeight='semibold' fontSize='14' marginBottom='3rem' color='gray.500'>Use your account created</Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='5' direction='column'>
          <FormControl isInvalid={errors.userTag}>
            <InputGroup>
              <InputLeftElement
                children={<MdEmail fontSize='23'/>}
              />
              <Input placeholder='Enter your email' size='md' variant='outline' fontWeight='medium' fontSize='14'
              {...register('userTag', {
                required: 'This is required',
                pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Email invalid'}
              })}/>
            </InputGroup>
            <FormErrorMessage color='red.500' fontWeight='bold' fontSize='12'>
              {errors.userTag && errors.userTag.message}
            </FormErrorMessage>
          </FormControl> 

          <FormControl isInvalid={errors.password}>
            <InputGroup>
              <InputLeftElement
                children={<MdLock fontSize='23'/>}
              />
              <Input placeholder='Password' size='md' variant='outline' type='password' fontWeight='medium' fontSize='14'
              {...register('password', {
                required: 'This is required'
              })}/>
            </InputGroup>
            <FormErrorMessage color='red.500' fontWeight='bold' fontSize='12'>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
        <Button isLoading={isSubmitting} type='submit' colorScheme='teal' marginTop='10' w='100%'>Log in</Button>
      </form>
    </Box>
  );
}

export default Login;