export default function EmployeeNavItems({ navigate }) {
  return (
    <>
      <button onClick={() => navigate('/employee-tasks')} className="text-[#4F46E5] hover:text-[#4F46E5]">Tasks</button>
      <button onClick={() => navigate('/employee-reports')} className="text-[#4F46E5] hover:text-[#4F46E5]">Reports</button>
      <button onClick={() => navigate('/employee-reports')} className="text-[#4F46E5] hover:text-[#4F46E5]">Users</button>
    </>
  );
}