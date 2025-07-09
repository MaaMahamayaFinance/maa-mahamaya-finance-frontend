function MobileSidebar({
    isOpen,
    onClose,
    navigate,
    user,
    logout,
    renderRoleNavItems,
    roleDashboardRoutes
    }) {
    if (!isOpen) return null;

    return (
        <>
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
        ></div>

        <aside className="fixed top-0 left-0 bottom-0 w-64 bg-slate-900 text-white z-50 p-6 flex flex-col space-y-6">
            <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
                onClick={onClose}
                aria-label="Close menu"
                className="text-white hover:text-gray-300"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>

            <nav className="flex flex-col space-y-4">
            {/* Static Links */}
            {/* <button onClick={() => { navigate('/'); onClose(); }} className="text-gray-300 hover:text-white text-left">HOME</button>
            <button className="text-gray-300 hover:text-white text-left">PAGES</button> */}
            <button onClick={() => { navigate('/services'); onClose(); }} className="text-gray-300 hover:text-white text-left">SERVICES</button>
            {/* <button className="text-gray-300 hover:text-white text-left">PROJECT</button> */}
            <button onClick={() => { navigate('/testimonials'); onClose(); }} className="text-gray-300 hover:text-white text-left">TESTIMONIALS</button>
            <button className="text-gray-300 hover:text-white text-left">CONTACT US</button>

            {/* ✅ Role-based links */}
            {user && renderRoleNavItems?.()}

            {/* Auth & Dashboard Access */}
            {user ? (
                <>
                <button
                    onClick={() => {
                    const route = roleDashboardRoutes[user.role] || '/';
                    navigate(route);
                    onClose();
                    }}
                    className="text-white font-semibold hover:underline text-left"
                >
                    Hello {user?.name}
                </button>
                <button
                    onClick={() => {
                    logout();
                    navigate('/');
                    onClose();
                    }}
                    className="btn-secondary text-white px-4 py-2 rounded-full font-medium text-left"
                >
                    Logout
                </button>
                </>
            ) : (
                <button
                onClick={() => { navigate('/login'); onClose(); }}
                className="btn-primary text-white px-6 py-2 rounded-full font-medium text-left"
                >
                SIGN IN
                </button>
            )}
            </nav>
        </aside>
        </>
    );
}

export default MobileSidebar;
