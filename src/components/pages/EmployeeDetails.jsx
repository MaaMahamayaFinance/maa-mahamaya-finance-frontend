import React, { useEffect, useState } from "react";
import { fetchAllEmployees, createEmployeeIdCard } from "../api/employeeAPI.js";
import EmployeeCard from "../AdminDashboardComponents/EmployeeCard.jsx";

const EmployeeDetails = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [idCardCreatedEmails, setIdCardCreatedEmails] = useState([]); // NEW STATE

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
        alert(res.message || "ID Card created!");

        // ✅ Add to ID card created list
        setIdCardCreatedEmails((prev) => [...prev, employee.email]);
        } catch (error) {
        alert("Failed to create ID Card.");
        console.error(error);
        }
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Employee Details</h1>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="flex flex-wrap">
            {employees.map((emp) => (
                <EmployeeCard
                key={emp._id}
                employee={emp}
                onCreateId={handleCreateId}
                isIdCreated={idCardCreatedEmails.includes(emp.email)} // NEW PROP
                />
            ))}
            </div>
        )}
        </div>
    );
};

export default EmployeeDetails;
