import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { FiSmartphone } from "react-icons/fi"; // React icon
import VisionImage from "../../../public/vision.png";

// Animation Variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.4, duration: 1, ease: "easeOut" },
  },
};

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      textControls.start("visible");
      imageControls.start("visible");
    }
  }, [isInView]);

  return (
    <section id="vision" className="px-4 md:px-8 py-20" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14"
        variants={containerVariant}
        initial="hidden"
        animate={textControls}
      >
        {/* Text Section */}
        <motion.div className="flex-1 space-y-6">
          <motion.h2
            className="text-4xl font-bold text-gray-900"
            variants={fadeInUp}
          >
            Our Vision
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base md:text-lg leading-relaxed"
            variants={fadeInUp}
          >
            To become a globally trusted financial powerhouse that transforms
            lives through responsible financial products, informed decisions,
            and strategic guidance.
          </motion.p>

          <motion.h2
            className="text-4xl font-bold text-gray-900 pt-8"
            variants={fadeInUp}
          >
            Our Mission
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base md:text-lg leading-relaxed"
            variants={fadeInUp}
          >
            To empower individuals and businesses with the right financial
            tools, education, and consultancy — enabling them to make confident,
            sustainable, and smart financial decisions.
          </motion.p>

          <motion.div
            className="flex items-start gap-4 pt-4"
            variants={fadeInUp}
          >
            <div className="bg-indigo-600 text-white p-3 rounded-lg shadow-lg">
              <FiSmartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Empowering Finance with Innovation & Trust
              </h3>
              <p className="text-gray-700 text-sm">
                We strive to lead with responsibility, security, and innovation,
                ensuring faster approvals, smarter lending solutions, and
                personalized service for all.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial="hidden"
          animate={imageControls}
          variants={imageVariant}
        >
          <img
            src={VisionImage}
            alt="Vision Illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VisionSection;
