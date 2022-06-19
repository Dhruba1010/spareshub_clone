import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../Components/CartItems'
import { removeProductFromCart } from '../Redux/Cart/action'


const Cart = () => {
    const cartPro = useSelector(store => store.cartReducer.cart);
    const dispatch = useDispatch();
    

    const removePro =(id) => {
        dispatch(removeProductFromCart(id))
    }

  return (
    <Box w='90%' display='flex' justifyContent='space-between' m='auto'>
        
        <Box w='60%' >
            <Text fontSize='20px' color='#0088cc'>Shopping Cart</Text>
            <Box display='flex' justifyContent='space-between' p='1rem' fontWeight='600' color='#777777' borderBottom='1px solid #777777'>
                <Box>
                    <Text>Item</Text>
                </Box>
                <Box display='flex' w='30%' justifyContent='space-between'>
                    <Text>Price</Text>
                    <Text>Qty</Text>
                    <Text>Subtotal</Text>
                </Box>
            </Box>
            {cartPro?.length && cartPro?.map(cp => {
                return <CartItems key={cp.id} {...cp} removePro={removePro} />
            })}
            
        </Box>
        <Box w='35%' border='1px solid #777777' borderRadius='5px'>
            <Text p='0 2rem' fontSize='24px' color='#777777' m='12px 0' pb='1rem' borderBottom='1px solid #777777' >Summary</Text>
            <Box display='flex' justifyContent='space-between' p='0 2rem' pb='1rem' borderBottom='1px solid #777777' mb='0.5rem'>
                <Text color='#313131' fontWeight='600'>Estimate Shipping and Tax</Text>
                <Text color='#313131' fontWeight='600'>0</Text>
            </Box>
            <Box display='flex' justifyContent='space-between' p='0 2rem' borderBottom='1px solid #777777' pb='5px'>
                <Text fontSize='14px' fontWeight='400' p='6px 0'>Subtotal</Text>
                <Text fontSize='14px' fontWeight='400'>₹1466</Text>
            </Box>
            <Box mb='1rem' mt='0.5rem' display='flex' justifyContent='space-between' p='0 2rem'>
                <Text fontSize='20px' fontWeight='600' color='#777777'>Order Total</Text>
                <Text fontSize='20px' fontWeight='600'>₹1466</Text>
            </Box>
            <Box w='90%' m='auto' mb='0.75rem'>
                <Button
                    rounded={'lg'}
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
                    // onClick={addToCartHandler}
                >
                    Checkout
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Cart