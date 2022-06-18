import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../Redux/Products/action';
import { addProductToCart, fetchCart } from '../Redux/Cart/action';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import ProductDetails from '../Components/ProductDetails';
import ProductReviews from '../Components/ProductReviews';

const Product = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const curProduct = useSelector(store => store.productReducer.curProduct)
  const [isButton, setIsButton] = useState(true);

  useEffect(() => {
    if(id){
      dispatch(getSingleProduct(id))
    }
  },[dispatch,id])

  const addToCartHandler = () => {
    curProduct && dispatch(addProductToCart(curProduct))
    dispatch(fetchCart())
  }

  const handleClick = (v) => {
    setIsButton(v);
  }

  return (
    <Container maxW={'7xl'} >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        mr='12rem'
        mt='-4rem'>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={curProduct.image}
            fit={'contain'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {curProduct.name}
            </Heading>
            <Box mt='1rem'>
                {Rating(curProduct?.rating)}
            </Box>
            <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}
                mt='1rem'>
                {curProduct.details}
            </Text>
            <Box display='flex' mt='1.5rem' justifyContent='space-between' w='90%'>
              <Text
                color={useColorModeValue('#0088cc')}
                fontWeight={600}
                fontSize={'36px'}
                >
                ₹{curProduct.price}.00
              </Text>
              <Box>
                <Text>Availability: {curProduct.availability}</Text>
                <Text>SKU#: {curProduct.SKU}</Text>
              </Box>
            </Box>
          </Box>
          <hr />
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('#0088cc')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={addToCartHandler}
          >
            Add to cart
          </Button>
        </Stack>
      </SimpleGrid>
      <Box>
        <Box display='flex' mb='-0.5rem' ml='0.5rem' >
          <Button onClick={() => handleClick(true)}>
            Details
          </Button>
          <Button onClick={() => handleClick(false)}>
            Reviews
          </Button>
        </Box>
        <Box p='2.5rem 0 2rem 2rem' mr='15rem' border='1px solid #ffebcd'>
          {isButton ? (<ProductDetails details={curProduct.details}/>) : 
          (<ProductReviews name={curProduct.name}/>)}
        </Box>
      </Box>
      <Box border='1px solid #ffebcd' mr='15rem' mt='1rem'>
        <Text p='0.5rem 0.25rem' boxShadow='rgba(17, 17, 26, 0.1) 0px 1px 0px'>Brand - {curProduct.brand}</Text>
        <Text p='0.5rem 0.25rem' boxShadow='rgba(17, 17, 26, 0.1) 0px 1px 0px'>Category - {curProduct.category}</Text>
        <Text p='0.5rem 0.25rem' boxShadow='rgba(17, 17, 26, 0.1) 0px 1px 0px'>Sub Category - {curProduct.sub_category}</Text>
        <Text p='0.5rem 0.25rem' boxShadow='rgba(17, 17, 26, 0.1) 0px 1px 0px'>Make - {curProduct.make}</Text>
        <Text p='0.5rem 0.25rem' boxShadow='rgba(17, 17, 26, 0.1) 0px 1px 0px'>Model - {curProduct.model}</Text>
        <Text p='0.5rem 0.25rem' boxShadow='rgba(17, 17, 26, 0.1) 0px 1px 0px'>Part no. - {curProduct.part_no}</Text>
        <Text p='0.5rem 0.25rem' boxShadow='rgba(17, 17, 26, 0.1) 0px 1px 0px'>Location - {curProduct.location}</Text>
      </Box>
    </Container>
  )
}


function Rating(rating) {
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
    </Box>
  );
}


export default Product