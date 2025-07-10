export default function EmployeeNavItems({ navigate }) {
  return (
    <>
      <button onClick={() => navigate('/employee-tasks')} className="text-[#4F46E5] hover:text-[#4F46E5]">TASKS</button>
      <button onClick={() => navigate('/employee-reports')} className="text-[#4F46E5] hover:text-[#4F46E5]">REPORTS</button>
      <button onClick={() => navigate('/employee-reports')} className="text-[#4F46E5] hover:text-[#4F46E5]">USERS</button>
    </>
  );
}