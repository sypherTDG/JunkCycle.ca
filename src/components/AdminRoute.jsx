import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');

  let isValid = false;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;
      isValid = decoded.exp && decoded.exp > now;
    } catch {
      isValid = false;
    }
  }

  return isValid ? children : <Navigate to="/admin-login" replace />;
};

export default AdminRoute;