import React from 'react';
import { Navigate } from 'react-router-dom';
import useStore from './useStore';

const ProtectedRoute = ({ children }) => {
  const { user } = useStore(); //update if nedded when state logic is done

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;