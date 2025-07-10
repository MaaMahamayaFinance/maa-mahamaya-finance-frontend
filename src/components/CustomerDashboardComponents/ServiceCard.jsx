import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaIndustry, FaIdCard } from 'react-icons/fa';

const ServiceCard = ({ business }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 relative flex flex-col justify-between h-full">
        <div className="absolute top-2 right-2">
            <img
            src={business.profilePhoto}
            alt="Business"
            className="h-12 w-12 rounded-full object-cover border"
            />
        </div>
        <div className="pr-14">
            <h2 className="text-lg font-bold text-blue-900 flex items-center gap-2">
            <FaIndustry className="text-blue-700" />
            {business.name}
            </h2>
            <p className="text-sm text-gray-700 mt-1">
            <FaEnvelope className="inline mr-2 text-gray-500" />
            {business.email}
            </p>
            <p className="text-sm text-gray-700">
            <FaIdCard className="inline mr-2 text-gray-500" />
            Bus Id: {business.businessId}
            </p>
            <p className="text-sm text-gray-700">
            <FaIndustry className="inline mr-2 text-gray-500" />
            Sector: {business.sector}
            </p>
            <p className="text-sm text-gray-700">
            <FaMapMarkerAlt className="inline mr-2 text-gray-500" />
            {business.address}
            </p>
            <p className="text-sm text-gray-700">
            <FaPhone className="inline mr-2 text-gray-500" />
            {business.mobileNumber}
            </p>
        </div>
        </div>
    );
};

export default ServiceCard;
