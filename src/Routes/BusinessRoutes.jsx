// src/routes/AdminRoutes.jsx
import { Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import Dashboard from '../components/Dashboard.jsx';
import BusinessCertificate from '../components/pages/BusinessCertificate.jsx';
import BusinessProfile from '../components/pages/Business-Dashboard-Pages/BusinessProfile.jsx';
import BuisnessDashboard from '../components/BusinessDashboardComponents/BusinessDashboard.jsx'



const EmployeeRoutes = () => {
    return (
        <>

            <Route
            path="/business-dashboard"
            element={
                <ProtectedRoute allowedRoles={['business']}>
                    <Dashboard role="business" />
                </ProtectedRoute>
                }
            />


            <Route
            path="/business-dashboard/certificate" 
            element={
                <ProtectedRoute allowedRoles={['business']}>
                    <BusinessCertificate />
                </ProtectedRoute>
                }
            />

            <Route
                path="/business-dashboard/profile" 
                element={
                <ProtectedRoute allowedRoles={['business']}>
                    <BusinessProfile />
                </ProtectedRoute>
                }
            />


            <Route
            path="/business-dashboard/view"
            element={
            <ProtectedRoute allowedRoles={['business']}>
                <BuisnessDashboard role="business" />
            </ProtectedRoute>
            }
        />

        </>
    );
};

export default EmployeeRoutes;
