import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import faq from "../../../public/faq.svg"; // Replace with your path

const faqData = [
  {
    question: "What types of loans do you offer?",
    answer:
      "We offer personal loans, business loans, home loans, and education loans with flexible repayment options.",
  },
  {
    question: "What is the eligibility for applying for a loan?",
    answer:
      "You must be at least 21 years old, have a stable source of income, and a valid ID and address proof.",
  },
  {
    question: "How long does it take to get loan approval?",
    answer:
      "Loan approvals usually take 24 to 48 hours after successful submission of all required documents.",
  },
  {
    question: "Is there any processing fee?",
    answer:
      "Yes, a nominal processing fee of 1-2% is charged based on the loan amount and type.",
  },
  {
    question: "Do you offer credit cards?",
    answer:
      "Yes, we offer a range of credit cards with benefits like cashback, travel rewards, and no annual fee options.",
  },
  {
    question: "How can I check my loan application status?",
    answer:
      "You can log in to your account dashboard or contact our support team via phone, chat, or email to check the status.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-start gap-10">
      {/* Left - FAQ content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">FAQs</h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 mb-5 pb-4 transition-all"
          >
            <button
              className="w-full flex items-start gap-2 text-left group"
              onClick={() => toggleIndex(index)}
            >
              <span className="text-indigo-600 font-bold text-xl">
                {index + 1}.
              </span>
              <span className="font-semibold text-gray-900 group-hover:text-indigo-700 transition">
                {item.question}
              </span>
              <span className="ml-auto mt-1 text-indigo-600">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="pl-6 pr-2 pt-2 text-gray-600 text-sm"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Right - Illustration image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={faq}
          alt="FAQ Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default FAQSection;
