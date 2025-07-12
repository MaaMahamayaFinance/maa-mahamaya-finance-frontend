import React from 'react';

const CertificateTemplate = ({ name, date, certificateType }) => {
  return (
    <div className="relative w-full max-w-[900px] mx-auto bg-white shadow-2xl rounded-md border border-gray-300 overflow-hidden
                    h-[400px] sm:h-[500px] md:h-[600px]
                    aspect-[3/2] sm:aspect-[3/2] md:aspect-[900/600]">

      {/* Left Red Ribbon - Responsive */}
      <div className="absolute left-0 top-0 h-full w-4 sm:w-6 md:w-8 bg-red-700 z-10 shadow-md" />
      <div className="absolute left-0 top-[90%] w-0 h-0 z-10
                      border-l-[8px] border-r-[8px] border-t-[12px] sm:border-l-[12px] sm:border-r-[12px] sm:border-t-[18px] md:border-l-[16px] md:border-r-[16px] md:border-t-[24px]
                      border-l-transparent border-r-transparent border-t-red-800" />

      {/* Gold Seal - Responsive */}
      <div className="absolute left-2 sm:left-4 md:left-6 bottom-2 sm:bottom-4 md:bottom-6 
                      w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 
                      bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full 
                      border-2 sm:border-3 md:border-4 border-yellow-600 
                      flex items-center justify-center text-center 
                      text-[6px] sm:text-[8px] md:text-[10px] 
                      font-semibold text-gray-800 z-20 shadow-lg">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[5px] sm:text-[6px] md:text-[8px] font-medium uppercase">{certificateType}</div>
          <div className="text-[5px] sm:text-[6px] md:text-[8px] font-medium uppercase">Certificate</div>
        </div>
      </div>

      {/* Certificate Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center 
                      px-4 sm:px-8 md:px-12 text-center">

        {/* Border - Responsive */}
        <div className="absolute top-3 left-3 right-3 bottom-3 sm:top-4 sm:left-4 sm:right-4 sm:bottom-4 md:top-6 md:left-6 md:right-6 md:bottom-6 
                        border border-black rounded-sm pointer-events-none" />

        {/* Background Ink Effect */}
        <div className="absolute inset-0 bg-[url('/ink-pattern.png')] bg-contain bg-no-repeat opacity-20" />

        {/* Logo - Responsive */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain" />
        </div>

        {/* Main Title - Responsive */}
        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-red-700 tracking-wide z-10 mb-1 sm:mb-2">
          {certificateType}
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-4xl text-red-700 font-medium tracking-wider 
                       mb-3 sm:mb-4 md:mb-6">
          CERTIFICATE
        </h2>

        {/* Name - Responsive */}
        <p className="text-xl sm:text-2xl md:text-3xl italic font-serif text-gray-800 
                      mb-2 sm:mb-3 md:mb-4 z-10 px-2 break-words">
          {name.toUpperCase()}
        </p>

        {/* Description - Responsive */}
        <p className="text-[10px] sm:text-sm md:text-base text-gray-700 
              w-full sm:w-5/6 md:w-4/5 z-10 px-2 leading-relaxed">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>

       
        {/* Footer - Date and Signature - Responsive */}
<div className="flex flex-row justify-between items-center 
                w-full px-4 sm:px-12 md:px-20 
                mt-4 sm:mt-8 md:mt-12 
                text-left z-10 gap-4">
  <div className="text-center sm:text-left">
    <p className="text-xs sm:text-sm text-red-700 font-semibold mb-1">DATE</p>
    <p className="text-gray-800 text-xs sm:text-sm">{date}</p>
  </div>
  <div className="text-center sm:text-left">
    <p className="text-xs sm:text-sm text-red-700 font-semibold mb-1">SIGNATURE</p>
    <div className="w-24 sm:w-32 md:w-40 h-6 sm:h-7 md:h-8 border-b border-gray-500" />
  </div>
</div>
      </div>
    </div>
  );
};

export default CertificateTemplate;