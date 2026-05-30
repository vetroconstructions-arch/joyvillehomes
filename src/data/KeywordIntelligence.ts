/**
 * Radical Keyword Intelligence Matrix (Phase 25)
 * Over 2000 high-intent keywords for Pune Real Estate dominance.
 * Expanded to include Hyper-Expanded Matrix for Core Projects (A-I Categories).
 */

const CORE_PROJECTS = [
    { name: "Joyville Hinjewadi", loc: "Hinjewadi", type: "1, 2, 3 BHK", minPrice: "52L" },
    { name: "Joyville Sensorium", loc: "Hinjewadi Phase 1", type: "2, 3 BHK", minPrice: "85L" },
    { name: "Joyville Hadapsar Annexe", loc: "Hadapsar", type: "1, 2, 3 BHK", minPrice: "65L" },
    { name: "Joyville Vyomora", loc: "Hinjewadi Phase 1", type: "2, 3 BHK", minPrice: "84L" },
    { name: "Joyville Celestia", loc: "Hadapsar", type: "2, 3 BHK", minPrice: "85L" },
    { name: "Joyville Skyluxe Edition", loc: "Hadapsar", type: "3 BHK Luxury", minPrice: "1.40Cr" },
    { name: "Wildernest at SP Kingstown", loc: "Shewalewadi", type: "Premium Residences", minPrice: "On Request" },
    { name: "Vanaha Golfland", loc: "Bavdhan", type: "Golf Residences", minPrice: "On Request" },
    { name: "Vanaha Verdant", loc: "Bavdhan", type: "Luxury Flats", minPrice: "On Request" }
];

const CONFIGURATIONS = ["1 BHK", "2 BHK", "3 BHK", "2.5 BHK", "3 BHK duplex", "penthouse"];
const TOWERS = ["Tower A", "Tower B", "Tower 3", "Tower 7", "Phase 1", "Phase 2", "Wing C", "Wing D"];

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
        generated.push(`${p.name} price breakdown 2026`);
        generated.push(`${p.name} official website`);
        generated.push(`${p.name} contact number`);
        CONFIGURATIONS.forEach(c => {
            generated.push(`${p.name} ${c} price`);
            generated.push(`${p.name} ${c} price Phase 1`);
            generated.push(`${p.name} ${c} floor plan pdf`);
            // B. Configuration + Unit-Level
            generated.push(`${p.name} ${c} carpet area`);
            generated.push(`${p.name} ${c} layout plan`);
            generated.push(`${p.name} ${c} 3D walkthough`);
            generated.push(`${p.name} ${c} sample flat video`);
            // Deep Intent
            generated.push(`${p.name} ${c} vastu compliant`);
            generated.push(`${p.name} ${c} corner flat units`);
            generated.push(`${p.name} ${c} garden facing price`);
            generated.push(`${p.name} ${c} pool facing premium`);
        });

        // C. Tower / Building Level SEO (Very Low Competition)
        TOWERS.forEach(t => {
            generated.push(`${p.name} ${t} price`);
            generated.push(`${p.name} ${t} floor plan`);
            generated.push(`${p.name} ${t} construction update`);
            generated.push(`${p.name} ${t} possession status`);
            generated.push(`${p.name} ${t} for rent`);
        });

        // D. Rent + Resale (Lead Gold)
        generated.push(`${p.name} ${p.loc} rent 2 bhk`);
        generated.push(`${p.name} rental yield 2026`);
        generated.push(`${p.name} resale value`);
        generated.push(`${p.name} investors resale`);
        generated.push(`${p.name} ready to move resale`);
        generated.push(`${p.name} furnished flat for sale`);
        generated.push(`${p.name} bachelor friendly rent Hinjewadi`);

        // E. Investment Keywords (High Value Users)
        generated.push(`${p.name} ROI analysis`);
        generated.push(`rental yield ${p.name} Pune`);
        generated.push(`capital appreciation in ${p.name}`);
        generated.push(`pre launch investment ${p.name} Hinjewadi`);
        generated.push(`${p.name} vs Godrej Hinjewadi comparison`);
        generated.push(`${p.name} RERA number registration`);

        // H. Feature / USP Keywords
        generated.push(`Mivan technology in ${p.name}`);
        generated.push(`biophilic homes ${p.name}`);
        generated.push(`smart homes ${p.name} Pune`);
        generated.push(`clubhouse ${p.name} amenities list`);
        generated.push(`township lifestyle ${p.name} Hadapsar`);
        generated.push(`${p.name} swimming pool depth`);
        generated.push(`${p.name} electric vehicle charging`);

        // I. Buyer Journey Keywords
        generated.push(`${p.name} genuine reviews`);
        generated.push(`${p.name} complaints and resolutions`);
        generated.push(`${p.name} maintenance charges`);
        generated.push(`${p.name} builder reputation`);
        generated.push(`${p.name} project delay status`);
    });

    return generated;
};

