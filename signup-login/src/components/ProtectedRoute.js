// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const ProtectedRoute = ({ component: Component, ...props }) => {
  let { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Component {...props} />;
};

export default ProtectedRoute;
