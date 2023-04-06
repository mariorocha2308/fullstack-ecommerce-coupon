import React, { useState } from 'react';
import { Box, Input, Stack, Text, Button, Avatar, IconButton } from '@chakra-ui/react';
import { TbCameraPlus } from 'react-icons/tb'

const Register = () => {

  const [input, setInput] = useState({
    image: '',
    name: '',
    email: '',
    phoneNumber: '',
    password: ''
  })

  const handleInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  return (  
    <Box display='flex' alignItems='center' flexDirection='column' width='30%' margin='auto'>
      <Text fontWeight='bold' fontSize='25px' py='2'>Get started</Text>
      <Text fontWeight='semibold' fontSize='14' marginBottom='3rem' color='gray.500'>Create your account now</Text>

      <Box display='flex' alignItems='flex-end' position='relative'>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='xl'/>
        <IconButton aria-label='Chose local picture' icon={<TbCameraPlus fontSize='18px'/>} variant='solid' isRound position='absolute' right='-1' 
        colorScheme='teal' size='sm' type='file'/>
      </Box>
      <Input placeholder='Name' size='md' variant='outline' name='name' onChange={handleInput}/>
      <Input placeholder='Email' size='md' variant='outline' name='email' onChange={handleInput}/>
      <Input placeholder='Phone number' size='md' variant='outline' name='phoneNumber' onChange={handleInput}/>
      <Input placeholder='Password' size='md' variant='outline' name='password' onChange={handleInput}/>
      <Input placeholder='Confirm password' size='md' variant='outline' name='confirm-password' onChange={handleInput}/>
      <Button type='submit' colorScheme='teal' marginTop='10' w='100%'>Register</Button>
    </Box> 
  );
}

export default Register;