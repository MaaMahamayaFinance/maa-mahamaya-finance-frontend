import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import EmployeeDetails from './components/pages/EmployeeDetails.jsx';
import { Toaster } from 'react-hot-toast';
import OfferLetter from './components/pages/OfferLetter.jsx';
import BusinessCertificateTemplate from './components/BusinessCertificate/BusinessCertificateTemplate.jsx';
import BusinessCertificate from './components/pages/BusinessCertificate.jsx';
import AdminRoutes from './Routes/AdminRoutes.jsx';
// import InternRoutes from './Routes/InternRoutes.jsx';
import EmployeeProfile from './components/pages/Employee-Dashboard-Pages/EmployeeProfile.jsx';
import BusinessProfile from './components/pages/Business-Dashboard-Pages/BusinessProfile.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/certificate" element={<BusinessCertificateTemplate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route
            path="/customer-dashboard"
            element={
              <ProtectedRoute allowedRoles={['customer']}>
                <Dashboard role="customer" />
              </ProtectedRoute>
            }
          />

          <Route
            path="/intern-dashboard"
            element={
              <ProtectedRoute allowedRoles={['intern']}>
                <Dashboard role="intern" />
              </ProtectedRoute>
            }
          />
          

          <Route
            path="/business-dashboard"
            element={
              <ProtectedRoute allowedRoles={['business']}>
                <Dashboard role="business" />
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
          
          {/* Redirect any unknown routes to home */}
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Navigate to="/" />} />

          <Route
            path="/admin-dashboard/employee-details"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <EmployeeDetails />
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

          {/* {InternRoutes()} */}
          {AdminRoutes()}
        </Routes>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
