import { motion } from "framer-motion";
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
  return (
    <section className="py-12 px-4 md:px-8 mt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-2"
            variants={textVariants}
            custom={1}
          >
            <span className="text-indigo-600">India's Trusted Financial Partner</span>
          </motion.h1>
          <motion.span
            className="text-2xl font-medium text-gray-700 block"
            variants={textVariants}
            custom={2}
          >
            Empowering Dreams with the Right Finance
          </motion.span>
          <motion.p
            className="mt-4 text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0"
            variants={textVariants}
            custom={3}
          >
            Unlock better offers, faster approvals, and smarter financial solutions all in one place.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex-1 w-full"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={HeroImage}
            alt="Insurance Banner"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageHeroSection;
