import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import {
    FaTasks, FaCalendarAlt, FaClipboardCheck, FaTrophy, FaComments, FaFileAlt
} from "react-icons/fa";

const mockAssignedLoans = [
    { id: "LN001", customer: "Ravi Kumar", amount: 500000, status: "Processing" },
    { id: "LN002", customer: "Asha Rani", amount: 750000, status: "Approved" },
];

const mockTasks = [
  { task: "Verify loan documents for LN001", completed: false },
  { task: "Follow up with Asha Rani", completed: true },
];

const mockLeaderboard = [
  { name: "Ankit Sharma", score: 95 },
  { name: "Priya Yadav", score: 89 },
  { name: "Nitin Khare", score: 84 },
];

const mockMeetings = [
  { date: "2025-07-10", time: "10:30 AM", with: "Ravi Kumar" },
  { date: "2025-07-12", time: "3:00 PM", with: "Team Lead" },
];

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState(mockTasks);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const leaderboardChartOptions = {
    title: {
      text: 'Performance Leaderboard',
      left: 'center'
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: mockLeaderboard.map(emp => emp.name)
    },
    yAxis: {
      type: 'value',
      max: 100
    },
    series: [{
      name: 'Score',
      type: 'bar',
      data: mockLeaderboard.map(emp => emp.score),
      itemStyle: { color: '#facc15' }
    }]
  };

  const taskCompletionOptions = {
    title: {
      text: 'Task Completion',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '0%',
      left: 'center'
    },
    series: [
      {
        name: 'Tasks',
        type: 'pie',
        radius: '50%',
        data: [
          { value: tasks.filter(t => t.completed).length, name: 'Completed' },
          { value: tasks.filter(t => !t.completed).length, name: 'Pending' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <div className="p-6 bg-gray-100 w-full min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Employee Dashboard</h1>

      {/* Assigned Loans */}
      <section className="mb-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-indigo-600">
          <FaTasks /> Assigned Loans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">Loan ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockAssignedLoans.map((loan) => (
                <tr key={loan.id} className="border-t">
                  <td className="p-3">{loan.id}</td>
                  <td className="p-3">{loan.customer}</td>
                  <td className="p-3">₹{loan.amount.toLocaleString()}</td>
                  <td className="p-3">{loan.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Document Verification */}
      <section className="mb-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-emerald-600">
          <FaFileAlt /> Document Verification Panel
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Pan card verification pending for LN001</li>
          <li>Aadhar document approved for LN002</li>
        </ul>
      </section>

      {/* Upcoming Meetings */}
      <section className="mb-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
          <FaCalendarAlt /> Upcoming Meetings
        </h2>
        <ul className="text-gray-700 space-y-2">
          {mockMeetings.map((meet, idx) => (
            <li key={idx}>
              <strong>{meet.date}</strong> at <em>{meet.time}</em> with {meet.with}
            </li>
          ))}
        </ul>
      </section>

      {/* Chat UI Placeholder */}
      <section className="mb-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-pink-600">
          <FaComments /> Chat with Clients / Admin
        </h2>
        <div className="bg-gray-100 p-4 rounded h-40 flex items-center justify-center text-gray-500">
          Chat feature coming soon...
        </div>
      </section>

      {/* Leaderboard Bar Chart */}
      <section className="mb-8 bg-white rounded-xl shadow p-6">
        <ReactECharts option={leaderboardChartOptions} style={{ height: '300px' }} />
      </section>

      {/* Task Completion Pie Chart */}
      <section className="mb-8 bg-white rounded-xl shadow p-6">
        <ReactECharts option={taskCompletionOptions} style={{ height: '300px' }} />
      </section>
    </div>
  );
};

export default EmployeeDashboard;
