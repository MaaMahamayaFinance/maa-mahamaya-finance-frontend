import ContactImage from "../../../public/Contact.png"; // Replace with actual image path
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaHandshake } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-10"
        >
          Contact Us
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Info Section */}
          <motion.div
            className="flex-1 space-y-4 text-gray-700"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">Feel free to reach out</h3>

            <p className="flex items-center gap-2 text-base">
              <FaPhone className="text-indigo-600" /> +91 9798678275
            </p>
            <p className="flex items-center gap-2 text-base">
              <FaEnvelope className="text-indigo-600" /> support@maamfinance.com
            </p>

            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com/company/maa-mahamaya-finance/" target="_blank" className="flex items-center gap-2 text-indigo-700 hover:underline">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 text-indigo-700 hover:underline">
                <FaInstagram /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-indigo-700 hover:underline">
                <FaHandshake /> Let’s Work Together
              </a>
            </div>

            <div className="pt-2">
              <p><span className="font-semibold">TIMINGS:</span> Monday - Saturday, 10AM to 7PM</p>

              <p className="mt-3">
                <span className="font-semibold">HEADQUARTERS:</span> Palamu, Jharkhand - 822115, IN
              </p>

              <p>
                <span className="font-semibold">FOUNDED:</span> 2025
              </p>
              <p>
                <span className="font-semibold">COMPANY SIZE:</span> 201-500 employees
              </p>
              <p>
                <span className="font-semibold">INDUSTRY:</span> Financial Services
              </p>
            </div>

            {/* <p className="text-2xl font-extrabold text-black pt-6">Maa Mahamaya Finance</p> */}
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={ContactImage}
              alt="Contact Illustration"
              className="w-full h-[370px] max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
