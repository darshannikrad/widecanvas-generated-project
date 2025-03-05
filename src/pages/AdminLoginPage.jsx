import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLoginPage({ setIsAdminAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual authentication logic
    if (username === 'admin' && password === 'password') {
      setIsAdminAuthenticated(true);
      navigate('/admin-panel');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Admin Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 dark:text-white">Username</label>
          <input
            type="text"
            className="w-full p-2 border rounded text-black dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-2 dark:text-white">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded text-black dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLoginPage;
