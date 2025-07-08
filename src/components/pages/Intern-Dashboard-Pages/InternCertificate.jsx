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
        pdf.save(`Business_Certificate_${certificate.name}.pdf`);
        } catch (error) {
        console.error('Error generating PDF:', error);
        toast.error('Failed to download PDF');
        }
    };

    return (
        <>
        {certificate ? (
            <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div ref={certificateRef}>
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

            {/* Download PDF Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={handleDownloadPDF}
                    className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md shadow-md transition z-10"
                    >
                    Download PDF
                </button>
            </div>
            </div>
        ) : (
            <div className="text-center text-gray-600 mt-10">Loading certificate...</div>
        )}
        </>
    );
};

export default InternCertificate;
