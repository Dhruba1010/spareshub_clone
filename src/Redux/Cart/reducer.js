
import * as types from './actionTypes';

const initState = {
    isLoading: false,
    error:'',
    cart: []
}

export const cartReducer = (state=initState, action) => {
    switch(action.type) {
        case types.ADD_PRODUCT_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.ADD_PRODUCT_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: [...state.data, action.payload]
            }

        case types.ADD_PRODUCT_CART_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case types.FETCH_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.FETCH_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: [...action.payload],
            }

        case types.FETCH_CART_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}