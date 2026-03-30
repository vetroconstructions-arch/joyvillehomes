import React from 'react';

interface BookingProcessSchemaProps {
    projectName?: string;
    projectUrl?: string;
}

/**
 * Phase 16.3: HowTo Schema for flat booking process.
 * Captures featured snippets for "how to book flat in Joyville" queries.
 */
const BookingProcessSchema: React.FC<BookingProcessSchemaProps> = ({
    projectName = 'Joyville Homes Pune',
    projectUrl = 'https://joyville-homes.com'
}) => {
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": `How to Book a Flat at ${projectName} by Shapoorji Pallonji`,
        "description": `Complete step-by-step guide to booking a premium flat at ${projectName}. From selecting your unit to possession — a transparent, RERA-compliant booking process backed by Shapoorji Pallonji's 160-year legacy.`,
        "totalTime": "PT48H",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": "200000"
        },
        "supply": [
            { "@type": "HowToSupply", "name": "PAN Card" },
            { "@type": "HowToSupply", "name": "Aadhaar Card or Passport (for NRIs)" },
            { "@type": "HowToSupply", "name": "Passport-size photographs" },
            { "@type": "HowToSupply", "name": "Address proof" },
            { "@type": "HowToSupply", "name": "Bank statement (last 6 months)" }
        ],
        "tool": [
            { "@type": "HowToTool", "name": "Online booking portal or site office visit" },
            { "@type": "HowToTool", "name": "Home loan pre-approval (SBI, HDFC, ICICI, Axis Bank)" }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Select Your Preferred Unit & Configuration",
                "text": "Browse the project portfolio, compare floor plans (2 BHK, 3 BHK, Duplex), and shortlist your preferred unit based on floor, view, and Vastu orientation. Schedule a site visit or virtual walkthrough.",
                "url": `${projectUrl}/projects`
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Pay the Expression of Interest (EOI) Amount",
                "text": "Submit the booking amount (typically ₹2-5 Lakhs) via cheque, RTGS, or online transfer to the project's RERA-registered escrow account. This reserves your unit for 30 days.",
                "url": projectUrl
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Complete KYC Documentation",
                "text": "Submit PAN Card, Aadhaar/Passport, photographs, and address proof. For NRI buyers, Power of Attorney and FEMA compliance documents are additionally required. Digital submission is available.",
                "url": projectUrl
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Home Loan Processing & Agreement for Sale",
                "text": "Apply for a home loan through any of the pre-approved banks (SBI, HDFC, ICICI, Axis). Once sanctioned, sign the Agreement for Sale and pay the stamp duty (7% in Maharashtra) and registration charges.",
                "url": projectUrl
            },
            {
                "@type": "HowToStep",
                "position": 5,
                "name": "Payment Schedule & Construction Monitoring",
                "text": "Follow the construction-linked payment plan as per RERA norms. Track construction progress via quarterly updates, site photos, and video walkthroughs provided by Shapoorji Pallonji.",
                "url": projectUrl
            },
            {
                "@type": "HowToStep",
                "position": 6,
                "name": "Possession & Handover",
                "text": "Upon completion, receive the Occupancy Certificate (OC). Complete the final payment, inspect your flat during the pre-handover visit, and collect your keys. Shapoorji Pallonji provides 5-year structural warranty.",
                "url": projectUrl
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
    );
};

export default BookingProcessSchema;
