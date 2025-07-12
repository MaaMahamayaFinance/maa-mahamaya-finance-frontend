import React from "react";
import { motion } from "framer-motion";
import Footer from "../HomePageComponents/Footer";


const teamMembers = [
  {
    name: "Jhon",
    role: "Software Developer",
    img: "/about1.png",
  },
  {
    name: "Deewan Singh Mewada",
    role: "Software Developer",
    img: "/about2.png",
  },
  {
    name: "Nitin",
    role: "Software Developer",
    img: "/about3.png",
  },
  {
    name: "Akshay",
    role: "Sales Head",
    img: "/about4.png",
  },
  {
    name: "Deewan Rajput",
    role: "Web Developer",
    img: "/about5.png",
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

const AboutUs = () => {
  return (
    <>
    <div className="py-16 px-6 max-w-7xl mx-auto space-y-24 text-gray-800">
      {/* About Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-blue-600">About</span> Us
        </h2>
        <h1 className="text-5xl font-bold mb-6">Empowering Dreams, Building Financial Freedom</h1>
        <p className="text-lg leading-8 text-gray-700 max-w-4xl mx-auto">
          Maa Mahamaya Finance is not just a financial service provider — it's a movement towards financial empowerment. We specialize in comprehensive financial products, business consultation, and financial literacy services, tailored to both individuals and enterprises across India and the world.
        </p>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Founded with a bold vision and backed by a team of strategic thinkers and financial experts, we are here to turn complexity into clarity — and your financial goals into reality.
        </p>
      </section>

      {/* Who We Are */}
      <section className="text-center max-w-5xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Who We Are</h2>
        <p className="text-lg text-gray-700">
          We are a team of passionate professionals committed to helping people grow, protect, and understand their wealth. Inspired by the power of Maa Mahamaya — a symbol of strength and wisdom — our company was established to become a trusted financial partner for individuals, startups, SMEs, and enterprises.
        </p>
        <p className="text-gray-600">
          From Tier-1 cities in India to international business hubs, our services reflect reliability, scalability, and ethical commitment.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-center">
        {[
          {
            title: "Our Vision",
            desc: "To become a globally trusted financial powerhouse that transforms lives through responsible financial products, informed decisions, and strategic guidance.",
          },
          {
            title: "Our Mission",
            desc: "To empower individuals and businesses with the right financial tools, education, and consultancy — enabling them to make confident, sustainable, and smart financial decisions.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md"
            initial="hidden"
            animate="visible"
            custom={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What We Do</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {[
            {
              title: "Financial Products & Services",
              items: [
                "Loans (secured/unsecured)",
                "Investment guidance",
                "Insurance facilitation",
                "Credit and debt management",
                "Wealth planning, consultation and literacy",
              ],
            },
            {
              title: "Business Consultations",
              items: [
                "Startup setup and funding strategies",
                "Financial modeling and feasibility studies",
                "Restructuring and turnaround consulting",
                "Market expansion and compliance consultancy",
              ],
            },
            {
              title: "Financial Literacy & Education",
              items: [
                "Workshops and webinars on personal finance",
                "Business finance training for entrepreneurs",
                "Courses on investments, credit, taxation, and more",
                "One-on-one mentorship programs",
              ],
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-left"
              initial="hidden"
              animate="visible"
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="font-bold text-xl mb-2">{section.title}</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-sm text-red-500 italic text-center max-w-3xl mx-auto">
          ⚠️ Important Disclaimer: While we offer educational content and courses on the stock market, Maa Mahamaya Finance is <strong>not SEBI-registered</strong>. Our training is for <strong>educational and awareness purposes only</strong>. Consult certified advisors before investing.
        </p>
      </section>

      {/* Core Values */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-left text-gray-700">
          {[
            "Integrity: We do what’s right, not what’s easy.",
            "Transparency: Clear terms. No hidden agendas.",
            "Empowerment: We educate clients, not just advise them.",
            "Accessibility: Quality services at fair prices for everyone.",
            "Innovation: Using technology and data to bring smarter solutions.",
            "Client-Centricity: Every client is unique. So is our approach.",
          ].map((value, i) => (
            <p key={i}>
              <strong>{value.split(":")[0]}:</strong> {value.split(":")[1]}
            </p>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Maa Mahamaya Finance?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-left text-sm sm:text-base">
          <li><strong>Tailored Financial Solutions:</strong> We listen before we advise. Our services are designed around your needs and goals.</li>
          <li><strong>Global Vision, Local Expertise:</strong> Whether you're in Delhi, Dubai, or Durban — we understand the financial climate, laws, and market behaviors.</li>
          <li><strong>Affordable & High-Impact:</strong> Our services are crafted to deliver exceptional value without straining your pocket.</li>
          <li><strong>Strong Compliance & Ethics:</strong> We follow strict adherence to national and international financial laws and regulatory frameworks depending on the governing bodies of the operational regions.</li>
          <li><strong>One-Stop Financial Partner:</strong> No need to run to multiple consultants — we provide end-to-end financial support under one trusted name.</li>
        </ul>
      </section>

      {/* Final CTA */}
      <section className="text-center max-w-3xl mx-auto text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold mt-12">Ready to Take Charge of Your Financial Future?</h2>
        <p>Let us walk this journey with you — from confusion to confidence, from survival to success.</p>
        <p>Explore our services. Talk to our experts. Begin your journey today.</p>
        <p className="italic font-semibold">Because at Maa Mahamaya Finance,<br />“We don’t just manage money. We build futures.”</p>
      </section>

      {/* Team Section */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold mb-10">People Behind MMF</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden w-64 text-center"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </>


  );
};

export default AboutUs;
