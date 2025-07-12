import React, { useEffect, useState, useContext, useRef } from 'react';
import CertificateTemplate from '../../Certificate/CertificateTemplate.jsx';
import { fetchMyInternCertificate } from '../../api/internAPI.js';
import { AuthContext } from '../../../context/AuthContext.jsx';
import toast from 'react-hot-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const InternCertificate = () => {
    const { token } = useContext(AuthContext);
    const [certificate, setCertificate] = useState(null);
    const certificateRef = useRef();

    useEffect(() => {
        const getCertificate = async () => {
            try {
                const data = await fetchMyInternCertificate(token);
                setCertificate(data);
            } catch (error) {
                console.error('Error fetching certificate:', error);
                toast.error('Failed to load certificate');
            }
        };

        getCertificate();
    }, [token]);

    const handleDownloadPDF = async () => {
        const input = certificateRef.current;
        if (!input) return;

        try {
            const canvas = await html2canvas(input, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [canvas.width, canvas.height],
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`Internship_Certificate_${certificate.name}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            toast.error('Failed to download PDF');
        }
    };

    return (
        <>
            {certificate ? (
                <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center 
                                p-2 sm:p-4 md:p-6 relative">

                    {/* Download PDF Button - Responsive positioning */}
                    <button
                        onClick={handleDownloadPDF}
                        className="fixed top-4 right-4 sm:absolute sm:top-4 sm:right-4 
                                   bg-red-600 hover:bg-red-700 text-white font-semibold 
                                   px-3 py-2 sm:px-4 sm:py-2 
                                   text-xs sm:text-sm
                                   rounded-md shadow-md transition z-20
                                   touch-manipulation"
                    >
                        Download PDF
                    </button>

                    {/* Certificate Container */}
                    <div ref={certificateRef} className="w-full max-w-6xl">
                        <CertificateTemplate
                            name={certificate.name}
                            date={new Date(certificate.date).toLocaleDateString('en-IN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                            certificateType="INTERNSHIP"
                        />
                    </div>

                    {/* Mobile Instructions */}
                    <div className="mt-4 text-center text-gray-600 text-sm sm:hidden px-4">
                        <p>Rotate your device to landscape mode for better viewing</p>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center text-gray-600">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-4"></div>
                        <p>Loading certificate...</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default InternCertificate;
