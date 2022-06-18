import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const CartItems = ({id, image, name, price, removePro}) => {
  return (
    <Box mb='1rem' borderBottom='1px solid #777777' mt='0.5rem'>
        <Box display='flex' justifyContent='space-between' m='0 1rem'>
            <img width='170px' src={image} alt="lg" />
            <Box display='flex' alignItems='center' gap='1.5rem' ml='1rem' w='75%'>
                <Text color='#0088cc' fontWeight='400'>{name}</Text>
                <Box w='45%' display='flex' justifyContent='space-between'>
                    <Text>₹{price}</Text>
                    <Text >1</Text>
                    <Text >₹{price}</Text>
                </Box>
            </Box>
        </Box>
        <Box display='flex' justifyContent='flex-end' mr='2rem' mt='-2rem' mb='1rem'><Button varient='outline' leftIcon={<DeleteIcon />} onClick={() => removePro(id)}>Remove</Button></Box>
    </Box>
)
}

export default CartItems