import React from 'react';
import { Navigate } from 'react-router-dom';
//import useStore from './useStore';

const ProtectedRoute = ({ children }) => {
  // const { user } = useStore(); //update if needed when state logic is done
  const user = true;

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
