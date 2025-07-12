import React from "react";

// ---- Policy Sections Data ----
const POLICY_SECTIONS = [
  {
    title: "Introduction",
    content: (
      <>
        Maa Mahamaya Finance, Company is committed to safeguarding the privacy and
        confidentiality of your personal and financial information. This Privacy Policy explains
        how we collect, use, store, disclose, and protect the personal data of individuals and
        businesses who interact with our financial services, both within India and globally. <br /><br />
        We are a financial service provider operating in accordance with the laws of India and
        other applicable international data protection laws.
      </>
    ),
  },
  {
    title: "Scope of this Policy",
    content: (
      <>
        This Privacy Policy applies to:
        <ul className="list-disc pl-6 mt-2">
          <li>Clients, customers, and prospects using our services online or offline</li>
          <li>Visitors to our websites, mobile applications, or other digital platforms</li>
          <li>All users who submit any personal or financial information to Maa Mahamaya Finance</li>
        </ul>
      </>
    ),
  },
  {
    title: "Legal Basis for Data Processing",
    content: (
      <>
        We process personal data based on:
        <ul className="list-disc pl-6 mt-2">
          <li>Your consent</li>
          <li>Performance of a contract</li>
          <li>Compliance with legal obligations</li>
          <li>Legitimate interests of the Company</li>
        </ul>
      </>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <>
        We may collect the following categories of data:
        <ul className="list-disc pl-6 mt-2">
          <li>
            <strong>A. Personal Identifiable Information (PII):</strong><br />
            Full Name, Date of Birth, Gender, National Identification Numbers (e.g., PAN, Aadhaar), Passport/Driving License details
          </li>
          <li>
            <strong>B. Contact Information:</strong><br />
            Mobile number, Email address, Residential and correspondence addresses
          </li>
          <li>
            <strong>C. Financial Data:</strong><br />
            Bank account details, Credit/debit card details, Loan information, Income documents, Transaction history
          </li>
          <li>
            <strong>D. Biometric & Sensitive Data (where permitted by law):</strong><br />
            Fingerprints, Facial recognition (for KYC verification), Health/disability details
          </li>
          <li>
            <strong>E. Digital Usage Data:</strong><br />
            IP address, Browser type, Device identifiers, Location data, Website usage history
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <>
        Your data may be used for the following purposes:
        <ul className="list-disc pl-6 mt-2">
          <li>Identity verification and KYC compliance</li>
          <li>Eligibility assessment for financial products</li>
          <li>Executing transactions and maintaining records</li>
          <li>Service enhancement and customization</li>
          <li>Marketing communications and promotional offers</li>
          <li>Fraud detection and prevention</li>
          <li>Compliance with legal and regulatory obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: "Disclosure of Your Information",
    content: (
      <>
        We may share your data under the following circumstances:
        <ul className="list-disc pl-6 mt-2">
          <li>With regulatory and government authorities (e.g., RBI, SEBI)</li>
          <li>With partner banks, NBFCs, insurance providers, and credit bureaus</li>
          <li>With technology partners and secure data processors</li>
          <li>With auditors, consultants, and legal advisors</li>
          <li>In case of mergers, acquisitions, or business restructuring</li>
        </ul>
        <p className="mt-2">We do not sell or rent your personal data under any condition.</p>
      </>
    ),
  },
  {
    title: "International Data Transfers",
    content: (
      <>
        Where required, your data may be transferred to and processed in countries outside
        India, including the EU and the USA. In such cases, we ensure:
        <ul className="list-disc pl-6 mt-2">
          <li>Compliance with applicable cross-border data transfer laws</li>
          <li>Adequate contractual safeguards and data protection standards</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <>
        We retain your data for only as long as necessary:
        <ul className="list-disc pl-6 mt-2">
          <li>To fulfill the purposes outlined in this policy</li>
          <li>To comply with laws and financial regulations</li>
          <li>Usually up to 8 years after the end of the business relationship</li>
        </ul>
      </>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <>
        You have the right to:
        <ul className="list-disc pl-6 mt-2">
          <li>Access your data</li>
          <li>Request corrections</li>
          <li>Request deletion</li>
          <li>Object to certain processing</li>
          <li>Withdraw consent</li>
          <li>File complaints with regulators</li>
        </ul>
        {/* <p className="mt-2">
          To exercise your rights, email us at:&nbsp;
          <a href="mailto:privacy@maamahamayafinance.com" className="text-blue-600 underline">
            privacy@maamahamayafinance.com
          </a>
        </p> */}
      </>
    ),
  },
  {
    title: "Data Security Measures",
    content: (
      <>
        We follow strict industry-standard security protocols:
        <ul className="list-disc pl-6 mt-2">
          <li>Data encryption (SSL/TLS)</li>
          <li>Firewalls and intrusion detection</li>
          <li>Limited access with authentication</li>
          <li>Regular audits and assessments</li>
          <li>Employee confidentiality training</li>
        </ul>
      </>
    ),
  },
  {
    title: "Children’s Privacy",
    content: (
      <>
        Our services are not intended for individuals under 18 years of age. We do not
        knowingly collect data from minors without parental consent.
      </>
    ),
  },
  {
    title: "Cookies & Tracking Technologies",
    content: (
      <>
        We use cookies and tracking tools for:
        <ul className="list-disc pl-6 mt-2">
          <li>Session management</li>
          <li>Analytics</li>
          <li>Targeted advertising</li>
        </ul>
        <p className="mt-2">You can manage cookie preferences via your browser settings.</p>
      </>
    ),
  },
  {
    title: "Marketing Communications",
    content: (
      <>
        We may send promotional content via email, SMS, or social media based on your
        preferences. You can unsubscribe at any time through the provided opt-out link or by
        contacting us.
      </>
    ),
  },
  {
    title: "Non-Refundable Charges",
    content: (
      <>
        All service charges, processing fees, consultancy charges, administrative fees, or any
        other payments made to Maa Mahamaya Finance are strictly non-refundable under any
        circumstances.<br /><br />
        This includes:
        <ul className="list-disc pl-6 mt-2">
          <li>Withdrawal of service or application</li>
          <li>Rejection due to credit or document issues</li>
          <li>Delay or dissatisfaction with process outcomes</li>
        </ul>
        <p className="mt-2">
          By making any payment, you acknowledge and agree to this non-refundable clause, which
          helps us maintain service quality and integrity across national and international
          jurisdictions.
        </p>
      </>
    ),
  },
  {
    title: "Updates to this Policy",
    content: (
      <>
        We reserve the right to amend this policy at any time. Significant changes will be
        communicated through our website or direct notifications. Continued use of our services
        after updates implies your acceptance of the revised policy.
      </>
    ),
  },
];

const newLocal = <p className="text-xs text-gray-400 text-center">
    {/* Last updated: <span className="font-medium">{lastUpdated}</span> */}
</p>;
// ---- Main Component ----
const PrivacyPolicy = ({ lastUpdated = "" }) => (
  <section className="min-h-screen flex justify-center items-start bg-gray-50 px-2 py-12">
    <div className="bg-white shadow-2xl w-full max-w-[820px] p-8 md:p-12 rounded-xl border border-gray-200 relative">
      {/* Sticky Top Heading */}
      <header className="sticky top-0 z-10 bg-white/95 pb-2 mb-6 border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2 tracking-tight">
          Privacy Policy
        </h1>
        {newLocal}
      </header>
      <div className="space-y-8">
        {/* Intro Paragraph */}
        <div className="text-justify text-base text-gray-700 mb-2">
          Maa Mahamaya Finance is committed to maintaining the confidentiality, integrity, and
          security of all information of our users. This Privacy Policy describes how Maa
          Mahamaya Finance collects and handles information through this website, including the
          type of information collected, its use, and sharing only with authorized business partners
          for necessary services and regulatory compliance. By using our website, you agree to the
          terms of this Privacy Policy.
        </div>

        {/* IT Act Compliance Note */}
        <div className="bg-gray-100 p-4 rounded mb-1 text-sm border-l-4 border-primary">
          <strong>This Privacy Policy is published in compliance with:</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Information Technology Act, 2000</li>
            <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (SPDI Rules)</li>
          </ul>
        </div>

        {/* Dynamic Sections */}
        <ol className="space-y-8">
          {POLICY_SECTIONS.map((section, idx) => (
            <Section
              key={section.title}
              number={idx + 1}
              title={section.title}
            >
              {section.content}
            </Section>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

// ---- Section Component ----
const Section = ({ number, title, children }) => (
  <li className="group">
    <div className="mb-2 flex items-center gap-2">
      <span className="font-semibold text-primary text-base md:text-lg">
        {number}.
      </span>
      <h2 className="font-semibold text-base md:text-lg tracking-tight">
        {title}
      </h2>
    </div>
    <div className="text-gray-700 text-sm md:text-base pl-2 border-l-2 border-primary/10 group-hover:border-primary/60 transition-colors">
      {children}
    </div>
  </li>
);

export default PrivacyPolicy;
