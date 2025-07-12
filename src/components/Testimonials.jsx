import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './HomePageComponents/Footer';

function Testimonials() {
  const navigate = useNavigate();

  const testimonials = [
    {
      quote: "Maa Mahamaya Finance helped me secure my future with their expert advice and personalized service.",
      name: "John Doe",
      role: "Entrepreneur"
    },
    {
      quote: "The team at Maa Mahamaya Finance is professional and trustworthy. Highly recommended!",
      name: "Jane Smith",
      role: "Small Business Owner"
    },
    {
      quote: "Excellent customer service and financial solutions tailored to my needs.",
      name: "Michael Johnson",
      role: "Freelancer"
    },
    {
      quote: "Their financial planning helped me achieve my goals efficiently.",
      name: "Emily Davis",
      role: "Investor"
    },
    {
      quote: "Reliable and transparent service with great support.",
      name: "Robert Brown",
      role: "Business Owner"
    },
    {
      quote: "I highly recommend Maa Mahamaya Finance for all your financial needs.",
      name: "Linda Wilson",
      role: "Consultant"
    }
  ];

  return (
    <>
    <section className="py-12 px-6 max-w-7xl mx-auto">
      {/* Home Button - moved to top right */}
      <div className="flex justify-end mb-8">
        
      </div>

      <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
        <span className="text-blue-600">What</span> Our Clients Say
      </h2>
      <p className="text-xl text-center font-medium text-gray-700 mb-10">
        Hear what our customers have to say about us.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(({ quote, name, role }, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center"
          >
            <p className="text-gray-600 mb-4 text-sm italic">"{quote}"</p>
            <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
            <p className="text-blue-600 font-medium">{role}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Testimonials;
