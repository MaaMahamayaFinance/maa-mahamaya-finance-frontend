import { FiLogOut } from 'react-icons/fi';
import { HiX } from 'react-icons/hi';
  import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


function MobileSidebar({
  isOpen,
  onClose,
  navigate,
  user,
  logout,
  renderRoleNavItems,
  roleDashboardRoutes,
}) {
  if (!isOpen) return null;
    const [loggingOut, setLoggingOut] = useState(false);
    const [signingIn, setSigningIn] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {(loggingOut || signingIn) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/80 flex flex-col items-center justify-center z-[100]"
        >
          <svg className="animate-spin h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          <div className="mt-6 text-xl font-semibold text-indigo-700">
            {loggingOut ? 'Logging out...' : 'Redirecting...'}
          </div>
        </motion.div>
      )}


      {/* Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-64 bg-white text-[#4F46E5] z-50 p-6 flex flex-col h-full shadow-lg transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-[#4F46E5] hover:text-indigo-700 transition"
          >
            <button onClick={onClose} aria-label="Close menu">
            <HiX className="h-6 w-6 text-black transition" />
            </button>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex flex-col items-start gap-4 mt-4 space-y-4 overflow-y-auto">
          <button 
            onClick={() => {
              navigate('/services');
              onClose();
            }}
            className="hover:text-indigo-700 text-center transition"
          >
            Services
          </button>
          <button
            onClick={() => {
              navigate('/testimonials');
              onClose();
            }}
            className="hover:text-indigo-700 text-center transition"
          >
            Testimonials
          </button>
          <button className="hover:text-indigo-700 text-center transition">
            Contact Us
          </button>

          {/* Role-based links */}
          {user && renderRoleNavItems?.()}

          {user?.name && (
        <button
            onClick={() => {
            const route = roleDashboardRoutes[user.role] || '/';
            navigate(route);
            onClose();
            }}
            className="font-semibold hover:underline text-left w-full mb-2"
        >
            Hello {user.name}
        </button>
        )}
        </div>
        


        {/* Auth & Logout Button at the Bottom */}
        <div className="mt-auto pt-4 border-t border-gray-200">
          {user ? (
            <>
              
              <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={async () => {
                setLoggingOut(true);
                await new Promise(res => setTimeout(res, 1000));
                logout();
                navigate('/');
                setLoggingOut(false);
              }}
              className="btn-secondary text-white w-full justify-center bg-[#4F46E5] px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2"
              disabled={loggingOut}
            >
              <FiLogOut className="text-lg" />
              Logout
            </motion.button>

            </>
          ) : (
            <button
              onClick={async () => {
                setSigningIn(true);
                await new Promise(res => setTimeout(res, 1000));
                navigate('/login');
                setSigningIn(false);
                onClose();
              }}
              className="w-full text-white bg-[#4F46E5] px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
              disabled={signingIn}
            >
              Sign In
            </button>
          )}
        </div>
      </aside>
    </>
  );
}

export default MobileSidebar;
