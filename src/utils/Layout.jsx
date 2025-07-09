// Layout.jsx
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-300">
        {children}
        </div>
    );
};

export default Layout;
