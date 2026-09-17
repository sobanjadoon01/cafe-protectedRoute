import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

const protectedRoute = () => {
  let isAuhtnticated = false;
if(isAuhtnticated){
  return <Navigate to={"/login"}/>
}
return Children;

}

export default protectedRoute