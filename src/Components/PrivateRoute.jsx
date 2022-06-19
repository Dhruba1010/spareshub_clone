import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {

    const authStatus = useSelector(store => store.authReducer.auth);
    const location = useLocation();

    if(authStatus){
        return children;
    }
    return <Navigate to='/login' state={location} replace={true} />
}

export default PrivateRoute