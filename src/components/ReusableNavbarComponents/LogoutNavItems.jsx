// components/nav/EmployeeNavItems.jsx
export default function CustomerNavItems({ navigate }) {
    return (
        <>
        {/* <button onClick={() => navigate('/employee-tasks')} className="text-gray-300 hover:text-white">Tasks</button>
        <button onClick={() => navigate('admin-dasboard/employee-details')} className="text-gray-300 hover:text-white">Reports</button>
        <button onClick={() => navigate('admin-dasboard/employee-details')} className="text-gray-300 hover:text-white">Users</button> */}
        <button onClick={() => navigate('/services')} className="text-gray-300 hover:text-white">SERVICES</button>
        </>
    );
}