import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partnerLogos = [
  "/icc.png",
  "/HDFC.png",
  "/yes bank.png",
  "/induslnd bank.png",
  "/indian bank.png",
  "/canra bank.png",
  "/Allied bank.jpg",
  "/pnb bank.png",
  "/union bank.png",
  "/idfc.png",
  "/citi bank.png",
  "/public.png",
  "/sbi.png",
  "/Kotak.jpg",
  "/Axis.png",
  "/BOI.png",
  "/U.png",
  "/airtle.png"
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const FeaturedPartners = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly collaborate with these trusted financial institutions.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center p-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow hover:shadow-xl transition-shadow h-[100px]"
            >
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="max-h-14 object-contain hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPartners;
