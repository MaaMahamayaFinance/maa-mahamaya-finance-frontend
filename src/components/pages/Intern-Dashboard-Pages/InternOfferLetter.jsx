import { useEffect, useState, useContext, useRef } from "react";
import InternOfferLetterTemplate from "../../OfferLetter/InternOfferLetterTemplate.jsx";
import { fetchMyInternOfferLetter } from "../../api/internAPI.js";
import { AuthContext } from "../../../context/AuthContext.jsx";
import toast from "react-hot-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InternOfferLetter = () => {
    const { token } = useContext(AuthContext);
    const [offerData, setOfferData] = useState(null);
    const offerRef = useRef();

    useEffect(() => {
        const getOfferLetter = async () => {
        try {
            const data = await fetchMyInternOfferLetter(token);
            setOfferData(data);
        } catch (error) {
            console.error("Failed to fetch offer letter:", error);
            toast.error("Failed to fetch offer letter");
        }
        };

        getOfferLetter();
    }, [token]);

    if (!offerData) return <p className="text-center mt-10">Loading offer letter...</p>;

    const formattedLetterDate = new Date(offerData.createdAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const formattedJoiningDate = new Date(offerData.joiningDate).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const formattedSubRole = offerData.subRole
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

    const downloadPDF = async () => {
        const element = offerRef.current;

        const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        }

        pdf.save(`${offerData.name}_Offer_Letter.pdf`);
    };

    return (
        <div className="p-4">
        <div className="flex justify-end mb-4">
            <button
            onClick={downloadPDF}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
            Download PDF
            </button>
        </div>

        <div ref={offerRef}>
            <InternOfferLetterTemplate
            letterDate={formattedLetterDate}
            joiningDate={formattedJoiningDate}
            name={offerData.name}
            subRole={`${formattedSubRole} Intern`}
            address={offerData.address}
            email={offerData.email}
            pincode={offerData.pincode}
            ctc={`${offerData.ctc} LPA`}
            />
        </div>
        </div>
    );
};

export default InternOfferLetter;
