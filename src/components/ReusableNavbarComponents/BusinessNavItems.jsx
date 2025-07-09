export default function BusinessNavItems({ navigate }) {
  return (
    <>
      <button onClick={() => navigate('/employee-tasks')} className="text-gray-300 hover:text-white">Tasks</button>
      <button onClick={() => navigate('/employee-reports')} className="text-gray-300 hover:text-white">Reports</button>
    </>
  );
}