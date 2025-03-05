import React, { useState } from 'react';

function VotingPage({ isUserAuthenticated }) {
  const [aadhaarVerified, setAadhaarVerified] = useState(false);

  const verifyAadhaar = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert('Aadhaar verified successfully!');
      setAadhaarVerified(true);
    }, 1000);
  };

  const castVote = () => {
    if (aadhaarVerified) {
      const confirmed = confirm('Confirm your vote?');
      if (confirmed) {
        alert('Vote recorded successfully!');
        generateReceipt();
      }
    } else {
      alert('Please verify your Aadhaar first.');
    }
  };

  const generateReceipt = () => {
    const receipt = document.createElement('div');
    receipt.className = 'receipt fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl';
    receipt.innerHTML = `
      <h3 class="text-xl font-bold mb-4">Vote Confirmation Receipt</h3>
      <p>Vote ID: ${Math.random().toString(36).substr(2, 9)}</p>
      <p>Date: ${new Date().toLocaleDateString()}</p>
      <p>Time: ${new Date().toLocaleTimeString()}</p>
      <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded" onclick="this.parentElement.remove()">Close</button>
    `;
    document.body.appendChild(receipt);
  };

  return (
    <div>
      <h2>Voting Information</h2>
      <p>Welcome to the voting section. Here, you can cast your vote for the candidate of your choice. Please ensure you have verified your Aadhaar before proceeding.</p>

      {!aadhaarVerified ? (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mb-8 dark:bg-gray-800">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Aadhaar Authentication</h2>
          <form id="aadharForm" className="space-y-4" onSubmit={verifyAadhaar}>
            <div>
              <label className="block mb-2 dark:text-white">Aadhaar Number</label>
              <input type="text" className="w-full p-2 border rounded text-black dark:bg-gray-700 dark:border-gray-600 dark:text-white" maxLength="12" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Verify Aadhaar
            </button>
          </form>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Candidate Cards */}
          <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" className="w-full h-48 object-cover rounded mb-4" alt="Candidate" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">John Doe</h3>
            <p className="text-gray-600 mb-4 dark:text-gray-400">Party A</p>
            <button className="vote-btn w-full bg-green-600 text-white py-2 rounded hover:bg-green-700" onClick={castVote}>
              Vote
            </button>
          </div>
          {/* Add more candidate cards */}
        </div>
      )}
    </div>
  );
}

export default VotingPage;
