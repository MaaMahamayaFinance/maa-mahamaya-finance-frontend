import { HiX } from 'react-icons/hi';

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

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

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
              {/* <button
                onClick={() => {
                  const route = roleDashboardRoutes[user.role] || '/';
                  navigate(route);
                  onClose();
                }}
                className="font-semibold hover:underline text-left w-full mb-2"
              >
                Hello {user?.name}
              </button> */}
              <button
                onClick={() => {
                  logout();
                  navigate('/');
                  onClose();
                }}
                className="w-full text-white bg-[#4F46E5] px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                navigate('/login');
                onClose();
              }}
              className="w-full text-white bg-[#4F46E5] px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
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
