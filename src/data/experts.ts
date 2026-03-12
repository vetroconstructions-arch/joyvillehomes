export interface ExpertProfile {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    specialization: string[];
    certification?: string[];
    linkedIn?: string;
    quotes?: string[];
    marketForecast?: {
        locality: string;
        prediction: string;
        confidence: number;
    }[];
}

export const experts: ExpertProfile[] = [
    {
        id: "expert-001",
        name: "Vikas Sharma",
        role: "Principal Real Estate Analyst",
        image: "/images/author-vikas.webp",
        bio: "Vikas has 15 years of experience in Pune's residential market, specialized in IT corridor investment trajectories.",
        specialization: ["Market Trends", "ROI Analysis", "IT Corridor Growth"],
        certification: ["RERA Certified Practitioner"],
        quotes: [
            "The Hinjewadi-Maan corridor is currently undervalued by 15-20% relative to its future connectivity via Metro Line 3.",
            "Townships with EDGE certification will command a 5-7% higher resale value in the 2026-2030 cycle."
        ],
        marketForecast: [
            { locality: "Hinjewadi", prediction: "12% Appreciation by Dec 2026", confidence: 92 },
            { locality: "Hadapsar", prediction: "8% Rental Yield Surge", confidence: 88 }
        ]
    },
    {
        id: "expert-002",
        name: "Ananya Deshpande",
        role: "Urban Planning Consultant",
        image: "/images/author-ananya.webp",
        bio: "Ananya consults on sustainable township development and biophilic design in rapidly expanding micro-markets.",
        specialization: ["Sustainable Townships", "Biophilic Design", "Urban Planning"],
        certification: ["IGBC Accredited Professional"],
        quotes: [
            "Integrated townships are no longer a luxury; they are a necessity for the 'Work-Life Merge' paradigm of IT workers.",
            "Water self-sufficiency is the single biggest trust signal for modern Pune homebuyers."
        ],
        marketForecast: [
            { locality: "Bavdhan", prediction: "Inventory Scarcity to drive 10% premium", confidence: 85 }
        ]
    },
    {
        id: "expert-003",
        name: "Rajesh Kulkarni",
        role: "Legal & Regulatory Advisor",
        image: "/images/author-rajesh.webp",
        bio: "Rajesh specializes in MahaRERA compliance and real estate title verification with over 20 years of legal practice.",
        specialization: ["MahaRERA Compliance", "Title Verification", "Real Estate Law"],
        certification: ["Bar Council of Maharashtra & Goa"]
    }
];

export const getExpertById = (id: string) => experts.find(e => e.id === id);
export const getExpertByName = (name: string) => experts.find(e => e.name === name);
