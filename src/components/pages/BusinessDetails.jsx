import { useEffect, useState } from "react";
import { fetchAllBusiness, createBusinessIdCard } from "../api/businessAPI.js";
import BusinessCard from "../AdminDashboardComponents/BusinessCard.jsx";

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
        alert(res.message || "ID Card created!");

        setBusiness((prev) =>
            prev.map((emp) =>
            emp.email === business.email ? { ...emp, isIdCardCreated: true } : emp
            )
        );
        } catch (error) {
        alert("Failed to create ID Card.");
        console.error(error);
        }
    };

    useEffect(() => {
        loadBusiness();
    }, []);

    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Business Details</h1>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="flex flex-wrap">
            {business.map((emp) => (
                <BusinessCard
                key={emp._id}
                business={emp}
                onCreateId={handleCreateId}
                isIdCreated={emp.isIdCardCreated}
                />
            ))}
            </div>
        )}
        </div>
    );
};

export default BusinessDetails;
