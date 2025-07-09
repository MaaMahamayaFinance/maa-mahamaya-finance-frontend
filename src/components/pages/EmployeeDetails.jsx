import { useEffect, useState } from "react";
import {
    fetchAllEmployees,
    createEmployeeIdCard,
    searchEmployeeByUniqueId,
} from "../api/employeeAPI.js";
import EmployeeCard from "../AdminDashboardComponents/EmployeeCard.jsx";
import SearchBar from "../../utils/SearchBar.jsx";
import toast from "react-hot-toast";

const EmployeeDetails = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadEmployees = async () => {
        try {
        const data = await fetchAllEmployees();
        setEmployees(data);
        } catch (error) {
        console.error("Error fetching employees:", error);
        } finally {
        setLoading(false);
        }
    };

    const handleSearch = async (uniqueId) => {
        if (!uniqueId) {
        loadEmployees(); // Reset list if search input is cleared
        return;
        }

        try {
        const employee = await searchEmployeeByUniqueId(uniqueId);
        setEmployees([employee]);
        } catch (err) {
        setEmployees([]); // No match found
        }
    };

    const handleCreateId = async (employee) => {
        try {
        const res = await createEmployeeIdCard(employee);
        toast.success(res.message || "ID Card created!");
        setEmployees((prev) =>
            prev.map((emp) =>
            emp.email === employee.email
                ? { ...emp, isIdCardCreated: true }
                : emp
            )
        );
        } catch (error) {
        toast.error("Failed to create ID Card.");
        console.error(error);
        }
    };

    const handleDeleteEmployees = (deletedId) => {
        setEmployees((prev) => prev.filter((emp) => emp.uniqueId !== deletedId));
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    return (
        <div className="relative p-4 sm:p-6 min-h-screen">
        <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center underline">
            Employee Details
        </h1>

        <SearchBar
            placeholder="Search Employee by Unique ID"
            onSearch={handleSearch}
        />

        {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
        ) : employees.length === 0 ? (
            <p className="text-center text-red-500">No employee found.</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((emp) => (
                <EmployeeCard
                key={emp._id}
                employee={emp}
                onCreateId={handleCreateId}
                isIdCreated={emp.isIdCardCreated}
                isOfferLetterCreated={emp.isOfferLetterCreated}
                onDelete={handleDeleteEmployees}
                />
            ))}
            </div>
        )}
        </div>
    );
};

export default EmployeeDetails;
