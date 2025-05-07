import React from 'react';

const AdminHeader = () => {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin-login';
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
      <h2>JunkCycle Waitlist Admin Dashboard</h2>
      <button
        onClick={handleLogout}
        style={{
          padding: '8px 16px',
          background: '#dc2626',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminHeader;