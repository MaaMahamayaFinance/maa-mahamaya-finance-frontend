// src/routes/AdminRoutes.jsx
import { Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import Dashboard from '../components/Dashboard.jsx';
import CustomerDashboard from '../components/CustomerDashboardComponents/CustomerDashboard.jsx';



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
        </>
    );
};

export default CustomerRoutes;
