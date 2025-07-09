export default function InternNavItems({ navigate }) {
  return (
    <>
      <button onClick={() => navigate('/intern-tasks')} className="text-gray-300 hover:text-white">Tasks</button>
      <button onClick={() => navigate('/intern-reports')} className="text-gray-300 hover:text-white">Reports</button>
    </>
  );
}