import React from 'react'
import { Navigate } from 'react-router-dom'

const CheckToken = ({ children }) => {
 
        function hasJWT() {
            let flag = false;
            localStorage.getItem("token") ? flag=true : flag=false
            return flag
        }
      
        return ( hasJWT() ? children : <Navigate to='/' /> );
}

export default CheckToken