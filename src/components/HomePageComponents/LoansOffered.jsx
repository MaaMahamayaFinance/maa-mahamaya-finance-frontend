import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import LoanCard from "./LoanCard.jsx";
import loansData from "./loanData.js";

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
          container.scrollWidth / 3 // adjust if you repeat 3 times
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
            <LoanCard {...loan} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoansOffered;
