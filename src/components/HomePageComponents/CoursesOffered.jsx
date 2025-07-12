import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import stockImg from "../../../public/stockmarket.jpg";
import businessImg from "../../../public/businessConsulting.jpg";
import financialImg from "../../../public/Financialconsultant.png";

const courses = [
  {
    title: "Trading Courses",
    description:
      "Learn the art and science of trading with our expert-led courses covering stock, forex, and crypto markets.",
    image: stockImg,
    tooltip: "Includes stock, forex & crypto trading.",
  },
  {
    title: "Business Consulting",
    description:
      "Master consulting strategies and help businesses scale efficiently with practical frameworks and industry insights.",
    image: businessImg,
    tooltip: "Ideal for aspiring or active consultants.",
  },
  {
    title: "Financial Consulting",
    description:
      "Understand budgeting, investing, and client strategy development with our comprehensive financial consulting course.",
    image: financialImg,
    tooltip: "Focuses on planning & wealth strategy.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const CoursesOffered = () => {
  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-blue-600">Courses</span> We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition h-full"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <Tippy content={course.tooltip} placement="top">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg shadow-md">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Tippy>
            <div className="flex flex-col flex-grow justify-between">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              <button className="mt-auto px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
                Know More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoursesOffered;
