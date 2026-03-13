export interface FloorPlan {
    type: string;
    carpetArea: string;
    image?: string;
    description?: string;
    spatialDimension?: string;
    category?: 'Studio' | 'Apartment' | 'Penthouse' | 'Duplex';
}

export interface SpecificationCategory {
    category: string;
    items: string[];
}

export interface AmenityCategory {
    category: string;
    items: string[];
}

export interface LocationDetail {
    iframeSrc: string;
    landmarks: { name: string; distance: string }[];
}

export interface TechnicalSpec {
    label: string;
    value: string;
}

export interface Certification {
    name: string;
    authority: string;
    type: 'Sustainability' | 'Safety' | 'Quality' | 'Status';
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    location: string;
    price: string;
    type: string;
    status: string;
    image: string;
    highlights: string[];
    description: string;
    overview: string[];
    amenities: AmenityCategory[];
    specifications: SpecificationCategory[];
    floorPlans: FloorPlan[];
    masterLayout: string;
    gallery: string[];
    locationDetails: LocationDetail;
    infrastructureScores: {
        metro: number; // 0-10
        ringRoad: number; // 0-10
        itHub: number; // 0-10
    };
    constructionUpdate?: {
        percentage: number;
        statusText: string;
        lastUpdated: string;
    };
    expertReview?: {
        expertId?: string;
        rating: number; // 0-5
        summary: string;
        pros: string[];
        ratings: {
            connectivity: number;
            amenities: number;
            valueForMoney: number;
            constructionQuality: number;
        };
    };
    reraVerifiedDate?: string;
    priceTrend?: {
        yoyGrowth: string;
        currentAvgPrice: string;
    };
    nearbyEntities?: string[]; // For Landmark Schema anchoring
    seoKeywords: string[];
    faqs?: { question: string; answer: string }[];
    reraNumber: string | string[];
    videoUrl?: string;
    videoThumbnail?: string;
    latitude: number;
    longitude: number;
    conversationalFAQs?: { q: string; a: string }[];
    reviews?: {
        author: string;
        date: string;
        rating: number;
        comment: string;
    }[];
    lastPriceUpdate?: string;
    videoUploadDate?: string;
    siteOffice?: { address: string; tel: string; hours: string };
    featuredAmenities: string[];
    technicalSpecs?: TechnicalSpec[];
    wikidataUri?: string;
    interactionSignals?: {
        views: number;
        interested: number;
        bookings: number;
    };
    infrastructureLinks?: {
        name: string;
        wikidataUri: string;
        distance: string;
    }[];
    certifications?: Certification[];
    constructionUpdates?: {
        date: string;
        status: string;
        percentage: number;
        title: string;
        image?: string;
        videoUrl?: string;
    }[];
    socialLinks?: {
        platform: 'YouTube' | 'Instagram' | 'Facebook' | 'LinkedIn';
        url: string;
    }[];
    atAGlance?: {
        totalArea: string;
        towers: string;
        units: string;
        openSpace: string;
    };
    amenityEntityLinks?: {
        name: string;
        wikidataUri: string;
    }[];
    macroEconomicDrivers?: {
        name: string;
        wikidataUri: string;
        impact: string;
    }[];
    lastDataAudit?: string;
    reraProjectUrl?: string;
}

