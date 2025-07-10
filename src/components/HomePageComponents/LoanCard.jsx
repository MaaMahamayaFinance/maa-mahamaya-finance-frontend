import { motion } from "framer-motion";
import { FaRupeeSign, FaCheckCircle, FaFileAlt } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tooltipHints = {
  "PAN CARD": "Permanent Account Number – for identity & tax purposes.",
  "AADHAR CARD": "Government-issued ID for identity verification.",
  "3 MONTH SALARY SLIP": "Proof of regular income.",
  "GST REGISTRATION": "Required for businesses to verify tax compliance.",
  "PROPERTY PAPER / ALLOTMENT LETTER COPY": "Verifies ownership of property.",
  "RC INSURANCE OF CAR": "Valid registration certificate and insurance proof.",
};

const LoanCard = ({ type, requirements, note }) => {
    return (
        <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="min-w-[270px] sm:min-w-[320px] max-w-sm rounded-3xl p-5 m-3 text-white bg-gradient-to-br from-[#2b6cb0] to-[#2c5282] shadow-xl hover:shadow-2xl"
        >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
            <FaCheckCircle className="text-green-400 text-xl" />
            <h2 className="text-md font-semibold tracking-wide">
            {type}
            </h2>
        </div>

        {/* Requirement list */}
        <div className="space-y-2">
            {requirements.map((item, index) => {
            const hint = tooltipHints[item.trim().toUpperCase()];
            return (
                <div key={index} className="flex items-start gap-2 text-xs">
                <FaFileAlt className="mt-1 text-[#c3dafe]" />
                {hint ? (
                    <Tippy content={hint}>
                    <span className="cursor-help hover:text-[#90cdf4] transition">
                        {item}
                    </span>
                    </Tippy>
                ) : (
                    <span>{item}</span>
                )}
                </div>
            );
            })}
        </div>

        {/* Footer Note */}
        {note && (
            <div className="mt-5 inline-flex items-center gap-2 text-sm bg-white/10 px-3 py-2 rounded-xl text-[#fbd38d]">
            <FaRupeeSign className="text-[#f6ad55]" />
            {note}
            </div>
        )}
        </motion.div>
    );
};

export default LoanCard;
