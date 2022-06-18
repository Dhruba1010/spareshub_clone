import React from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text
} from '@chakra-ui/react';

const ProductReviews = ({name}) => {
  return (
    <Stack w={'full'} maxW={'md'}>
        <Box mb='1rem'>
            <Text color='#0088cc' fontWeight='400' fontSize='18px'>YOU'RE REVIEWING:</Text>
            <Text color='#0088cc' fontWeight='600' fontSize='18px'>{name}</Text>
        </Box>
        <FormControl id="nickName" isRequired>
            <FormLabel>Nickname</FormLabel>
            <Input type="text" />
        </FormControl>
        <FormControl id="summary" isRequired>
            <FormLabel>Summary</FormLabel>
            <Input type="text" />
        </FormControl>
        <FormControl id="review" isRequired>
            <FormLabel>Review</FormLabel>
            <Input type="text" h='5rem'/>
        </FormControl>
        <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'}>
                Submit Review
            </Button>
        </Stack>
    </Stack>
  )
}

export default ProductReviews