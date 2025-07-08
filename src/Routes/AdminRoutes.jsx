// src/routes/AdminRoutes.jsx
import { Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import Dashboard from '../components/Dashboard.jsx';
import BusinessDetails from '../components/BusinessDetails.jsx';
import AdminPanel from '../components/pages/Admin-Dashboard-Pages/AdminPanel.jsx';
import Reports from '../components/pages/Admin-Dashboard-Pages/Reports.jsx';
import SystemSetting from '../components/pages/Admin-Dashboard-Pages/SystemSetting.jsx';
import EmployeeDetails from '../components/pages/EmployeeDetails.jsx';


const AdminRoutes = () => {
    return (
        <>
        <Route
            path="/admin-dashboard"
            element={
            <ProtectedRoute allowedRoles={['admin']}>
                <Dashboard role="admin" />
            </ProtectedRoute>
            }
        />

        <Route
            path="/admin-dashboard/business-details"
            element={
            <ProtectedRoute allowedRoles={['admin']}>
                <BusinessDetails />
            </ProtectedRoute>
            }
        />

        <Route
            path="/business-dashboard/usermanagement"
            element={
            <ProtectedRoute allowedRoles={['admin']}>
                <AdminPanel />
            </ProtectedRoute>
            }
        />

        <Route
            path="/business-dashboard/reports"
            element={
            <ProtectedRoute allowedRoles={['admin']}>
                <Reports />
            </ProtectedRoute>
            }
        />

        <Route
            path="/business-dashboard/setting"
            element={
            <ProtectedRoute allowedRoles={['admin']}>
                <SystemSetting />
            </ProtectedRoute>
            }
        />

        <Route
            path="/admin-dashboard/employee-details"
            element={
                <ProtectedRoute allowedRoles={['admin']}>
                    <EmployeeDetails />
                </ProtectedRoute>
                }
            />

        </>
    );
};

export default AdminRoutes;
