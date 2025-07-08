// src/routes/AdminRoutes.jsx
import { Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import InternDetails from '../components/pages/InternDetails.jsx';
import InternProfile from '../components/pages/Intern-Dashboard-Pages/InternProfile.jsx';
import InternCertificate from '../components/pages/Intern-Dashboard-Pages/InternCertificate.jsx';
import InternOfferLetter from '../components/pages/Intern-Dashboard-Pages/InternOfferLetter.jsx';



const InternRoutes = () => {
    return (
        <>
            <Route
                path="/admin-dashboard/intern-details"
                element={
                <ProtectedRoute allowedRoles={['admin']}>
                    <InternDetails />
                </ProtectedRoute>
                }
            />



            <Route
                path="/intern-dashboard/profile" 
                element={
                <ProtectedRoute allowedRoles={['intern']}>
                    <InternProfile />
                </ProtectedRoute>
                }
            />



            <Route
                path="/intern-dashboard/certificate" 
                element={
                <ProtectedRoute allowedRoles={['intern']}>
                    <InternCertificate />
                </ProtectedRoute>
                }
            />


            <Route
                path="/intern-dashboard/offerLetter" 
                element={
                <ProtectedRoute allowedRoles={['intern']}>
                    <InternOfferLetter />
                </ProtectedRoute>
                }
            />
        </>
    );
};

export default InternRoutes;
