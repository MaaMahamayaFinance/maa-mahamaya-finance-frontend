import { useState } from 'react';
import EmployeeNavItems from './EmployeeNavItems';
import AdminNavItems from './AdminNavItems';
import BusinessNavItems from './BusinessNavItems';
import CustomerNavItems from './CustomerNavItems';
import InternNavItems from './InternNavItems';
import MobileSidebar from './MobileSidebar'; // if separated

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
        <nav className="bg-slate-900 shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2 rounded-full" />
                <span className="text-white text-xl font-bold">Maa Mahamaya Finance</span>
                </div>

                <div className="hidden md:flex items-center space-x-8" role="menu">
                {/* <button onClick={() => navigate('/')} className="text-gray-300 hover:text-white">HOME</button>
                <button className="text-gray-300 hover:text-white">PAGES</button> */}
                <button onClick={() => navigate('/services')} className="text-gray-300 hover:text-white">SERVICES</button>
                {/* <button className="text-gray-300 hover:text-white">PROJECT</button> */}
                <button onClick={() => navigate('/testimonials')} className="text-gray-300 hover:text-white">TESTIMONIALS</button>
                <button className="text-gray-300 hover:text-white">CONTACT US</button>

                {/* Role-specific nav items */}
                {renderRoleNavItems(user?.role)}

                {user ? (
                    <div className="flex items-center space-x-4">
                    <button onClick={handleDashboardRedirect} className="text-white font-semibold hover:underline">
                        Hello, {user.name}
                    </button>
                    <button onClick={() => { logout(); navigate('/'); }} className="btn-secondary text-white px-4 py-2 rounded-full font-medium">
                        Logout
                    </button>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className="btn-primary text-white px-6 py-2 rounded-full font-medium">
                    SIGN IN
                    </button>
                )}
                </div>

                {/* Hamburger for Mobile */}
                <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Toggle menu"
                    className="text-gray-300 hover:text-white"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </nav>

        {/* Mobile Sidebar */}
        <MobileSidebar
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navigate={navigate}
            user={user}
            logout={logout}
            renderRoleNavItems={() => renderRoleNavItems(user?.role)}
            roleDashboardRoutes={roleDashboardRoutes}
        />
        </>
    );
}
