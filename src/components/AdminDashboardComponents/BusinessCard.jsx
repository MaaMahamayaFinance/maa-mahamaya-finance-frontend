// ✅ Updated BusinessCard.jsx (Perfect Desktop + Mobile Responsive UI)

import React, { useState } from "react";
import toast from "react-hot-toast";
import { createBusinessCertificate, deleteBusiness } from "../api/businessAPI.js";
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  FaEnvelope,
  FaUserTag,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaIdCard,
  FaBuilding,
  FaFileSignature,
  FaTimes
} from "react-icons/fa";

const BusinessCard = ({ business, onCreateId, isIdCreated, isCertificateCreated, onDelete }) => {
  const {
    name,
    email,
    uniqueId,
    subRole,
    address,
    pincode,
    mobileNumber,
    profilePhoto,
  } = business;

  const [isModalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState('');
  const [certificateCreated, setCertificateCreated] = useState(isCertificateCreated);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleGenerateCertificate = async () => {
    try {
      setIsSubmitting(true);
      const payload = {
        name,
        email,
        subRole,
        uniqueId,
        date,
        userId: business._id,
      };

      await createBusinessCertificate(payload);
      toast.success("Certificate created");
      setCertificateCreated(true);
      closeModal();
    } catch (error) {
      console.error("Error generating certificate:", error);
      toast.error("Failed to generate Certificate");
    } finally {
      setIsSubmitting(false);
    }
  };

  const MySwal = withReactContent(Swal);

  const handleDeleteBusiness = async () => {
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
      await deleteBusiness(uniqueId, token);
      toast.success("Business deleted successfully");
      onDelete?.(uniqueId);
    } catch (error) {
      toast.error(error.message || "Failed to delete business");
    }
  };

  return (
    <>
      <div className="relative bg-white shadow-md rounded-xl p-4 md:p-6 w-full max-w-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <button
          onClick={handleDeleteBusiness}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800 transition duration-200"
          title="Delete Business"
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
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          )}

          <div className="flex-1 text-sm text-gray-700 space-y-2">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaBuilding className="text-blue-600" /> {name}
            </h2>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-gray-500" /> {email}
            </p>
            <p className="flex items-center gap-2">
              <FaUserTag className="text-gray-500" /> Bus ID: {uniqueId}
            </p>
            <p className="flex items-center gap-2">
              <FaUserTag className="text-gray-500" /> Sector: {subRole}
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
              onClick={() => onCreateId(business)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-3 py-2 rounded-md transition-colors flex items-center gap-2"
            >
              <FaIdCard /> Create ID Card
            </button>
          ) : (
            <p className="text-sm font-medium text-green-600 flex items-center gap-2">
              <FaCheckCircle /> ID Card Created
            </p>
          )}

          {certificateCreated ? (
            <p className="text-sm font-medium text-green-600 flex items-center gap-2">
              <FaCheckCircle /> Certificate Created
            </p>
          ) : (
            <button
              onClick={openModal}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-3 py-2 rounded-md transition-colors flex items-center gap-2"
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
                <FaFileSignature className="text-blue-600" /> Generate Certificate
              </h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>

            <label className="block text-sm font-medium text-gray-700">
              Generation Date
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </label>

            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleGenerateCertificate}
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

export default BusinessCard;
