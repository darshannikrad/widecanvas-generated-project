import React from 'react';

function AdminPanel({ isAdminAuthenticated }) {
  if (!isAdminAuthenticated) {
    return <div className="text-red-500">Access Denied: Please log in as an admin.</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Admin Panel</h2>
      {/* Add admin functionalities here */}
      <ul>
        <li>Candidate Registration</li>
        <li>Edit Candidate Information</li>
        <li>Candidate Deletion</li>
        <li>Setting time, date for election</li>
        <li>Grievance or complaints resolution</li>
      </ul>
    </div>
  );
}

export default AdminPanel;
