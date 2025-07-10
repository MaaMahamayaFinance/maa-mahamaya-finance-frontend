import { HandCoins, Home, Car, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
    {
        icon: <HandCoins size={28} className="text-white" />,
        title: "Personal Loans",
        subtitle: (
            <>
                Instant approval with <br />
                low interest rates
            </>
        ),
        btnText: "Apply Now",
        bg: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    },
    {
        icon: <Home size={28} className="text-white" />,
        title: "Home Loans",
        subtitle: (
            <>
                Get up to ₹50L with <br />
                minimal documentation
            </>
        ),
        btnText: "Check Eligibility",
        bg: "bg-gradient-to-r from-blue-500 to-cyan-400",
    },
    {
        icon: <Car size={28} className="text-white" />,
        title: "Car Insurance",
        subtitle: (
            <>
                Comprehensive plans <br />
                starting at just ₹2499/year
            </>
        ),
        btnText: "Insure Now",
        bg: "bg-gradient-to-r from-orange-400 to-rose-400",
    },
    {
        icon: <HeartPulse size={28} className="text-white" />,
        title: "Health Insurance",
        subtitle: (
            <>
                Cover your family with <br />
                cashless hospitalization
            </>
        ),
        btnText: "Get Covered",
        bg: "bg-gradient-to-r from-teal-400 to-emerald-500",
    },
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const HomeCardSection = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-6 max-w-6xl mx-auto mt-3">
            {cards.map((card, idx) => (
                <motion.div
                    key={idx}
                    className={`rounded-xl p-6 text-white shadow-md flex flex-col justify-between transform hover:-translate-y-1 hover:shadow-xl transition duration-300 ${card.bg}`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={idx}
                >
                    <div className="flex justify-between items-start">
                        <div className="text-sm font-medium">{card.title}</div>
                        {card.icon}
                    </div>
                    <div className="mt-4 text-lg font-light leading-relaxed">
                        {card.subtitle}
                    </div>
                    {card.btnText && (
                        <button className="mt-4 bg-white text-indigo-700 text-sm font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition">
                            {card.btnText}
                        </button>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default HomeCardSection;
