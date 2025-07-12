import { useState } from "react";
import { motion } from "framer-motion";
import { FaRupeeSign, FaFileAlt, FaInfoCircle } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const tooltipHints = {
  "PAN CARD": "Permanent Account Number – for identity & tax purposes.",
  "AADHAR CARD": "Government-issued ID for identity verification.",
  "3 MONTH SALARY SLIP": "Proof of regular income.",
  "GST REGISTRATION": "Required for businesses to verify tax compliance.",
  "PROPERTY PAPER / ALLOTMENT LETTER COPY": "Verifies ownership of property.",
  "RC INSURANCE OF CAR": "Valid registration certificate and insurance proof.",
};

const LoanCard = ({ type, requirements, note, gradientClass }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[360px] h-[400px] mx-4 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front Side */}
        <motion.div
          className={`card-flip-side absolute w-full h-full ${gradientClass} text-white rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4 backface-hidden`}
        >
          <h2 className="text-[15px] relative font-bold text-center leading-tight break-words px-2 w-full">
            {type}
          </h2>
          <p className="text-sm text-white mt-3 px-2">Click to view documents</p>
        </motion.div>

        {/* Back Side */}
        <motion.div
        className="card-flip-side absolute w-full h-full bg-white rounded-xl shadow-xl p-5 text-sm text-gray-800 transform rotateY-180 backface-hidden flex flex-col"
      >
        <h3 className="text-md font-bold mb-2 text-indigo-600 text-center tracking-wide">{type}</h3>
        <div className="border-b border-indigo-100 my-2"></div>
        <div className="flex-1 pr-1 overflow-y-auto custom-scroll space-y-2 mb-3">
          {requirements.map((req, i) => {
            const hint = tooltipHints[req.trim().toUpperCase()];
            return (
              <div
                key={i}
                className="flex items-start gap-2 px-2 py-[7px] rounded-lg transition-all hover:bg-indigo-50 group"
              >
                <FaFileAlt className="mt-[2px] text-indigo-600 min-w-[13px]" />
                {hint ? (
                  <Tippy content={hint} delay={[100, 50]}>
                    <span className="cursor-help hover:text-indigo-600 font-medium break-words whitespace-normal flex items-center gap-1">
                      {req}
                      <FaInfoCircle className="ml-1 text-indigo-500 text-xs group-hover:text-indigo-600" />
                    </span>
                  </Tippy>
                ) : (
                  <span className="break-words whitespace-normal">{req}</span>
                )}
              </div>
            );
          })}
        </div>
        {note && (
          <div className="mt-auto flex items-center gap-2 bg-yellow-50 rounded-lg px-3 py-2 text-yellow-700 font-semibold shadow-inner border border-yellow-100">
            <FaRupeeSign /> 
            <span className="text-xs">{note}</span>
          </div>
        )}
      </motion.div>

      </div>
      {/* Custom Scrollbar */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #4f46e5;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default LoanCard;
