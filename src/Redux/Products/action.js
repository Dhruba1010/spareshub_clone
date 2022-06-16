
import  Axios  from 'axios';
import * as types from './actionTypes';


export const getProductRequest = () => {
    return {
        type: types.GET_PRODUCT_REQUEST
    }
}

export const getProductSuccess = (payload) => {
    return {
        type: types.GET_PRODUCT_SUCCESS,
        payload
    }
}

export const getProductFailure = (payload) => {
    return {
        type: types.GET_PRODUCT_FAILURE,
        payload
    }
}


export const getProduct = (payload) => (dispatch) => {
    dispatch(getProductRequest());
    Axios.get('/products')
    .then(r => {
        dispatch(getProductSuccess(r.data));
        console.log(r.data);
    })
    .catch(e => {
        dispatch(getProductFailure(e.data));
    })
}



export const getSingleProductRequest = () => {
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST
    }
}

export const getSingleProductSuccess = (payload) => {
    return {
        type : types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

export const getSingleProductFailure = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}

export const getSingleProduct = ({id}) => (dispatch) => {
    dispatch(getSingleProductRequest());
    Axios.get(`/products/${id}`)
    .then(r => {
        dispatch(getSingleProductSuccess(r.data))
    })
    .catch(e => {
        dispatch(getSingleProductFailure(e.data))
    })
}