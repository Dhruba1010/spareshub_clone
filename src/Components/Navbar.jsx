import { Box, Text, Button, HStack, Input, InputRightElement, InputGroup, Link } from '@chakra-ui/react';
import React from 'react';
import { PhoneIcon, EmailIcon, Icon, SearchIcon } from '@chakra-ui/icons';
import { BsCartFill } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import CartCounter from './CartCounter';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
import { signOutFunc } from '../Redux/Authentication/action';

// The default icon 

const Navbar = () => {
    const auth = useSelector(store => store.authReducer.auth);
    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(signOutFunc());
    }

  return (
    <Box mb='4rem'>
        <Box display='flex' gap='1rem' justifyContent='flex-end' p='0.5rem' pr='5rem' backgroundColor='#f0f0ed' borderTop='3px solid #0088cc' fontSize='11px'>
            <Text display='flex' alignItems='center'>WELCOME AT SPARESHUB.COM!</Text>
            <HStack gap='1rem'>
                <Link as={RouterLink} to='/contact'>
                    <Button colorScheme='teal' variant='link' size='xs'>
                        CONTACT US
                    </Button>
                </Link>
                {auth ? (
                    <>
                        <Profile />
                        <Button colorScheme='teal' variant='link' size='xs' onClick={signOutHandler} >
                            Log Out
                        </Button>
                    </>
                ) : (
                    <>
                        <Link as={RouterLink} to='/login'>
                            <Button colorScheme='teal' variant='link' size='xs'>
                                SIGN IN
                            </Button>
                        </Link>
                        <Link as={RouterLink} to='/signup'>
                            <Button colorScheme='teal' variant='link' size='xs'>
                                CREATE AN ACCOUNT
                            </Button>
                        </Link>
                    </>
                )}
            </HStack>
        </Box>
        <Box display='flex' justifyContent='space-between' pl='20px' pr='20px' alignItems='center' m='0.75rem' mb='1rem' mt='1rem'>
                <Box display='flex' w='55%' justifyContent='space-between' alignItems='center'>
                    <Link as={RouterLink} to='/' >
                        <Box><img src="https://spareshub.com/pub/media/logo/stores/1/200x50xlogo.png.pagespeed.ic.3_mBb67eog.webp" alt="spareshub.com" /></Box>
                    </Link>
                    <Box borderRadius='50%'>
                        <InputGroup size='md' w='30rem'>
                            <Input placeholder='Search entire store here...' />
                            <InputRightElement width='3rem' mr='0.25rem'>
                                <Button h='2rem'><SearchIcon /></Button>
                            </InputRightElement>
                        </InputGroup>
                    </Box>
                </Box>
                <Box display='flex' w='25%' justifyContent='space-between' alignItems='center'>
                    <Box>
                        <HStack>
                            <Text>Call us - </Text>
                            <PhoneIcon color='#0088cc' />
                            <Text color='#0088cc'>919307901479</Text>
                        </HStack>
                        <HStack>
                            <Text>Whatsapp us - </Text>
                            <Icon as={FaWhatsapp} color='#0088cc' />
                            <Text color='#0088cc'>9307901458</Text>
                        </HStack>
                        <HStack>
                            <Text>Email us - </Text>
                            <EmailIcon color='#0088cc' />
                            <Text color='#0088cc'>care@spareshub.com</Text>
                        </HStack>
                    </Box>
                    <Link as={RouterLink} to='/cart' >
                        <Box position='relative'>
                            <CartCounter />
                            <Icon as={BsCartFill} w={9} h={9} color='#0088cc' />
                        </Box>
                    </Link>
                </Box>
        </Box>
        <Box w='98%' bg='#f0f0ed' m='auto'>
            <Button colorScheme='#0088cc' variant='ghost'>
                Button
            </Button>
            <Button colorScheme='#0088cc' variant='ghost'>
                Button
            </Button>
            <Button colorScheme='#0088cc' variant='ghost'>
                Button
            </Button>
            <Button colorScheme='#0088cc' variant='ghost'>
                Button
            </Button>
            <Button colorScheme='#0088cc' variant='ghost'>
                Button
            </Button>
        </Box>
        <Box display='flex' m='auto' w='78%' justifyContent='space-between' mt='1rem'>
            <Box>
                <HStack>
                    <img src="data:image/webp;base64,UklGRrQBAABXRUJQVlA4TKgBAAAvIMAHEJ9jkG2k+iM87u0hZmSsDSZtG1vSblPktm2DnGbLfANzAwBEIQQQvLmyJACgEEKAYBFcIIBABAAEBwBAATYbFsXjIC4rggUQh4bGj5UYBQiECBaLgMW3jLCr3m0AsmzbNu1qxNmxru+N84zYtm0711r1/zrYqwgR/Z+ABbH+he3m67T/WZm2u8G/UYqv+qgp/FOZFuNFY4Va9dyS8oxXQLJJ1bz4+YnqtEXnT+smq0OxXrM6uwgExuRbIBAIjMm3QOBl0+4Mfkoc4KfE4cFrSupdTkrJZFYyyWQymZVMMlne8OiawmVgyXaxx8PpUJ2WzdROpHp9f/9YLvdVb2X47DQRkLsz1Ts5PzvbBQjIMKrDYnB3icSAoXowg0AipLB3AvXyHyakFq52FEbGwcgwTIuBm31/zeU/uOqE12aqCFbCyHqv0l1KJo0x5rsk03U697+fxb3/rVUHHo6Hr5+Gt8SA2hL7N0z7mJJ6uN7zteJWB0x3QNcE8KPPz/WBYzmLvdd8qXv/pv1zh5a8aH5Aw2Pq7es9FaZqdFrzL9C2nSseRVEH" alt="logo1" />
                    <Text>LARGEST COLLECTION</Text>
                </HStack>
            </Box>
            <Box>
                <HStack>
                    <img src="data:image/webp;base64,UklGRgYCAABXRUJQVlA4TPkBAAAvFwAIEPejoG0bxvwhjG33MMzIWDNu20ZybCXN/VqySRuyF/sGvhoAAARpL0EMDASwwA4TIAggAie4eAgDteCxIPwQQIAwMSDAABBv5AghgIWBNWgU9f4T3LgABkBjHcbyQEC0bdt0s5Patm3btvFQI7adt3++L/dVHxDR/wmAYMP7ewOM1uys9S/EotHYQv/aTo3IOUlaGhosJHkuUBqVWqdXi4Hi1elWKVqao/iIwzCPHt9tF/eaMcyj4i/VJxG+mPrszLr2l2gfMr0wclIN7FKZMNdqvo0yIH/Vp62bJxTuApusR8faXAV0Kx+0AdRzExjmWJ7DjtyVXod5jMPAPBcnuCyAFY4vch51EXvZabpYpChzWmaP1D0n2iBbIWyT0JZ4dgZrINvF7DJqgs725FP+RbxQpDB+kf+UbMc252c4IzLDmXluA/2cLPRZinIVWXyFk+wHVtmCWd4V6BXccRYtXAX2eNGMA74NmgDT4BsP0HTBPaBRyvIWSyH6VdXP0BJumZUaAaD2hp0o37p/fb3fKkcnb2qhX5W6LGrtMQGm3taiy1QVcl9rJJWqKoWkdg3BxrBt/SDr8WQP1m3hRhF8yEB/INAPyB8whLIyfJPuf1ByeFjyLSNu0j1i7PGKvqkpH68ejVA7KwPKzjQakD67odv1KekBAA==" alt="logo2" />
                    <Text>HIGH QUALITY PARTS WITH WARRANTY</Text>
                </HStack>
            </Box>
            <Box>
                <HStack>
                    <img src="data:image/webp;base64,UklGRnwCAABXRUJQVlA4THACAAAvHQAIEE/EoG0bQeYP4dn+0uMwI2PNsG3byLFKcu9R5LZtg5xGB/0NnG8AQAAAhAAE19387vUSAhAlwLBzJcsFIcCWhh9s4ceNlTEVBrA/xqonzJsDF0GAMAAxDECUPNOrGiMABEmSTVt1v23btm3btm3rGb3up7+EiP5PAL4jr37nG3JzG+Z/ryIJPONeft5nBBLUbdFj9cTx7e3xRPWjLF1B/oR1PEp7UfiM2pMeWkM9oqr6d36ljzYgxiMGaPuQfrZ6q6IuJOm+JxwY0dPKypNGgPCee0m6+NZyXzZA4r587icCZPct69vlBIzUplWbzM0lnZ0lzWbZVptSDcDh0h8wLcm9nYbXtG23pGngTxJwruvhTPzMHL7WOeCQRRFwq3y8FhR4QL5uIUKWZ2XBpQq9TUx4K9QlZOn5VHVwrBpvj4/eanUMdTqd1TgsagBC5+V1PhQGtAjjmm3RCfRpDaDhR/ppAFhTH5yoJcFtCSdP7x7cSXd4viuPMIs7gRs1YnyoCEhzjY250oAifRjU6wYGtQtTWgVaSqG0BVjVFOxrEOLszmRSnPYM/MywO1NIcdjjgC3NwKr2/TnQKixoCyDHbUsl3qR2X+0yxZNqc+d4sKFN6JC1wFuBVR1wpA28JprUAEv6zvXI/dYSNMmU6I1efcUTfKjfcij/1WEw6b/qxadxpuswQnblHBpyajeEsBudGb6IfdWmgTHpltyTBsG7eo3F31yT1oOh8u2tEoLXZMrF/zKrtkIgOBhCtmQtI9BKky5jAaIvZKok8MJPvRRD0as+C/nPpBs5x0cduknif0PmJGkuhH+veH6uwH8=" alt="logo3" />
                    <Text>SSL CERTIFIED TRANSACTION</Text>
                </HStack>
            </Box>
            <Box>
                <HStack>
                    <img src="data:image/webp;base64,UklGRiYCAABXRUJQVlA4TBoCAAAvIoAIECdjkG2k+iM87v0gZmSsGbZtGzlYyXnauyM44NwACAAAECIIBAABKIBCAxSA7whAQYAGCEQDiMa/X0JImxgIUAjEYDEAYPCv0BAaIhDBIigAMAABCIQQAAAItm2bkU61bdu2bTvlipN+859EJ+9n9Qgi+s/AbdtGVm/vs5NHoNG0cPVWiySqvV0tNJGJ3mtHROyCVbBFxLnuNa+1nIfi3i51MbwEXUu3roTnLYZpqCj2fivA6SsArfu2FIfUac6Xu6FZVA2OddyJP6dNYbzJWl7X5SNsxmF6DPnxCklm2hfPUFiJ/aHk3YqySYrPU3Q2pZi42bnckeawaBB3cg70hnaHYlC/jKhrdQ0ddtgL17JPcYMUX+eqLp7Zl2uaHLeVyU5S7JVymvpGaXWdpgW5RaXndwIDt7JwJcvovF+ZtCxXb9KFznqlDp0ueavZmF4lnsaAXYsKj5b1M4XC0w0pur8t66OtEIm1vLOz3a3puEqK5q2dnfV6S6ICBhaDMwwUIuPuxfAc827TZcvhEZgvM/ixGh9CBj90V1ejXSCDq02O18p4D8BGtIGBnnFaPaeJazng++hv+jVOHH1zINfJnDbmYDhaNZ+Wa0zmlHN5SOS2nyzcy7m5ZiBDzZgrD8yVp9fvSlmv35OXZP3qXeBhYF5X/2THg/hzxl5yYOglB7YUhzJ0JO92OdWRlm+9REf6x772H90R" alt="logo4" />
                    <Text>ON - TIME DELIVERY</Text>
                </HStack>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar