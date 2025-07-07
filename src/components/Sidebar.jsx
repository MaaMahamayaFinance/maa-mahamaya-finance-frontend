import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import EmployeeProfile from './EmployeeProfile';
import CustomerProfile from './CustomerProfile';
import BusinessProfile from './BusinessProfile';


import {
  FaTachometerAlt,
  FaUniversity,
  FaCreditCard,
  FaHandHoldingUsd,
  FaChartPie,
  FaUserCog,
  FaExchangeAlt,
  FaUsers,
  FaChartBar,
  FaCog,
  FaTasks,
  FaChartLine,
  FaHome,
  FaUser,
  FaSignOutAlt,
  FaCogs,
  FaDownload,
} from 'react-icons/fa';

function Sidebar({ role, activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const customerItems = [
    { id: 'overview', label: 'Overview', icon: <FaTachometerAlt className="mr-3" /> },
    { id: 'accounts', label: 'Accounts', icon: <FaUniversity className="mr-3" /> },
    { id: 'payments', label: 'Payments', icon: <FaCreditCard className="mr-3" /> },
    { id: 'loans', label: 'Loans', icon: <FaHandHoldingUsd className="mr-3" /> },
    { id: 'investments', label: 'Investments', icon: <FaChartPie className="mr-3" /> },
    { id: 'profile', label: 'Profile', icon: <FaUserCog className="mr-3" /> },
  ];

  const businessItems = [
    { id: 'overview', label: 'Dashboard', icon: <FaTachometerAlt className="mr-3" /> },
    { id: 'accounts', label: 'Accounts', icon: <FaUniversity className="mr-3" /> },
    { id: 'transactions', label: 'Transactions', icon: <FaExchangeAlt className="mr-3" /> },
    { id: 'payroll', label: 'Payroll', icon: <FaUsers className="mr-3" /> },
    { id: 'reports', label: 'Reports', icon: <FaChartBar className="mr-3" /> },
    { id: 'loans', label: 'Loan Status', icon: <FaHandHoldingUsd className="mr-3" /> },
    { id: 'settings', label: 'Settings', icon: <FaCog className="mr-3" /> },
    { id: 'profile', label: 'Profile', icon: <FaUserCog className="mr-3" /> },
  ];

  const employeeItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt className="mr-3" /> },
    { id: 'tasks', label: 'Tasks', icon: <FaTasks className="mr-3" /> },
    { id: 'clients', label: 'Clients', icon: <FaUsers className="mr-3" /> },
    { id: 'performance', label: 'Performance', icon: <FaChartLine className="mr-3" /> },
    { id: 'performance', label: 'View Offer Letter', icon: <FaDownload className="mr-3" /> },
    { id: 'profile', label: 'Profile', icon: <FaUser className="mr-3" /> },
  ];

  const adminItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt className="mr-3" /> },
    { id: 'employee-details', label: 'Employee Details', icon: <FaCogs className="mr-3" /> },
    { id: 'business-details', label: 'Business Details', icon: <FaCogs className="mr-3" /> },
    { id: 'users', label: 'User Management', icon: <FaUsers className="mr-3" /> },
    { id: 'reports', label: 'System Reports', icon: <FaChartBar className="mr-3" /> },
    { id: 'settings', label: 'System Settings', icon: <FaCog className="mr-3" /> },
  ];

  const goHome = () => navigate('/');

  let items = [];
  switch (role) {
    case 'customer':
      items = customerItems;
      break;
    case 'business':
      items = businessItems;
      break;
    case 'employee':
      items = employeeItems;
      break;
    case 'admin':
      items = adminItems;
      break;
    default:
      items = [];
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center bg-white shadow p-4 z-50 fixed top-0 left-0 right-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className="ml-3 font-semibold text-gray-900 capitalize">{role} Account</div>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
        )}
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg md:w-64 h-screen 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:block fixed md:static inset-y-0 left-0 z-50 
          transform transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 border-b hidden md:flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-2">
            <FaUser className="text-white text-2xl" />
          </div>
          <div className="text-center mb-4">
            <p className="font-semibold text-gray-900 capitalize">{user?.name || role} Account</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>

        <nav className="mt-6 px-2 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-180px)]">
          <div
            className="sidebar-item px-6 py-3 cursor-pointer flex items-center -mb-2"
            onClick={goHome}
          >
            <FaHome className="mr-3" /> Home
          </div>

          {items.map((item) => (
            <div
              key={item.id}
              className={`sidebar-item px-6 py-2 cursor-pointer flex items-center ${
                activeSection === item.id ? 'bg-blue-100 font-semibold rounded' : ''
              }`}
              onClick={() => {
                setActiveSection(item.id);
                if (isOpen) setIsOpen(false);

                if (item.id === 'employee-details') {
                  navigate('/admin-dashboard/employee-details');
                }
                if (item.id === 'business-details') {
                  navigate('/admin-dashboard/business-details');
                }
              }}
            >
              {item.icon}
              {item.label}
            </div>
          ))}

          <div className="absolute bottom-6 left-0 w-full px-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow transition duration-200"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>

        </nav>
      </aside>

      {/* Profile Section */}
      {role === 'employee' && activeSection === 'profile' && (
        <div className="p-6 mt-4 bg-white rounded-md shadow-md border border-gray-200 max-w-md mx-auto">
          <EmployeeProfile />
        </div>
      )}
      {role === 'customer' && activeSection === 'profile' && (
        <div className="p-6 mt-4 bg-white rounded-md shadow-md border border-gray-200 max-w-md mx-auto">
          <CustomerProfile />
        </div>
      )}
      {role === 'business' && activeSection === 'profile' && (
        <div className="p-6 mt-4 bg-white rounded-md shadow-md border border-gray-200 max-w-md mx-auto">
          <BusinessProfile />
        </div>
      )}
    </>
  );
}

export default Sidebar;
