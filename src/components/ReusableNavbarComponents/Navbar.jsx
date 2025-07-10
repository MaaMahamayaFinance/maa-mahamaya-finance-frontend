import { useState } from 'react';
import EmployeeNavItems from './EmployeeNavItems';
import AdminNavItems from './AdminNavItems';
import BusinessNavItems from './BusinessNavItems';
import CustomerNavItems from './CustomerNavItems';
import InternNavItems from './InternNavItems';
import MobileSidebar from './MobileSidebar';
import Home from '../../components/Home.jsx'
// if separated

export default function Navbar({ user, navigate, logout }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const roleDashboardRoutes = {
        logout: '/',
        employee: '/employee-dashboard',
        admin: '/admin-dashboard',
        business: '/business-dashboard',
        customer: '/customer-dashboard',
        intern: '/intern-dashboard',
    };

    const renderRoleNavItems = (role) => {
        switch (role) {
        case 'logout': return <Home navigate={navigate} />;
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
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                <img src="https://maamahamayafinancebucket.s3.ap-south-1.amazonaws.com/profile-images/logo.png " alt="Logo" className="h-16 w-auto mr-2 rounded-full" />
                <span className="text-[#4F46E5] text-xl font-bold">Maa Mahamaya Finance</span>
                </div>

                <div className="hidden md:flex items-center space-x-8 text-[#4F46E5]" role="menu">
                {/* <button onClick={() => navigate('/')} className="text-gray-300 hover:text-[#4F46E5]">HOME</button>
                <button className="text-gray-300 hover:text-[#4F46E5]">PAGES</button> */}
                {/* <button onClick={() => navigate('/services')} className="text-gray-300 hover:text-[#4F46E5]">SERVICES</button> */}
                {/* <button className="text-gray-300 hover:text-[#4F46E5]">PROJECT</button> */}
                <button onClick={() => navigate('/testimonials')} className="text-[#4F46E5] hover:text-[#4F46E5]">TESTIMONIALS</button>
                <button className="text-[#4F46E5] hover:text-[#4F46E5]">CONTACT US</button>

                {/* Role-specific nav items */}
                {renderRoleNavItems(user?.role)}

                {user ? (
                    <div className="flex items-center space-x-4">
                    <button onClick={handleDashboardRedirect} className="text-[#4F46E5] font-semibold hover:underline">
                        Hello, {user.name}
                    </button>
                    <button onClick={() => { logout(); navigate('/'); }} className="btn-secondary text-[#4F46E5] px-4 py-2 rounded-full font-medium">
                        Logout
                    </button>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className="btn-primary text-[#4F46E5] px-6 py-2 rounded-full font-medium">
                    SIGN IN
                    </button>
                )}
                </div>

                {/* Hamburger for Mobile */}
                <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Toggle menu"
                    className="text-gray-300 hover:text-[#4F46E5]"
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
