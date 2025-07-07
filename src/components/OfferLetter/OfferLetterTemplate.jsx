import React from "react";

const OfferLetterTemplate = ({
  letterDate,
  name,
  pincode,
  joiningDate,
  subRole,
  address,
  email,
  ctc
}) => {
  return (
    <div className="offer-letter w-[210mm] mx-auto bg-white p-10 sm:p-12 shadow-2xl text-gray-900 font-serif border border-gray-300">
      <style>{`
        @media print {
          .offer-letter {
            width: 210mm;
            min-height: 297mm;
            padding: 25mm 20mm;
            box-shadow: none;
            border: none;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>

      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4 border-b pb-4">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Company Logo" className="h-20 w-auto" />
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide text-indigo-800 uppercase leading-tight">
              Maa Mahamaya Finance
            </h1>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-600">
              Financial Services
            </p>
            <p className="mt-1 text-sm text-gray-700">
              Email: <span className="font-medium">maamahamayafinance@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="text-sm text-right space-y-1">
          <p className="font-semibold uppercase tracking-wide">Offer Letter</p>
          <p>Date: <span className="font-medium">{letterDate}</span></p>
        </div>
      </header>

      {/* Recipient */}
      <section className="mb-6 text-sm leading-relaxed">
        <p className="mb-1 font-semibold">To,</p>
        <p className="font-medium">{name}</p>
        {address && <p>Address: {address}</p>}
        {pincode && <p>Pincode: {pincode}</p>}
        {email && <p>Email: {email}</p>}
      </section>

      {/* Greeting */}
      <p className="mb-6 text-sm leading-relaxed">
        Dear <span className="font-medium">{name}</span>,
      </p>

      {/* Offer Terms */}
      <ol className="list-decimal list-inside space-y-5 text-sm leading-relaxed text-gray-800">
        <li>
          <strong className="text-indigo-700">Position and Joining Date:</strong><br />
          You will join as a <span className="font-medium">{subRole}</span>; your expected date of joining is <span className="font-medium">{joiningDate}</span>.
        </li>
        <li>
          <strong className="text-indigo-700">Compensation:</strong><br />
          Your annual Cost to Company (CTC) will be <span className="font-medium">{ctc}</span>. Salary will be remitted on the 10th of each month. No PF or ESI will be deducted. Insurance & health policies are not covered by the company.
        </li>
        <li>
          <strong className="text-indigo-700">Working Hours:</strong><br />
          You will work from <span className="font-medium">9 a.m. to 7 p.m.</span> in a work-from-home setup. Sundays are off.
        </li>
        <li>
          <strong className="text-indigo-700">Confidentiality & NDA:</strong><br />
          You must sign a Non‑Disclosure Agreement (NDA) before or on your joining date. Confidentiality must be maintained during and after employment.
        </li>
        <li>
          <strong className="text-indigo-700">Data Protection & Breach Policy:</strong><br />
          You must comply with all data protection laws and internal IT security policies. Violations may result in termination or legal action.
        </li>
        <li>
          <strong className="text-indigo-700">Code of Conduct:</strong><br />
          Uphold professionalism and integrity at all times, in line with company policies and laws.
        </li>
        <li>
          <strong className="text-indigo-700">Termination & Notice Period:</strong><br />
          A 30‑day notice is required for resignation. Immediate termination may occur for breach, poor performance, or misconduct.
        </li>
        <li>
          <strong className="text-indigo-700">Documents Required:</strong><br />
          Submit your PAN, Aadhar, bank details, education/experience proofs, and passport-sized photos at joining.
        </li>
        <li>
          <strong className="text-indigo-700">Acceptance of Offer:</strong><br />
          Kindly sign and return a copy of this letter to confirm your acceptance.
        </li>
        <li>
          <strong className="text-indigo-700">Other Clauses:</strong><br />
          • Performance below 50 % may reduce salary; 100 % target achievement qualifies for incentives.<br />
          • 3-month probation period.<br />
          • ₹500 will be deducted for uninformed leave.<br />
          • NDA and Indian IT laws are applicable from the date of joining.
        </li>
      </ol>

      {/* Closing */}
      <section className="mt-10 text-sm leading-relaxed">
        <p>We welcome you to <span className="font-medium">Maa Mahamaya Finance</span> and look forward to a mutually rewarding journey.</p>
        <div className="mt-6 space-y-1">
          <p><span className="font-semibold">Warm Regards,</span></p>
          <p className="font-medium">Position: CEO</p>
          <div className="space-y-2">
          <p><strong>Signature:</strong></p>
          <p><strong>Date:</strong> {letterDate}</p>
        </div>
        </div>
      </section>

      {/* Page Break */}
      <div className="page-break" />

      {/* Acknowledgement */}
      <section className="mt-10 text-sm leading-relaxed">
        <h2 className="text-base font-semibold mb-3">Acknowledgement & Acceptance</h2>
        <p className="mb-4">I accept the above offer and agree to abide by all company policies, including the NDA and data protection terms.</p>
        <div className="space-y-2">
          <p><strong>Signature:</strong></p>
          <p><strong>Date:</strong></p>
        </div>
      </section>
    </div>
  );
};

export default OfferLetterTemplate;
