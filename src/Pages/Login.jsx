import { Box, Button, Center, Checkbox, FormControl, FormLabel, Input, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Login = () => {
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
                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" />
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
                        }}>
                        Sign in
                    </Button>
                    </Stack>
                </Stack>
            </Box>
            <Box w='30rem'>
                <Text color='#777777' fontSize='18px' fontWeight='400' mt='1.5rem'>
                    New Customers
                </Text>
                <Text color='#777777' fontSize='13px' fontWeight='400' mt='1rem'>
                    Creating an account has many benefits: check out faster, keep more than one address, track orders and more.
                </Text>
                <Button
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                    bg: 'blue.500',
                    }}
                    mt='1.5rem'>
                    Create an Account
                </Button>
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