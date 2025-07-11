const loansData = [
    {
        type: "Personal Loan",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 MONTH SALARY SLIP",
        "LAST 6 MONTH BANK STATEMENT",
        "2 YEARS FORM 16",
        "OFFICE ID CARD",
        "PHOTO"
        ],
        note: "Minimum salary required ₹25,000"
    },
    {
        type: "Business Loan",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 YEAR ITR WITH FINANCIAL",
        "LAST 1 YEAR BANK STATEMENT ALL ACCOUNTS",
        "GST REGISTRATION",
        "GST RETURN LAST ONE YEAR 3B GSTR",
        "3 YEAR OLD BUSINESS PROOF REQ",
        "OWNERSHIP PROOF REQ",
        "PHOTO",
        "NOMINI PAN CARD, AADHAR CARD, PHOTO REQ"
        ],
        note: "Minimum turnover ₹50 Lakhs Required"
    },
    {
        type: "Home Loan (Salaried)",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 MONTH SALARY SLIP",
        "LAST 6 MONTH BANK STATEMENT",
        "2 YEARS FORM 16",
        "OFFICE ID CARD",
        "PHOTO",
        "PROPERTY PAPER / ALLOTMENT LETTER COPY",
        "1 CHEQUE ₹6K (FOR LEGAL VALUATION)"
        ]
    },
    {
        type: "Home Loan (Self Employed)",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 YEAR ITR WITH FINANCIAL",
        "LAST 1 YEAR BANK STATEMENT ALL ACCOUNTS",
        "GST REGISTRATION",
        "GST RETURN LAST 1 YEAR 3B GSTR",
        "3 YEAR OLD BUSINESS PROOF REQ",
        "OWNERSHIP PROOF REQ",
        "PHOTO",
        "NOMINI PAN CARD, AADHAR CARD, PHOTO REQ",
        "PROPERTY PAPER / ALLOTMENT LETTER COPY",
        "1 CHEQUE ₹6K (FOR LEGAL VALUATION)"
        ]
    },
    {
        type: "Loan Against Property (Salaried)",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 MONTH SALARY SLIP",
        "LAST 6 MONTH BANK STATEMENT",
        "2 YEARS FORM 16",
        "OFFICE ID CARD",
        "PHOTO",
        "PROPERTY PAPER (REGISTRY COPY ONLY)",
        "1 CHEQUE ₹6K (FOR LEGAL VALUATION)"
        ]
    },
    {
        type: "Loan Against Property (Self Employed)",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 YEAR ITR WITH FINANCIAL",
        "LAST 1 YEAR BANK STATEMENT ALL ACCOUNTS",
        "GST REGISTRATION",
        "GST RETURN LAST 1 YEAR 3B GSTR",
        "3 YEAR OLD BUSINESS PROOF REQ",
        "OWNERSHIP PROOF REQ",
        "PHOTO",
        "NOMINI PAN CARD, AADHAR CARD, PHOTO REQ",
        "PROPERTY PAPER COPY (REGISTRY ONLY)",
        "1 CHEQUE ₹6K (FOR LEGAL VALUATION)"
        ]
    },
    {
        type: "New Car Loan (Salaried)",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 MONTH SALARY SLIP",
        "LAST 6 MONTH BANK STATEMENT",
        "2 YEARS FORM 16",
        "OFFICE ID CARD",
        "PHOTO",
        "QUOTATION OF CAR"
        ]
    },
    {
        type: "New Car Loan (Self Employed)",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 YEAR ITR WITH FINANCIAL",
        "LAST 1 YEAR BANK STATEMENT ALL ACCOUNTS",
        "GST REGISTRATION",
        "OWNERSHIP PROOF REQ",
        "PHOTO",
        "QUOTATION OF CAR"
        ]
    },
    {
        type: "Used Car Loan (Salaried)",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 MONTH SALARY SLIP",
        "LAST 6 MONTH BANK STATEMENT",
        "2 YEARS FORM 16",
        "OFFICE ID CARD",
        "PHOTO",
        "RC INSURANCE OF CAR"
        ]
    },
    {
        type: "Used Car Loan (Self Employed)",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 YEAR ITR WITH FINANCIAL",
        "LAST 1 YEAR BANK STATEMENT ALL ACCOUNTS",
        "GST REGISTRATION",
        "OWNERSHIP PROOF REQ",
        "PHOTO",
        "RC, INSURANCE OF CAR"
        ]
    },
    {
        type: "Credit Card (Salaried Only)",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "3 MONTH SALARY SLIP",
        "LAST 6 MONTH BANK STATEMENT",
        "2 YEARS FORM 16",
        "OFFICE ID CARD",
        "PHOTO",
        "PREVIOUS CARD PHOTO REQ"
        ]
    },
    {
        type: "Over Draft & Cash Credit",
        requirements: [
        "PAN CARD",
        "AADHAR CARD",
        "ADDRESS PROOF",
        "LAST 1 YEAR BANK STATEMENT ALL ACCOUNTS",
        "3 YEAR ITR WITH FINANCIAL",
        "GST REGISTRATION",
        "GST RETURN LAST 1 YEAR 3B GSTR",
        "3 YEAR OLD BUSINESS PROOF REQ",
        "OWNERSHIP PROOF REQ",
        "PHOTO",
        "NOMINI PAN CARD, AADHAR CARD, PHOTO REQ"
        ],
        note: "Minimum turnover ₹1 Crore Required"
    }
];

export default loansData;
