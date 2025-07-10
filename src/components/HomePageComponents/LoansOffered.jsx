import { useEffect, useRef, useState } from "react";
import LoanCard from "./LoanCard.jsx";
import loansData from "./loanData.js";

const LoansOffered = () => {
    const containerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const scrollAmount = useRef(0); // persist scroll position

    useEffect(() => {
        const container = containerRef.current;

        const scroll = () => {
        if (container && !isPaused) {
            scrollAmount.current += 1;
            container.scrollLeft = scrollAmount.current;

            // Loop when reached end
            if (scrollAmount.current >= container.scrollWidth - container.clientWidth) {
            scrollAmount.current = 0;
            }
        }
        };

        const interval = setInterval(scroll, 20); // speed

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleCardClick = () => {
        setIsPaused(true);

        // Resume after 3 seconds
        setTimeout(() => {
        setIsPaused(false);
        }, 3000);
    };

    const repeatedLoans = [...loansData, ...loansData, ...loansData];

    return (
        <section className="py-10 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#2c3e50]">
            Loans We Offer
        </h1>
        <div
            ref={containerRef}
            className="flex overflow-x-scroll no-scrollbar whitespace-nowrap px-4"
        >
            {repeatedLoans.map((loan, index) => (
            <div key={index} className="inline-block" onClick={handleCardClick}>
                <LoanCard
                type={loan.type}
                requirements={loan.requirements}
                note={loan.note}
                />
            </div>
            ))}
        </div>
        </section>
    );
};

export default LoansOffered;
