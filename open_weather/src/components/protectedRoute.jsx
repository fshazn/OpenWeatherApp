import React from 'react'
import { Navigate } from 'react-router-dom'

const protectedRoute = ({children}) => {
    const User = localStorage.getItem("User")
    if(!User){
        return <Navigate to = "/" replace/>
    }
  return children;
}

export default protectedRoute
