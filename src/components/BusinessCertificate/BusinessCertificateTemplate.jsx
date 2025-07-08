import React from 'react';

const BusinessCertificateTemplate = ({ name, date }) => {
  return (

    <div className="relative w-[900px] h-[600px] bg-white shadow-2xl rounded-md border border-gray-300 overflow-hidden">

        {/* Left Red Ribbon */}
        <div className="absolute left-0 top-0 h-full w-8 bg-red-700 z-10 shadow-md" />
        <div className="absolute left-0 top-[90%] w-0 h-0 border-l-[16px] border-r-[16px] border-t-[24px] border-l-transparent border-r-transparent border-t-red-800 z-10" />

        {/* Gold Seal */}
        <div className="absolute left-6 bottom-6 w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full border-4 border-yellow-600 flex items-center justify-center text-center text-[10px] font-semibold text-gray-800 z-20 shadow-lg">
          <div className="flex flex-col justify-center items-center">
            <div className="text-[8px] font-medium uppercase">Authorization</div>
            <div className="text-[8px] font-medium uppercase">Certificate</div>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-12 text-center">

          {/* Border */}
          <div className="absolute top-6 left-6 right-6 bottom-6 border border-black rounded-sm pointer-events-none" />

          {/* Background Ink Effect */}
          <div className="absolute inset-0 bg-[url('/ink-pattern.png')] bg-contain bg-no-repeat opacity-20" />

          {/* Logo */}
          <div className="absolute top-8 left-8">
            <img src="/logo.png" alt="Logo" className="w-28 h-28 object-contain" />
          </div>

          <h1 className="text-4xl font-bold text-red-700 tracking-wide z-10">AUTHORIZATION</h1>
          <h2 className="text-4xl text-red-700 font-medium tracking-wider mb-6">CERTIFICATE</h2>
          <p className="text-3xl italic font-serif text-gray-800 mb-4 z-10">{name.toUpperCase()}</p>

          <p className="text-sm text-gray-600 w-4/5 z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Footer - Date and Signature */}
          <div className="flex justify-between items-center w-full px-20 mt-12 text-left z-10">
            <div>
              <p className="text-sm text-red-700 font-semibold mb-1">DATE</p>
              <p className="text-gray-800 text-sm">{date}</p>
            </div>
            <div>
              <p className="text-sm text-red-700 font-semibold mb-1">SIGNATURE</p>
              <div className="w-40 h-8 border-b border-gray-500" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default BusinessCertificateTemplate;
