import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ProductDetails = ({details}) => {
  return (
    <Box>
        <Text>{details}</Text>
    </Box>
  )
}

export default ProductDetails