
import * as types from './actionTypes';

const initState = {
    isLoading: false,
    auth:false,
    error:'',
    token: ''
}

export const authReducer = (state=initState, action) => {
    switch (action.type) {
        case types.SIGNIN_REQUEST:
            return {
                ...state,
                isLoading:true,
            }

        case types.SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading:false,
                auth:true,
                token: action.payload
            }

        case types.SIGNIN_FAILURE:
            return {
                ...state,
                auth:false,
                token: '',
                error: action.payload
            }

        case types.SIGNOUT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                auth:false,
                token: ''
            }

        default:
            return state;
    }
}