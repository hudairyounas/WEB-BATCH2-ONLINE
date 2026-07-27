import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({children}) => {

    const isAuth = useSelector((state) => state.authSlice.isAuthenticated);

    if(isAuth){
        return <Navigate to="/" />
    }

  return children;

  
}

export default PublicRoutes