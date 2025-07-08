import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext.jsx';
import { fetchMyInternIdCard } from '../../api/internAPI.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function InternProfile() {
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
        const card = await fetchMyInternIdCard(token); // Change this to `fetchMyInternIdCard` if needed
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

    if (user?.role === 'intern') {
      getIdCard();
    }
  }, [user, token]);

  const convertImageToBase64 = async (url) => {
    try {
      const response = await fetch(url, {
        mode: 'cors',
        credentials: 'omit',
        headers: { 'Accept': 'image/*' },
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
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
    const canvasWidth = canvas.width * ratio;
    const canvasHeight = canvas.height * ratio;
    const x = (pageWidth - canvasWidth) / 2;
    const y = (pageHeight - canvasHeight) / 2;
    pdf.addImage(imgData, 'JPG', x, y, canvasWidth, canvasHeight);
    pdf.save('Intern_ID_Card.pdf');
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
    link.download = 'Intern_ID_Card.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Intern Profile</h2>

      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-1">
          <div className="space-y-2 text-sm md:text-base text-gray-700">
            <p><span className="font-semibold">Name:</span> {user?.name}</p>
            <p><span className="font-semibold">Email:</span> {user?.email}</p>
            <p><span className="font-semibold">Role:</span> {user?.role}</p>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Intern ID Card</h3>

          {loading && <p className="text-gray-500 text-sm">Loading ID card...</p>}
          {!loading && error === 'pending' && (
            <p className="text-yellow-600 text-sm font-medium">
              Your ID card has not been created yet. Please wait for the admin.
            </p>
          )}
          {!loading && error === 'error' && (
            <p className="text-red-500 text-sm">Failed to fetch your ID card.</p>
          )}

          {!loading && !error && idCard && profilePhotoBase64 && (
            <div className="flex flex-col items-center space-y-4">
              <div
                ref={cardRef}
                className="w-full max-w-[300px] h-[470px] relative overflow-hidden rounded-xl shadow-xl bg-white"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: 'linear-gradient(135deg, #f0f4f8 0%, #dbeafe 100%)',
                }}
              >
                <div className="absolute w-[250%] h-[250%] rounded-full top-[-180%] left-[-70%] bg-blue-900 opacity-20"></div>
                <div className="absolute w-[250%] h-[250%] rounded-full bottom-[-180%] right-[-70%] bg-yellow-500 opacity-30"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-yellow-400"></div>

                <div className="relative z-10 h-full flex flex-col items-center justify-between py-4 px-4">
                  <div className="text-center">
                    <img
                      src="/logo.png"
                      alt="Company Logo"
                      className="w-10 h-10 mx-auto rounded-full mb-1"
                      onError={(e) => (e.target.style.display = 'none')}
                    />
                    <h1 className="text-sm font-bold text-gray-700">MAA MAHAMAYA FINANCE</h1>
                  </div>

                  <div className="mt-3">
                    <div className="w-[110px] h-[110px] rounded-full border-4 border-yellow-400 bg-gray-100 flex items-center justify-center shadow">
                      <img
                        src={profilePhotoBase64 || idCard.profilePhoto}
                        alt={idCard.name}
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                  </div>

                  <div className="bg-sky-800 text-white w-full text-center py-1 rounded-md mt-3">
                    <h2 className="text-sm font-semibold uppercase tracking-wide">{idCard.name}</h2>
                    <p className="text-xs font-medium">{idCard.subRole.toUpperCase()}</p>
                  </div>

                  <div className="text-xs text-gray-800 space-y-1 w-full mt-3">
                    {[
                      ['Email', idCard.email],
                      ['Intern Id', idCard.uniqueId],
                      ['Role', idCard.subRole],
                      ['Address', idCard.address],
                      ['Pincode', idCard.pincode],
                      ['Mobile', idCard.mobileNumber],
                    ].map(([label, value]) => (
                      <div key={label} className="flex">
                        <span className="w-16 font-medium">{label}</span>
                        <span className="mr-1">:</span>
                        <span className="flex-1 break-words">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center text-[10px] text-black mt-3">
                    Powered by Maa Mahamaya Finance
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <button
                  onClick={handleDownloadPDF}
                  className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Download PDF
                </button>
                <button
                  onClick={handleDownloadImage}
                  className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
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

export default InternProfile;
