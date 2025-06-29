import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useContext(AuthContext);

    if(!isAuthenticated){
       return <Navigate to="/Login"  />
    }

  return <>{children}</>
  
}

export default ProtectedRoute