import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import Navbar from './ReusableNavbarComponents/Navbar.jsx';
import MobileSidebar from './ReusableNavbarComponents/MobileSidebar.jsx';
import LoansOffered from './HomePageComponents/LoansOffered.jsx';




function Home() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const partnerLogos = [
    "/icc.png",
    "/HDFC.png",
    "/yes bank.png",
    "/induslnd bank.png",
    "/indian bank.png",
    "/canra bank.png",
    "/Allied bank.jpg",
    "/pnb bank.png",
    "/union bank.png",
    "/idfc.png",
    "/citi bank.png",
    "/public.png",
    "/sbi.png",
    "/Kotak.jpg",
    "/Axis.png",
    "/BOI.png",
    "/U.png",
    "/airtle.png"
  ];

  return (
    <div>
      {/* Navigation */}
      <Navbar
        user={user}
        navigate={navigate}
        logout={logout}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigate={navigate}
        user={user}
        logout={logout}
      />

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-block bg-blue-600 bg-opacity-80 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg max-w-max mx-auto">
              PLAN FOR SECURE FUTURE
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                LEADING
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">FINANCIAL</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                True relationships developing the futures. Comprehensive financial solutions for individuals and businesses.
              </p>
            </div>
            {/* Removed Get Started and Sign In buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/register')} className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center">
                Get Started
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button onClick={() => navigate('/login')} className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors">
                Sign In
              </button>
            </div> */}
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Professional Finance</h3>
                  <p className="text-gray-600">Trusted by 50,000+ clients</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Portfolio Growth</span>
                  <span className="text-green-600 font-semibold">+24.5%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Monthly Savings</span>
                  <span className="text-blue-600 font-semibold">$2,480</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Investment Return</span>
                  <span className="text-green-600 font-semibold">+18.7%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LoansOffered />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Maa Mahamaya Finance?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive financial solutions tailored to your needs
            </p>
          </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-hover text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Safe</h3>
                <p className="text-gray-600">Bank-level security with 256-bit encryption</p>
              </div>
              <div className="card-hover text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Analytics</h3>
                <p className="text-gray-600">AI-powered insights for better decisions</p>
              </div>
              <div className="card-hover text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
                <p className="text-gray-600">24/7 support from certified professionals</p>
              </div>
              <div className="card-hover text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-mobile-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile First</h3>
                <p className="text-gray-600">Access your finances anywhere, anytime</p>
              </div>
            </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly collaborate with these trusted financial institutions.
            </p>
          </div>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <img src={logo} alt={`Partner logo ${index + 1}`} className="max-h-16 object-contain" />
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-gray-300 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Maa Mahamaya Finance</h3>
            <p className="text-gray-400 max-w-sm">
              Providing trusted financial solutions for individuals and businesses. Secure your future with us.
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/services')} className="hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => navigate('/register')} className="hover:text-white transition-colors">Sign Up</button></li>
              <li><button onClick={() => navigate('/login')} className="hover:text-white transition-colors">Sign In</button></li>
              <li><button className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
            <p>PALAMU, JHARKHAND</p>
            <p>Email: support@maamahamayafinance.com</p>
            <p>Phone: (+91) 9798678275</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter" className="hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/company/maa-mahamaya-finance/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Maa Mahamaya Finance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;