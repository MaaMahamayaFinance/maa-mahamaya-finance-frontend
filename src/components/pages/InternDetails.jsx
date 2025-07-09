import { useEffect, useState } from "react";
import { fetchAllInterns, createInternIdCard, searchInternByUniqueId } from "../api/internAPI.js";
import InternCard from "../AdminDashboardComponents/InternCard.jsx";
import SearchBar from "../../utils/SearchBar.jsx"; // adjust path
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

  const handleSearch = async (uniqueId) => {
    if (!uniqueId) {
      loadInterns(); // Reset list
      return;
    }

    try {
      const intern = await searchInternByUniqueId(uniqueId);
      setInterns([intern]);
    } catch (err) {
      setInterns([]); // No result
    }
  };

  const handleCreateId = async (intern) => {
    try {
      const res = await createInternIdCard(intern);
      toast.success(res.message || "ID Card created!");
      setInterns((prev) =>
        prev.map((intn) =>
          intn.email === intern.email ? { ...intn, isIdCardCreated: true } : intn
        )
      );
    } catch (error) {
      toast.error("Failed to create ID Card.");
    }
  };

  const handleDeleteInterns = (deletedId) => {
    setInterns((prev) => prev.filter((biz) => biz.uniqueId !== deletedId));
  };

  useEffect(() => {
    loadInterns();
  }, []);

  return (
    <div className="relative p-4 sm:p-6 min-h-screen">
      <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center underline">
        Intern Details
      </h1>

      <SearchBar placeholder="Search Intern by Unique ID" onSearch={handleSearch} />

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : interns.length === 0 ? (
        <p className="text-center text-red-500">No intern found.</p>
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
              onDelete={handleDeleteInterns}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InternDetails;
