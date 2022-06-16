
import * as types from './actionTypes';

const initState = {
    isLoading: false,
    error: '',
    data: [],
    curProduct:[]
}

export const productReducer = (state=initState, action) => {
    switch(action.type) {
        case types.GET_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }

        case types.GET_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload,
            }

        case types.GET_SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case types.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                curProduct: action.payload,
            }

        case types.GET_SINGLE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state;
    }
}