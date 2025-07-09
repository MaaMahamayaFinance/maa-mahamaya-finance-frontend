import React from 'react';
import ReactECharts from 'echarts-for-react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const cardData = [
  { title: 'Balance', value: 592323, percentage: 2.5, type: 'up' },
  { title: 'Income', value: 149513, percentage: 1.2, type: 'up' },
  { title: 'Savings', value: 79290, percentage: 0.9, type: 'down' },
  { title: 'Expenses', value: 271560, percentage: 1.5, type: 'down' },
];

const transactions = [
  { label: 'Adobe Photoshop', amount: -62 },
  { label: 'Slack', amount: -20 },
  { label: 'Bitinvest', amount: +15.5 },
];

const goals = [
  { label: 'Buy a house', progress: 75 },
  { label: 'Visit to Japan', progress: 40 },
];

const moneyFlowOptions = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Income', 'Expenses'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Income',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      smooth: true,
      areaStyle: {},
      color: '#4ade80',
    },
    {
      name: 'Expenses',
      type: 'line',
      stack: 'Total',
      data: [620, 732, 701, 834, 1090, 1130, 1120],
      smooth: true,
      areaStyle: {},
      color: '#f87171',
    },
  ],
};

const EmployeeDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* Balance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
            <div className="text-gray-600 font-medium">{card.title}</div>
            <div className="text-2xl font-bold text-gray-900">${card.value.toLocaleString()}</div>
            <div className={`flex items-center text-sm mt-2 ${card.type === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {card.type === 'up' ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
              {card.percentage}% {card.type === 'up' ? 'Increase' : 'Decrease'}
            </div>
          </div>
        ))}
      </div>

      {/* Money Flow Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Money Flow</h2>
        <ReactECharts option={moneyFlowOptions} style={{ height: 300 }} />
      </div>

      {/* Transaction + Planning */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Transactions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Transactions</h2>
          <ul className="divide-y divide-gray-200">
            {transactions.map((tx, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span className="text-gray-600">{tx.label}</span>
                <span className={tx.amount >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {tx.amount >= 0 ? '+' : '-'}${Math.abs(tx.amount)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Planning */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Planning</h2>
          {goals.map((goal, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between mb-1 text-gray-700">
                <span>{goal.label}</span>
                <span>{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card UI */}
      <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-gray-700">
          <p className="text-lg font-semibold">Your Balance</p>
          <p className="text-2xl font-bold text-gray-900">$592,323</p>
          <p className="text-sm text-gray-500">Status: Active</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-lg w-72">
          <div className="text-lg font-bold mb-2">SmileyPay</div>
          <div className="text-xl tracking-widest">3417 **** **** 2115</div>
          <div className="mt-4 flex justify-between text-sm">
            <span>USD</span>
            <span>07/27</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
