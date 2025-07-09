import { useState } from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line
    } from "recharts";
    import {
    FaUsers, FaBuilding, FaMoneyCheckAlt, FaRupeeSign,
    FaUserCheck, FaExclamationTriangle, FaChartLine, FaHeadset
    } from "react-icons/fa";

    const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const AdminDashboard = () => {
    const [stats, setStats] = useState({
        customers: 1200,
        businesses: 320,
        loansIssued: 890,
        amountDisbursed: 124500000,
        activeUsers: 1040,
        overduePayments: 45,
        monthlyRevenue: 2350000,
        supportTickets: 12
    });

    const monthlyDisbursement = [
        { month: "Jan", amount: 8000000 },
        { month: "Feb", amount: 9500000 },
        { month: "Mar", amount: 7200000 },
        { month: "Apr", amount: 10300000 },
        { month: "May", amount: 8800000 },
        { month: "Jun", amount: 9700000 },
    ];

    const loanTypeDistribution = [
        { name: "Personal", value: 400 },
        { name: "Business", value: 300 },
        { name: "Education", value: 200 },
        { name: "Vehicle", value: 150 },
    ];

    const loanGrowth = [
        { month: "Jan", loans: 100 },
        { month: "Feb", loans: 150 },
        { month: "Mar", loans: 130 },
        { month: "Apr", loans: 170 },
        { month: "May", loans: 190 },
        { month: "Jun", loans: 220 },
    ];

    const revenueExpenses = [
        { month: "Jan", revenue: 2000000, expenses: 800000 },
        { month: "Feb", revenue: 2200000, expenses: 1000000 },
        { month: "Mar", revenue: 2100000, expenses: 950000 },
        { month: "Apr", revenue: 2500000, expenses: 1100000 },
        { month: "May", revenue: 2350000, expenses: 1050000 },
        { month: "Jun", revenue: 2600000, expenses: 1200000 },
    ];

    const recentSignups = [
        { name: "Amit Sharma", role: "Customer", date: "2025-07-05" },
        { name: "Neha Singh", role: "Business", date: "2025-07-04" },
        { name: "Ravi Verma", role: "Intern", date: "2025-07-03" },
        { name: "Priya Das", role: "Employee", date: "2025-07-02" }
    ];

    return (
        <div className="p-6 bg-gray-100 w-full min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard icon={<FaUsers className="text-3xl text-blue-500" />} label="Total Customers" value={stats.customers} />
            <StatCard icon={<FaBuilding className="text-3xl text-green-500" />} label="Total Businesses" value={stats.businesses} />
            <StatCard icon={<FaMoneyCheckAlt className="text-3xl text-purple-500" />} label="Loans Issued" value={stats.loansIssued} />
            <StatCard icon={<FaRupeeSign className="text-3xl text-yellow-500" />} label="Disbursed" value={`₹${(stats.amountDisbursed / 1e7).toFixed(2)} Cr`} />
            <StatCard icon={<FaUserCheck className="text-3xl text-indigo-500" />} label="Active Users" value={stats.activeUsers} />
            <StatCard icon={<FaExclamationTriangle className="text-3xl text-red-500" />} label="Overdue Payments" value={stats.overduePayments} />
            <StatCard icon={<FaChartLine className="text-3xl text-pink-500" />} label="Revenue (This Month)" value={`₹${(stats.monthlyRevenue / 1e5).toFixed(2)}L`} />
            <StatCard icon={<FaHeadset className="text-3xl text-orange-500" />} label="Support Tickets" value={stats.supportTickets} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <ChartCard title="Monthly Loan Disbursement">
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyDisbursement}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(v) => `₹${v / 1e6}M`} />
                <Tooltip formatter={(v) => `₹${v.toLocaleString()}`} />
                <Bar dataKey="amount" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Loan Type Distribution">
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                <Pie data={loanTypeDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {loanTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            </ChartCard>
        </div>

        <div className="bg-white shadow rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Loan Growth Over Time</h2>
            <ResponsiveContainer width="100%" height={250}>
            <LineChart data={loanGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="loans" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
            </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded-xl p-6 mb-10">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Revenue vs Expenses</h2>
            <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueExpenses}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} />
                <Line type="monotone" dataKey="expenses" stroke="#f87171" strokeWidth={2} />
            </LineChart>
            </ResponsiveContainer>
        </div>

        {/* Recent Signups */}
        <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Signups</h2>
            <ul className="divide-y divide-gray-200">
            {recentSignups.map((user, idx) => (
                <li key={idx} className="py-2 flex justify-between items-center">
                <div>
                    <p className="font-medium text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role}</p>
                </div>
                <span className="text-sm text-gray-600">{user.date}</span>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
    };

    // Reusable stat card
    const StatCard = ({ icon, label, value }) => (
    <div className="bg-white shadow rounded-xl p-6">
        <div className="flex items-center gap-4">
        {icon}
        <div>
            <p className="text-gray-500">{label}</p>
            <p className="text-xl font-semibold">{value}</p>
        </div>
        </div>
    </div>
    );

    // Reusable chart wrapper
    const ChartCard = ({ title, children }) => (
    <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">{title}</h2>
        {children}
    </div>
);

export default AdminDashboard;
