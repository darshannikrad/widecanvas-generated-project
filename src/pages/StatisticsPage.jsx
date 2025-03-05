import React from 'react';

function StatisticsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
        <h3 className="text-xl font-bold mb-4 dark:text-white">Voting Statistics</h3>
        <p className="mb-2 dark:text-gray-400">Total Votes: <span id="totalVotes">0</span></p>
        <p className="mb-2 dark:text-gray-400">Voting Percentage: <span id="votingPercentage">0%</span></p>
      </div>
    </div>
  );
}

export default StatisticsPage;
