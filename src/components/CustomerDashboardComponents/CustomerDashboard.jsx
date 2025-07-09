import React from "react";
import { FaBitcoin, FaEthereum, FaCcVisa } from "react-icons/fa";
import { BsCurrencyDollar, BsCurrencyEuro } from "react-icons/bs";

const data = [
  { title: "Bitcoin Balance", percent: 73.7, amount: "$1,312,212.00", color: "text-orange-500", bg: "bg-orange-100" },
  { title: "Ethereum Balance", percent: 22.1, amount: "$152,212.00", color: "text-red-500", bg: "bg-red-100" },
  { title: "USDT Balance", percent: 5.9, amount: "$63,395.00", color: "text-green-500", bg: "bg-green-100" },
];

const wallets = [
  { icon: <BsCurrencyDollar size={22} />, label: "USD", amount: "1.46m", bg: "bg-yellow-100" },
  { icon: <BsCurrencyEuro size={22} />, label: "EUR", amount: "2.12m", bg: "bg-pink-100" },
  { icon: <span>£</span>, label: "GBP", amount: "0.00", bg: "bg-gray-100" },
  { icon: <span>¥</span>, label: "JPY", amount: "0.00", bg: "bg-gray-100" },
];

const CustomerDashboard = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Portfolio Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, i) => (
            <div key={i} className={`rounded-xl p-4 ${item.bg} shadow`}>
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className={`text-2xl font-bold ${item.color}`}>{item.amount}</p>
              <p className="text-sm mt-1 text-gray-600">{item.percent}%</p>
              <button className="text-sm mt-2 text-blue-500 hover:underline">View more</button>
            </div>
          ))}
        </div>

        {/* Card + Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-600">Balance</p>
              <p className="text-3xl font-bold text-gray-800">$1,465,297.00</p>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="font-semibold">AR Shakir</p>
                <p className="text-sm text-gray-500">4902 4390 5230 3300</p>
              </div>
              <FaCcVisa size={36} className="text-blue-600" />
            </div>
            <div className="mt-4 text-sm text-gray-500">Valid Thru: 12/2025</div>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Current Balance</h3>
            <p className="text-2xl font-bold">$158,690.00</p>
            <div className="mt-4 h-32 bg-gradient-to-r from-green-200 to-blue-200 rounded-md shadow-inner flex items-center justify-center text-gray-500 text-sm">
              [ Chart Component Placeholder ]
            </div>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {wallets.map((wallet, idx) => (
            <div key={idx} className={`p-4 rounded-xl shadow ${wallet.bg} flex items-center justify-between`}>
              <div className="text-2xl font-bold">{wallet.amount}</div>
              <div className="flex items-center space-x-2 text-gray-700">
                {wallet.icon}
                <span className="font-medium">{wallet.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
