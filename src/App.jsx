import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundary';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import EmployeeDetails from './components/pages/EmployeeDetails.jsx';
import BusinessDetails from './components/pages/BusinessDetails.jsx';
import { Toaster } from 'react-hot-toast';
import OfferLetter from './components/pages/OfferLetter.jsx';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/offerletter" element={<OfferLetter />} />
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
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Dashboard role="admin" />
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
            path="/admin-dashboard/business-details" 
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <BusinessDetails />
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

        </Routes>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
