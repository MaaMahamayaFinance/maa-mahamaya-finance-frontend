import React from "react";

const OfferLetter = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-10 my-10 text-gray-800 border border-gray-200">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">Offer Letter</h1>
        <p className="text-sm text-gray-500">Date: <span className="font-medium">03.07.2025</span></p>
      </header>

      <section className="mb-6 text-sm leading-relaxed">
        <p className="mb-1 font-semibold">To:</p>
        <p>Nitin Khare</p>
        <p>Awas Vikas Colony, Hardoi (Gramin)</p>
        <p>Uttar Pradesh - 241001</p>
      </section>

      <p className="mb-6">Dear <span className="font-medium">Nitin</span>,</p>

      <ol className="space-y-6 text-sm leading-relaxed list-decimal list-inside">
        <li>
          <strong className="text-indigo-600">Position and Joining Date:</strong><br />
          You will join as a <strong>Software Developer</strong>. Your expected date of joining is <strong>04.07.2025</strong>.
        </li>

        <li>
          <strong className="text-indigo-600">Compensation:</strong><br />
          You are hired as an unpaid intern. A Pre-Placement Offer (PPO) may be offered based on your performance.
        </li>

        <li>
          <strong className="text-indigo-600">Working Hours:</strong><br />
          Work from home, 9:00 AM to 7:00 PM, Sunday off. Internship duration: 2 months.
        </li>

        <li>
          <strong className="text-indigo-600">Confidentiality & NDA:</strong><br />
          NDA to be signed by the joining date. You must not disclose confidential data during or after employment.
        </li>

        <li>
          <strong className="text-indigo-600">Data Protection:</strong><br />
          Follow all data protection laws. Breaches can result in termination and legal consequences.
        </li>

        <li>
          <strong className="text-indigo-600">Code of Conduct:</strong><br />
          Maintain professionalism, integrity, and abide by company policies and applicable laws.
        </li>

        <li>
          <strong className="text-indigo-600">Termination & Notice:</strong><br />
          - 30-day notice required before resignation.<br />
          - Poor performance or misconduct may lead to termination with or without warning.
        </li>

        <li>
          <strong className="text-indigo-600">Documents Required:</strong><br />
          PAN & Aadhar Card, Educational Certificates, Experience Letters (if any), and Passport-size Photographs.
        </li>

        <li>
          <strong className="text-indigo-600">Acceptance of Offer:</strong><br />
          Sign and return a copy of this letter to confirm your acceptance.
        </li>

        <li>
          <strong className="text-indigo-600">Other Clauses:</strong><br />
          - Performance below 50% may result in reduced salary.<br />
          - 100% target achievement may earn incentives.<br />
          - 3-month probation period.<br />
          - ₹500 deduction for uninformed leave.<br />
          - By signing, you accept the NDA and applicable Indian IT laws.
        </li>
      </ol>

      <section className="mt-8 text-sm">
        <p>We welcome you to <strong>Maa Mahamaya Finance</strong> and hope to work together fruitfully.</p>
        <div className="mt-6">
          <p><strong>Warm Regards,</strong></p>
          <p className="font-semibold">Position: CEO</p>
        </div>
      </section>

      <hr className="my-8 border-t border-gray-300" />

      <section className="text-sm">
        <h2 className="text-base font-semibold text-gray-700 mb-3">Acknowledgement & Acceptance</h2>
        <p className="mb-2">
          I accept the above offer and agree to abide by all company policies including the NDA and data protection terms.
        </p>
        <div className="space-y-2">
          <p><strong>Signature:</strong> ____________________________</p>
          <p><strong>Date:</strong> _________________________________</p>
        </div>
      </section>
    </div>
  );
};

export default OfferLetter;
