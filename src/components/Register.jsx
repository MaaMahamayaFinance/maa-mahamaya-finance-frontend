import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import PhoneInput from 'react-phone-input-2';
import toast from 'react-hot-toast';
import 'react-phone-input-2/lib/style.css';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import imageCompression from 'browser-image-compression';
import { FiEye, FiEyeOff } from "react-icons/fi";

function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [subRole, setSubRole] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [profilePhotoFile, setProfilePhotoFile] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState('');
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

const requestOtp = async () => {
  if (!email) {
    toast.error('Please enter your email to receive OTP');
    return;
  }
  setOtpLoading(true);
  console.log('sending otp to', email);
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/request-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (response.ok) {
      setOtpSent(true);
      setOtpError('');
      toast.success('OTP sent to your email');
    } else {
      setOtpSent(false); // So button isn't stuck
      setOtpError(data.message || 'Failed to send OTP');
      toast.error(data.message || 'Failed to send OTP');
    }
  } catch (error) {
    setOtpError('Error sending OTP');
    toast.error('Error sending OTP');
    setOtpSent(false);
  } finally {
    setOtpLoading(false);
  }
};

  const verifyOtp = async () => {
  const otpString = otp.join('');
  if (otpString.length !== 6) {
    setOtpError('Please enter the full OTP');
    toast.error('Please enter the full OTP');
    return;
  }
  setOtpLoading(true);
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, otp: otpString }), // <--- send string, not array!
    });
    const data = await response.json();
    if (response.ok) {
      setOtpVerified(true);
      setOtpError('');
      toast.success('OTP verified successfully');
    } else {
      setOtpError(data.message || 'Invalid OTP');
      toast.error(data.message || 'Invalid OTP');
    }
  } catch (error) {
    setOtpError('Error verifying OTP');
    toast.error('Error verifying OTP');
  } finally {
    setOtpLoading(false);
  }
};


  const uploadProfilePhoto = async () => {
    if (!profilePhotoFile) return null;

    setUploadingPhoto(true);

    const fileName = encodeURIComponent(profilePhotoFile.name);
    let contentType = profilePhotoFile.type;
    if (contentType === 'image/jpg') {
      contentType = 'image/jpeg';
    }

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/get-upload-url?fileName=${fileName}&contentType=${encodeURIComponent(contentType)}`
      );

      const { uploadUrl, publicUrl } = await res.json();

      const uploadRes = await fetch(uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': contentType },
        body: profilePhotoFile,
      });

      if (!uploadRes.ok) throw new Error('Upload failed');

      setProfilePhotoUrl(publicUrl);
      return publicUrl;
    } catch (err) {
      toast.error('Image upload failed. Try again.');
      return null;
    } finally {
      setUploadingPhoto(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpVerified) {
      toast.error('Please verify OTP before registering');
      return;
    }

    const uploadedPhotoUrl = await uploadProfilePhoto();
    if (!uploadedPhotoUrl) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        name,
        email,
        password,
        role,
        subRole,
        address,
        pincode,
        mobileNumber,
        otp: otp.join(''),
        profilePhoto: uploadedPhotoUrl,
}),
      });

      const data = await response.json();
      if (data.token) {
        login({ ...data.user, token: data.token });
        toast.success('Account created successfully!');
        navigate(`/${data.user.role}-dashboard`);
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      toast.error('Error during registration');
    }
  };



  const handleProfilePhoto = async (file) => {
  if (!file) return;

  // Limit original file to 5MB for compression sanity (optional, tweak as needed)
  if (file.size > 5 * 1024 * 1024) {
    toast.error('Please select an image under 5MB.');
    return;
  }

  try {
    // Compress the image (target 1MB, maxWidth: 512, maxHeight: 512 for good avatars)
    const compressedFile = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 512,
      useWebWorker: true,
    });

    if (compressedFile.size > 1024 * 1024) {
      toast.error('Could not compress image below 1MB. Try another image.');
      return;
    }

    setProfilePhotoFile(compressedFile);
    setProfilePhotoUrl(URL.createObjectURL(compressedFile));
  } catch (err) {
    toast.error('Image processing failed.');
  }
};



return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-300 flex items-center justify-center py-6 px-2">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-6"
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <img src="https://maamahamayafinancebucket.s3.ap-south-1.amazonaws.com/profile-images/logo.png" alt="logo" className="h-36 w-auto mr-2" />
          {/* <span className="text-xl sm:text-2xl font-bold text-gray-900">Maa Mahamaya Finance</span> */}
        </div>
        <div className="text-2xl mb-4 font-extrabold tracking-wide bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-transparent bg-clip-text drop-shadow-lg font-display">
        Maa Mahamaya Finance
      </div>

        <h2 className="text-xl font-bold text-gray-900">Create Account</h2>
        <p className="text-gray-600 text-sm">Join thousands of satisfied customers</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {/* Email & Send OTP */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-600">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setOtpSent(false);
                setOtpVerified(false);
                setOtp(Array(6).fill(''));
                setOtpError('');
              }}
              required
              placeholder="example@email.com"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {!otpVerified && (
              <button
                type="button"
                onClick={requestOtp}
                disabled={otpLoading || otpSent}
                className={`px-3 py-2 rounded-lg font-semibold text-white transition-colors text-sm ${
                  otpSent ? 'bg-green-600 cursor-default' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {otpLoading ? 'Sending...' : otpSent ? 'OTP Sent' : 'Send OTP'}
              </button>
            )}
          </div>
          {otpError && <p className="mt-1 text-xs text-red-600">{otpError}</p>}
          {/* OTP Verification Inputs */}
          {otpSent && !otpVerified && (
            <div className="mt-3 space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter OTP <span className="text-red-600">*</span>
              </label>
              <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    placeholder="-"
                    className="w-9 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={digit}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      if (val.length > 1) return;
                      const newOtp = [...otp];
                      newOtp[index] = val;
                      setOtp(newOtp);
                      // Auto-focus next
                      if (val && index < 5) {
                        e.target.nextSibling?.focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" && !otp[index] && index > 0) {
                        e.target.previousSibling?.focus();
                      }
                    }}
                  />
                ))}
              </div>

              {otpError && <p className="mt-1 text-xs text-red-600">{otpError}</p>}
              <button
                type="button"
                onClick={verifyOtp}
                disabled={otpLoading || otp.length !== 6}
                className="mt-1 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold text-base transition-colors"
              >
                {otpLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </div>
          )}
        </div>
        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Create password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-8 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
        </button>
        </div>
        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <PhoneInput
            country={'in'}
            value={mobileNumber}
            onChange={setMobileNumber}
            inputProps={{
              name: 'mobile',
              required: true,
              placeholder: 'Enter mobile number',
              className:
                'w-full px-3 py-2 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-600 transition duration-300 ease-in-out',
            }}
            containerClass="w-full rounded-lg border border-gray-300 shadow-sm focus-within:ring-4 focus-within:ring-blue-400 focus-within:border-blue-600 transition duration-300 ease-in-out"
            inputClass="w-full bg-white"
            buttonClass="bg-white border-r border-gray-300 rounded-l-lg shadow-sm hover:bg-blue-50 transition duration-300 ease-in-out"
          />
          <p className="mt-1 text-xs text-gray-500">Enter your mobile number with country code.</p>
        </div>
        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={address}
            placeholder="City, State"
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {/* Pincode */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pincode <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="6-digit pincode"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        {/* Account Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Type <span className="text-red-600">*</span>
          </label>
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Account Type</option>
            <option value="customer">Customer Account</option>
            <option value="business">Business Account</option>
            <option value="employee">Employee Account</option>
            <option value="intern">Intern Account</option>
          </select>
        </div>
        {/* SubRole - Only show if required */}
        {role === 'customer' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Role <span className="text-red-600">*</span>
            </label>
            <select
              value={subRole}
              onChange={(e) => setSubRole(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Role</option>
              <option value="customer">Customer</option>
            </select>
          </div>
        )}
        {(role === 'employee' || role === 'intern') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Role <span className="text-red-600">*</span>
            </label>
            <select
              value={subRole}
              onChange={(e) => setSubRole(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Role</option>
              <option value="softwareDeveloper">Software Developer</option>
              <option value="hr">HR</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
            </select>
          </div>
        )}
        {role === 'business' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Business Category <span className="text-red-600">*</span>
            </label>
            <select
              value={subRole}
              onChange={(e) => setSubRole(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Category</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="services">Services</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
        )}
        {/* Profile Photo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Photo <span className="text-red-600">*</span>
          </label>
          <div>

  {/* Drag & drop area */}
  <div
    className={`
      w-full border-2 border-dashed rounded-lg px-4 py-6 text-center
      cursor-pointer transition
      ${uploadingPhoto ? "opacity-50" : "hover:border-blue-400"}
    `}
    tabIndex={0}
    onDrop={e => {
      e.preventDefault();
      if (uploadingPhoto) return;
      const file = e.dataTransfer.files?.[0];
      handleProfilePhoto(file);
    }}
    onDragOver={e => e.preventDefault()}
    onClick={() => !uploadingPhoto && document.getElementById('profile-photo-input').click()}
    onKeyDown={e => {
      if (e.key === 'Enter') document.getElementById('profile-photo-input').click();
    }}
    style={{ outline: 'none' }}
  >
    <input
      id="profile-photo-input"
      type="file"
      accept="image/*"
      className="hidden"
      disabled={uploadingPhoto}
      onChange={async (e) => {
        const file = e.target.files?.[0];
        await handleProfilePhoto(file);
        e.target.value = null; // allow re-upload of same file
      }}
      required={!profilePhotoFile}
    />

    <div className="flex flex-col items-center justify-center">
      {profilePhotoUrl ? (
        <img
          src={profilePhotoUrl}
          alt="Preview"
          className="mx-auto w-24 h-24 rounded-full border object-cover mb-2"
        />
      ) : (
        <span className="text-gray-400">Drag & drop or click to select (max 1MB)</span>
      )}
      {uploadingPhoto && <p className="text-blue-600 text-sm mt-1">Uploading...</p>}
    </div>
  </div>
</div>
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-base transition-colors"
        >
          Create Account
        </button>
      </form>
      {/* Sign In and Home */}
      <div className="mt-6 text-center space-y-3">
        <p className="text-gray-600 text-sm">
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="text-blue-600 hover:text-blue-700 font-medium underline">
            Sign In
          </button>
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg font-semibold transition-colors text-sm"
        >
          Back to Home
        </button>
      </div>
    </motion.div>
  </div>
);

}

export default Register;
