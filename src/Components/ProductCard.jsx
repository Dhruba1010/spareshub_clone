import React from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';




const ProductCard = ({name, image, rating, price}) => {
  return (
    <Center >
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        cursor='pointer'>
        <Box>
          <Image
            rounded={'lg'}
            // height={230}
            width={'fit-content'}
            objectFit={'contain'}
            src={image}
          />
        </Box>
        <Stack pt={3} align={'center'}>
            <Box mb='3rem'>
                <Heading fontSize={'14px'} fontFamily={'body'} fontWeight={800} color='#777777'>
                    {name}
                </Heading>
            </Box>
            <Box>
                {Rating(rating)}
            </Box>
            <Stack direction={'row'} align={'center'}>
                <Text fontWeight={800} fontSize={'xl'}>
                ₹{price}.00
                </Text>
            </Stack>
            <Stack>
                <Button leftIcon={<FaShoppingCart />}  variant='outline'>
                    Add to Cart
                </Button>
            </Stack>
        </Stack>
      </Box>
    </Center>
  )
}



function Rating({ rating }) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box> */}
      </Box>
    );
}

export default ProductCard