import { motion } from "framer-motion";
import Footer from "./HomePageComponents/Footer";

const services = [
  {
    title: "Financial Consulting",
    description: "Expert financial guidance tailored to your needs, helping you make informed investment, savings, and spending decisions for a secure future.",
    image: "/public/Financialconsultant.png",
  },
  {
    title: "Loans",
    description: "Get access to personal, home, business, or auto loans with transparent rates and fast processing tailored to your financial profile.",
    image: "/public/loan.png",
  },
  {
    title: "Insurance",
    description: "Protect what matters with our range of insurance options including life, health, auto, and commercial coverage.",
    image: "/public/insurance.png",
  },
  {
    title: "Retirement Planning",
    description: "Plan your retirement smartly with expert strategies to build a financially secure and independent future.",
    image: "/public/retirementPlanning.png",
  },
  {
    title: "Budgeting",
    description: "Create and manage effective budgets to control your spending, maximize savings, and reach your financial goals faster.",
    image: "/public/budgeting.png",
  },
  {
    title: "Financial Accounting",
    description: "Accurate, compliant accounting services to manage your books, taxes, and financial reports with clarity and precision.",
    image: "/public/financialAccounting.png",
  },
  {
    title: "Auto Insurance",
    description: "Comprehensive and customizable auto insurance plans to protect your vehicle and passengers on every journey.",
    image: "/public/autoInsurance.png",
  },
  {
    title: "Commercial Insurance",
    description: "Safeguard your business operations with tailored commercial insurance plans for every industry and scale.",
    image: "/public/commercialn.png",
  },
  {
    title: "Health Insurance",
    description: "Affordable health insurance options for individuals and families, ensuring quality care when you need it most.",
    image: "/public/HealthInsurance.png",
  },
  {
    title: "Homeowners Insurance",
    description: "Protect your home and belongings against risks with reliable homeowners insurance coverage options.",
    image: "/public/homeTown.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Services = () => {
  return (
    <>
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-blue-600">Our</span> Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
              Know More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
      <Footer/>
    </>

  );
};

export default Services;
