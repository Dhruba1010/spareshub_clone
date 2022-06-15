import React from 'react';
import { Box, Text, Link, Stack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, Icon } from '@chakra-ui/icons';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box h='25.5rem' mt='5rem' >
        <Box  ml='8rem' mt='-0.8rem' position='absolute' bg='#0088cc' p='0.4rem'>
            <Text color='white'>Spareshub</Text>
        </Box>
        <Box background='#121214' color='white' display='flex' pt='2rem' pl='8rem' pr='8rem' fontFamily='1px' justifyContent='space-between' pb='1rem'>
            <Box w='16rem' >
                <Stack align={'flex-start'}>
                    <Link href={'#'}>About us</Link>
                    <Link href={'/contact'}>Contact us!</Link>
                    <Link href={'#'}>Call us - <PhoneIcon /> 9307901458</Link>
                    <Link href={'#'}>Whatsapp us - <Icon as={FaWhatsapp} /> 9307901458</Link>
                    <Link href={'#'}>Email us - <EmailIcon /> care@spareshub.com</Link>
                </Stack>
            </Box>
            <Box w='7rem' >
                <Stack align={'flex-start'}>
                    <Link href={'#'}>Franchise</Link>
                    <Link href={'#'}>Feedback</Link>
                    <Link href={'#'}>Disclaimer</Link>
                    <Link href={'#'}>Legal</Link>
                    <Link href={'#'}>Privacy Policy</Link>
                </Stack>
            </Box>
            <Box w='8.5rem' >
                <Stack align={'flex-start'}>
                    <Link href={'#'}>Shipping Policy</Link>
                    <Link href={'#'}>Refund Policy</Link>
                    <Link href={'#'}>Terms Conditions</Link>
                    <Link href={'#'}>Connect with Us</Link>
                </Stack>
            </Box>
            <Box w='18rem' >
                <Box>
                    <Stack>
                        <Text fontSize="1.25rem" fontWeight='500' lineHeight="19.2px">Be the First to Know</Text>
                        <Text color='#777777'>Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.</Text>
                    </Stack>
                </Box>
                <Box mt='2.8rem'>
                    <Text pb='1.2rem' color='#777777'>Enter your email address</Text>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            size='sm'
                            bg='white'
                            color='black'
                        />
                        <InputRightElement width='4.6rem' mt='-3.8px'>
                            <Button h='2rem' size='sm' bg='#0088cc' colorScheme='none' >
                                Subscribe
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Box>
        </Box>
        
        <Box background='#0c0c0c' pb='2rem' pt='1rem'>
            <Box w='90%' textAlign='center' m='auto'>
                <Text color='#777777'>
                    © 2017 Catalyst Retail Pvt. Ltd. All Rights Reserved. The website www.spareshub.com is owned and operated by Catalyst Retail Pvt. Ltd. Your use of this website signifies your agreement to the terms of use of this website. All brand and product names and associated logos contained within this website belong to their respective owners and are protected by copyright. Names and Images above are for representational purpose only to serve as a guide to the user of the website and SparesHub.com is in no way associated with any of the above mentioned automobile manufacturers.
                </Text>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer