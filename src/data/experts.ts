export interface ExpertProfile {
    id: string;
    name: string;
    role: string;
    image: string;
    bio: string;
    longBio: string[];
    specialization: string[];
    certification?: { name: string; authority: string; date: string }[];
    linkedIn?: string;
    twitter?: string;
    quotes?: string[];
    marketForecast?: {
        locality: string;
        prediction: string;
        confidence: number;
        rationale: string;
    }[];
    publications?: { title: string; url: string; year: string }[];
}

export const experts: ExpertProfile[] = [
    {
        id: "expert-001",
        name: "Vikas Sharma",
        role: "Principal Real Estate Analyst",
        image: "/images/author-vikas.webp",
        bio: "Vikas has 15 years of experience in Pune's residential market, specialized in IT corridor investment trajectories.",
        longBio: [
            "With over a decade and a half of dedicated research into the Pune metropolitan region, Vikas Sharma is one of the most cited analysts for Western Pune's IT corridor growth.",
            "His methodology involves a multi-layered analysis of infrastructure milestones (Metro, Ring Road) mapped against long-term rental appreciation cycles.",
            "At Joyville, he leads the Market Intelligence unit, ensuring that every price projection is backed by empirical RERA data and PMRDA urban development masterplans."
        ],
        specialization: ["Market Trends", "ROI Analysis", "IT Corridor Growth", "Capital Appreciation Modeling"],
        certification: [
            { name: "RERA Certified Real Estate Practitioner", authority: "MahaRERA", date: "2018" },
            { name: "Certified Investment Analyst", authority: "NISM", date: "2015" }
        ],
        linkedIn: "https://linkedin.com/in/vikas-sharma-joyville-analyst",
        quotes: [
            "The Hinjewadi-Maan corridor is currently undervalued by 15-20% relative to its future connectivity via Metro Line 3.",
            "Townships with EDGE certification will command a 5-7% higher resale value in the 2026-2030 cycle."
        ],
        marketForecast: [
            { locality: "Hinjewadi", prediction: "12% Appreciation by Dec 2026", confidence: 92, rationale: "Driven by Pune Metro Line 3 operational status and IT park Phase 1 saturation." },
            { locality: "Hadapsar", prediction: "8% Rental Yield Surge", confidence: 88, rationale: "Direct result of Magarpatta and SP Infocity expansion demand for premium townships." }
        ],
        publications: [
            { title: "Pune 2030: The Metro Impact Report", url: "#", year: "2024" },
            { title: "Understanding ROI in West Pune IT Hubs", url: "#", year: "2023" }
        ]
    },
    {
        id: "expert-002",
        name: "Ananya Deshpande",
        role: "Urban Planning Consultant",
        image: "/images/author-ananya.webp",
        bio: "Ananya consults on sustainable township development and biophilic design in rapidly expanding micro-markets.",
        longBio: [
            "Ananya Deshpande is an award-winning urban planner with a focus on 'The 15-Minute City' concept in Indian metros.",
            "She joined the Joyville ecosystem as a consulting partner to audit the sustainability of open spaces and the integration of biophilic architecture in townships.",
            "Her work is frequently cited in urban development journals concerning the mental health benefits of low-density residential designs."
        ],
        specialization: ["Sustainable Townships", "Biophilic Design", "Urban Planning", "Life Republic Case Studies"],
        certification: [
            { name: "IGBC Accredited Professional", authority: "Indian Green Building Council", date: "2020" },
            { name: "Masters in Urban Planning", authority: "COEP Pune", date: "2012" }
        ],
        linkedIn: "https://linkedin.com/in/ananya-deshpande-urban-plan",
        quotes: [
            "Integrated townships are no longer a luxury; they are a necessity for the 'Work-Life Merge' paradigm of IT workers.",
            "Water self-sufficiency is the single biggest trust signal for modern Pune homebuyers."
        ],
        marketForecast: [
            { locality: "Bavdhan", prediction: "Inventory Scarcity to drive 10% premium", confidence: 85, rationale: "Lack of fresh land parcels in Bavdhan Valley meeting premium gated community standards." }
        ]
    },
    {
        id: "expert-003",
        name: "Rajesh Kulkarni",
        role: "Legal & Regulatory Advisor",
        image: "/images/author-rajesh.webp",
        bio: "Rajesh specializes in MahaRERA compliance and real estate title verification with over 20 years of legal practice.",
        longBio: [
            "Advocate Rajesh Kulkarni is a leading voice in Maharashtrian housing laws and the implementation of RERA protocols.",
            "He provides third-party audits of project titles and RERA registrations to ensure absolute transparency for Joyville's global NRI client base.",
            "His legal insights ensure that the procurement process—from EOI to final Sale Deed registration—is air-tight and compliant with the latest government notifications."
        ],
        specialization: ["MahaRERA Compliance", "Title Verification", "Real Estate Law", "NRI Repatriation Law"],
        certification: [
            { name: "Member of Bar Council of Maharashtra & Goa", authority: "BCMG", date: "2003" },
            { name: "Advanced Diploma in Corporate Law", authority: "ILS Law College", date: "2005" }
        ],
        linkedIn: "https://linkedin.com/in/adv-rajesh-kulkarni-property-law",
        quotes: [
            "RERA has fundamentally shifted the power from the developer to the buyer; transparency is the new currency of real estate.",
            "For NRIs, a clear index-2 and RERA compliance are the non-negotiable pillars of a safe investment in India."
        ]
    }
];

export const getExpertById = (id: string) => experts.find(e => e.id === id);
export const getExpertByName = (name: string) => experts.find(e => e.name === name);
