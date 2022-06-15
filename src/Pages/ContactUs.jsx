import React from 'react';
import { Box, Text, Link, useColorModeValue, Stack, FormControl, FormLabel, Input, Button, Icon } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon} from '@chakra-ui/icons';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';
import { GrFacebookOption } from 'react-icons/gr';
import { ImLinkedin } from 'react-icons/im';

const ContactUs = () => {
  return (
    <Box>
        <Box w='85%' m='auto'>
            <iframe title='map' style={{border: 0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2110785100344!2d73.7791181500664!3d18.56452018732148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becddd315555%3A0xf438dbe5a664267e!2sMont%20Vert%20Apex!5e0!3m2!1sen!2sin!4v1591093397867!5m2!1sen!2sin" width="100%" height="300px" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        </Box>
        <Box display='flex' justifyContent='space-between' w='80%' ml='8rem'>
            <Box w='25rem'>
                <Text color='#777777' fontSize='20px'>
                    Write <span style={{fontWeight:'700'}}>Us</span>
                </Text>
                <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                    <Stack >
                        <FormControl id="name" isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="phone" >
                            <FormLabel>Phone Number</FormLabel>
                            <Input type="number" />
                        </FormControl>
                        <Stack spacing={4}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                            </Stack>
                            <Button
                                
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                bg: 'blue.500',
                                }}>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            <Box w='22rem' mt='3rem'>
                <FormControl id="thoughts" isRequired>
                    <FormLabel>What's on your mind? </FormLabel>
                    <Input type="text" h='12rem' mt='1rem'/>
                </FormControl>
            </Box>
            <Box display='flex' flexDirection='column' gap='1rem'>
                <Text color='#777777' fontSize='20px'>
                    Contact <span style={{fontWeight:'700'}}>Details</span>
                </Text>
                <Box display='flex' gap='1rem'>
                    <Box p='12px 15px' bg='#0088cc' w='fit-content' borderRadius='7px'>
                        <PhoneIcon color='white' m='auto'/>
                    </Box>
                    <Box>
                        <Text color='#777777'>020-67123030</Text>
                        <Text color='#777777'>91 7030917154</Text>
                    </Box>
                </Box>
                <Box display='flex' gap='1rem'>
                    <Box p='12px 15px' bg='#0088cc' w='fit-content' borderRadius='7px'>
                        <EmailIcon color='white' m='auto'/>
                    </Box>
                    <Box>
                        <Text color='#777777'>contact@spareshub.com</Text>
                        <Text color='#777777'>Mail Us</Text>
                    </Box>
                </Box>
                <Box display='flex' gap='1rem'>
                    <Box p='12px 15px' bg='#0088cc' w='fit-content' borderRadius='7px'>
                        <Icon as={AiOutlineTwitter} color='white' m='auto'/>
                    </Box>
                    <Box>
                        <Link as={RouterLink} to='https://twitter.com/SparesHub/' color='#0088cc' fontWeight='bold'>
                            Spareshub_twitter
                        </Link>
                        <Text color='#777777'>Follow Infortis on Twitter</Text>
                    </Box>
                </Box>
                <Box display='flex' gap='1rem'>
                    <Box p='12px 15px' bg='#0088cc' w='fit-content' borderRadius='7px'>
                        <Icon as={GrFacebookOption} color='white' m='auto'/>
                    </Box>
                    <Box>
                        <Link as={RouterLink} to='https://twitter.com/SparesHub/' color='#0088cc' fontWeight='bold'>
                            Spareshub_facebook
                        </Link>
                        <Text color='#777777'>Join us on Facebook</Text>
                    </Box>
                </Box>
                <Box display='flex' gap='1rem'>
                    <Box p='12px 15px' bg='#0088cc' w='fit-content' borderRadius='7px'>
                        <Icon as={ImLinkedin} color='white' m='auto'/>
                    </Box>
                    <Box>
                        <Link as={RouterLink} to='https://www.linkedin.com/company/spareshub/' color='#0088cc' fontWeight='bold'>
                            Linked in
                        </Link>
                        <Text color='#777777'>Linked in</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default ContactUs