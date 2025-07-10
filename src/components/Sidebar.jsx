// Sidebar.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext.jsx';
import {
  FaTachometerAlt, FaUniversity, FaCreditCard, FaHandHoldingUsd, FaChartPie, FaUserCog,
  FaExchangeAlt, FaUsers, FaChartBar, FaCog, FaTasks, FaChartLine, FaHome, FaUser,
  FaSignOutAlt, FaCogs, FaDownload,
} from 'react-icons/fa';
import { PiCertificate } from 'react-icons/pi';

const Sidebar = ({ role, activeSection, setActiveSection, onClose }) => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const goHome = () => navigate('/');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const sidebarVariants = {
    hidden: { x: -80, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const itemVariants = {
    hover: { scale: 1.05, x: 5 },
  };

  const customerItems = [
    { id: 'customer-dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { id: 'accounts', label: 'Accounts', icon: <FaUniversity /> },
    { id: 'payments', label: 'Payments', icon: <FaCreditCard /> },
    { id: 'loans', label: 'Loans', icon: <FaHandHoldingUsd /> },
    { id: 'investments', label: 'Investments', icon: <FaChartPie /> },
    { id: 'profile', label: 'Profile', icon: <FaUserCog /> },
  ];

  const businessItems = [
    { id: 'business-dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    // { id: 'accounts', label: 'Accounts', icon: <FaUniversity /> },
    { id: 'transactions', label: 'Transactions', icon: <FaExchangeAlt /> },
    { id: 'view-authorization-certificate', label: 'View Certificate', icon: <PiCertificate /> },
    { id: 'reports', label: 'Reports', icon: <FaChartBar /> },
    { id: 'loans', label: 'Loan Status', icon: <FaHandHoldingUsd /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> },
    { id: 'businessprofile', label: 'Profile', icon: <FaUserCog /> },
  ];

  const employeeItems = [
    { id: 'employee-dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { id: 'tasks', label: 'Tasks', icon: <FaTasks /> },
    { id: 'clients', label: 'Clients', icon: <FaUsers /> },
    { id: 'performance', label: 'Performance', icon: <FaChartLine /> },
    { id: 'view-offer-letter', label: 'View Offer Letter', icon: <FaDownload /> },
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
  ];

  const internItems = [
    { id: 'intern-dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { id: 'tasks', label: 'Tasks', icon: <FaTasks /> },
    { id: 'clients', label: 'Clients', icon: <FaUsers /> },
    { id: 'performance', label: 'Performance', icon: <FaChartLine /> },
    { id: 'view-intern-offer-letter', label: 'View Offer Letter', icon: <FaDownload /> },
    { id: 'view-intern-certificate', label: 'View Certificate', icon: <FaUser /> },
    { id: 'internprofile', label: 'Profile', icon: <FaUser /> }
  ];

  const adminItems = [
    { id: 'admin-dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { id: 'employee-details', label: 'Employee Details', icon: <FaCogs /> },
    { id: 'intern-details', label: 'Intern Details', icon: <FaUser /> },
    { id: 'business-details', label: 'Business Details', icon: <FaCogs /> },
    { id: 'users', label: 'User Management', icon: <FaUsers /> },
    { id: 'reports', label: 'System Reports', icon: <FaChartBar /> },
    { id: 'settings', label: 'System Settings', icon: <FaCog /> },
  ];

  let items = [];
  switch (role) {
    case 'customer': items = customerItems; break;
    case 'business': items = businessItems; break;
    case 'employee': items = employeeItems; break;
    case 'intern': items = internItems; break;
    case 'admin': items = adminItems; break;
    default: items = [];
  }

  return (
    <div className="h-full overflow-y-hidden overflow-x-hidden">
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 z-50 bg-white w-full md:w-80 h-screen flex flex-col justify-between shadow-lg md:static"
    >
      {/* Close button for mobile */}
      {/* <div className="md:hidden flex justify-end p-4">
        <button onClick={onClose} className="text-3xl text-gray-600 hover:text-gray-800">×</button>
      </div> */}

      <div className="p-6 border-b flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-2">
          <FaUser className="text-white text-2xl" />
        </div>
        <div className="text-center">
          <p className="font-semibold text-gray-900 capitalize">{user?.name || role} Account</p>
          <p className="text-sm text-gray-600 break-all">{user?.email}</p>
        </div>
      </div>

      <nav className="mt-4 px-2">
        <motion.div
          whileHover="hover"
          variants={itemVariants}
          className="px-6 py-3 cursor-pointer flex items-center gap-3 text-gray-800 hover:bg-blue-200 rounded"
          onClick={() => {
            setActiveSection('overview');
            navigate('/');
          }}
        >
          <FaHome />
          <span>Home</span>
        </motion.div>

        {items.map((item) => (
          <motion.div
            key={item.id}
            whileHover="hover"
            variants={itemVariants}
            className={`px-6 py-2 cursor-pointer flex items-center gap-3 ${
              activeSection === item.id
                ? 'bg-blue-100 font-semibold rounded text-blue-800'
                : 'text-gray-800'
            }`}
            onClick={() => {
              setActiveSection(item.id);
              onClose?.(); // auto-close sidebar on mobile after click
              const routeMap = {
                'employee-details': '/admin-dashboard/employee-details',
                'business-details': '/admin-dashboard/business-details',
                'intern-details': '/admin-dashboard/intern-details',
                'admin-dashboard': '/admin-dashboard/view-stats',
                // ***************************************************
                'view-offer-letter': '/employee-dashboard/offerLetter',
                'profile': '/employee-dashboard/profile',
                'employee-dashboard': '/employee-dashboard/view-stats',
                // ***************************************************
                'view-authorization-certificate': '/business-dashboard/certificate',
                'users': '/business-dashboard/usermanagement',
                'reports': '/business-dashboard/reports',
                'settings': '/business-dashboard/setting',
                'businessprofile': '/business-dashboard/profile',
                'internprofile': '/intern-dashboard/profile',
                'business-dashboard': '/business-dashboard/view',
                // ***************************************************
                'view-intern-certificate': '/intern-dashboard/certificate',
                'view-intern-offer-letter': '/intern-dashboard/offerLetter',
                'intern-dashboard': '/intern-dashboard/view-stats',
                // ****************************************************
                'customer-dashboard': '/customer-dashboard/view',
              };
              if (routeMap[item.id]) navigate(routeMap[item.id]);
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </motion.div>
        ))}
      </nav>

      <div className="px-4 py-4 border-t mt-auto">
        <motion.button
          whileHover={{ scale: 1.03 }}
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow transition duration-200"
        >
          <FaSignOutAlt />
          Logout
        </motion.button>
      </div>
    </motion.aside>
    </div>
    
  );
};

export default Sidebar;