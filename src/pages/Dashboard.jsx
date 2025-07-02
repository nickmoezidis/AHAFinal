import React from 'react';

function Dashboard() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <p className="text-red-600">Access denied. Please log in to view your dashboard.</p>;
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-purple-700">Parent Dashboard</h2>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold mb-2">Student Overview</h3>
        <p><strong>Name:</strong> Jordan M.</p>
        <p><strong>Grade:</strong> 2</p>
        <p><strong>Subjects Active:</strong> Math, ELA, Science</p>
      </div>

      <div className="bg-purple-50 rounded-xl p-6">
        <h3 className="font-semibold mb-2">Weekly Progress</h3>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li>📘 Math: 85% complete</li>
          <li>📗 ELA: 90% complete</li>
          <li>🔬 Science: 72% complete</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Export Report</button>
        <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded hover:bg-purple-100">Edit Profile</button>
      </div>

      <p className="text-sm text-gray-600 mt-4">Next progress report available July 5th.</p>
    </div>
  );
}

export default Dashboard;
