import React, { useState } from 'react';

function ComplaintPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, including the selected file
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      alert('Complaint submitted with file: ' + selectedFile.name);
    } else {
      alert('Complaint submitted without a file.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">File a Complaint</h2>
      <form id="complaintForm" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 dark:text-white">Subject</label>
          <input type="text" className="w-full p-2 border rounded text-black dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
        </div>
        <div>
          <label className="block mb-2 dark:text-white">Description</label>
          <textarea className="w-full p-2 border rounded text-black dark:bg-gray-700 dark:border-gray-600 dark:text-white" rows="4" required></textarea>
        </div>
        <div>
          <label className="block mb-2 dark:text-white">Attachment</label>
          <input
            type="file"
            className="w-full text-black dark:text-white"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <p className="mt-2 dark:text-white">
              Selected File: {selectedFile.name}
            </p>
          )}
        </div>
        <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default ComplaintPage;
