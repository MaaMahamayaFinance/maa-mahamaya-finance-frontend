import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-20 " ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Maa Mahamaya Finance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive financial solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            {
              icon: "fas fa-shield-alt",
              title: "Secure & Safe",
              text: "Bank-level security with 256-bit encryption",
            },
            {
              icon: "fas fa-chart-line",
              title: "Smart Analytics",
              text: "AI-powered insights for better decisions",
            },
            {
              icon: "fas fa-users",
              title: "Expert Support",
              text: "24/7 support from certified professionals",
            },
            {
              icon: "fas fa-mobile-alt",
              title: "Mobile First",
              text: "Access your finances anywhere, anytime",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="card-hover text-center p-8 bg-gray-50 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${feature.icon} text-white text-2xl`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
