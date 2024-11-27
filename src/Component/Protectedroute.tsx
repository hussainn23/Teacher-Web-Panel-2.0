import React from 'react'
import { Navigate } from "react-router-dom";
interface props{
    isLoggedIn:boolean,
    children:JSX.Element
}
const Protectedroute:React.FC<props> = ({isLoggedIn,children}) => {

  return   isLoggedIn ? children: <Navigate to='/' replace />
  
}

export default Protectedroute