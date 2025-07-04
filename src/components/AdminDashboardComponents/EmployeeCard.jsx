import React from "react";

const EmployeeCard = ({ employee, onCreateId, isIdCreated }) => {
    const { name, email, address, pincode, mobileNumber, role } = employee;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md m-4 border border-gray-200">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Pincode:</strong> {pincode}</p>
        <p><strong>Mobile:</strong> {mobileNumber}</p>
        <p><strong>Role:</strong> {role}</p>

        {!isIdCreated && (
            <button
            onClick={() => onCreateId(employee)}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
            Create ID Card
            </button>
        )}

        {isIdCreated && (
            <p className="mt-3 text-green-600 font-medium">ID Card Created</p>
        )}
        </div>
    );
};

export default EmployeeCard;
