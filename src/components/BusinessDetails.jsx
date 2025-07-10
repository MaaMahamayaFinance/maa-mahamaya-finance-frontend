import { useEffect, useState } from "react";
import { fetchAllBusiness, createBusinessIdCard, searchBusinessByUniqueId } from "./api/businessAPI.js";
import BusinessCard from "./AdminDashboardComponents/BusinessCard.jsx";
import SearchBar from "../utils/SearchBar.jsx";
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

    const handleSearch = async (uniqueId) => {
        if (!uniqueId) {
            loadBusiness(); // Reset if search is cleared
            return;
        }

        try {
            const result = await searchBusinessByUniqueId(uniqueId);
            setBusiness([result]);
        } catch (err) {
            setBusiness([]); // No results found
        }
    };

    const handleCreateId = async (businessItem) => {
        try {
            const res = await createBusinessIdCard(businessItem);
            toast.success(res.message || "ID Card created!");
            setBusiness((prev) =>
                prev.map((b) =>
                    b.email === businessItem.email ? { ...b, isIdCardCreated: true } : b
                )
            );
        } catch (error) {
            toast.error("Failed to create ID Card.");
            console.error(error);
        }
    };

    const handleDeleteBusiness = (deletedId) => {
        setBusiness((prev) => prev.filter((biz) => biz.uniqueId !== deletedId));
    };

    useEffect(() => {
        loadBusiness();
    }, []);

    return (
        <div className="text-gray-800 relative p-4 sm:p-6 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center underline">Business Details</h1>

            <SearchBar placeholder="Search Business by Unique ID" onSearch={handleSearch} />

            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : business.length === 0 ? (
                <p className="text-center text-red-500">No business found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-center">
                    {business.map((emp) => (
                        <div className="flex justify-center w-full" key={emp._id}>
                            <BusinessCard
                                business={emp}
                                onCreateId={handleCreateId}
                                isIdCreated={emp.isIdCardCreated}
                                isCertificateCreated={emp.isCertificateCreated}
                                onDelete={handleDeleteBusiness}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BusinessDetails;
