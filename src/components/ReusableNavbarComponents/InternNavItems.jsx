export default function InternNavItems({ navigate }) {
  return (
    <>
      <button onClick={() => navigate('/intern-tasks')} className="text-[#4F46E5] hover:text-white">Tasks</button>
      <button onClick={() => navigate('/intern-reports')} className="text-[#4F46E5] hover:text-white">Reports</button>
    </>
  );
}