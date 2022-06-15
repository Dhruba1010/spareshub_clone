import React from 'react';
import { Box, Button, Center, Checkbox, FormControl, FormLabel, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const SignUp = () => {
  return (
    <Box>
        <Text ml='8.5rem' fontSize='22px' fontWeight='300' color='#0088cc'>Create New Customer Account</Text>
        <Box display='flex' gap='5px' mt='5rem' w='32%' ml='8.5rem' mb='2rem'>
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
        <Box display='flex' m='auto' w='80%' justifyContent='space-between' borderRadius='10px' borderTop='5px solid #0088cc'>
            <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            w='100%'
            >
                <Box w='100%' display='flex' justifyContent='space-between'>
                    <Box w='45%'>
                        <Text color='#0088cc' fontSize='18px' fontWeight='400' mb='1rem'>
                            PERSONAL INFORMATION
                        </Text>
                        <FormControl id="first_name" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="last_name" isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}>
                            <Checkbox>Sign Up for Newsletter</Checkbox>
                        </Stack>
                    </Box>
                    <Box w='45%'>
                        <Text color='#0088cc' fontSize='18px' fontWeight='400' mb='1rem'>
                            SIGN-IN INFORMATION
                        </Text>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <FormControl id="c_password" isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                    </Box>
                </Box>
                <Button
                    bg={'blue.400'}
                    color={'white'}
                    mt='2rem'
                    _hover={{
                    bg: 'blue.500',
                    }}>
                    Create an Account
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default SignUp