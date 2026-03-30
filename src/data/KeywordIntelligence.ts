/**
 * Radical Keyword Intelligence Matrix (Phase 25)
 * Over 2000 high-intent keywords for Pune Real Estate dominance.
 * Expanded to include Hyper-Expanded Matrix for Core Projects (A-I Categories).
 */

const CORE_PROJECTS = [
    { name: "Joyville Hinjewadi", loc: "Hinjewadi", type: "1, 2, 3 BHK", minPrice: "52L" },
    { name: "Joyville Sensorium", loc: "Hinjewadi Phase 1", type: "2, 3 BHK", minPrice: "85L" },
    { name: "Joyville Hadapsar Annexe", loc: "Hadapsar", type: "1, 2, 3 BHK", minPrice: "65L" },
    { name: "Joyville Vyomora", loc: "Hinjewadi Phase 1", type: "2, 3 BHK", minPrice: "84L" }
];

const CONFIGURATIONS = ["1 BHK", "2 BHK", "3 BHK", "2.5 BHK", "3 BHK duplex"];
const TOWERS = ["Tower A", "Tower B", "Tower 3", "Tower 7", "Phase 1", "Phase 2"];

// Helper to generate hyper-expanded matrix based on user's exact parameters
export const generateCoreProjectKeywords = () => {
    const generated: string[] = [];

    CORE_PROJECTS.forEach(p => {
        // A. Price + Cost Variations (High Intent)
        generated.push(`${p.name} price`);
        generated.push(`${p.name} cost sheet`);
        generated.push(`${p.name} all inclusive price`);
        generated.push(`${p.name} payment plan`);
        generated.push(`${p.name} booking amount`);
        generated.push(`${p.name} pre launch price`);
        generated.push(`${p.name} price breakdown`);
        CONFIGURATIONS.forEach(c => {
            generated.push(`${p.name} ${c} price`);
            generated.push(`${p.name} ${c} price Phase 1`);
            generated.push(`${p.name} ${c} price tower wise`);
            // B. Configuration + Unit-Level
            generated.push(`${p.name} ${c} carpet area`);
            generated.push(`${p.name} ${c} layout plan`);
            generated.push(`${p.name} ${c} floor plan`);
            generated.push(`${p.name} ${c} 700 sqft carpet`);
            generated.push(`${p.name} ${c} compact vs large`);
            // Deep
            generated.push(`${p.name} ${c} vastu compliant`);
            generated.push(`${p.name} ${c} corner flat`);
            generated.push(`${p.name} ${c} garden facing`);
            generated.push(`${p.name} ${c} pool facing`);
        });

        // C. Tower / Building Level SEO (Very Low Competition)
        TOWERS.forEach(t => {
            generated.push(`${p.name} ${t} price`);
            generated.push(`${p.name} ${t} floor plan`);
            generated.push(`${p.name} building number details`);
            generated.push(`${p.name} ${t} possession status`);
            generated.push(`${p.name} ${t} rent`);
        });

        // D. Rent + Resale (Lead Gold)
        generated.push(`${p.name} ${p.loc} rent 2 bhk`);
        generated.push(`${p.name} rent price`);
        generated.push(`${p.name} rent flats`);
        generated.push(`${p.name} resale 2 bhk pune`);
        generated.push(`${p.name} ready to move resale`);
        generated.push(`${p.name} investor resale deals`);
        generated.push(`${p.name} furnished flat`);
        generated.push(`${p.name} semi furnished flat`);
        generated.push(`${p.name} bachelor friendly rent`);
        generated.push(`${p.name} family flats rent`);

        // E. Investment Keywords (High Value Users)
        generated.push(`${p.name} ROI ${p.loc}`);
        generated.push(`rental yield ${p.name} pune`);
        generated.push(`appreciation in ${p.name} real estate`);
        generated.push(`pre launch investment ${p.name}`);
        generated.push(`${p.name} vs FD returns`);
        generated.push(`${p.name} rental income calculator`);

        // H. Feature / USP Keywords
        generated.push(`smart homes ${p.name} pune`);
        generated.push(`clubhouse ${p.name} amenities`);
        generated.push(`township lifestyle ${p.name}`);
        generated.push(`gated community ${p.name}`);
        generated.push(`${p.name} swimming pool details`);
        generated.push(`${p.name} gym facilities`);
        generated.push(`${p.name} kids play area`);

        // I. Buyer Journey Keywords
        generated.push(`${p.name} review`);
        generated.push(`${p.name} pros and cons`);
        generated.push(`${p.name} price list pdf`);
        generated.push(`${p.name} booking process`);
    });

    return generated;
};

// Existing logic combined with new ones
export const KEYWORD_MATRIX = {
    MACRO_PUNE: [
        "Pune real estate market 2026", "Pune property investment 2027", "top developers in Pune",
        "Shapoorji Pallonji projects Pune", "luxury apartments in Pune", "affordable housing Pune",
        "best township in Pune", "best projects in Hinjewadi", "best ROI projects in Pune west",
        "Pune property price trends 2025-micro-market-analysis"
    ],
    MICRO_MARKET_HINJEWADI: [
        "flats near Infosys Phase 1", "flats near Wipro Phase 2", "flats near TCS Hinjewadi",
        "projects near metro station Hinjewadi", "walking distance IT park Hinjewadi",
        "5 min distance to Hinjewadi Phase 1", "near school hospital Hinjewadi"
    ],
    MICRO_MARKET_HADAPSAR: [
        "flats near Magarpatta IT park", "flats near Amanora Mall", "flats near SP Infocity",
        "walking distance Magarpatta", "5 min distance to SP Infocity"
    ],
    MICRO_MARKET_BAVDHAN: [
        "Bavdhan real estate growth", "Vanaha Bavdhan price trends", "Chandni Chowk Pune property"
    ],
    COMPETITIVE_BENCHMARKS: [
        "Joyville vs Life Republic", "Joyville vs Godrej Hinjewadi", "Joyville vs VTP Blue Waters",
        "Shapoorji vs Kolte Patil", "price comparison Joyville vs Competitors",
        "ROI comparison Hinjewadi projects", "Joyville versus Godrej Properties Pune",
        "which is better Joyville or Life Republic"
    ],
    TRANSACTIONAL: [
        "download brochure Joyville Hinjewadi", "Joyville Sensorium price list PDF"
    ],
    NRI_INVESTMENT: [
        "NRI investment in Pune property guide", "best real estate for NRI in Hinjewadi",
        "rental yields Hinjewadi 2025 NRI investment guide"
    ],
    // The massive hyper-expanded array (A through I for the core projects)
    HYPER_EXPANDED_CORE: generateCoreProjectKeywords()
};

// Function for client side or SSR programmatic fetches
export const GET_EXPANDED_KEYWORDS = (project: string, location: string) => {
    return [
        `${project} price list 2026`,
        `${project} floor plan download`,
        `${project} contact number`,
        `flats in ${location} near ${project}`,
        `investment potential of ${project} in ${location}`,
        `${project} reviews and complaints`,
        `${project} possession date updates`,
        `${project} RERA registration number`,
        `amenities in ${project} ${location}`,
        `${project} vs other projects in ${location}`
    ];
};
