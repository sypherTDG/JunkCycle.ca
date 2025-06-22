import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import AdminHeader from '../components/AdminHeader';
import DataTable from '../components/DataTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminDashboard = () => {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [provinceFilter, setProvinceFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      window.location.href = '/admin-login';
      return;
    }

    // Fetch waitlist entries
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/api/waitlist`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(data => setEntries(data))
      .catch(err => console.error('Fetch failed:', err));

    let warningTimeout, logoutTimeout;

    const resetTimer = () => {
      clearTimeout(warningTimeout);
      clearTimeout(logoutTimeout);

      // Warn at 9 minutes
      warningTimeout = setTimeout(() => {
        toast.info(
          <div>
            You will be logged out in 2 minutes due to inactivity.
            <div style={{ marginTop: '8px' }}>
              <button
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#047857',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  toast.dismiss();
                  resetTimer();
                }}
              >
                Stay Logged In
              </button>
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: false,
            closeOnClick: false,
            draggable: false
          }
        );
      }, 8 * 60 * 1000); // 9 minutes

      // Auto logout at 10 minutes
      logoutTimeout = setTimeout(() => {
        toast.warn("Session expired. Redirecting to login...", {
          position: "top-center",
          autoClose: 3000,
          onClose: () => {
            localStorage.removeItem('adminToken');
            window.location.href = '/admin-login';
          }
        });
      }, 10 * 60 * 1000); // 10 minutes
    };

    // Set initial timer and add listeners
    resetTimer();
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    // Cleanup
    return () => {
      clearTimeout(warningTimeout);
      clearTimeout(logoutTimeout);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, []);

  const headers = [
    { label: "#", key: "index" }, // New index column
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Role", key: "role" },
    { label: "Province", key: "province" },
    { label: "City", key: "city" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Date Joined", key: "createdAt" }
  ];

  const filteredEntries = entries.filter(entry => {
    const fullName = `${entry.firstname} ${entry.lastname}`.toLowerCase();
    const email = entry.email.toLowerCase();
    const matchesSearch = fullName.includes(searchTerm.toLowerCase()) || email.includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter ? entry.role === roleFilter : true;
    const matchesProvince = provinceFilter ? entry.province === provinceFilter : true;
    return matchesSearch && matchesRole && matchesProvince;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEntries = filteredEntries.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={{ padding: "2rem" }}>
      <AdminHeader />
      <CSVLink data={entries} headers={headers} filename="junkcycle-waitlist.csv">
        <button>Download CSV</button>
      </CSVLink>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '6px', width: '200px' }}
        />
        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} style={{ padding: '6px' }}>
          <option value="">All Roles</option>
          <option value="Customer">Customer</option>
          <option value="Hauler">Hauler</option>
        </select>
        <select value={provinceFilter} onChange={(e) => setProvinceFilter(e.target.value)} style={{ padding: '6px' }}>
          <option value="">All Provinces</option>
          <option value="Alberta">Alberta</option>
          <option value="British Columbia">British Columbia</option>
          <option value="Manitoba">Manitoba</option>
          <option value="New Brunswick">New Brunswick</option>
          <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
          <option value="Nova Scotia">Nova Scotia</option>
          <option value="Ontario">Ontario</option>
          <option value="Prince Edward Island">Prince Edward Island</option>
          <option value="Quebec">Quebec</option>
          <option value="Saskatchewan">Saskatchewan</option>
          <option value="Northwest Territories">Northwest Territories</option>
          <option value="Nunavut">Nunavut</option>
          <option value="Yukon">Yukon</option>
        </select>
      </div>
      <DataTable entries={paginatedEntries} headers={headers} startIndex={startIndex} />
      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{ marginRight: '8px' }}
        >
          Previous
        </button>
        <span>Page {currentPage} of {Math.ceil(filteredEntries.length / itemsPerPage)}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={startIndex + itemsPerPage >= filteredEntries.length}
          style={{ marginLeft: '8px' }}
        >
          Next
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;