import React from "react";

const OfferLetterTemplate = ({
  letterDate = "03.07.2025",
  candidate = {
    fullName: "Deewan Singh Mewada",
    firstName: "Deewan",
    address: [
      "ThunaKalan Sehore Tehsil Sehore",
      "Madhya Pradesh – 466001",
    ],
  },
  joiningDate = "04.07.2025",
  position = "Software Developer",
  ctc = "0.00 LPA + incentive per month",
}) => {
  return (
    <div className="offer-letter w-[210mm] mx-auto bg-white p-12 shadow-xl text-gray-900 font-serif">
      <style>{`
        @media print {
          .offer-letter {
            width: 210mm;
            min-height: 297mm;
            padding: 20mm 15mm;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>

      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-start mb-8 gap-4">
        <div className="sm:w-2/3 flex flex-col sm:flex-row sm:items-center gap-4">
          <img src="/logo.png" alt="Company Logo" className="h-16 w-auto" />
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide leading-snug text-indigo-800 uppercase">
              Maa Mahamaya Finance
            </h1>
            <p className="uppercase font-semibold text-xs tracking-widest text-gray-600">
              Financial Services
            </p>
            <p className="mt-2 text-sm">Email Id : maamahamayafinance@gmail.com</p>
          </div>
        </div>

        <div className="sm:w-1/3 sm:text-right text-sm space-y-1">
          <p className="font-semibold uppercase tracking-wide">Subject: Offer Letter</p>
          <p>Date: <span className="font-medium">{letterDate}</span></p>
        </div>
      </header>

      <section className="mb-6 text-sm leading-relaxed">
        <p className="mb-1 font-semibold">To,</p>
        <p className="font-medium">{candidate.fullName}</p>
        {candidate.address.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </section>

      <p className="mb-6 text-sm leading-relaxed">Dear <span className="font-medium">{candidate.firstName}</span>,</p>

      <ol className="list-decimal list-inside space-y-4 text-sm leading-relaxed">
        <li>
          <span className="font-semibold text-indigo-700">Position and Joining Date:</span>
          <br />
          You will join as a <span className="font-medium">{position}</span>; your expected date of joining is <span className="font-medium">{joiningDate}</span>.
        </li>
        <li>
          <span className="font-semibold text-indigo-700">Compensation:</span>
          <br />
          Your annual Cost to Company (CTC) will be <span className="font-medium">{ctc}</span>. Salary will be remitted every 10th day of the month. No PF or ESI will be deducted. Insurance & health policies will not be borne by the company.
        </li>
        <li>
          <span className="font-semibold text-indigo-700">Working Hours:</span>
          <br />
          You will work from <span className="font-medium">9 a.m. – 7 p.m.</span> in work‑from‑home mode, with Sundays off.
        </li>
        <li>
          <span className="font-semibold text-indigo-700">Confidentiality & NDA:</span>
          <br />
          You must sign a Non‑Disclosure Agreement (NDA) on or before your joining date and must not disclose any confidential data during or after employment.
        </li>
        <li>
          <span className="font-semibold text-indigo-700">Data Protection & Breach Policy:</span>
          <br />
          Follow all data‑protection laws and internal IT security protocols. Breaches can lead to termination, legal action, and financial liability. Report any suspected breaches immediately.
        </li>
        <li>
          <span className="font-semibold text-indigo-700">Code of Conduct:</span>
          <br />
          Maintain the highest standards of integrity, professionalism, and compliance with all company policies and applicable laws.
        </li>
        <li>
          <span className="font-semibold text-indigo-700">Termination & Notice Period:</span>
          <br />
          A 30‑day notice is required for resignation; otherwise the final salary will be withheld. Poor performance, breach of contract, data leakage, or unethical behaviour may lead to immediate termination, with or without warning.
        </li>
        <li>
          <span className="font-semibold text-indigo-700">Documents Required:</span>
          <br />
          Bank details, PAN & Aadhar Card, Educational Certificates, Experience Letters (if any), and Passport‑size photographs must be submitted at the time of joining.
        </li>
        <li>
          <span className="font-semibold text-indigo-700">Acceptance of Offer:</span>
          <br />
          Kindly sign and return a duplicate copy of this letter to confirm your acceptance.
        </li>
        <li>
          <span className="font-semibold text-indigo-700">Other Clauses:</span>
          <br />
          • Performance below 50 % may result in reduced salary, while 100 % target achievement will qualify for incentives.
          <br />
          • Probation period: 3 months from the date of joining.
          <br />
          • ₹500 deduction for uninformed leave.
          <br />
          • By signing, you accept the NDA and all applicable Indian IT laws.
        </li>
      </ol>

      <section className="mt-8 text-sm leading-relaxed">
        <p>We welcome you to <span className="font-medium">Maa Mahamaya Finance</span> and look forward to a fruitful association.</p>
        <div className="mt-6 space-y-1">
          <p><span className="font-semibold">Warm Regards,</span></p>
          <p className="font-medium">Position: CEO</p>
        </div>
      </section>

      <div className="page-break" />

      <section className="mt-8 text-sm leading-relaxed">
        <h2 className="text-base font-semibold mb-3">Acknowledgement & Acceptance</h2>
        <p className="mb-4">I accept the above offer and agree to abide by all company policies, including the NDA and data‑protection terms mentioned.</p>
        <div className="space-y-2">
          <p><strong>Signature:</strong> ________________________________</p>
          <p><strong>Date:</strong> _________________________________</p>
        </div>
      </section>
    </div>
  );
};

export default OfferLetterTemplate;
