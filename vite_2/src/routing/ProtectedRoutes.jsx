import React from 'react'
import { useSelector } from 'react-redux';
import {  Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {

    const isAuth = useSelector((state) => state.authSlice.isAuthenticated);


    if(!isAuth){
        return <Navigate to="/login" />
    }

  return children;

  
}

export default ProtectedRoutes