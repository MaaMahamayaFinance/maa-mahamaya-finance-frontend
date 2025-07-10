import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
    {
    question: "What types of loans do you offer?",
    answer: "We offer personal loans, business loans, home loans, and education loans with flexible repayment options."
    },
    {
        question: "What is the eligibility for applying for a loan?",
        answer: "You must be at least 21 years old, have a stable source of income, and a valid ID and address proof."
    },
    {
        question: "How long does it take to get loan approval?",
        answer: "Loan approvals usually take 24 to 48 hours after successful submission of all required documents."
    },
    {
        question: "Is there any processing fee?",
        answer: "Yes, a nominal processing fee of 1-2% is charged based on the loan amount and type."
    },
    {
        question: "Do you offer credit cards?",
        answer: "Yes, we offer a range of credit cards with benefits like cashback, travel rewards, and no annual fee options."
    },
    {
        question: "How can I check my loan application status?",
        answer: "You can log in to your account dashboard or contact our support team via phone, chat, or email to check the status."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 px-4 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
            {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-300 mb-4">
                <button
                    className="w-full flex justify-between items-center py-4 text-left"
                    onClick={() => toggleIndex(index)}
                >
                    <span className="text-lg font-medium">{item.question}</span>
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>

                <AnimatePresence initial={false}>
                    {openIndex === index && (
                        <motion.div
                        key="answer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden pb-4 text-gray-600"
                        layout
                        >
                        <div>{item.answer}</div>
                        </motion.div>
                    )}
                </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQSection;