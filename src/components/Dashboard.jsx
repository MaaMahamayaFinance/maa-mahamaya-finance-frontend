import React, { useState, useEffect, useContext } from 'react';
import Sidebar from './Sidebar.jsx';
import { AuthContext } from '../context/AuthContext.jsx';
import LoanApplication from './LoanApplication.jsx';
import LoanStatus from './LoanStatus.jsx';
import PaymentManagement from './PaymentManagement.jsx';
import FinancialReports from './FinancialReports.jsx';
import QueryManagement from './QueryManagement.jsx';
import AdminPanel from './pages/Admin-Dashboard-Pages/AdminPanel.jsx';
import { API_BASE_URL } from '../config.js'; // <-- Add this line
import Reports from './pages/Admin-Dashboard-Pages/Reports.jsx';
import SystemSetting from './pages/Admin-Dashboard-Pages/SystemSetting.jsx';
import { FiMenu } from 'react-icons/fi';

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState('overview');
  const [loans, setLoans] = useState([]);
  const [pendingLoans, setPendingLoans] = useState([]);
  const [users, setUsers] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);




  // useEffect(() => {
  //   if (user?.role === 'employee') {
  //     const fetchPendingLoans = async () => {
  //       try {
  //         const response = await fetch(`${API_BASE_URL}/api/loans/pending`, {
  //           headers: { Authorization: `Bearer ${user.token}` },
  //         });
  //         const data = await response.json();
  //         if (Array.isArray(data)) {
  //           setPendingLoans(data);
  //         } else if (data.loans && Array.isArray(data.loans)) {
  //           setPendingLoans(data.loans);
  //         } else {
  //           setPendingLoans([]);
  //           console.error('Unexpected pending loans data format:', data);
  //         }
  //       } catch (error) {
  //         console.error('Error fetching pending loans:', error);
  //         setPendingLoans([]);
  //       }
  //     };
  //     fetchPendingLoans();
  //   }
  // }, [user]);

  
  // useEffect(() => {
  //   setActiveSection('overview');
  // }, [user?.role]);

  // useEffect(() => {
  //   const fetchLoans = async () => {
  //     if (!user) return;
  //     try {
  //       console.log('Fetching loans for user:', user._id);
  //       const userId = user._id || user.id;
  //       const response = await fetch(`${API_BASE_URL}/api/loans/user/${userId}`, {
  //         headers: { Authorization: `Bearer ${user.token}` },
  //       });
  //       console.log('Response status:', response.status);
  //       const data = await response.json();
  //       console.log('Fetched loans data:', data);
  //       setLoans(data);
  //     } catch (error) {
  //       console.error('Error fetching loans:', error);
  //     }
  //   };
  //   fetchLoans();
  // }, [user]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     if (!user || user.role !== 'admin') return;
  //     try {
  //       const response = await fetch(`${API_BASE_URL}/api/users`, {
  //         headers: { Authorization: `Bearer ${user.token}` },
  //       });
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch users');
  //       }
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //       setUsers([]);
  //     }
  //   };
  //   fetchUsers();
  // }, [user]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     if (!user || user.role !== 'admin') return;
  //     try {
  //       const response = await fetch(`${API_BASE_URL}/api/users`, {
  //         headers: { Authorization: `Bearer ${user.token}` },
  //       });
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //       setUsers([]);
  //     }
  //   };
  //   fetchUsers();
  // }, [user]);

  // const totalLoans = Array.isArray(loans) ? loans.length : 0;
  // const activeLoans = Array.isArray(loans) ? loans.filter(loan => loan.status === 'approved').length : 0;
  // const pendingPayments = Array.isArray(loans) ? loans.reduce((sum, loan) => {
  //   if (loan.status === 'approved' && loan.pendingAmount) {
  //     return sum + loan.pendingAmount;
  //   }
  //   return sum;
  // }, 0) : 0;

  const renderCustomerSections = () => {
    switch (activeSection) {
      case 'accounts':
        return <div><h2>My Accounts</h2></div>;
      case 'payments':
        return <PaymentManagement userId={user?._id} />;
      case 'loans':
        return <LoanApplication userId={user?._id} />;
      case 'investments':
        return <LoanStatus userId={user?._id} />;
      case 'profile':
        return <div><h2>Profile Settings</h2></div>;
      default:
        return null;
    }
  };

  const renderBusinessSections = () => {
    switch (activeSection) {
      case 'accounts':
        return <div><h2>Business Accounts</h2></div>;
      case 'transactions':
        return <PaymentManagement />;
      case 'payroll':
        return <QueryManagement />;
      case 'reports':
        return <FinancialReports userId={user?._id} />;
      case 'settings':
        return <div><h2>Settings</h2></div>;
      case 'loans':
        return <LoanStatus />;
      case 'apply-loan':
        return <LoanApplication />;
      default:
        return null;
    }
  };



  const renderEmployeeSections = () => {
    switch (activeSection) {
      case 'tasks':
        return <div><h2>Performance</h2></div>;
      case 'clients':
        return <div><h2>Performance</h2></div>
      case 'performance':
        return <div><h2>Performance</h2></div>;
      default:
        return null;
    }
  };


  
    const renderInternSections = () => {
    switch (activeSection) {
      case 'performance':
        return <div><h2>Performance</h2></div>;
      default:
        return null;
    }
  };
  


  const renderAdminSections = () => {
    switch (activeSection) {
      case 'users':
        return <AdminPanel currentUser={user} />;
      case 'reports':
        return <Reports currentUser={user}/>;
      case 'settings':
        return <SystemSetting currentUser={user}/>; 
      default: 
        return null;
    }
  };

  const renderContent = () => {
    switch (user?.role) {
      case 'customer':
        return renderCustomerSections();
      case 'business':
        return renderBusinessSections();
      case 'employee':
        return renderEmployeeSections();
        case 'intern':
        return renderInternSections();
      case 'admin':
        return renderAdminSections();
      default:
        return <p>Invalid role</p>;
    }
  };

return (
  <>
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen relative">
    {/* Always visible Sidebar — full screen on mobile, fixed on desktop */}
    <div className="w-full h-screen md:w-80 md:h-auto fixed md:relative z-40">
      <Sidebar
        role={user?.role}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>

    {/* Main Content */}
    <main className="flex-1 mt-screen md:mt-0 md:ml-64 p-6 w-full min-h-screen overflow-y-hidden overflow-x-hidden">
      {renderContent()}
    </main>
  </div>
  </>
);


}

export default Dashboard;
