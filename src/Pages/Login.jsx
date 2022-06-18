import { Box, Button, Center, Checkbox, FormControl, FormLabel, Input, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpFunc } from '../Redux/Authentication/action';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userEmail, userPass);
        dispatch(signUpFunc({
            email: userEmail, password: userPass 
        }))
    }

  return (
    <Box >
        <Text ml='8.5rem' mb='1rem' fontSize='22px' fontWeight='300' color='#0088cc'>Customer Login</Text>
        <Box display='flex' m='auto' w='80%' justifyContent='space-between' borderRadius='10px' borderTop='5px solid #0088cc'>
            <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            w='25rem'
            >
                <Stack>
                    <Text color='#777777' fontSize='18px' fontWeight='400'>
                        Registered Customers
                    </Text>
                    <Text color='#777777' fontSize='13px' fontWeight='400'>
                        If you have an account, sign in with your email address.
                    </Text>
                    <form onSubmit={submitHandler}>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={userPass} onChange={e => setUserPass(e.target.value)} />
                    </FormControl>
                    <Stack spacing={4}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Link color={'blue.400'}>Forgot password?</Link>
                    </Stack>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.500',
                        }}
                        type='submit'>
                        Sign in
                    </Button>
                    </Stack>
                    </form>
                </Stack>
            </Box>
            <Box w='30rem'>
                <Text color='#777777' fontSize='18px' fontWeight='400' mt='1.5rem'>
                    New Customers
                </Text>
                <Text color='#777777' fontSize='13px' fontWeight='400' mt='1rem'>
                    Creating an account has many benefits: check out faster, keep more than one address, track orders and more.
                </Text>
                <Link as={RouterLink} to='/signup'>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.500',
                        }}
                        mt='1.5rem'>
                        Create an Account
                    </Button>
                </Link>
                <Box display='flex' gap='5px' mt='5rem' w='80%'>
                    <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                        <Center>
                            <Text>Sign in with Facebook</Text>
                        </Center>
                    </Button>
                    <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle backgroundColor='white'/>} bg='#dd4b39'>
                        <Center>
                            <Text color='white'>Sign in with Google</Text>
                        </Center>
                    </Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Login