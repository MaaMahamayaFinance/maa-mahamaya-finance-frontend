import { useState } from "react";
import { motion } from "framer-motion";
import { FaRupeeSign, FaFileAlt } from "react-icons/fa";
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

const LoanCard = ({ type, requirements, note }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[280px] h-[360px] mx-4 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-700"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front Side */}
        <motion.div
        className="absolute w-full h-full bg-gradient-to-r from-sky-200 via-indigo-300 to-blue-400 text-black rounded-xl shadow-xl flex flex-col justify-center items-center text-center p-4 backface-hidden"
        >
        <h2 className="text-[15px] relative font-bold text-center leading-tight break-words px-2 w-full">
            {type}
            </h2>
        <p className="text-sm text-gray-800 mt-3 px-2">Click to view documents</p>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute w-full h-full bg-white rounded-xl shadow-xl p-4 text-sm text-gray-800 transform rotateY-180 backface-hidden"
        >
          <h3 className="text-md font-bold mb-3 text-indigo-600">{type}</h3>
          <div className="space-y-1 mb-3 max-h-[250px] pr-1 overflow-y-auto">
            {requirements.map((req, i) => {
              const hint = tooltipHints[req.trim().toUpperCase()];
              return (
                <div key={i} className="flex items-start gap-2 text-xs leading-snug">
                  <FaFileAlt className="mt-[3px] text-indigo-400 min-w-[12px]" />
                  {hint ? (
                    <Tippy content={hint} delay={[100, 50]}>
                      <span className="cursor-help hover:text-indigo-600 break-words whitespace-normal">
                        {req}
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
            <div className="mt-3 flex items-center gap-2 text-yellow-600 font-medium text-xs">
              <FaRupeeSign /> {note}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LoanCard;
