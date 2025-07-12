import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import LoanCard from "./LoanCard.jsx";
import loansData from "./loanData.js";

const gradients = [
  // Purple-Pink (Personal Loan style)
  "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",

  // Blue-Cyan (Home Loan style)
  "bg-gradient-to-br from-[#36d1c4] to-[#1e90ff]",

  // Orange-Red (Car Insurance style)
  "bg-gradient-to-br from-[#ff9966] to-[#ff5e62]",

  // Teal-Green (Health Insurance style)
  "bg-gradient-to-br from-[#11998e] to-[#38ef7d]",

  // Indigo-Blue (Extra)
  "bg-gradient-to-br from-[#6a11cb] to-[#2575fc]",

  // Blue-Violet (Extra)
  "bg-gradient-to-br from-[#43cea2] to-[#185a9d]",

  // Orange-Yellow (Extra)
  "bg-gradient-to-br from-[#f7971e] to-[#ffd200]",

  // Pink-Red (Extra)
  "bg-gradient-to-br from-[#ff6a00] to-[#ee0979]",
];




const LoansOffered = () => {
  const containerRef = useRef(null);
  const scrollAmount = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const isInView = useInView(scrollContainerRef, { once: true });

  // Repeat data to simulate infinity
  const repeatedLoans = [...loansData, ...loansData, ...loansData];

  // Auto scroll logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused) {
        scrollAmount.current += 1;
        container.scrollLeft = scrollAmount.current;

        // Reset scroll halfway (for loop illusion)
        if (
          scrollAmount.current >=
          container.scrollWidth / 3
        ) {
          scrollAmount.current = 0;
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20); // Speed
    return () => clearInterval(interval);
  }, [isPaused]);

  // Animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      ref={scrollContainerRef}
      className="py-16"
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-[#1a202c]"
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Loans We Offer
      </motion.h1>

      <div
        ref={containerRef}
        className="flex overflow-x-scroll no-scrollbar whitespace-nowrap gap-6 px-6 max-h-[400px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {repeatedLoans.map((loan, index) => (
          <motion.div
            key={index}
            className="inline-block snap-start"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.01 }}
            transition={{ delay: index * 0.01 }}
          >
            <LoanCard
              {...loan}
              gradientClass={gradients[index % gradients.length]}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoansOffered;
