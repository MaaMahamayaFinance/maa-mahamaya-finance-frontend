import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import VisionImage from "../../../public/vision.png";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
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
    <section id="vision" className="px-4 md:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate={textControls}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={textVariant}
            custom={1}
          >
            Our Vision
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            variants={textVariant}
            custom={2}
          >
            At Maa Mahamaya Finance, we envision a financially empowered India
            by delivering transparent, technology-driven financial solutions
            tailored to every individual and business. Our goal is to be a
            trusted partner in every step of your financial journey.
          </motion.p>

          <motion.div
            className="flex items-start gap-4"
            variants={textVariant}
            custom={3}
          >
            <div className="bg-indigo-600 text-white p-3 rounded-lg">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"
                />
              </svg>
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
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
