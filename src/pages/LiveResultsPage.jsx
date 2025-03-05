import React from 'react';

function LiveResultsPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Live Results</h2>
      <canvas id="resultsChart"></canvas>
    </div>
  );
}

export default LiveResultsPage;
