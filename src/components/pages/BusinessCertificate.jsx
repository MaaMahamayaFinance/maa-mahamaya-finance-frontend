import React, { useEffect, useState, useContext, useRef } from 'react';
import CertificateTemplate from '../Certificate/CertificateTemplate';
import { fetchMyBusinessCertificate } from '../api/businessAPI';
import { AuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const BusinessCertificate = () => {
    const { token } = useContext(AuthContext);
    const [certificate, setCertificate] = useState(null);
    const certificateRef = useRef();
    const certificateType = "AUTHORIZATION";


    useEffect(() => {
        const getCertificate = async () => {
            try {
                const data = await fetchMyBusinessCertificate(token);
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
            // Use only the certificate box for screenshot
            const canvas = await html2canvas(input, { scale: 2, useCORS: true });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [canvas.width, canvas.height],
            });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`Business_Certificate_${certificate?.name || 'download'}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            toast.error('Failed to download PDF');
        }
    };

    return (
        <>
            {certificate ? (
                <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-2 sm:p-4 md:p-6 relative">
                    {/* Download PDF Button */}
                    <button
                        onClick={handleDownloadPDF}
                        className="fixed top-2 right-2 sm:absolute sm:top-4 sm:right-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md shadow-md transition z-20"
                    >
                        Download PDF
                    </button>
                    {/* Centered Certificate */}
                    <div className="flex justify-center items-center w-full h-full min-h-[300px]">
                        <div
                            ref={certificateRef}
                            className="
                                w-full
                                max-w-[900px]
                                aspect-[3/2]
                                bg-white
                                rounded-md
                                shadow-2xl
                                border border-gray-300
                                flex items-center justify-center
                                mx-auto
                                relative
                                overflow-hidden
                            "
                        >
                            <CertificateTemplate
                                name={certificate.name}
                                date={new Date(certificate.date).toLocaleDateString('en-IN', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                                certificateType="AUTHORIZATION"
                                description={
                                certificateType === "AUTHORIZATION"
                                ? "This is to certify that the above-mentioned business is authorized by Maa Mahamaya Finance to act as an official partner. This certificate grants the holder the authority to represent and perform financial activities as permitted by the organization. The authorization is subject to compliance with all relevant laws and guidelines."
                                : "This is to certify that the above-named individual has successfully completed their internship at Maa Mahamaya Finance. Their dedication, performance, and professionalism during the tenure have been exemplary. We wish them the best in their future endeavors."
                            }
                            />
                        </div>
                    </div>
                    {/* Mobile View Warning */}
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

export default BusinessCertificate;
