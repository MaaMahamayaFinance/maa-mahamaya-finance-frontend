import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { submitBusinessKYC } from '../../api/businessAPI.js';

const KYCModal = ({ isOpen, onClose, token, userId, onSubmitted }) => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!aadhaarNumber || !panNumber) {
      return toast.error('Please fill all fields');
    }

    if (!/^\d{12}$/.test(aadhaarNumber)) {
      return toast.error('Aadhaar number must be 12 digits');
    }

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(panNumber)) {
      return toast.error('Invalid PAN format (ABCDE1234F)');
    }

    setLoading(true);
    const result = await submitBusinessKYC({ userId, aadhaarNumber, panNumber, token });
    setLoading(false);

    if (result?.success) {
      toast.success('KYC submitted successfully!');
      setAadhaarNumber('');
      setPanNumber('');
      onSubmitted(); // 🔁 Notify parent instead of onClose()
    } else {
      toast.error(result?.message || 'Submission failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-6"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Fill KYC Details</h2>

        <input
          type="text"
          placeholder="Aadhaar Number"
          value={aadhaarNumber}
          onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, ''))}
          className="w-full mb-3 p-2 border rounded"
          maxLength={12}
        />

        <input
          type="text"
          placeholder="PAN Number"
          value={panNumber}
          onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
          className="w-full mb-4 p-2 border rounded"
          maxLength={10}
        />

        <div className="flex justify-end gap-3 flex-wrap">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 w-full sm:w-auto"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default KYCModal;
