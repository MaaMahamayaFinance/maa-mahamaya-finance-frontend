import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';
import EmployeeNavItems from './EmployeeNavItems';
import AdminNavItems from './AdminNavItems';
import BusinessNavItems from './BusinessNavItems';
import CustomerNavItems from './CustomerNavItems';
import InternNavItems from './InternNavItems';
import MobileSidebar from './MobileSidebar';

export default function Navbar({ user, navigate, logout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const roleDashboardRoutes = {
    employee: '/employee-dashboard',
    admin: '/admin-dashboard',
    business: '/business-dashboard',
    customer: '/customer-dashboard',
    intern: '/intern-dashboard',
  };

  const renderRoleNavItems = (role) => {
    switch (role) {
      case 'employee': return <EmployeeNavItems navigate={navigate} />;
      case 'admin': return <AdminNavItems navigate={navigate} />;
      case 'business': return <BusinessNavItems navigate={navigate} />;
      case 'customer': return <CustomerNavItems navigate={navigate} />;
      case 'intern': return <InternNavItems navigate={navigate} />;
      default: return null;
    }
  };

  const handleDashboardRedirect = () => {
    const route = roleDashboardRoutes[user?.role] || '/';
    navigate(route);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 14 }}
        className="bg-white shadow-lg fixed w-full top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://maamahamayafinancebucket.s3.ap-south-1.amazonaws.com/profile-images/logo.png"
                alt="Logo"
                className="h-16 w-auto mr-2 rounded-full"
              />
              <span className="text-[#4F46E5] text-md lg:text-xl md:text-xl font-bold">
                Maa Mahamaya Finance
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <motion.div
              className="hidden md:flex items-center space-x-8 text-[#4F46E5]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() => {
                  const el = document.getElementById("home-hero");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:underline hover:text-indigo-700 transition"
              >
                Home
              </button>

              <button
                onClick={() => navigate('/testimonials')}
                className="hover:underline hover:text-indigo-700 transition"
              >
                Testimonials
              </button>

              <button
                className="hover:underline hover:text-indigo-700 transition"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Us
              </button>

              {/* Role-specific Nav */}
              {renderRoleNavItems(user?.role)}

              {user ? (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleDashboardRedirect}
                    className="font-semibold hover:underline hover:text-indigo-700"
                  >
                    Hello {user.name}
                  </button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                    className="btn-secondary text-[#4F46E5] px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2"
                  >
                    <FiLogOut className="text-lg" />
                    Logout
                  </motion.button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/services')}
                    className="hover:underline hover:text-indigo-700 transition"
                  >
                    Services
                  </button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => navigate('/login')}
                    className="btn-primary text-[#4F46E5] px-6 py-2 rounded-full font-medium transition-all"
                  >
                    Sign In
                  </motion.button>
                </>
              )}
            </motion.div>

            {/* Hamburger */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                aria-label="Toggle menu"
                className="text-[#4F46E5] transition"
                whileTap={{ scale: 0.85 }}
              >
                {!isMobileMenuOpen && <HiMenu className="h-7 w-7" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileSidebar
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navigate={navigate}
            user={user}
            logout={logout}
            renderRoleNavItems={() => renderRoleNavItems(user?.role)}
            roleDashboardRoutes={roleDashboardRoutes}
          />
        )}
      </AnimatePresence>
    </>
  );
}
