import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Welcome to E-Voting Platform</h2>
      <p>Please <Link to="/user-login" className="text-blue-500">login</Link> to cast your vote.</p>
      <p>Admins can <Link to="/admin-login" className="text-blue-500">login here</Link>.</p>
    </div>
  );
}

export default HomePage;
