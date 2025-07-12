import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import HeroImage from "../../../public/heroImage.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HomePageHeroSection = () => {
  const [showCount, setShowCount] = useState(false);

  return (
    <section id="home-hero" className="py-12 px-4 md:px-8 mt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => setShowCount(true)} // ✅ Trigger count-up
        >
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-2"
            variants={textVariants}
            custom={1}
          >
            <span className="text-indigo-700">India's Trusted Financial Partner</span>
          </motion.h1>

          <motion.span
            className="text-2xl font-semibold text-gray-800 block"
            variants={textVariants}
            custom={2}
          >
            Empowering Dreams with the Right Finance
          </motion.span>

          <motion.p
            className="mt-4 text-gray-700 text-sm md:text-base max-w-md mx-auto md:mx-0"
            variants={textVariants}
            custom={3}
          >
            Unlock better offers, faster approvals, and smarter financial solutions — all in one place.
          </motion.p>

          <motion.blockquote
            className="mt-6 text-lg italic font-medium text-gray-900 border-l-4 border-indigo-600 pl-4"
            variants={textVariants}
            custom={4}
          >
            “When partnerships grow, possibilities multiply.”
          </motion.blockquote>

          {/* Stats Section */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-6"
            variants={textVariants}
            custom={5}
          >
            <div className="text-center sm:text-left">
              <h3 className="text-3xl font-bold text-indigo-700">
                {showCount ? <CountUp end={1500} duration={5} /> : 0}+
              </h3>
              <p className="text-gray-800 text-sm font-medium">Channel Partners</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-3xl font-bold text-indigo-700">
                {showCount ? <CountUp end={486} duration={5} /> : 0}+
              </h3>
              <p className="text-gray-800 text-sm font-medium">NBFC, MFI, BANKING, Private Institutions Partners</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 w-full"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={HeroImage}
            alt="Financial Banner"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageHeroSection;
