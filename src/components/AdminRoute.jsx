import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  const isValid = token && token.length > 20; // basic validation check
  return isValid ? children : <Navigate to="/admin-login" replace />;
};

export default AdminRoute;