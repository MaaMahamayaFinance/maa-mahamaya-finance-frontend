import React, { useState, useContext } from 'react';
import { useMatchingBusinesses } from '../../api/customerAPI.js';
import ServiceCard from '../../CustomerDashboardComponents/ServiceCard';
import { AuthContext } from '../../../context/AuthContext.jsx';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const [page, setPage] = useState(1);
    const limit = 10;

    const { data, isLoading, isError } = useMatchingBusinesses(user?.id, page, limit);

    if (isLoading) return <p className="text-center mt-10 text-gray-600">Loading services...</p>;
    if (isError) return <p className="text-center mt-10 text-red-600">Failed to load services.</p>;

    return (
        <div className="h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200 relative">
        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 w-full max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Services in your Area</h1>

            {data?.businesses?.length === 0 ? (
            <p className="text-gray-500 text-center">No nearby businesses found.</p>
            ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-32">
                {data.businesses.map((biz) => (
                <ServiceCard key={biz._id} business={biz} />
                ))}
            </div>
            )}
        </div>

        {/* Fixed pagination bar at the bottom */}
        <div className="fixed bottom-0 left-0 w-full bg-white py-4 shadow-inner flex justify-center items-center gap-4 z-50">
            <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
            Previous
            </button>
            <span className="text-gray-700 font-medium">
            Page {page} of {data.totalPages}
            </span>
            <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === data.totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
            Next
            </button>
        </div>
        </div>
    );
};

export default ServiceDetails;
