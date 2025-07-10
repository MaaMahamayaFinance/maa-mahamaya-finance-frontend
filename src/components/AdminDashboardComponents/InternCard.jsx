import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { deleteIntern } from "../api/internAPI";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { createInternOfferLetter, createInternCertificate } from "../api/internAPI.js";

import {
  FaEnvelope,
  FaUserTag,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaIdCard,
  FaUserCircle,
  FaFileSignature,
  FaTimes,
  FaBuilding,
} from "react-icons/fa";

const InternCard = ({
  intern,
  onCreateId,
  isIdCreated,
  isOfferLetterCreated,
  isCertificateCreated,
  onDelete
}) => {
  const {
    name,
    email,
    uniqueId,
    subRole,
    address,
    pincode,
    mobileNumber,
    profilePhoto,
    _id,
  } = intern;

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [ctcValue, setCtcValue] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [certificateDate, setCertificateDate] = useState("");
  const [offerLetterCreated, setOfferLetterCreated] = useState(isOfferLetterCreated);
  const [certificateCreated, setCertificateCreated] = useState(isCertificateCreated);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const handleGenerateOffer = async () => {
    try {
      setIsSubmitting(true);
      const payload = {
        name,
        email,
        subRole,
        address,
        pincode,
        uniqueId,
        joiningDate,
        ctc: ctcValue,
        userId: _id,
      };
      await createInternOfferLetter(payload);
      toast.success("Offer letter created");
      setOfferLetterCreated(true);
      closeModal();
    } catch (error) {
      console.error("Error generating offer letter:", error);
      toast.error("Failed to generate offer letter");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGenerateCertificate = async () => {
    try {
      setIsSubmitting(true);
      const payload = {
        name,
        email,
        subRole,
        uniqueId,
        date: certificateDate,
        userId: _id,
      };
      await createInternCertificate(payload);
      toast.success("Certificate created");
      setCertificateCreated(true);
      closeModal();
    } catch (error) {
      console.error("Error generating certificate:", error);
      toast.error("Failed to generate certificate");
    } finally {
      setIsSubmitting(false);
    }
  };

  const MySwal = withReactContent(Swal);

  const handleDeleteIntern = async () => {
    const result = await MySwal.fire({
      title: `Delete ${name}?`,
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e3342f',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete',
    });

    if (!result.isConfirmed) return;

    try {
      const token = localStorage.getItem("token");
      await deleteIntern(uniqueId, token);
      toast.success("Intern deleted successfully");
      onDelete?.(uniqueId);
    } catch (error) {
      toast.error(error.message || "Failed to delete intern");
    }
  };

  return (
    <>
      <div className="relative bg-white shadow-md rounded-xl p-4 md:p-6 w-full max-w-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
  <button
    onClick={handleDeleteIntern}
    className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition duration-200"
    title="Delete Intern"
  >
    <FaTrash size={18} />
  </button>

  <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
    {profilePhoto && (
      <div className="flex-shrink-0">
        <img
          src={profilePhoto}
          alt={`${name}'s profile`}
          className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 shadow-md"
          onError={(e) => (e.target.style.display = 'none')}
        />
      </div>
    )}

    <div className="flex-1 text-sm text-gray-700 space-y-2">
      <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
        <FaUserCircle className="text-blue-600" /> {name}
      </h2>
      <p className="flex items-center gap-2">
        <FaEnvelope className="text-gray-500" /> {email}
      </p>
      <p className="flex items-center gap-2">
        <FaUserTag className="text-gray-500" /> Intern ID: {uniqueId}
      </p>
      <p className="flex items-center gap-2">
        <FaBuilding className="text-gray-500" /> Sub Role: {subRole}
      </p>
      <p className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-gray-500" /> {address}, {pincode}
      </p>
      <p className="flex items-center gap-2">
        <FaPhoneAlt className="text-gray-500" /> {mobileNumber}
      </p>
    </div>
  </div>

  <div className="mt-4 flex flex-col sm:flex-row flex-wrap sm:justify-start gap-2">
    {!isIdCreated ? (
      <button
        onClick={() => onCreateId(intern)}
        className="bg-blue-600 justify-center hover:bg-blue-700 text-white text-sm font-semibold px-3 py-1.5 rounded-md transition-colors flex items-center gap-2"
      >
        <FaIdCard /> Create ID Card
      </button>
    ) : (
      <p className="text-sm font-medium text-green-600 flex items-center gap-2">
        <FaCheckCircle /> ID Card Created
      </p>
    )}

    {offerLetterCreated ? (
      <p className="text-sm font-medium text-green-600 flex items-center gap-2">
        <FaCheckCircle /> Offer Letter Created
      </p>
    ) : (
      <button
        onClick={() => openModal("offer")}
        className="md:ml-[43px] bg-blue-600 justify-center hover:bg-blue-700 text-white text-sm font-semibold px-3 py-1.5 rounded-md transition-colors flex items-center gap-2"
        disabled={isSubmitting}
      >
        <FaFileSignature /> Generate Offer Letter
      </button>
    )}

    {certificateCreated ? (
      <p className="text-sm font-medium text-green-600 flex items-center gap-2">
        <FaCheckCircle /> Certificate Created
      </p>
    ) : (
      <button
        onClick={() => openModal("certificate")}
        className="bg-blue-600 hover:bg-blue-700 md:w-full justify-center text-white text-sm font-semibold px-3 py-1.5 rounded-md transition-colors flex items-center gap-2"
        disabled={isSubmitting}
      >
        <FaFileSignature /> Generate Certificate
      </button>
    )}
  </div>
</div>


      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-sm shadow-xl space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaFileSignature className="text-blue-600" />
                {modalType === "offer" ? "Generate Offer Letter" : "Generate Certificate"}
              </h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>

            {modalType === "offer" ? (
              <>
                <label className="block text-sm font-medium text-gray-700">
                  CTC (in LPA)
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    min="0"
                    value={ctcValue}
                    onChange={(e) => setCtcValue(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                  />
                </label>
                <label className="block text-sm font-medium text-gray-700">
                  Joining Date
                  <input
                    type="date"
                    value={joiningDate}
                    onChange={(e) => setJoiningDate(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                  />
                </label>
              </>
            ) : (
              <>
                <label className="block text-sm font-medium text-gray-700">
                  Certificate Generation Date
                  <input
                    type="date"
                    value={certificateDate}
                    onChange={(e) => setCertificateDate(e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                  />
                </label>
              </>
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={modalType === "offer" ? handleGenerateOffer : handleGenerateCertificate}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
                disabled={isSubmitting}
              >
                <FaCheckCircle /> {isSubmitting ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InternCard;
