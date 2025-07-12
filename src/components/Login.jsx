import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config.js';
import toast from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token && data.user) {
        login({ user: data.user, token: data.token });
        toast.success('Login successful!');
        navigate(`/${data.user.role}-dashboard`);
      } else {
        toast.error(data.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong during login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-300 pt-6 flex items-center justify-center">
      <div className="w-full max-w-md mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-10">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <img src="https://maamahamayafinancebucket.s3.ap-south-1.amazonaws.com/profile-images/logo.png" alt="Maa Mahamaya Finance" className="h-36 w-auto mr-2" />
              
            </div>
            <div>
              <div className="text-xl sm:text-2xl mb-3 font-extrabold tracking-wide bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-transparent bg-clip-text drop-shadow-lg font-display whitespace-nowrap">
                Maa Mahamaya Finance
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 text-sm">Sign in to your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-base transition-colors"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center space-y-3">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <button onClick={() => navigate('/register')} className="text-blue-600 hover:text-blue-700 font-medium underline">
                Create Account
              </button>
            </p>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
