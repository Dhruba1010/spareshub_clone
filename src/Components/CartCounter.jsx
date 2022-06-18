import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../Redux/Cart/action';

const CartCounter = () => {
    const cart = useSelector(store => store.cartReducer.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if(cart?.length === 0){
            dispatch(fetchCart());
        }
    },[cart?.length, dispatch ])

  return (
    <Box position='absolute' textColor='white' right='3' top='1'>
        {cart?.length ? cart.length : 0}
    </Box>
  )
}

export default CartCounter