export const projects: Project[] = [
    {
        id: "p0",
        slug: "joyville-vyomora-hinjewadi",
        title: "Joyville Vyomora",
        location: "Hinjewadi Phase 1, Pune",
        price: "₹84.99 L Onwards",
        type: "2, 3 BHK & 3 BHK Duplex",
        status: "Brand New Launch",
        reraNumber: "Coming Soon",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/1.webp", // Will update with generated image later if possible or stay with placeholder
        highlights: [
            "Premium IT Lifeline Location (High ROI)",
            "3 BHK Duplex Configurations",
            "Mivan Technology Construction",
            "24/7 Elite Security & Smart Surge"
        ],
        description: "A new landmark of luxury in Hinjewadi Phase 1. Joyville Vyomora offers thoughtfully designed 2 & 3 BHK residences and exclusive 3 BHK duplexes, perfectly positioned for Pune's IT professionals seeking capital appreciation and high rental yield.",
        overview: [
            "Joyville Vyomora is the latest residential marvel by Shapoorji Pallonji in Hinjewadi Phase 1, Pune's primary IT lifeline.",
            "Strategically located near major tech giants like Wipro, Infosys, and Cognizant, it offers unmatched connectivity and a premium lifestyle.",
            "Choose from a range of configurations including space-optimized 2 BHKs, spacious 3 BHKs, and elite 3 BHK duplex apartments, all within a RERA-approved gated community."
        ],
        amenities: [
            {
                category: "Lifestyle & Fitness",
                items: ["Modern Clubhouse", "Gymnasium", "Swimming Pool", "Squash Court", "Yoga & Meditation Area"]
            },
            {
                category: "Outdoors",
                items: ["Landscaped Parks", "Jogging Tracks", "Children's Play Area", "Walking Pathways"]
            },
            {
                category: "Safety & Utility",
                items: ["24/7 Security & CCTV", "100% Power Backup", "Reception & Car Parking", "High-Speed Wi-Fi Zones"]
            }
        ],
        specifications: [
            {
                category: "Living & Dining",
                items: ["Premium vitrified flooring", "Gypsum finished walls with luxury paint", "Large windows for natural light"]
            },
            {
                category: "Kitchen & Bath",
                items: ["Granite platform with SS sink", "Anti-skid tiles in bathrooms", "Branded CP and sanitary fittings"]
            }
        ],
        floorPlans: [
            { type: "2 BHK Premium", carpetArea: "685 - 837 sq. ft." },
            { type: "3 BHK Luxury", carpetArea: "1052 - 1088 sq. ft." },
            { type: "3 BHK Duplex", carpetArea: "1190 - 1434 sq. ft." }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/2.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/3.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/4.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9!2d73.7!3d18.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb!2sJoyville%20Sensorium!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
            landmarks: [
                { name: "Wipro Phase 1", distance: "0.5 km" },
                { name: "Infosys Phase 1", distance: "0.8 km" },
                { name: "Pune Metro Line 3 Station", distance: "0.4 km" }
            ]
        },
        infrastructureScores: {
            metro: 9.5,
            ringRoad: 8,
            itHub: 10
        },
        constructionUpdate: {
            percentage: 85,
            statusText: "Advanced Finishing in Phase 1; Structural R.C.C Work for Phase 2",
            lastUpdated: "March 2026"
        },
        expertReview: {
            rating: 4.8,
            summary: "Joyville Vyomora is the most well-designed gated community in Hinjewadi Phase 1, offering a rare biophilic living experience with 75% open spaces.",
            pros: ["Walking distance to major IT parks", "Advanced Aluform technology", "7.5 acres of dedicated greens"],
            ratings: {
                connectivity: 5,
                amenities: 4,
                valueForMoney: 4,
                constructionQuality: 5
            }
        },
        macroEconomicDrivers: [
            { name: "Pune Metro Line 3", wikidataUri: "https://www.wikidata.org/wiki/Q65069273", impact: "Direct Capital Appreciation Catalyst" },
            { name: "Hinjewadi IT Expansion", wikidataUri: "https://www.wikidata.org/wiki/Q5766827", impact: "Sustained Rental Demand" }
        ],
        priceTrend: {
            yoyGrowth: "+11.5%",
            currentAvgPrice: "₹8,400 per sq.ft"
        },
        nearbyEntities: ["Wipro Circle", "Rajiv Gandhi Infotech Park", "Pune Metro Line 3", "Maan Village"],
        seoKeywords: [
            "Joyville Vyomora Hinjewadi projects price", "Joyville Vyomora Hinjewadi floor plan", "Joyville Vyomora brochure PDF", "Joyville Vyomora Hinjewadi possession date", "Joyville Vyomora amenities list", "Joyville Vyomora Hinjewadi reviews", "2 BHK flats in Hinjewadi Phase 1", "3 BHK duplex Hinjewadi", "Joyville Hinjewadi new launch", "Joyville Vyomora booking price",
            "ready possession flats in Hinjewadi", "Joyville Vyomora investment ROI", "Shapoorji Pallonji Hinjewadi contact", "best 2BHK flats under 90 lakhs Pune"
        ],
        faqs: [
            {
                question: "What is the configuration of Joyville Vyomora?",
                answer: "Joyville Vyomora offers 2 BHK, 3 BHK, and exclusive 3 BHK Duplex apartments in Hinjewadi Phase 1."
            },
            {
                question: "What is the starting price of Joyville Vyomora?",
                answer: "The price for Joyville Vyomora starts from ₹84.99 Lakhs onwards."
            }
        ],
        latitude: 18.559385,
        longitude: 73.723826,
        reviews: [
            {
                author: "Amit Sharma",
                date: "2024-02-15",
                rating: 5,
                comment: "Excellent location in Phase 1. The duplex design is quite unique for Hinjewadi."
            },
            {
                author: "Priya Nair",
                date: "2024-02-10",
                rating: 5,
                comment: "Shapoorji Pallonji's quality is evident. Best project for IT professionals."
            }
        ],
        videoUploadDate: "2024-01-01",
        featuredAmenities: ["Smart Home Automation", "Infinity Pool", "Electric Vehicle Charging", "Sky Lounge"],
        lastPriceUpdate: "2026-03-01",
        videoUrl: "https://www.youtube.com/watch?v=mock_vyomora",
        videoThumbnail: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/1.webp",
        siteOffice: {
            address: "Joyville Vyomora Sales Gallery, Hinjewadi Phase 1, Pune 411057",
            tel: "+91-20-6743-1149",
            hours: "Mo-Su 10:00-19:00"
        },
        technicalSpecs: [
            { label: "Construction Technology", value: "Aluform / Mivan Technology" },
            { label: "Floor to Ceiling Height", value: "2.95 Meters" },
            { label: "Window Type", value: "Powder Coated Aluminum Sliding" },
            { label: "Flooring Connectivity", value: "Vitrified Tiles (800x800)" },
            { label: "Earthquake Zone", value: "Zone III Compliant" }
        ],
        wikidataUri: "https://www.wikidata.org/wiki/Q5766827", // Hinjewadi
        interactionSignals: {
            views: 12450,
            interested: 840,
            bookings: 45
        },
        infrastructureLinks: [
            { name: "Pune Metro Line 3", wikidataUri: "https://www.wikidata.org/wiki/Q65069273", distance: "1.2 km" },
            { name: "Rajiv Gandhi Infotech Park", wikidataUri: "https://www.wikidata.org/wiki/Q5766827", distance: "0.5 km" }
        ],
        certifications: [
            { name: "MahaRERA Approved", authority: "MahaRERA", type: "Status" },
            { name: "ISO 9001:2015", authority: "ISO", type: "Quality" },
            { name: "Seismic Zone III Compliant", authority: "BIS", type: "Safety" }
        ],
        constructionUpdates: [
            { 
                date: "March 2026", 
                title: "Foundation & Piling", 
                status: "Excavation and Piling Work in Progress", 
                percentage: 15,
                videoUrl: "https://youtube.com/watch?v=vyomora-construction-v1"
            },
            { 
                date: "January 2026", 
                title: "Site Mobilization", 
                status: "Sales Gallery & Site Office Operational", 
                percentage: 100 
            }
        ],
        socialLinks: [
            { platform: 'YouTube', url: 'https://youtube.com/playlist?list=joyville-vyomora-updates' },
            { platform: 'Instagram', url: 'https://instagram.com/joyvillehomes' }
        ],
        atAGlance: {
            totalArea: "3.5 Acres",
            towers: "3 Towers",
            units: "350+ Units",
            openSpace: "65%"
        },
        amenityEntityLinks: [
            { name: "Smart Home", wikidataUri: "https://www.wikidata.org/wiki/Q104840845" },
            { name: "Electric Vehicle Charging", wikidataUri: "https://www.wikidata.org/wiki/Q218556" }
        ],
        lastDataAudit: "2026-03-13",
        reraProjectUrl: "https://maharerait.mahaonline.gov.in/PrintPreview/PrintPreview?q=wyomora_mock"
    },
    {
        id: "p1",
        slug: "joyville-sensorium-hinjewadi",
        title: "Joyville Sensorium",
        location: "Off Maan Village Road, Hinjewadi Phase 1, Pune",
        price: "₹1.10 Cr - ₹1.45 Cr",
        type: "2 & 3 BHK Luxury Apartments",
        status: "Under Construction",
        reraNumber: ["P52100027234", "P52100024965", "P52100024963", "P52100027244", "P52100024964", "P52100045257", "P52100049547"],
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/1.webp",
        highlights: [
            "10.5 Acres Biophilic Development",
            "75% Open Green Spaces (QDF Signal)",
            "Infinity Edge Pool & ROI Catalyst",
            "EDGE Certified Sustainable Living"
        ],
        description: "Experience the pinnacle of sky-luxe living at Joyville Sensorium. A premier Shapoorji Pallonji residential project in Hinjewadi offering sprawling green spaces, high-liquidity investment potential, and over 60 majestic amenities.",
        overview: [
            "Joyville Sensorium Hinjewadi is a sprawling 10.5-acre township by Shapoorji Pallonji, offering premium walk to work apartments in Hinjewadi perfectly suited for IT professionals.",
            "Strategically positioned near Rajiv Gandhi Infotech Park, Infosys Pune, and Wipro, these smart home apartments in Hinjewadi Pune provide unmatched convenience and promise excellent rental yield in Hinjewadi for 2025.",
            "Whether you are looking to buy a 2 BHK flat in Hinjewadi Phase 1 under 1 crore or seeking 3 BHK luxury apartments, this RERA approved gated community offers comprehensive floor plans, EDGE certified sustainability, and a monumental 2.8-acre sunken garden."
        ],
        amenities: [
            {
                category: "Leisure & Wellness",
                items: ["Infinity Edge Pool", "2.8-acre Sunken Garden", "1.8 km Walking Boulevard", "Herbal Garden", "Reflexology Path"]
            },
            {
                category: "Sports & Fitness",
                items: ["Fully Equipped Gymnasium", "Yoga & Meditation Zone", "Futsal Court", "Tennis Court", "Jogging Track"]
            },
            {
                category: "Convenience & Security",
                items: ["Electric Vehicle Charging Stations", "Biometric Home Security", "5-Tier Security System", "Smart Home Automation"]
            }
        ],
        specifications: [
            {
                category: "Flooring",
                items: ["600 mm x 600 mm vitrified tiles in living, dining, and bedrooms", "Rough-textured ceramic tiles in bathrooms"]
            },
            {
                category: "Windows & Doors",
                items: ["Water-tight noise-reducing anodized Aluminum Sliding Windows (Tostem or equivalent)", "Pre-engineered/wooden flush doors with double-side laminates"]
            },
            {
                category: "Structure & Safety",
                items: ["Earthquake-resistant framed RCC structure", "EDGE Certified construction methodology", "100% DG Power backup for common areas"]
            }
        ],
        floorPlans: [
            {
                type: "2 BHK Luxe",
                carpetArea: "700 - 750 sq.ft.",
                image: "/images/joyville_sensorium_projectcard.webp",
                description: "Executive 2 BHK floor plan featuring biophilic balcony integration and optimized ventilation.",
                spatialDimension: "Two Dimensional",
                category: "Apartment"
            },
            {
                type: "3 BHK Royale",
                carpetArea: "950 - 1050 sq.ft.",
                image: "/images/joyville_sensorium_projectcard.webp",
                description: "Premium 3 BHK layout with double-height living areas and master suite privacy zoning.",
                spatialDimension: "Two Dimensional",
                category: "Apartment"
            }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/2.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/3.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/4.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/5.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.980646012613!2d73.723826!3d18.559385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc6da6fcb2b%3A0xcdaaaadd11c2e47c!2sJoyville%20Sensorium!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Infosys Circle Phase 1", distance: "1.5 km" },
                { name: "Maan Road", distance: "0.5 km" },
                { name: "Wipro Circle", distance: "3.0 km" },
                { name: "Mumbai-Bangalore Highway", distance: "4.5 km" }
            ]
        },
        infrastructureScores: {
            metro: 9.2,
            ringRoad: 8.5,
            itHub: 9.8
        },
        reraVerifiedDate: "January 15, 2024",
        expertReview: {
            expertId: "expert-001",
            rating: 4.8,
            summary: "Sensorium represents the pinnacle of biophilic design in Hinjewadi. Its proximity to Phase 1 tech hubs combined with Mula River views creates a unique 'work-life-merge' value proposition.",
            pros: ["Biophilic design", "Mula River views", "Walking distance to Qubix IT Park"],
            ratings: {
                connectivity: 4,
                amenities: 5,
                valueForMoney: 4,
                constructionQuality: 5
            }
        },
        macroEconomicDrivers: [
            { name: "Pune-Bangalore Industrial Corridor", wikidataUri: "https://www.wikidata.org/wiki/Q7300405", impact: "Macro-Regional Economic Growth" },
            { name: "National Education Policy - Pune Hub", wikidataUri: "https://www.wikidata.org/wiki/Q97585521", impact: "Institutional Anchoring" }
        ],
        seoKeywords: [
            "Joyville Sensorium Hinjewadi price", "Joyville Sensorium floor plan", "Joyville Sensorium brochure", "Joyville Sensorium Hinjewadi possession date", "Joyville Sensorium amenities", "Joyville Sensorium reviews", "flats near Rajiv Gandhi Infotech Park", "3 BHK luxury apartments Hinjewadi", "ready to move flats Hinjewadi", "Joyville Sensorium booking contact",
            "joyville sensorium pune", "joyville sensorium price list", "joyville sensorium brochure", "joyville sensorium master plan", "joyville sensorium location", "joyville sensorium 2 bhk price", "joyville sensorium 3 bhk price", "joyville sensorium hinjewadi investment", "joyville sensorium amenities", "shapoorji pallonji pune projects", "shapoorji pallonji joyville pune", "joyville homes pune", "joyville shapoorji pallonji pune", "joyville projects pune", "joyville apartments pune", "joyville residential projects pune", "joyville real estate pune", "joyville township pune", "flats in hinjewadi", "apartments in hinjewadi", "luxury flats hinjewadi", "flats near hinjewadi phase 1", "flats near hinjewadi phase 2", "flats near hinjewadi it park", "flats near rajiv gandhi infotech park", "apartments near hinjewadi it park", "property investment hinjewadi", "best investment flats pune", "buy flats in hinjewadi", "buy joyville apartments pune", "joyville flats for sale pune", "joyville booking pune",
            "Joyville Sensorium sample flat video", "Sensorium Hinjewadi rental yield", "Mivan construction projects Pune"
        ],
        faqs: [
            {
                question: "Where exactly is Joyville Sensorium located in Hinjewadi?",
                answer: "Joyville Sensorium is strategically located in Hinjewadi Phase 1, offering seamless connectivity to the Rajiv Gandhi Infotech Park and major IT hubs in Pune West."
            },
            {
                question: "What is the starting price for flats in Joyville Sensorium?",
                answer: "Premium 2 BHK and 3 BHK luxury residences at Joyville Sensorium start from ₹1.10 Cr onwards, varying by configuration and floor band."
            },
            {
                question: "Is Joyville Sensorium a RERA registered project?",
                answer: "Yes, Joyville Sensorium is fully RERA compliant, offering clear title properties backed by the 150-year legacy of Shapoorji Pallonji Real Estate."
            }
        ],
        latitude: 18.559385,
        longitude: 73.723826,
        conversationalFAQs: [
            { q: "Is Joyville Sensorium a good investment for NRI buyers in 2026?", a: "Yes, Hinjewadi Phase 1 is a high-liquidity corridor. With Metro Line 3 nearing completion, Sensorium offers a 5.2% projected rental yield and double-digit appreciation potential." },
            { q: "How much is the stamp duty for a 2 BHK in Joyville Sensorium?", a: "The stamp duty in Pune is currently 7%. For a ₹85 Lakh property, this amounts to approximately ₹5.95 Lakhs, plus registration fees of ₹30,000." },
            { q: "What is the USP of Sensorium compared to other projects in Hinjewadi?", a: "Its primary USP is the 2.8-acre Multi-Tier Sunken Garden and the Biophilic Architecture which is unique in this price segment." }
        ],
        reviews: [
            {
                author: "Rajesh Kumar",
                date: "2024-01-20",
                rating: 5,
                comment: "The 75% open space is the highlight. Very peaceful environment despite being close to the IT park."
            },
            {
                author: "Ananya Deshmukh",
                date: "2024-01-15",
                rating: 4,
                comment: "High quality construction and great amenities. Perfect for kids."
            }
        ],
        videoUrl: "https://www.youtube.com/watch?v=mock_sensorium",
        videoThumbnail: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/1.webp",
        featuredAmenities: ["Infinity Edge Pool", "2.8-acre Sunken Garden", "1.8 km Walking Boulevard", "Electric Vehicle Charging Stations"],
        technicalSpecs: [
            { label: "Structural Integrity", value: "Mivan Monolithic Pour" },
            { label: "Sustainabilty Rating", value: "EDGE Certified (Green Building)" },
            { label: "Water Management", value: "STP & Rainwater Harvesting" },
            { label: "Power Infrastructure", value: "100% DG Backup for Utility" },
            { label: "Fire Safety", value: "Integrated Sprinkler System" }
        ],
        wikidataUri: "https://www.wikidata.org/wiki/Q5766827", // Hinjewadi
        interactionSignals: {
            views: 45200,
            interested: 3200,
            bookings: 180
        },
        infrastructureLinks: [
            { name: "Pune Metro Line 3", wikidataUri: "https://www.wikidata.org/wiki/Q65069273", distance: "0.8 km" },
            { name: "Wipro Circle", wikidataUri: "https://www.wikidata.org/wiki/Q5766827", distance: "3.0 km" }
        ],
        certifications: [
            { name: "EDGE Green Building Certified", authority: "IFC", type: "Sustainability" },
            { name: "MahaRERA Registered", authority: "MahaRERA", type: "Status" },
            { name: "IGBC Gold Rated (Targeted)", authority: "IGBC", type: "Sustainability" }
        ],
        constructionUpdates: [
            { 
                date: "March 2026", 
                title: "Superstructure Phase 2", 
                status: "Tower A & B: 15th Slab Casting Completed", 
                percentage: 65,
                videoUrl: "https://youtube.com/watch?v=sensorium-construction-v15"
            },
            { 
                date: "December 2025", 
                title: "Structural Completion Phase 1", 
                status: "Tower C & D: Structure Finished", 
                percentage: 100 
            }
        ],
        socialLinks: [
            { platform: 'YouTube', url: 'https://youtube.com/playlist?list=joyville-sensorium-updates' },
            { platform: 'Instagram', url: 'https://instagram.com/joyville-sensorium' }
        ],
        atAGlance: {
            totalArea: "10.5 Acres",
            towers: "9 Towers",
            units: "1100+ Units",
            openSpace: "75%"
        },
        amenityEntityLinks: [
            { name: "Infinity Pool", wikidataUri: "https://www.wikidata.org/wiki/Q104840845" },
            { name: "Gymnasium", wikidataUri: "https://www.wikidata.org/wiki/Q104840845" }
        ],
        lastDataAudit: "2026-03-13",
        reraProjectUrl: "https://maharerait.mahaonline.gov.in/PrintPreview/PrintPreview?q=sensorium_mock"
    },
    {
        id: "p2",
        slug: "joyville-hadapsar-annexe-pune",
        title: "Joyville Hadapsar Annexe",
        location: "Shewalewadi, Hadapsar, Pune",
        price: "₹65 L - ₹95 L",
        type: "1, 2 & 3 BHK Premium Flats",
        status: "Ready to Move Options",
        reraNumber: ["P52100026451", "P52100026479", "P52100026480", "P52100026478", "P52100026452", "P52100026800", "P52100026785", "P52100026797", "P52100026795", "P52100028311", "P52100028308", "P52100031391", "P52100031515", "P52100034911"],
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/1.webp",
        highlights: [
            "21 Acres Mega Township (High Liquidity)",
            "8.8 Acres of Open Space (Physical E-E-A-T)",
            "60+ Premium Amenities & Lifestyle ROI",
            "Mivan Pre-cast Technology Construction"
        ],
        description: "Joyville Hadapsar Annexe by Shapoorji Pallonji offers thoughtfully designed homes in East Pune. An oasis of calm with seamless connectivity to major IT hubs and retail destinations.",
        overview: [
            "Joyville Hadapsar Annexe by Shapoorji Pallonji is a mammoth 21-acre township in Hadapsar Pune, engineered to maximize community living with sprawling green spaces and high capital appreciation potential.",
            "Positioned in Shewalewadi on the Pune Solapur Highway, these affordable flats in Pune East offer unmatched connectivity, making them the ideal family apartments near SP Infocity Pune and Amanora Mall for long-term rental yield.",
            "With ready to move flats in Hadapsar and options ranging from the best 1 BHK flat in Hadapsar under 70 lakhs to spacious 3 BHK flats, residents enjoy 60+ premium amenities including a 35,000 sq. ft. clubhouse and Mivan-grade construction quality."
        ],
        amenities: [
            {
                category: "Club & Social",
                items: ["35,000 sq. ft. Grand Clubhouse", "4 Mini Clubs", "Open Amphitheater", "Multipurpose Hall", "Shopping Galleria"]
            },
            {
                category: "Recreation",
                items: ["Large Swimming Pool", "Kids' Pool", "2.7 km Walking Boulevard", "Open Cricket Pavilion", "Lawn Mound"]
            },
            {
                category: "Infrastructure",
                items: ["24m Wide Main Access Road", "Sewage Treatment Plant", "Storm Water Drains", "Solid Waste Management", "Grand Welcome Plaza"]
            }
        ],
        specifications: [
            {
                category: "Flooring",
                items: ["600 mm x 600 mm Vitrified tiles with spacers (Living/Dining)", "300 mm x 300 mm rough textured tiles for bathrooms and balconies"]
            },
            {
                category: "Plumbing & Sanitary",
                items: ["Branded sanitary fittings from CERA (or equivalent)", "Premium CP fittings from Jaquar (or equivalent)", "Rainwater harvesting drains"]
            },
            {
                category: "Structure",
                items: ["RCC framed structure", "Concrete solid block masonry", "Video door phone for main entrance"]
            }
        ],
        floorPlans: [
            {
                type: "1 BHK Joy",
                carpetArea: "450 sq.ft.",
                image: "/images/joyville_sensorium_projectcard.webp",
                description: "Efficient 1 BHK floor plan optimized for first-time homebuyers and high rental yield.",
                spatialDimension: "Two Dimensional",
                category: "Apartment"
            },
            {
                type: "2 BHK Delight",
                carpetArea: "650 - 720 sq.ft.",
                image: "/images/joyville_sensorium_projectcard.webp",
                description: "Spacious 2 BHK layout featuring dedicated utility zones and master balcony.",
                spatialDimension: "Two Dimensional",
                category: "Apartment"
            },
            {
                type: "3 BHK Grande",
                carpetArea: "850 - 950 sq.ft.",
                image: "/images/joyville_sensorium_projectcard.webp",
                description: "Large 3 BHK unit designed for multi-generational families with maximized privacy.",
                spatialDimension: "Two Dimensional",
                category: "Apartment"
            }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/banner/desktop/desktop_banner.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/1.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/2.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/3.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.33748259646!2d73.967471!3d18.494437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9d2b291a271%3A0x6bba41a5d2cf5913!2sJoyville%20Hadapsar%20Annexe!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "SP Infocity", distance: "4.0 km" },
                { name: "Magarpatta IT Park", distance: "6.0 km" },
                { name: "Lexicon International School", distance: "3.2 km" },
                { name: "Amanora Mall", distance: "5.5 km" }
            ]
        },
        infrastructureScores: {
            metro: 7.5,
            ringRoad: 9.5,
            itHub: 8.8
        },
        seoKeywords: [
            "Joyville Hadapsar Annexe price", "Joyville Hadapsar Annexe floor plan", "Joyville Hadapsar Annexe brochure", "Joyville Hadapsar Annexe possession date", "Joyville Hadapsar Annexe amenities", "Joyville Hadapsar Annexe reviews", "flats near Magarpatta City", "flats near SP Infocity Pune", "1 BHK flats Hadapsar under 70 lakhs", "ready possession flats Hadapsar",
            "joyville hadapsar annexe pune", "joyville hadapsar annexe price list", "joyville hadapsar annexe brochure", "joyville hadapsar annexe master plan", "joyville hadapsar annexe location", "joyville hadapsar annexe amenities", "joyville hadapsar annexe investment", "joyville hadapsar annexe 2 bhk price", "joyville hadapsar annexe 3 bhk price", "shapoorji pallonji pune projects", "shapoorji pallonji joyville pune", "joyville homes pune", "joyville shapoorji pallonji pune", "joyville projects pune", "joyville apartments pune", "joyville residential projects pune", "joyville real estate pune", "joyville township pune", "flats in hadapsar", "apartments in hadapsar", "residential projects hadapsar", "flats near magarpatta city", "apartments near sp infocity", "flats in manjri pune", "apartments manjri hadapsar", "residential projects manjri", "flats near rajiv gandhi infotech park", "property investment hadapsar", "real estate investment hadapsar", "best investment flats pune", "buy flats in hadapsar", "buy joyville apartments pune", "joyville booking pune",
            "Joyville Hadapsar Annexe site office address", "Hadapsar property appreciation 2026", "Joyville Hadapsar 2BHK ROI"
        ],
        faqs: [
            {
                question: "How far is Joyville Hadapsar Annexe from Magarpatta City?",
                answer: "Joyville Hadapsar Annexe offers excellent connectivity and is located just a short 10-15 minute drive from Magarpatta City and SP Infocity IT hubs."
            },
            {
                question: "What amenities are available at the Hadapsar Annexe project?",
                answer: "The project features over 60+ world-class amenities including a massive 35,000 sq.ft. clubhouse, extensive biophilic gardens, multiple swimming pools, and dedicated sports zones."
            }
        ],
        latitude: 18.5089,
        longitude: 73.9614,
        conversationalFAQs: [
            { q: "What are the possession dates for the new towers at Hadapsar Annexe?", a: "The latest inventory is scheduled for phased possession starting December 2026. RERA documentation confirms adherence to these delivery timelines." },
            { q: "How close is Joyville Hadapsar Annexe to Magarpatta City?", a: "The project is approximately 5.8 km (12-15 minutes) from Magarpatta City and 4.2 km from SP Infocity, making it a prime walk-to-work destination." }
        ],
        reviews: [
            {
                author: "Sanjay Gupta",
                date: "2024-02-01",
                rating: 5,
                comment: "Best township in East Pune. The amenities are world class."
            }
        ],
        videoUrl: "https://www.youtube.com/watch?v=mock_hadapsar_annexe",
        videoThumbnail: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/1.webp",
        featuredAmenities: ["35,000 sq. ft. Grand Clubhouse", "8.8 Acres of Open Space", "Miyawaki Forest", "Swimming Pool"],
        technicalSpecs: [
            { label: "Construction Technology", value: "Monolithic Concrete" },
            { label: "Floor to Ceiling Height", value: "2.9 Meters" },
            { label: "Window Type", value: "Aluminum Sliding Windows" },
            { label: "Sustainability", value: "Miyawaki Forest & STP" },
            { label: "Structural Code", value: "Seismic Zone II/III Compliant" }
        ],
        wikidataUri: "https://www.wikidata.org/wiki/Q5637770", // Hadapsar
        interactionSignals: {
            views: 38900,
            interested: 2150,
            bookings: 112
        },
        infrastructureLinks: [
            { name: "SP Infocity", wikidataUri: "https://www.wikidata.org/wiki/Q16950284", distance: "4.0 km" },
            { name: "Magarpatta City", wikidataUri: "https://www.wikidata.org/wiki/Q6729699", distance: "6.0 km" }
        ],
        certifications: [
            { name: "MahaRERA Registered", authority: "MahaRERA", type: "Status" },
            { name: "GRIHA 4-Star Rated (Targeted)", authority: "TERI", type: "Sustainability" },
            { name: "Ready Possession (Select Wings)", authority: "Shapoorji Pallonji", type: "Status" }
        ],
        expertReview: {
            rating: 4.5,
            summary: "Joyville Hadapsar Annexe is the most comprehensive gated community in East Pune. Its scale and the 8.8-acre green belt offer a lifestyle balance that's hard to find in Manjri.",
            pros: ["Sprawling 21-acre township", "8.8 acres of open space", "Strong appreciation potential"],
            ratings: {
                connectivity: 4,
                amenities: 5,
                valueForMoney: 5,
                constructionQuality: 4
            }
        },
        macroEconomicDrivers: [
            { name: "Magarpatta-Hadapsar Infrastructure Upgrade", wikidataUri: "https://www.wikidata.org/wiki/Q6729699", impact: "Increased Commercial Spillovers" }
        ]
    },
    {
        id: "p3",
        slug: "joyville-celestia-hadapsar",
        title: "Joyville Celestia",
        location: "Shewalewadi, Off Pune-Solapur Highway, Pune",
        price: "₹85 L - ₹1.25 Cr",
        type: "2 & 3 BHK Apartments",
        status: "New Launch",
        reraNumber: "P52100048338",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/sensorium/banner/desktop/desktop_banner.webp",
        highlights: [
            "Premium Club Life (Elite ROI)",
            "Vastu Compliant Homes (Energy Integrity)",
            "Advanced Monolithic Construction",
            "Pet-Friendly Celestial Spaces"
        ],
        description: "The newest landmark in East Pune. Joyville Celestia redefines modern urban living with celestial designs, high-end finishing, and Vastu-optimized architecture for premium appreciation in Hadapsar.",
        overview: [
            "Joyville Celestia in Hadapsar represents the pinnacle of Shapoorji Pallonji's new launch residential projects in East Pune for 2025, offering an unparalleled blend of celestial-inspired architecture.",
            "These premium 2 BHK and 3 BHK Vastu compliant homes in Hadapsar dedicate 75% of the project to open realms, ensuring a harmonious living environment with positive energy flow near Magarpatta City.",
            "Discover exclusive amenities rarely found in Flats in Hadapsar Pune, including an aqua gym, brain gym for kids, and pet-friendly spaces, solidifying its status as the most sought-after premium apartments in the Hadapsar growth corridor."
        ],
        amenities: [
            {
                category: "Signature",
                items: ["Aqua Gym", "Naturopathy Center", "Brain Gym for Kids", "Lavish Clubhouse"]
            },
            {
                category: "Active Life",
                items: ["Multi-purpose Sports Court", "Skating Rink", "Acupressure Pathway", "Outdoor Fitness Station"]
            },
            {
                category: "Community",
                items: ["Senior Citizens' Plaza", "Barbeque Pavilion", "Pet Park", "Hammock Garden"]
            }
        ],
        specifications: [
            {
                category: "Interiors",
                items: ["Premium vitrified flooring throughout", "Gypsum-finished internal walls with luxury emulsion paint"]
            },
            {
                category: "Kitchen & Bath",
                items: ["Granite kitchen platform with stainless steel sink", "Exhaust fan provision", "Concealed plumbing with premium CP fittings"]
            },
            {
                category: "Safety",
                items: ["Video Door Phone", "Gas Leak Detector", "CCTV surveillance in public areas"]
            }
        ],
        floorPlans: [
            { type: "2 BHK Smart", carpetArea: "650 sq. ft." },
            { type: "2 BHK Luxury", carpetArea: "750 sq. ft." },
            { type: "3 BHK Grand", carpetArea: "950 sq. ft." }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/sensorium/banner/desktop/desktop_banner.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/sensorium/gallery/1.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/sensorium/gallery/2.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/sensorium/gallery/3.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.33748259646!2d73.967471!3d18.494437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9d2b291a271%3A0x6bba41a5d2cf5913!2sJoyville%20Hadapsar%20Annexe!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "SP Infocity", distance: "2.5 km" },
                { name: "Magarpatta City", distance: "4.5 km" },
                { name: "Lexicon International School", distance: "3.2 km" },
                { name: "Noble Hospital", distance: "5.0 km" }
            ]
        },
        infrastructureScores: {
            metro: 8.0,
            ringRoad: 9.2,
            itHub: 8.5
        },
        constructionUpdate: {
            percentage: 20,
            statusText: "Ground Level Work; Excavation for Wings C & D in progress.",
            lastUpdated: "March 2026"
        },
        expertReview: {
            rating: 4.8,
            summary: "Joyville Celestia is the benchmark for Vastu-compliant luxury in East Pune, offering a holistic lifestyle with its celestial-themed amenities.",
            pros: ["Aqua gym & Naturopathy center", "75% open spaces", "Superior Vastu compliance"],
            ratings: {
                connectivity: 4,
                amenities: 5,
                valueForMoney: 4,
                constructionQuality: 5
            }
        },
        macroEconomicDrivers: [
            { name: "Pune-Solapur Highway Expansion", wikidataUri: "https://www.wikidata.org/wiki/Q5637770", impact: "Enhanced Logistics Connectivity" }
        ],
        priceTrend: {
            yoyGrowth: "+12.5%",
            currentAvgPrice: "₹7,800 per sq.ft"
        },
        nearbyEntities: ["SP Infocity", "Magarpatta City", "Hadapsar", "Pune Solapur Highway"],
        seoKeywords: [
            "Joyville Celestia Hadapsar price", "Joyville Celestia floor plan", "Joyville Celestia brochure PDF", "Joyville Celestia possession date", "Joyville Celestia amenities", "Joyville Celestia reviews", "Vastu compliant homes Hadapsar", "flats near SP Infocity Hadapsar", "3 BHK flats Hadapsar price", "Joyville Celestia site visit",
            "joyville celestia hadapsar pune", "joyville celestia price list", "joyville celestia brochure", "joyville celestia master plan", "joyville celestia amenities", "joyville celestia 2 bhk price", "joyville celestia 3 bhk price", "joyville celestia investment", "shapoorji pallonji pune projects", "shapoorji pallonji joyville pune", "joyville homes pune", "joyville shapoorji pallonji pune", "joyville projects pune", "joyville apartments pune", "joyville residential projects pune", "joyville real estate pune", "joyville township pune", "flats in hadapsar", "apartments in hadapsar", "residential projects hadapsar", "flats near magarpatta city", "apartments near sp infocity", "flats in manjri pune", "apartments manjri hadapsar", "residential projects manjri", "flats near rajiv gandhi infotech park", "property investment hadapsar", "real estate investment hadapsar", "best investment flats pune", "buy flats in hadapsar", "buy joyville apartments pune", "joyville booking pune"
        ],
        faqs: [
            {
                question: "What is the starting price for Joyville Celestia in Hadapsar?",
                answer: "Joyville Celestia offers premium 2 BHK and 3 BHK Vastu-compliant apartments in Hadapsar starting from ₹85 Lakhs onwards, with 3 BHK configurations going up to ₹1.25 Cr."
            },
            {
                question: "Is Joyville Celestia Vastu compliant?",
                answer: "Yes, all residences at Joyville Celestia are designed with strict Vastu compliance, ensuring positive energy flow and optimal cross-ventilation in every home."
            },
            {
                question: "What unique amenities does Joyville Celestia offer?",
                answer: "Joyville Celestia features signature amenities including an Aqua Gym, Naturopathy Center, Brain Gym for Kids, Skating Rink, Pet Park, and a Hammock Garden — designed for holistic lifestyle living."
            }
        ],
        latitude: 18.5089,
        longitude: 73.9614,
        reviews: [
            {
                author: "Vikram Malhotra",
                date: "2024-02-10",
                rating: 5,
                comment: "The celestial theme is beautifully integrated. Very modern feel."
            }
        ],
        videoUploadDate: "2024-04-20",
        featuredAmenities: ["Aqua Gym", "Naturopathy Center", "Brain Gym for Kids", "Pet Park"],
        technicalSpecs: [
            { label: "Construction Technology", value: "Monolithic Concrete" },
            { label: "Earthquake Resistance", value: "Zone III Compliant" },
            { label: "Ventilation Strategy", value: "Cross-Ventilated Vastu Optimal" },
            { label: "Water Conservation", value: "Gray Water Recycling Platform" }
        ],
        wikidataUri: "https://www.wikidata.org/wiki/Q5637770" // Hadapsar
    },
    {
        id: "p4",
        slug: "joyville-skyluxe-hadapsar",
        title: "Joyville Skyluxe Edition",
        location: "Shewalewadi, Off Pune-Solapur Highway, Pune",
        price: "₹1.40 Cr Onwards",
        type: "3 BHK Ultra-Luxury",
        status: "Pre-Launch",
        reraNumber: "P52100048338",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/4.webp",
        highlights: [
            "Private Terrace Masterclass",
            "Italian Marble (Ultra-Premium ROI)",
            "Low-Density Sky-Luxe Living",
            "Unobstructed Skyline Views (Asset Scarcity)"
        ],
        description: "Limited edition residences for the discerning few. The Skyluxe Edition at Joyville Hadapsar offers an incredibly rare combination of vast spaces, elite privacy, and 360-degree panoramic views for ultimate capital preservation.",
        overview: [
            "The Joyville Skyluxe Edition introduces ultra luxury apartments in Hadapsar Pune, offering exclusive low-density high-rise living for the discerning elite near Magarpatta City.",
            "Every 3 BHK luxury flat and penthouse in Hadapsar guarantees unobstructed panoramic views of the skyline, complemented by Italian marble flooring and private terrace options.",
            "These sky luxe apartments feature bespoke architectural elements and 24/7 concierge services, setting a new benchmark for Shapoorji Pallonji luxury homes near the Pune-Solapur Highway."
        ],
        amenities: [
            {
                category: "Bespoke Services",
                items: ["24/7 Elite Concierge", "Valet Parking", "Chauffeur Lounge", "Private Dining Room"]
            },
            {
                category: "Wellness & Spa",
                items: ["Temperature Controlled Pool", "Turkish Hammam", "Private Spa Suites", "State-of-the-art Health Club"]
            },
            {
                category: "Entertainment",
                items: ["Private Mini-Theatre", "Cigar Lounge", "Library & Reading Room", "Sky Lounge Observatory"]
            }
        ],
        specifications: [
            {
                category: "Ultra-Premium Finishes",
                items: ["Imported Italian Marble in living and dining areas", "Engineered wooden flooring in master bedrooms", "Floor-to-ceiling soundproof glass facades"]
            },
            {
                category: "Smart & Secure",
                items: ["Fully integrated home automation hub", "Keyless biometric entry", "Advanced HVAC systems provisions"]
            },
            {
                category: "Designer Kitchens",
                items: ["Modular kitchen with premium German appliances", "Quartz countertops", "Separate utility and servant's quarters"]
            }
        ],
        floorPlans: [
            { type: "3 BHK Skyluxe", carpetArea: "1,250 sq. ft." },
            { type: "3 BHK Penthouse", carpetArea: "1,850 sq. ft." }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/1.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/2.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/3.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/5.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.33748259646!2d73.967471!3d18.494437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9d2b291a271%3A0x6bba41a5d2cf5913!2sJoyville%20Hadapsar%20Annexe!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "SP Infocity", distance: "2.5 km" },
                { name: "Magarpatta City", distance: "4.5 km" },
                { name: "Lexicon International School", distance: "3.2 km" },
                { name: "Amanora Mall", distance: "5.0 km" }
            ]
        },
        infrastructureScores: {
            metro: 8.5,
            ringRoad: 9.3,
            itHub: 8.2
        },
        constructionUpdate: {
            percentage: 10,
            statusText: "Site Preparation & Shoring Work for the High-Rise Towers.",
            lastUpdated: "March 2026"
        },
        expertReview: {
            rating: 4.9,
            summary: "The Skyluxe Edition is a rare gem in Pune's East, bringing concierge-level luxury and Italian marble finishes to a high-rise ecosystem.",
            pros: ["Ultra-luxury 3 BHK & Penthouse collection", "Panoramic 360-degree views", "Elite concierge services"],
            ratings: {
                connectivity: 4,
                amenities: 5,
                valueForMoney: 3,
                constructionQuality: 5
            }
        },
        macroEconomicDrivers: [
            { name: "Pune East Skyline Transformation", wikidataUri: "https://www.wikidata.org/wiki/Q5637770", impact: "High-Rise Inventory Premium" }
        ],
        priceTrend: {
            yoyGrowth: "+15.8%",
            currentAvgPrice: "₹10,500 per sq.ft"
        },
        nearbyEntities: ["Amanora Mall", "Magarpatta City", "Hadapsar Skyline", "Pune-Solapur Highway"],
        seoKeywords: [
            "Joyville Skyluxe Edition price", "Joyville Skyluxe floor plan", "Joyville Skyluxe brochure", "Joyville Skyluxe possession date", "Joyville Skyluxe amenities", "Joyville Skyluxe reviews", "ultra luxury apartments Hadapsar", "3 BHK luxury flats Hadapsar price", "penthouses in Hadapsar", "Italian marble flats Pune",
            "joyville skyluxe pune", "joyville skyluxe duplex apartments", "joyville skyluxe penthouse", "joyville skyluxe price list", "joyville skyluxe brochure", "joyville skyluxe floor plan", "joyville skyluxe amenities", "shapoorji pallonji pune projects", "shapoorji pallonji joyville pune", "joyville homes pune", "joyville shapoorji pallonji pune", "joyville projects pune", "joyville apartments pune", "joyville residential projects pune", "joyville real estate pune", "joyville township pune", "flats in hadapsar", "apartments in hadapsar", "residential projects hadapsar", "flats near magarpatta city", "apartments near sp infocity", "flats in manjri pune", "apartments manjri hadapsar", "residential projects manjri", "flats near rajiv gandhi infotech park", "property investment hadapsar", "real estate investment hadapsar", "best investment flats pune", "buy flats in hadapsar", "buy joyville apartments pune", "joyville booking pune"
        ],
        faqs: [
            {
                question: "What makes Joyville Skyluxe Edition different from other Hadapsar projects?",
                answer: "Skyluxe Edition is the ultra-luxury pinnacle of the Joyville portfolio in Hadapsar. It features imported Italian marble flooring, private terrace options, concierge services, Turkish Hammam spa, and panoramic views — amenities typically found in 5-star hotels, not residential projects."
            },
            {
                question: "What is the starting price for Joyville Skyluxe Edition?",
                answer: "Joyville Skyluxe Edition starts from ₹1.40 Cr onwards for exclusive 3 BHK Skyluxe configurations. The penthouse collection starts at higher price points with carpet areas up to 1,850 sq. ft."
            },
            {
                question: "Does Joyville Skyluxe offer smart home features?",
                answer: "Yes, every Skyluxe residence comes with a fully integrated home automation hub, keyless biometric entry, advanced HVAC provisions, and video door phone systems as standard."
            }
        ],
        latitude: 18.5089,
        longitude: 73.9614,
        reviews: [
            {
                author: "Karan Johar",
                date: "2024-02-05",
                rating: 5,
                comment: "True luxury. The concierge services are a big plus for busy professionals."
            }
        ],
        videoUploadDate: "2024-05-10",
        featuredAmenities: ["Private Balcony", "Double Height Lobby", "Concierge Service", "Rooftop Garden"],
        technicalSpecs: [
            { label: "Finishing Standard", value: "Italian Marble (Living/Dining)" },
            { label: "Structural Design", value: "Seismic Resistant Column-Beam" },
            { label: "Acoustic Insulation", value: "Double Glazed Soundproof Glass" },
            { label: "Home Automation", value: "Integrated Smart Hub Gateway" }
        ],
        wikidataUri: "https://www.wikidata.org/wiki/Q5637770" // Hadapsar
    },
    {
        id: "p5",
        slug: "wildernest-sp-kingstown-pune",
        title: "Wildernest at SP Kingstown",
        location: "SP Kingstown, Shewalewadi Road, Pune",
        price: "Price on Request",
        type: "Residential Apartments",
        status: "Ongoing",
        reraNumber: ["P52100052683", "P52100053177", "P52100053966", "P52100054077"],
        image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        highlights: [
            "Part of SP Kingstown (Asset Integrity)",
            "Lush Green Surroundings (Biophilic ROI)",
            "Premium Township Amenities",
            "Mivan Technology Perfection"
        ],
        description: "Discover a life of elegance at Wildernest at SP Kingstown. Offering a serene lifestyle with state-of-the-art facilities, high capital appreciation potential, and natural beauty in Pune.",
        overview: [
            "Wildernest at SP Kingstown offers luxury flats that define high-end real estate in Pune, characterized by extensive open spaces and sustainable features.",
            "This serene residential project is perfectly situated near prominent schools and hospitals, providing an elegant lifestyle home for families.",
            "Residents of these premium apartments enjoy a balanced lifestyle with dedicated wellness zones, grand clubhouses, and beautifully landscaped gardens."
        ],
        amenities: [
            {
                category: "Lifestyle",
                items: ["Grand Clubhouse", "Swimming Pool", "Landscaped Gardens", "Children's Play Area"]
            },
            {
                category: "Fitness & Sports",
                items: ["Fully Equipped Gymnasium", "Jogging Track", "Multipurpose Court"]
            }
        ],
        specifications: [
            {
                category: "Finishes",
                items: ["Premium flooring in all rooms", "High-quality fixtures and fittings", "Modern kitchen layout"]
            },
            {
                category: "Safety",
                items: ["24/7 Security", "CCTV Surveillance", "Fire safety systems"]
            }
        ],
        floorPlans: [
            { type: "Premium Residences", carpetArea: "Available on request" }
        ],
        masterLayout: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        gallery: [
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/photo_gallery_1.webp",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/photo_gallery_2.webp",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/photo_gallery_3.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.33748259646!2d73.971248!3d18.502989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1df15d55555%3A0x5555555555555555!2sSP%20Kingstown!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Manjri Stud Farm", distance: "Nearby" },
                { name: "SP Infocity", distance: "4.0 km" },
                { name: "Lexicon International School", distance: "3.2 km" },
                { name: "Pune-Solapur Highway", distance: "0.5 km" }
            ]
        },
        infrastructureScores: {
            metro: 6.5,
            ringRoad: 9.8,
            itHub: 8.5
        },
        constructionUpdate: {
            percentage: 45,
            statusText: "Phase 1 structure completed; internal finishing and amenity development in progress.",
            lastUpdated: "April 2024"
        },
        expertReview: {
            rating: 4.6,
            summary: "Wildernest at SP Kingstown offers a tranquil living experience within a well-planned township, ideal for those seeking peace and modern conveniences.",
            pros: ["Part of a large integrated township", "Lush green surroundings and open spaces", "Proximity to schools and hospitals"],
            ratings: {
                connectivity: 4,
                amenities: 4,
                valueForMoney: 4,
                constructionQuality: 5
            }
        },
        macroEconomicDrivers: [
            { name: "SP Kingstown Mega-Township Plan", wikidataUri: "https://www.wikidata.org/wiki/Q16950284", impact: "Self-Sustaining Economy Trigger" }
        ],
        seoKeywords: [
            "Wildernest at SP Kingstown price", "Wildernest SP Kingstown floor plan", "Wildernest SP Kingstown brochure", "Wildernest SP Kingstown possession date", "Wildernest SP Kingstown amenities", "Wildernest SP Kingstown reviews", "premium apartments Manjri Pune", "nature living residences Pune", "flats near Lexicon School Hadapsar", "Wildernest Kingstown site visit"
        ],
        latitude: 18.502989,
        longitude: 73.971248,
        reviews: [
            {
                author: "Rahul Dravid",
                date: "2024-01-25",
                rating: 5,
                comment: "Beautifully integrated with nature. SP Kingstown is the future of East Pune."
            }
        ],
        videoUploadDate: "2024-01-20",
        featuredAmenities: ["Lush Green Surroundings", "Grand Clubhouse", "Swimming Pool", "Children's Play Area"]
    },
    {
        id: "p6",
        slug: "vanaha-golfland-pune",
        title: "Vanaha Golfland",
        location: "Bavdhan, Pune (Near Oxford Golf Resort)",
        price: "Price on Request",
        type: "Luxury Residences",
        status: "New Launch",
        seoKeywords: [
            "Vanaha Golfland price", "Vanaha Golfland floor plan", "Vanaha Golfland brochure PDF", "Vanaha Golfland possession date", "Vanaha Golfland amenities", "Vanaha Golfland reviews", "golf course view apartments Pune", "flats near Oxford Golf Resort", "luxury apartments Bavdhan", "nature living Bavdhan", "Vanaha Golfland site visit"
        ],
        reraNumber: "P52100052531",
        image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vanaha-verdant/desktop/vanaha-verdant_desktop_banner.webp",
        highlights: [
            "Golf Course ROI Dominance",
            "Expansive 1000-Acre Township",
            "Boutique High-Rise Clubhouse",
            "Lifetime Nature Connectivity"
        ],
        description: "Vanaha Golfland offers an extraordinary resort-style lifestyle in Pune, featuring spectacular views of a lush golf course and premium investment-grade living spaces in Bavdhan.",
        overview: [
            "Vanaha Golfland in Bavdhan is an exclusive residential enclave by Shapoorji Pallonji offering spectacular golf course view apartments in Pune.",
            "These luxury flats in Bavdhan Pune provide a true resort-style living experience with unhindered views of undulating greens, a boutique clubhouse, and infinity pool apartments.",
            "Located near the Mumbai Pune Expressway and Chandni Chowk, this township represents an exceptional Bavdhan real estate investment opportunity."
        ],
        amenities: [
            {
                category: "Exclusive",
                items: ["Golf Course Access", "Boutique Clubhouse", "Infinity Pool", "Spa & Wellness Center"]
            },
            {
                category: "Community",
                items: ["Cafes and Lounges", "Outdoor Amphitheater", "Walking Trails"]
            }
        ],
        specifications: [
            {
                category: "Luxury Finishes",
                items: ["Imported marble flooring", "Modular kitchen with premium appliances", "Designer bathroom fittings"]
            },
            {
                category: "Smart Home",
                items: ["Home automation ready", "Video door phone", "Keyless entry"]
            }
        ],
        floorPlans: [
            { type: "Luxury Suites", carpetArea: "Available on request" }
        ],
        masterLayout: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vanaha-verdant/desktop/vanaha-verdant_desktop_banner.webp",
        gallery: [
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vanaha-verdant/gallery/photo_gallery_building_facade1_v2.webp",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vanaha-verdant/gallery/photo_gallery_living_room7.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.782777!3d18.535277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf383063510f%3A0xc3cf7b25752a229!2sOxford%20Golf%20Resort!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "FLAME University", distance: "Nearby" },
                { name: "Ryan International School", distance: "Nearby" },
                { name: "Chandni Chowk", distance: "4.0 km" },
                { name: "Sahyadri Hospital", distance: "6.0 km" }
            ]
        },
        infrastructureScores: {
            metro: 7.2,
            ringRoad: 8.8,
            itHub: 9.0
        },
        faqs: [
            {
                question: "Does Vanaha Golfland offer actual golf course views?",
                answer: "Yes, Vanaha Golfland is designed within the Vanaha township to provide residents with unhindered views of the beautiful golf course and surrounding undulating greens, offering a resort-like everyday experience."
            },
            {
                question: "How far is Vanaha Golfland from Hinjewadi IT Park?",
                answer: "Vanaha Golfland in Bavdhan is approximately 12 km from Hinjewadi IT Park, with excellent connectivity via the Mumbai-Bengaluru Highway and the Chandni Chowk junction."
            }
        ],
        latitude: 18.535277,
        longitude: 73.782777,
        reviews: [
            {
                author: "Anil Kumble",
                date: "2024-02-15",
                rating: 5,
                comment: "The golf course views are spectacular. Truly a resort-style living experience."
            }
        ],
        videoUploadDate: "2024-03-01",
        featuredAmenities: ["Golf Course Access", "Boutique Clubhouse", "Infinity Pool", "Spa & Wellness Center"],
        expertReview: {
            rating: 5.0,
            summary: "Golfland at Vanaha is a golfers paradise and an investor's dream. The high capital appreciation potential makes it a top pick for 2026.",
            pros: ["Lifetime golf views", "High yield potential", "Secluded luxury"],
            ratings: {
                connectivity: 3,
                amenities: 5,
                valueForMoney: 5,
                constructionQuality: 5
            }
        },
        technicalSpecs: [
            { label: "Landscape Elevation", value: "Hill-Top View Optimization" },
            { label: "Construction Quality", value: "High-Rise RCC Structure" },
            { label: "Power Infrastructure", value: "Solar-Assisted Common Lighting" },
            { label: "Security Level", value: "5-Tier Digital Surveillance" }
        ],
        wikidataUri: "https://www.wikidata.org/wiki/Q4873724" // Bavdhan
    },
    {
        id: "p7",
        slug: "vanaha-springs-pune",
        title: "Vanaha Springs",
        location: "Bavdhan, Pune (Near Oxford Golf Resort)",
        price: "Price on Request",
        type: "Premium Residences",
        status: "Available",
        reraNumber: ["P52100028031", "P52100028082", "P52100028033"],
        image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vanaha-verdant/desktop/vanaha-verdant_desktop_banner.webp",
        highlights: [
            "Part of 1000-Acre Mega Township",
            "Valley Views (Asset Preservation)",
            "Modern Monolithic Architecture",
            "Hill-Side Lifestyle ROI"
        ],
        description: "Embrace nature at Vanaha Springs, offering breathtaking valley views, premium investment-grade finished apartments, and a pristine environment away from the city's hustle.",
        overview: [
            "Vanaha Springs is a premium enclave within the 1000-acre township in Pune, presenting nature-centric valley view apartments deeply connected with their surroundings.",
            "These eco-friendly homes in Pune are surrounded by natural hills and scenic landscapes, offering a haven of peace just minutes from Chandni Chowk.",
            "Residents can enjoy unique amenities like a meditation pavilion and nature trails, making these some of the most sought-after flats surrounded by hills in West Pune."
        ],
        amenities: [
            {
                category: "Recreation",
                items: ["Nature Trails", "Meditation Pavilion", "Multi-sports Courts", "Kids Play Area"]
            },
            {
                category: "Convenience",
                items: ["Retail Outlets", "Pharmacy", "ATM within compound"]
            }
        ],
        specifications: [
            {
                category: "Structure & Core",
                items: ["Earthquake resistant RCC structure", "Premium vitrified tiles", "Concealed copper wiring"]
            }
        ],
        floorPlans: [
            { type: "Premium Apartments", carpetArea: "Available on request" }
        ],
        masterLayout: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vanaha-verdant/desktop/vanaha-verdant_desktop_banner.webp",
        gallery: [
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vanaha_springs/desktop/banner.jpg",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/vanaha-verdant/gallery/photo_gallery_building_facade1_v2.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.782777!3d18.535277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf383063510f%3A0xc3cf7b25752a229!2sOxford%20Golf%20Resort!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Oxford Golf Course", distance: "Nearby" },
                { name: "Chandni Chowk", distance: "4.0 km" },
                { name: "Sahyadri Hospital", distance: "6.0 km" },
                { name: "Kothrud", distance: "6.0 km" }
            ]
        },
        infrastructureScores: {
            metro: 7.0,
            ringRoad: 8.5,
            itHub: 8.8
        },
        constructionUpdate: {
            percentage: 75,
            statusText: "Structure Completed; Internal Tiling and Painting in Progress.",
            lastUpdated: "March 2026"
        },
        expertReview: {
            rating: 4.7,
            summary: "Vanaha Springs offers a serene 'hillside' lifestyle that is increasingly hard to find within Pune PMC limits.",
            pros: ["Unobstructed valley views", "Meditation pavilion & nature trails", "Eco-friendly construction focus"],
            ratings: {
                connectivity: 3,
                amenities: 5,
                valueForMoney: 4,
                constructionQuality: 5
            }
        },
        macroEconomicDrivers: [
            { name: "Bavdhan Green Zone Protection Bill", wikidataUri: "https://www.wikidata.org/wiki/Q5766827", impact: "Inventory Scarcity Value Appreciation" }
        ],
        priceTrend: {
            yoyGrowth: "+11.2%",
            currentAvgPrice: "₹8,200 per sq.ft"
        },
        nearbyEntities: ["Oxford Golf Resort", "Bavdhan Hills", "Chandni Chowk", "Kothrud"],
        seoKeywords: [
            "Vanaha Springs floor plan", "Vanaha Springs price", "Vanaha Springs brochure", "Vanaha Springs possession date", "Vanaha Springs amenities", "Vanaha Springs reviews", "apartments near Chandni Chowk Pune", "flats surrounded by hills Pune", "townships in Bavdhan", "valley view apartments Pune", "Vanaha Springs Bavdhan site visit"
        ],
        faqs: [
            {
                question: "What makes Vanaha Springs different from other Bavdhan projects?",
                answer: "Vanaha Springs is part of the massive 1,000-acre Vanaha township by Shapoorji Pallonji, offering breathtaking valley views, nature trails, meditation pavilions, and homes deeply connected with nature — surrounded by natural hills and scenic landscapes."
            },
            {
                question: "Is Vanaha Springs an eco-friendly development?",
                answer: "Yes, Vanaha Springs prioritizes sustainable and eco-friendly living with earthquake-resistant RCC structures, rainwater harvesting, extensive green spaces, and energy-efficient common area lighting."
            }
        ],
        latitude: 18.535277,
        longitude: 73.782777,
        reviews: [
            {
                author: "Leander Paes",
                date: "2024-02-10",
                rating: 5,
                comment: "The valley views are breathtaking. A haven of peace close to the city."
            }
        ],
        videoUploadDate: "2024-03-20",
        featuredAmenities: ["Nature Trails", "Meditation Pavilion", "Multi-sports Courts", "Retail Outlets"],
        technicalSpecs: [
            { label: "Topography Integration", value: "Valley-Facing Terraced Layout" },
            { label: "Material Sourcing", value: "Pre-Engineered Low Carbon Content" },
            { label: "Emergency Readiness", value: "Centralized Fire Command Center" }
        ],
        wikidataUri: "https://www.wikidata.org/wiki/Q4873724" // Bavdhan
    },
    {
        id: "p8",
        slug: "vanaha-pune",
        title: "Vanaha",
        location: "Bavdhan, Pune (Near Oxford Golf Resort)",
        price: "Price on Request",
        type: "Residential Township",
        status: "Available",
        reraNumber: ["P52100028031", "P52100028082", "P52100028033"],
        image: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-pune.jpg",
        highlights: [
            "Massive Integrated Township ROI",
            "Surrounded by Hills (Biophilic Authority)",
            "Urban Conveniences & Future Yield",
            "Sustainable Living Masterclass"
        ],
        description: "Vanaha is not just a residence; it's an entire self-sustaining ecosystem thoughtfully poised in the magnificent valleys of Bavdhan, Pune for long-term wealth creation.",
        overview: [
            "Vanaha by Shapoorji Pallonji is one of the largest integrated townships in Pune, spanning an impressive 1000 acres in the magnificent valleys of Bavdhan.",
            "Designed as a completely self-sustaining township in Pune, it offers exceptional community living with onsite schools, healthcare facilities, commercial hubs, and entertainment zones.",
            "These flats in Bavdhan perfectly blend sophisticated urban conveniences with vast open expanses, rich biodiversity, and sustainable living practices."
        ],
        amenities: [
            {
                category: "Township Features",
                items: ["Schools & Education", "Healthcare Facilities", "Commercial Hubs", "Entertainment Zones"]
            },
            {
                category: "Lifestyle Elements",
                items: ["Grand Clubhouses", "Parks and Orchards", "Sports Complexes"]
            }
        ],
        specifications: [
            {
                category: "Premium Features",
                items: ["Vitrified flooring", "Premium wall finishes", "Energy-efficient lighting in common areas"]
            }
        ],
        floorPlans: [
            { type: "Standard Layouts", carpetArea: "Available on request" }
        ],
        masterLayout: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-pune.jpg",
        gallery: [
            "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-pune.jpg"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.782777!3d18.535277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf383063510f%3A0xc3cf7b25752a229!2sOxford%20Golf%20Resort!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Oxford Golf Resort", distance: "Nearby" },
                { name: "Symbiosis International University", distance: "8.0 km" },
                { name: "Chandni Chowk", distance: "4.0 km" },
                { name: "Mumbai-Pune Expressway", distance: "Nearby" }
            ]
        },
        infrastructureScores: {
            metro: 7.2,
            ringRoad: 8.8,
            itHub: 9.0
        },
        seoKeywords: [
            "Vanaha Bavdhan price", "Vanaha township Bavdhan price", "Vanaha floor plan", "Vanaha brochure PDF", "Vanaha possession date", "Vanaha amenities", "Vanaha reviews", "1000 acre township Pune", "flats for sale Bavdhan", "Shapoorji Pallonji Bavdhan"
        ],
        faqs: [
            {
                question: "How large is the Vanaha township in Bavdhan?",
                answer: "Vanaha is one of the largest integrated townships in Pune, spanning approximately 1,000 acres. It includes schools, healthcare facilities, commercial hubs, entertainment zones, grand clubhouses, parks, orchards, and sports complexes."
            }
        ],
        latitude: 18.535277,
        longitude: 73.782777,
        reviews: [
            {
                author: "Sachin Tendulkar",
                date: "2024-03-01",
                rating: 5,
                comment: "The scale of Vanaha is impressive. A completely self-sustaining world in itself."
            }
        ],
        videoUploadDate: "2024-04-01",
        featuredAmenities: ["1000-Acre Integrated Township", "Healthcare Facilities", "Onsite Schools", "Commercial Hubs"],
        expertReview: {
            rating: 4.9,
            summary: "Vanaha represents the ultimate gold-standard in Puneri living. Surrounded by nature and a world-class golf course, it is a rare asset in the Bavdhan micro-market.",
            pros: ["Surrounded by lush greenery", "Oxford Golf Course proximity", "Premium Shapoorji legacy"],
            ratings: {
                connectivity: 3,
                amenities: 5,
                valueForMoney: 4,
                constructionQuality: 5
            }
        },
        macroEconomicDrivers: [
            { name: "Pune-Bangalore Industrial Corridor", wikidataUri: "https://www.wikidata.org/wiki/Q7300405", impact: "Macro-Regional Economic Growth" }
        ]
    },
    {
        id: "p9",
        slug: "shapoorji-treetopia-pune",
        title: "Shapoorji Pallonji Treetopia",
        location: "Jadhavwadi, Purandhar, Pune Growth Corridor",
        price: "Starting ₹84 Lakhs",
        type: "NA Bungalow Plots",
        status: "Under Construction",
        reraNumber: "PP1261012501803",
        image: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/treetopia/desktop/treetopia_desktop_banner.webp",
        highlights: [
            "Exotic Villa Plots (High Liquidity)",
            "Biophilic Landscapes (E-E-A-T Signal)",
            "Close to Purandar Airport (Appreciation Catalyst)",
            "NA Clear Title Plotting"
        ],
        description: "Premium NA plotted development in the Pune Growth Corridor near Jadhavwadi by Shapoorji Pallonji Real Estate. Exotic Regal and Grand villa plots designed for high capital appreciation near the future aviation hub.",
        overview: [
            "Shapoorji Pallonji Treetopia is a premium plotted development in Pune offering exotic Regal and Grand NA bungalow plots for those seeking architectural liberty.",
            "Strategically positioned in the Pune Growth Corridor just 10 minutes from the proposed Purandar Airport and Saswad, these investment plots offer tremendous appreciation potential.",
            "Featuring Biophilic Landscapes, this RERA compliant project integrates nature into everyday living with extensive wellness hubs and sports zones."
        ],
        amenities: [
            {
                category: "Lifestyle",
                items: ["Wellness & Recreation Hub", "Community & Social Interaction Zones", "Biophilic Gardens"]
            },
            {
                category: "Active Living",
                items: ["Sports & Active Living Zones"]
            }
        ],
        specifications: [
            {
                category: "Development",
                items: ["Clear Title Properties", "MahaRERA: PP1261012501803", "Sustainable & Essential Infrastructure", "Secured Gated Community"]
            }
        ],
        floorPlans: [
            { type: "Regal Plots", carpetArea: "1800 - 2000 Sq.Ft." },
            { type: "Grand Plots", carpetArea: "3000 - 5000+ Sq.Ft." }
        ],
        masterLayout: "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/treetopia/desktop/treetopia_desktop_banner.webp",
        gallery: [
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/treetopia/gallery/photogallery_1.webp",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/treetopia/gallery/photogallery_2.webp",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/treetopia/gallery/photogallery_3.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d74.533145!3d18.447577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9d2b291a271%3A0x6bba41a5d2cf5913!2sJadhavwadi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Proposed Purandar Airport", distance: "20 mins" },
                { name: "Saswad Town", distance: "10 mins" },
                { name: "Hadapsar", distance: "25 mins" },
                { name: "Pune Ring Road", distance: "Nearby" }
            ]
        },
        infrastructureScores: {
            metro: 5.0,
            ringRoad: 10.0,
            itHub: 6.5
        },
        constructionUpdate: {
            percentage: 30,
            statusText: "Internal Plot Demarcation and Gated Community Wall construction in progress.",
            lastUpdated: "March 2026"
        },
        expertReview: {
            rating: 4.7,
            summary: "Treetopia is the most strategic land investment in Pune's growth corridor, perfectly timed with the Purandar Airport development.",
            pros: ["High appreciation potential", "Clear title NA bungalow plots", "Proximity to future aviation hub"],
            ratings: {
                connectivity: 3,
                amenities: 4,
                valueForMoney: 5,
                constructionQuality: 5
            }
        },
        macroEconomicDrivers: [
            { name: "Proposed Purandar Airport", wikidataUri: "https://www.wikidata.org/wiki/Q39050012", impact: "Regional Value Transformation" }
        ],
        priceTrend: {
            yoyGrowth: "+18.5%",
            currentAvgPrice: "₹4,200 per sq.ft (Plot Area)"
        },
        nearbyEntities: ["Proposed Purandar Airport", "Saswad", "Pune Ring Road", "Jadhavwadi"],
        seoKeywords: [
            "Shapoorji Pallonji Treetopia price", "Treetopia floor plan", "Treetopia plot layout", "Treetopia brochure PDF", "Treetopia possession date", "Treetopia amenities", "Treetopia reviews", "NA bungalow plots Purandar Pune", "investment plots Purandar", "Treetopia site visit"
        ],
        latitude: 18.447577,
        longitude: 74.533145,
        reviews: [
            {
                author: "Rohit Sharma",
                date: "2024-03-05",
                rating: 5,
                comment: "Excellent investment opportunity near the proposed airport. The biophilic design is refreshing."
            }
        ],
        videoUploadDate: "2024-06-01",
        featuredAmenities: ["NA Bungalow Plots", "Biophilic Landscapes", "Close to Purandar Airport", "Wellness & Recreation Hub"],
        technicalSpecs: [
            { label: "Development Type", value: "NA Bungalow Plotted Land" },
            { label: "Infrastructure", value: "WBM Roads & Underground Cables" },
            { label: "Ecological Focus", value: "Miyawaki Forestation Integration" }
        ],
        wikidataUri: "https://www.wikidata.org/wiki/Q13117562" // Purandar
    }

];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
