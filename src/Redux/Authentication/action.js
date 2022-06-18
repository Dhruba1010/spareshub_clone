
import * as types from './actionTypes';
import Axios from 'axios';



export const signInRequest = () => {
    return {
    type: types.SIGNIN_REQUEST
    }
}

export const signInSuccess = (payload) => {
    return {
        type: types.SIGNIN_SUCCESS,
        payload
    }
}

export const signInFailure = (payload) => {
    return {
        type: types.SIGNIN_FAILURE,
        payload
    }
}



export const signUpFunc = (payload) => (dispatch) => {
    dispatch(signInRequest());
    Axios.post('/api/login', payload, {baseURL: 'https://reqres.in'})
    .then(r => {
        console.log(r)
        dispatch(signInSuccess(r.data))
    })
    .catch(e => {
        console.log(e)
        dispatch(signInFailure(e.data));
    })
}