// Existing logic combined with new ones
export const KEYWORD_MATRIX = {
    MACRO_PUNE: [
        "Pune real estate market 2026", "Pune property investment 2027", "top developers in Pune",
        "Shapoorji Pallonji projects Pune", "luxury apartments in Pune", "affordable housing Pune",
        "best township in Pune", "best projects in Hinjewadi", "best ROI projects in Pune west",
        "Pune property price trends 2025-micro-market-analysis",
        "upcoming metro connectivity Pune west 2026", "Pune IT corridor residential growth 2027",
        "best gated communities for NRI in Pune", "Pune real estate ROI forecast 2026"
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
        "rental yields Hinjewadi 2025 NRI investment guide",
        "NRI investment Pune real estate 2026", "repatriable property investment India",
        "NRI guide to buying property in Pune", "high rental yield flats Hinjewadi for NRI",
        "best real estate for NRI in Pune west", "NRI property management Pune"
    ],
    // The massive hyper-expanded array (A through I for the core projects)
    HYPER_EXPANDED_CORE: generateCoreProjectKeywords(),
    SITE_WIDE_HARDENED_KEYWORDS: [
        "Shapoorji Pallonji Pune", "Joyville Homes Pune", "Shapoorji Pallonji Real Estate Pune",
        "best real estate investment in Pune 2026", "Pune real estate trends 2027", "luxury gated communities Pune",
        "best places to stay in Pune for NRI", "high rental yield property Pune", "Pune IT corridor real estate",
        "Mivan technology construction Pune", "EDGE certified green buildings Pune", "Shapoorji Pallonji Pune price list",
        "RERA approved flats in Hinjewadi", "ready possession flats Hadapsar", "invest in Bavdhan Pune",
        "upcoming projects near Purandar Airport", "Shapoorji Pallonji brand legacy real estate India",
        "Joyville Pune official booking portal", "Shapoorji Pallonji Pune contact number official",
        "Joyville Sensorium construction update 2026", "Joyville Vyomora launch price list",
        "Vanaha Golfland Bavdhan price trends 2027", "Joyville Hadapsar Annexe ready possession units"
    ],
    MONEY_KEYWORDS: [
        "Joyville Pune price list", "Joyville Sensorium booking", "Joyville Hadapsar cost sheet",
        "Shapoorji Pallonji Pune official website", "Joyville Pune 2 BHK price", "Joyville Pune 3 BHK price",
        "Vanaha Bavdhan price trends 2027", "Shapoorji Treetopia plots cost", "Joyville Celestia Hadapsar launch"
    ],
    COMPETITOR_BENCHMARKS: [
        "Joyville vs Kolte Patil Life Republic", "Joyville vs Godrej Evergreen Square",
        "Joyville vs VTP Bellissimo Hinjewadi", "Joyville vs Amanora Trendsetter Hadapsar",
        "Joyville vs Gera World of Joy", "best projects in Hinjewadi vs Hadapsar"
    ],
    BRAND_CORE_EXPANDED: [
        "Shapoorji Pallonji Joyville Pune", "Joyville Pune", "Joyville Homes Pune", "Joyville by Shapoorji Pallonji Pune",
        "Shapoorji Pallonji Pune Projects", "SPRE Pune Projects", "Shapoorji Pallonji Residential Projects Pune",
        "Shapoorji Pallonji Luxury Homes Pune", "Shapoorji Pallonji Premium Apartments Pune", "Shapoorji Pallonji New Launch Pune",
        "Shapoorji Pallonji Township Pune", "Joyville Apartments Pune", "Joyville Residential Project Pune",
        "Joyville Premium Residences Pune", "Joyville Luxury Living Pune", "Joyville Real Estate Pune",
        "Joyville Property Pune", "Joyville Flats Pune", "Joyville Investment Pune", "Joyville Smart Homes Pune"
    ],
    HINJAWADI_CORE: [
        "Joyville Hinjawadi", "Shapoorji Pallonji Joyville Hinjawadi", "Joyville Hinjewadi Pune", "Joyville Hinjawadi Phase 1",
        "Joyville Hinjawadi Apartments", "Joyville Hinjawadi Flats", "Joyville Hinjawadi Price", "Joyville Hinjawadi Price List",
        "Joyville Hinjawadi Floor Plan", "Joyville Hinjawadi Brochure", "Joyville Hinjawadi Master Plan", "Joyville Hinjawadi Amenities",
        "Joyville Hinjawadi Reviews", "Joyville Hinjawadi Possession", "Joyville Hinjawadi RERA", "Joyville Hinjawadi Investment",
        "Joyville Hinjawadi Rental Income", "Joyville Hinjawadi Resale", "Joyville Hinjawadi Luxury Apartments", "Joyville Hinjawadi Premium Homes",
        "Joyville Hinjawadi Township", "Joyville Hinjawadi Near Infosys", "Joyville Hinjawadi Near Wipro", "Joyville Hinjawadi Near IT Park",
        "Joyville Hinjawadi Near Metro", "Joyville Hinjawadi Near Mula River", "Joyville Hinjawadi Ready Possession",
        "Joyville Hinjawadi Under Construction", "Joyville Hinjawadi New Launch", "Joyville Hinjawadi Property Investment"
    ],
    PROJECT_SPECIFIC_CLUSTERS: {
        SENSORIUM: [
            "Joyville Sensorium", "Shapoorji Pallonji Sensorium", "Joyville Sensorium Hinjawadi", "Sensorium Pune", "Sensorium by Shapoorji Pallonji",
            "Sensorium 2 BHK", "Sensorium 3 BHK", "Sensorium Luxury Apartments", "Sensorium Wellness Homes", "Sensorium Premium Residences",
            "Sensorium Price", "Sensorium Price List", "Sensorium Brochure", "Sensorium Floor Plan", "Sensorium Amenities", "Sensorium River View Homes",
            "Sensorium Near Hinjawadi Phase 1", "Sensorium Investment Property", "Sensorium Smart Homes", "Sensorium Family Homes", "Sensorium Pune West",
            "Sensorium Premium Township", "Sensorium Club Class Living", "Sensorium Real Estate Investment"
        ],
        SPECTRA: [
            "Joyville Spectra", "Joyville Spectra Hinjawadi", "Shapoorji Pallonji Spectra", "Spectra Pune", "Spectra Luxury Apartments", "Spectra Premium Homes",
            "Spectra Club Class Living", "Spectra 2 BHK", "Spectra 3 BHK", "Spectra Price", "Spectra Price List", "Spectra Floor Plan", "Spectra Brochure",
            "Spectra Amenities", "Spectra Investment", "Spectra Township", "Spectra River View Homes", "Spectra Near Phase 1", "Spectra Near IT Park",
            "Spectra Premium Residences", "Spectra Smart Homes", "Spectra Luxury Living"
        ],
        VYOMORA: [
            "Joyville Vyomora", "Vyomora Hinjawadi", "Shapoorji Pallonji Vyomora", "Joyville Vyomora Pune", "Vyomora Apartments", "Vyomora Luxury Homes",
            "Vyomora Premium Residences", "Vyomora Price", "Vyomora Floor Plan", "Vyomora Brochure", "Vyomora Amenities", "Vyomora Township",
            "Vyomora Investment", "Vyomora New Launch", "Vyomora Near Hinjawadi Phase 1", "Vyomora Property Investment", "Vyomora Pune West",
            "Vyomora Smart Homes", "Vyomora Luxury Flats"
        ],
        CELESTIA: [
            "Joyville Celestia", "Joyville Celestia Pune", "Shapoorji Pallonji Celestia", "Celestia Hadapsar", "Celestia Shewalewadi", "Celestia Apartments",
            "Celestia Premium Homes", "Celestia Luxury Residences", "Celestia Price", "Celestia Floor Plan", "Celestia Brochure", "Celestia Amenities",
            "Celestia Investment", "Celestia Township", "Celestia East Pune", "Celestia New Launch", "Celestia Property Investment"
        ],
        HADAPSAR_ANNEXE: [
            "Joyville Hadapsar Annexe", "Joyville Hadapsar", "Joyville Shewalewadi", "Shapoorji Pallonji Hadapsar", "Joyville East Pune",
            "Joyville Hadapsar Price", "Joyville Hadapsar Floor Plan", "Joyville Hadapsar Brochure", "Joyville Hadapsar Amenities",
            "Joyville Hadapsar Investment", "Joyville Hadapsar Apartments", "Joyville Hadapsar Flats", "Joyville Hadapsar Township",
            "Joyville Hadapsar Premium Homes", "Joyville Hadapsar Luxury Apartments"
        ],
        SP_KINGSTOWN: [
            "SP Kingstown Pune", "Shapoorji Pallonji Kingstown", "SP Kingstown Hadapsar", "SP Kingstown Township", "SP Kingstown Apartments",
            "SP Kingstown Luxury Homes", "SP Kingstown Residential Project", "SP Kingstown Investment", "SP Kingstown Pune East",
            "SP Kingstown New Launch", "SP Kingstown Property", "SP Kingstown Premium Residences"
        ]
    },
    MICRO_MARKETS_EXPANDED: [
        "Hinjawadi Property", "Hinjawadi Real Estate", "Hinjawadi Luxury Apartments", "Hinjawadi Premium Homes", "Hinjawadi Investment Property",
        "Hinjawadi Flats For Sale", "Hinjawadi Apartments For Sale", "Hinjawadi Township Projects", "Hinjawadi New Launch Projects",
        "Hinjawadi Ready Possession Flats", "Hinjawadi Near Infosys Homes", "Hinjawadi Near Wipro Homes", "Hinjawadi IT Park Property",
        "Hinjawadi Rental Investment", "Hinjawadi Metro Connectivity Homes",
        "Wakad Property", "Wakad Luxury Homes", "Wakad Premium Apartments", "Wakad Investment Property", "Wakad Real Estate", "Wakad New Launch",
        "Wakad Property Near Hinjawadi", "Wakad Luxury Residences", "Wakad Smart Homes",
        "Tathawade Property", "Tathawade Apartments", "Tathawade Luxury Homes", "Tathawade Investment Property", "Tathawade Real Estate", "Tathawade Premium Residences",
        "Baner Luxury Apartments", "Baner Premium Homes", "Baner Investment Property", "Baner Real Estate", "Baner Residential Projects",
        "Balewadi Luxury Apartments", "Balewadi Property Investment", "Balewadi Premium Residences", "Balewadi New Launch Projects"
    ],
    MACRO_PUNE_REAL_ESTATE: [
        "Pune Real Estate", "Pune Real Estate Market", "Pune Real Estate Investment", "Property In Pune", "Real Estate Companies In Pune",
        "Top Builders In Pune", "Pune Real Estate News", "Pune Real Estate Prices", "Pune Real Estate Developers", "Pune Property Investment 2026",
        "Buy Property In Pune", "Best Real Estate Projects In Pune", "New Residential Projects In Pune", "Ready Reckoner Rate Pune",
        "Pune Real Estate Appreciation", "Pune Housing Market", "Luxury Real Estate Pune", "Premium Real Estate Pune", "NRI Investment Pune Real Estate"
    ],
    MACRO_HINJEWADI_REAL_ESTATE: [
        "Hinjewadi Real Estate", "Hinjewadi Real Estate Market", "Hinjewadi Real Estate Investment", "Property In Hinjewadi",
        "Hinjewadi IT Park Real Estate", "Hinjewadi Phase 1 Real Estate", "Hinjewadi Phase 2 Real Estate", "Hinjewadi Phase 3 Real Estate",
        "Real Estate Developers Hinjewadi", "Top Builders In Hinjewadi", "Hinjewadi Property Prices", "Hinjewadi Real Estate Appreciation",
        "Hinjewadi Real Estate News", "Buy Property In Hinjewadi", "New Residential Projects In Hinjewadi", "Hinjewadi Housing Market",
        "Luxury Real Estate Hinjewadi", "Premium Real Estate Hinjewadi", "NRI Investment Hinjewadi Real Estate"
    ],
    MACRO_WEST_PUNE_REAL_ESTATE: [
        "West Pune Real Estate", "West Pune Property", "West Pune Real Estate Market", "Property In West Pune", "Real Estate In West Pune",
        "Top Builders In West Pune", "West Pune Property Prices", "West Pune Real Estate Investment", "Buy Property In West Pune",
        "New Residential Projects In West Pune", "West Pune Housing Market", "Luxury Real Estate West Pune", "Premium Real Estate West Pune",
        "West Pune Real Estate Appreciation", "NRI Investment West Pune Real Estate"
    ],
    MACRO_HADAPSAR_REAL_ESTATE: [
        "Hadapsar Real Estate", "Hadapsar Property", "Hadapsar Real Estate Market", "Property In Hadapsar", "Real Estate In Hadapsar",
        "Top Builders In Hadapsar", "Hadapsar Property Prices", "Hadapsar Real Estate Investment", "Buy Property In Hadapsar",
        "New Residential Projects In Hadapsar", "Hadapsar Housing Market", "Luxury Real Estate Hadapsar", "Premium Real Estate Hadapsar",
        "Hadapsar Real Estate Appreciation", "NRI Investment Hadapsar Real Estate", "Pune East Real Estate", "East Pune Property"
    ],
    MACRO_MAGARPATTA_REAL_ESTATE: [
        "Magarpatta Real Estate", "Magarpatta City Real Estate", "Magarpatta Property", "Property Near Magarpatta", "Real Estate Near Magarpatta",
        "Magarpatta Real Estate Market", "Flats Near Magarpatta City", "Apartments Near Magarpatta", "Magarpatta Property Prices",
        "Magarpatta Real Estate Investment", "Buy Property Near Magarpatta", "New Residential Projects Near Magarpatta"
    ],
    BUYER_INTENT: [
        "Best Property In Hinjawadi", "Best Property In Pune West", "Best Investment Property Pune", "Luxury Apartments Near Hinjawadi IT Park",
        "Flats Near Infosys Pune", "Flats Near Wipro Pune", "Homes Near Metro Pune", "High Appreciation Property Pune", "Premium Township Pune",
        "Luxury Township Pune", "Best Township In Pune", "Family Homes Pune", "Smart Homes Pune", "Gated Community Pune", "Ready Possession Flats Pune",
        "Under Construction Property Pune", "New Launch Flats Pune", "Luxury Residences Pune", "Premium Lifestyle Homes Pune", "Property Near IT Park Pune"
    ],
    SHAPOORJI_BRAND_DOMINANCE: [
        "shapoorji pallonji joyville home pune", "joyville homes pune by shapoorji pallonji",
        "shapoorji pallonji joyville hinjewadi pune", "shapoorji pallonji joyville homes hinjewadi pune", "joyville hadapsar shapoorji pallonji pune",
        "buy flats in joyville pune shapoorji pallonji", "shapoorji pallonji projects in pune",
        "shapoorji pallonji joyville pune reviews", "shapoorji pallonji joyville pune price",
        "joyville shapoorji pallonji pune west", "joyville shapoorji pallonji pune east",
        "shapoorji pallonji pune ready possession", "joyville pune shapoorji pallonji 2 bhk",
        "joyville pune shapoorji pallonji 3 bhk", "shapoorji pallonji new launch in pune",
        "joyville pune shapoorji pallonji brochure", "joyville by shapoorji pallonji pune location",
        "shapoorji pallonji luxury apartments pune", "shapoorji pallonji townships pune",
        "joyville pune shapoorji pallonji floor plan", "shapoorji pallonji pune contact number",
        "shapoorji pallonji flats in pune price", "joyville shapoorji pallonji rera registered",
        "best shapoorji pallonji project in pune", "joyville pune shapoorji pallonji construction update"
    ],
    SITE_CREDITS: {
        publisher: "Shapoorji Pallonji Real Estate",
        established: "1865",
        authoritativeEntities: ["MahaRERA", "EDGE", "IGBC"],
        puneMarkets: ["Hinjewadi", "Hadapsar", "Bavdhan", "Purandar", "S.P. Infocity"]
    }
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

// Standalone re-export for direct import compatibility
export const SITE_WIDE_HARDENED_KEYWORDS = [
    ...KEYWORD_MATRIX.SITE_WIDE_HARDENED_KEYWORDS,
    ...KEYWORD_MATRIX.SHAPOORJI_BRAND_DOMINANCE,
    ...KEYWORD_MATRIX.BRAND_CORE_EXPANDED,
    ...KEYWORD_MATRIX.HINJAWADI_CORE,
    ...KEYWORD_MATRIX.MICRO_MARKETS_EXPANDED,
    ...KEYWORD_MATRIX.MACRO_PUNE_REAL_ESTATE,
    ...KEYWORD_MATRIX.MACRO_HINJEWADI_REAL_ESTATE,
    ...KEYWORD_MATRIX.MACRO_WEST_PUNE_REAL_ESTATE,
    ...KEYWORD_MATRIX.MACRO_HADAPSAR_REAL_ESTATE,
    ...KEYWORD_MATRIX.MACRO_MAGARPATTA_REAL_ESTATE
];
