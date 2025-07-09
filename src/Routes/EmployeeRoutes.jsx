// src/routes/AdminRoutes.jsx
import { Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import EmployeeDashboard from '../components/EmployeeDashboardComponents/EmployeeDashboard.jsx';
import OfferLetter from '../components/pages/OfferLetter.jsx';
import EmployeeProfile from '../components/pages/Employee-Dashboard-Pages/EmployeeProfile.jsx';
import Dashboard from '../components/Dashboard.jsx';



const EmployeeRoutes = () => {
    return (
        <>
        <Route
            path="/employee-dashboard/view-stats"
            element={
            <ProtectedRoute allowedRoles={['employee']}>
                <EmployeeDashboard role="employee" />
            </ProtectedRoute>
            }
        />


        <Route
            path="/employee-dashboard"
            element={
                <ProtectedRoute allowedRoles={['employee']}>
                    <Dashboard role="employee" />
                </ProtectedRoute>
                }
            />



            <Route
            path="/employee-dashboard/offerLetter" 
            element={
                <ProtectedRoute allowedRoles={['employee']}>
                    <OfferLetter />
                </ProtectedRoute>
                }
            />

            <Route
                path="/employee-dashboard/profile" 
                element={
                <ProtectedRoute allowedRoles={['employee']}>
                    <EmployeeProfile />
                </ProtectedRoute>
                }
            />

        </>
    );
};

export default EmployeeRoutes;
