import React from "react";

const BusinessCard = ({ business, onCreateId, isIdCreated }) => {
    const {
        name,
        email,
        role,
        subRole,
        address,
        pincode,
        mobileNumber,
        profilePhoto,
    } = business;

    return (
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md m-4 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-start justify-between gap-4">
            {/* Left: Text Content */}
            <div className="flex-1 text-sm text-gray-700 space-y-1">
            <h2 className="text-xl font-semibold text-gray-800 capitalize mb-2">{name}</h2>
            <p><span className="font-medium">Email:</span> {email}</p>
            <p><span className="font-medium">Role:</span> {role}</p>
            <p><span className="font-medium">Sub Role:</span> {subRole}</p>
            <p><span className="font-medium">Address:</span> {address}</p>
            <p><span className="font-medium">Pincode:</span> {pincode}</p>
            <p><span className="font-medium">Mobile:</span> {mobileNumber}</p>
            </div>

            {/* Right: Profile Photo */}
            {profilePhoto && (
            <div className="flex-shrink-0">
                <img
                src={profilePhoto}
                alt={`${name}'s profile`}
                className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 shadow-md hover:scale-105 transition-transform duration-200"
                onError={(e) => (e.target.style.display = "none")}
                />
            </div>
            )}
        </div>

        {/* Action Button or Status */}
        {!isIdCreated ? (
            <div className="mt-5 text-left">
            <button
                onClick={() => onCreateId(business)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition-colors duration-200"
            >
                Create ID Card
            </button>
            </div>
        ) : (
            <p className="mt-5 text-left text-sm font-medium text-green-600">
            ✅ ID Card Created
            </p>
        )}
        </div>
    );
};

export default BusinessCard;
