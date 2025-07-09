import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { fetchMyBusinessIdCard } from '../../api/businessAPI.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function BusinessProfile() {
  const { user } = useContext(AuthContext);
  const [idCard, setIdCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const cardRef = useRef();
  const [profilePhotoBase64, setProfilePhotoBase64] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getIdCard = async () => {
      try {
        const card = await fetchMyBusinessIdCard(token);
        setIdCard(card);
        setError('');
      } catch (err) {
        const isPending = err.response?.data?.pending;
        if (isPending) {
          setIdCard(null);
          setError('pending');
        } else {
          console.error('Unexpected error:', err);
          setError('error');
        }
      } finally {
        setLoading(false);
      }
    };

    if (user?.role === 'business') {
      getIdCard();
    }
  }, [user, token]);

  const convertImageToBase64 = async (url) => {
  try {
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'omit', // prevent cookies
      headers: {
        'Accept': 'image/*',
      },
    });

    if (!response.ok) {
      console.error('Image fetch failed:', response.status);
      return null;
    }

    const blob = await response.blob();

    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.error('Error converting image to base64:', err);
    return null;
  }
};



  useEffect(() => {
    const loadBase64Image = async () => {
      if (idCard?.profilePhoto) {
        try {
          const base64 = await convertImageToBase64(idCard.profilePhoto);
          setProfilePhotoBase64(base64);
        } catch (err) {
          console.error('Failed to convert image:', err);
        }
      }
    };

    loadBase64Image();
  }, [idCard?.profilePhoto]);


  const handleDownloadPDF = async () => {
    if (!cardRef.current) return;

    cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    await new Promise((res) => setTimeout(res, 300));

    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: '#ffffff',
      scale: 3,
      useCORS: true,
      allowTaint: false,
      imageTimeout: 1500,
    });

    const imgData = canvas.toDataURL('image/jpg');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
    const canvasWidth = canvas.width * ratio;
    const canvasHeight = canvas.height * ratio;

    const x = (pageWidth - canvasWidth) / 2;
    const y = (pageHeight - canvasHeight) / 2;

    pdf.addImage(imgData, 'JPG', x, y, canvasWidth, canvasHeight);
    pdf.save('Business_ID_Card.pdf');
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) return;

    cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    await new Promise((res) => setTimeout(res, 300));

    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: '#ffffff',
      scale: 3,
      useCORS: true,
      allowTaint: false,
      imageTimeout: 1500,
    });

    const imgData = canvas.toDataURL('image/jpg');

    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'Business_ID_Card.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

 return (
  <div className="w-full max-w-6xl mx-auto px-6 py-10 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg border border-gray-200">
    <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Business Profile</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Side - Basic Info */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Business Information</h3>
        <div className="space-y-3 text-gray-700 text-base">
          <p><span className="font-medium">Name:</span> {user?.name}</p>
          <p><span className="font-medium">Email:</span> {user?.email}</p>
          <p><span className="font-medium">Role:</span> {user?.role}</p>
        </div>
      </div>

      {/* Right Side - ID Card Section */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Business ID Card</h3>

        {loading && <p className="text-gray-500 text-sm">Loading ID card...</p>}

        {!loading && error === 'pending' && (
          <p className="text-yellow-600 text-sm font-medium">
            Your ID card has not been created yet. Please wait for the admin.
          </p>
        )}

        {!loading && error === 'error' && (
          <p className="text-red-500 text-sm">Something went wrong while fetching your ID card.</p>
        )}

        {!loading && !error && idCard && profilePhotoBase64 && (
          <div className="flex flex-col items-center space-y-5">

            {/* ID Card UI */}
           <div
              ref={cardRef}
              className="w-[300px] h-[450px] relative overflow-hidden rounded-2xl shadow-2xl font-sans bg-white"
              style={{
                fontFamily: 'Inter, sans-serif',
                background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)',
              }}
            >
              {/* Decorative Backgrounds */}
              <div className="absolute w-[250%] h-[250%] rounded-full top-[-180%] left-[-70%] bg-blue-900 opacity-20"></div>
              <div className="absolute w-[250%] h-[250%] rounded-full bottom-[-180%] right-[-70%] bg-yellow-500 opacity-30"></div>

              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-yellow-400"></div>

              {/* Main Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="pt-6 pb-3 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <img
                      src="/logo.png"
                      alt="Company Logo"
                      className="w-10 h-10 rounded-full mr-2"
                      onError={(e) => (e.target.style.display = 'none')}
                    />
                    <h1 className="text-gray-800 font-bold text-sm tracking-wide">
                      MAA MAHAMAYA FINANCE
                    </h1>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                  <div className="w-[110px] h-[110px] rounded-full border-4 border-yellow-400 bg-gray-100 flex items-center justify-center shadow-md">
                    <img
                      src={profilePhotoBase64}
                      crossOrigin="anonymous"
                      alt={`${idCard.name}'s profile`}
                      className="w-24 h-24 object-cover rounded-full border border-gray-300 shadow-sm"
                    />
                  </div>
                </div>

                {/* Name & Designation */}
                <div className="bg-sky-800 text-white py-1 px-1 text-center mb-4 rounded-md mx-10">
                  <h2 className="text-sm font-bold tracking-wide mb-1 uppercase break-words">
                    {idCard.name}
                  </h2>
                  <p className="text-sm font-medium opacity-90">{idCard.subRole.toUpperCase()}</p>
                </div>

                {/* Details */}
                <div className="px-8 text-[12px] text-gray-800 space-y-1 flex-1 overflow-auto">
                  <div className="flex items-start">
                    <span className="font-semibold w-16">Email</span>
                    <span className="mr-1">:</span>
                    <span className="break-words">{idCard.email}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold w-16">Bus Id</span>
                    <span className="mr-1">:</span>
                    <span className="break-words">{idCard.uniqueId}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold w-16">Sector</span>
                    <span className="mr-1">:</span>
                    <span className="break-words">{idCard.subRole}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold w-16">Address</span>
                    <span className="mr-1">:</span>
                    <span className="break-words">{idCard.address}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold w-16">Pincode</span>
                    <span className="mr-1">:</span>
                    <span>{idCard.pincode}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold w-16">Mobile</span>
                    <span className="mr-1">:</span>
                    <span>{idCard.mobileNumber}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 pb-3 mt-2 text-center">
                  <p className="text-[10px] text-black">
                    Powered by Maa Mahamaya Finance
                  </p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleDownloadPDF}
                className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                Download PDF
              </button>
              <button
                onClick={handleDownloadImage}
                className="px-5 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
              >
                Download Image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);


}

export default BusinessProfile;
