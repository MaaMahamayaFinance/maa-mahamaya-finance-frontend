import { useEffect, useState } from "react";
import { fetchAllInterns, createInternIdCard } from "../api/internAPI.js";
import InternCard from "../AdminDashboardComponents/InternCard.jsx";
import toast from "react-hot-toast";

const InternDetails = () => {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadInterns = async () => {
    try {
      const data = await fetchAllInterns();
      setInterns(data);
    } catch (error) {
      console.error("Error fetching interns:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateId = async (intern) => {
    try {
      console.log("Creating ID card for intern:", intern);
      const res = await createInternIdCard(intern);
      toast.success(res.message || "ID Card created!");

      setInterns((prev) =>
        prev.map((intn) =>
          intn.email === intern.email ? { ...intn, isIdCardCreated: true } : intn
        )
      );
    } catch (error) {
      toast.error("Failed to create ID Card.");
      console.error(error);
    }
  };

  useEffect(() => {
    loadInterns();
  }, []);

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-300">
      <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center underline">Intern Details</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interns.map((intn) => (
            <InternCard
              key={intn._id}
              intern={intn}
              onCreateId={handleCreateId}
              isIdCreated={intn.isIdCardCreated}
              isOfferLetterCreated={intn.isOfferLetterCreated}
              isCertificateCreated={intn.isCertificateCreated}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InternDetails;
