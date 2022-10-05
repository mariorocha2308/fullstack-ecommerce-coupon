import React, { useState } from 'react';
import { Avatar, Box, Image, Input, Stack, Text } from '@chakra-ui/react';
import portada from '../assets/cool-background.jpeg'

const Register = () => {

  const [input, setInput] = useState({
    image: 'https://ui-avatars.com/api/?name=Mario+Dev?background=33709b&color=fff',
    name: '',
    email: '',
    phoneNumber: '',
    password: ''
  })

  const handleInput = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  return (  
    <Box display='flex' alignItems='center' flexDirection='column'>
      <Box w='100%' h='12rem' position='relative'>
        <Image src={portada} borderRadius='10px'  objectFit='cover'  w='100%' h='100%'/>
        <Avatar name={input.name} src={input.image} position='absolute' left='0' top='0' bottom='0' right='0' m='auto' size='xl'/>
      </Box>
      <Text fontWeight='bold' fontSize='25px' py='2'>Create new account</Text>
      <Stack spacing='5' w='70%'>
        <Input placeholder='name' size='md' variant='filled' name='name' onChange={handleInput}/>
        <Input placeholder='email' size='md' variant='filled' name='email' onChange={handleInput}/>
        <Input placeholder='phone number' size='md' variant='filled' name='phoneNumber' onChange={handleInput}/>
        <Input placeholder='password' size='md' variant='filled' name='password' onChange={handleInput}/>
        <Input placeholder='repeat password' size='md' variant='filled'/>
      </Stack>
    </Box>
  );
}

export default Register;