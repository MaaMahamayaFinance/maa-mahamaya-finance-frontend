import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './components/Login';
import Register from './components/Register';
import ErrorBoundary from './components/ErrorBoundary';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import { Toaster } from 'react-hot-toast';
import BusinessCertificateTemplate from './components/Certificate/CertificateTemplate.jsx';
import Home from './components/Home.jsx';
import Layout from './utils/Layout.jsx';
import AdminRoutes from './Routes/AdminRoutes.jsx';
import InternRoutes from './Routes/InternRoutes.jsx';
import EmployeeRoutes from './Routes/EmployeeRoutes.jsx';
import BusinessRoutes from './Routes/BusinessRoutes.jsx';
import CustomerRoutes from './Routes/CustomerRoutes.jsx';
import PrivacyPolicy from './utils/PrivacyPolicy.jsx';
import AboutUs from './components/pages/AboutUs.jsx';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Layout>
          <Toaster position="top-right" reverseOrder={false} />
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs/>} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/services" element={<Services />} />
              <Route path="/certificate" element={<BusinessCertificateTemplate />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
              {CustomerRoutes()}
              {BusinessRoutes()}
              {EmployeeRoutes()}
              {InternRoutes()}
              {AdminRoutes()}
            </Routes>
          </Layout>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
