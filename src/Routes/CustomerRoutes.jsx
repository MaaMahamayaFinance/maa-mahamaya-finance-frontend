import { Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import Dashboard from '../components/Dashboard.jsx';
import CustomerDashboard from '../components/CustomerDashboardComponents/CustomerDashboard.jsx';
import ServiceDetails from '../components/pages/Customer-Navbar-Pages/ServiceDetails.jsx';



const CustomerRoutes = () => {
    return (
        <>

            <Route
            path="/customer-dashboard"
            element={
                <ProtectedRoute allowedRoles={['customer']}>
                    <Dashboard role="customer" />
                </ProtectedRoute>
                }
            />


            <Route
                path="/customer-dashboard/view"
                element={
                <ProtectedRoute allowedRoles={['customer']}>
                    <CustomerDashboard role="customer" />
                </ProtectedRoute>
                }
            />


            <Route
                path="/customer-dashboard/get-services"
                element={
                <ProtectedRoute allowedRoles={['customer']}>
                    <ServiceDetails role="customer" />
                </ProtectedRoute>
                }
            />
        </>
    );
};

export default CustomerRoutes;
