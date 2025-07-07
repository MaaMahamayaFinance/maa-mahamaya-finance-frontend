import { useEffect, useState } from "react";
import { fetchAllEmployees, createEmployeeIdCard } from "../api/employeeAPI.js";
import EmployeeCard from "../AdminDashboardComponents/EmployeeCard.jsx";
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

    const handleCreateId = async (employee) => {
        try {
        console.log("Creating ID card for employee:", employee);
        const res = await createEmployeeIdCard(employee);
        toast.success(res.message || "ID Card created!");

        setEmployees((prev) =>
            prev.map((emp) =>
            emp.email === employee.email ? { ...emp, isIdCardCreated: true } : emp
            )
        );
        } catch (error) {
        toast.error("Failed to create ID Card.");
        console.error(error);
        }
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-300">
        <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center underline">Employee Details</h1>
        {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((emp) => (
            <EmployeeCard
                key={emp._id}
                employee={emp}
                onCreateId={handleCreateId}
                isIdCreated={emp.isIdCardCreated}
            />
            ))}
        </div>
        )}
    </div>
    );

};

export default EmployeeDetails;
