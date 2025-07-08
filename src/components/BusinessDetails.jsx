import { useEffect, useState } from "react";
import { fetchAllBusiness, createBusinessIdCard } from "./api/businessAPI.js";
import BusinessCard from "./AdminDashboardComponents/BusinessCard.jsx";
import toast from "react-hot-toast";

const BusinessDetails = () => {
    const [business, setBusiness] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadBusiness = async () => {
        try {
        const data = await fetchAllBusiness();
        setBusiness(data);
        } catch (error) {
        console.error("Error fetching business:", error);
        } finally {
        setLoading(false);
        }
    };

    const handleCreateId = async (business) => {
        try {
            console.log("Creating ID card for business:", business);
            const res = await createBusinessIdCard(business);
            toast.success(res.message || "ID Card created!");

            setBusiness((prev) =>
            prev.map((emp) =>
                emp.email === business.email ? { ...emp, isIdCardCreated: true } : emp
            )
            );
        } catch (error) {
            toast.error("Failed to create ID Card.");
            console.error(error);
        }
    };

    useEffect(() => {
        loadBusiness();
    }, []);

    return (
    <div className="p-4 sm:p-6 bg-gradient-to-br text-gray-800 from-indigo-200 via-blue-100 to-purple-300">
        <h1 className="text-2xl font-bold mb-6 text-center ">Business Details</h1>
        {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {business.map((emp) => (
            <BusinessCard
                key={emp._id}
                business={emp}
                onCreateId={handleCreateId}
                isIdCreated={emp.isIdCardCreated}
                isCertificateCreated={emp.isCertificateCreated}
            />
            ))}
        </div>
        )}
    </div>
    );
};

export default BusinessDetails;
