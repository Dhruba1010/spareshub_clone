
import Axios from 'axios';
import * as types from './actionTypes';


export const addProductCartRequest = () => {
    return {
        type: types.ADD_PRODUCT_CART_REQUEST
    }
}

export const addProductCartSuccess = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_SUCCESS,
        payload
    }
}

export const addProductCartFailure  = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_FAILURE,
        payload
    }
}


export const addProductToCart = (product) => (dispatch) => {
    dispatch(addProductCartRequest());
    Axios.post('/cart', product)
    .then(r => {
        dispatch(addProductCartSuccess(r.data));
    })
    .catch(e => {
        dispatch(addProductCartFailure(e.data));
    })
}


export const fetchCartRequest = () => {
    return {
        type: types.FETCH_CART_REQUEST
    }
}

export const fetchCartSuccess = (payload) => {
    return {
        type: types.FETCH_CART_SUCCESS,
        payload
    }
}

export const fetchCartFailure  = (payload) => {
    return {
        type: types.FETCH_CART_FAILURE,
        payload
    }
}


export const fetchCart = (payload) => (dispatch) => {
    dispatch(fetchCartRequest());
    Axios.get('/cart')
    .then(r => {
        dispatch(fetchCartSuccess(r.data));
    })
    .catch(e => {
        dispatch(fetchCartFailure(e.data));
    })
}


export const removeProductCartRequest = () => {
    return {
        type: types.REMOVE_PRODUCT_CART_REQUEST
    }
}

export const removeProductCartSuccess = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_SUCCESS,
        payload
    }
}

export const removeProductCartFailure  = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_FAILURE,
        payload
    }
}

export const removeProductFromCart = (id) => (dispatch) => {
    dispatch(removeProductCartRequest());
    Axios.delete(`/cart/${id}`)
    .then(r => {
        dispatch(removeProductCartSuccess(r.data));
    })
    .then(() => {
        dispatch(fetchCart());
    })
    .catch(e => {
        dispatch(removeProductCartFailure(e.data));
    })
}