export interface TopicHub {
    id: string;
    slug: string;
    title: string;
    h1: string;
    description: string;
    metaDescription: string;
    keywords: string[];
    heroImage: string;
    icon: string;
    content: string[];
    faqs: { q: string; a: string }[];
    category: 'Finance' | 'Location' | 'Lifestyle' | 'Brand';
}

export const TOPIC_HUBS: TopicHub[] = [
    {
        id: 'hinjewadi-it-hub',
        slug: 'hinjewadi-infrastructure-it-corridor-growth',
        title: 'Hinjewadi Infrastructure & IT Corridor Growth Hub',
        h1: 'The Future of Hinjewadi: Infrastructure & IT Growth 2026',
        description: 'A comprehensive aggregator of infrastructure catalysts, metro connectivity updates, and IT park expansion in Hinjewadi Phase 1, 2, and 3.',
        metaDescription: 'Explore the definitive guide to Hinjewadi infrastructure growth. Stay updated on Pune Metro Line 3, Ring Road impact, and IT corridor expansion for 2026.',
        keywords: ['Hinjewadi infrastructure', 'Pune Metro Line 3 impact', 'Hinjewadi Phase 1 growth', 'IT park expansion Pune', 'Ring Road Hinjewadi connectivity'],
        heroImage: '/images/joyville_sensorium_projectcard.webp',
        icon: 'Building2',
        content: [
            "Hinjewadi is not just a location; it is the economic engine of Maharashtra. With the Rajiv Gandhi Infotech Park entering its most aggressive expansion phase, infrastructure is the primary driver of real estate value.",
            "This hub centralizes all reporting on the Pune Metro Line 3 (Hinjewadi to Shivajinagar), the upcoming High-Capacity Mass Transit Route (HCMTR), and the Multi-Modal Integration at Phase 1.",
            "As we approach 2026, the 'Walk-to-Work' concept is becoming the standard for the 400,000+ tech professionals working here. Explore our deep dives into how this infrastructure creates a recession-proof investment zone."
        ],
        faqs: [
            { q: "When will Pune Metro Line 3 be operational?", a: "The Hinjewadi-Shivajinagar Metro Line 3 is slated for partial operations in early 2025 and full connectivity by 2026, drastically reducing commute times by up to 70%." },
            { q: "What is the impact of the Ring Road on Hinjewadi?", a: "The 128km Pune Ring Road will provide seamless bypass connectivity from Hinjewadi to the Pune-Bangalore and Pune-Mumbai highways, further escalating property valuations." }
        ],
        category: 'Location'
    },
    {
        id: 'pune-rental-market',
        slug: 'pune-rental-yield-market-analysis',
        title: 'Pune Rental Yield & Investment Analysis Hub',
        h1: 'Mastering the Pune Rental Market: Yields & ROI 2026',
        description: 'Data-driven insights into the highest-yielding micro-markets in Pune. Compare rental income potential for 2 BHK and 3 BHK flats.',
        metaDescription: 'Access the latest Pune rental yield statistics. Learn which Pune micro-markets offer the best ROI and passive income for real estate investors in 2026.',
        keywords: ['Pune rental yield', 'ROI residential property Pune', 'best investment pockets Pune', 'rental income Hinjewadi vs Hadapsar', 'passive income real estate Pune'],
        heroImage: '/images/joyville_hadapsar_projectcard.webp',
        icon: 'TrendingUp',
        content: [
            "The search for yield has overtaken pure capital appreciation as the primary goal for the modern Indian investor. Pune currently ranks among the top 3 Indian cities for residential rental yields.",
            "In this hub, we aggregate price-to-rent ratios across Hinjewadi, Hadapsar, and Bavdhan. We analyze how township amenities like smart-home tech and security directly correlate with higher monthly rental premiums.",
            "Whether you are a seasoned investor or a first-time landlord, understanding the demographic shifts in Pune's workforce is key to securing consistent double-digit returns."
        ],
        faqs: [
            { q: "What is the average rental yield in Hinjewadi?", a: "Hinjewadi Phase 1 currently offers between 4.2% to 5.5% annual rental yield, depending on the building amenities and unit configuration." },
            { q: "Do 2 BHKs or 3 BHKs yield better in Pune?", a: "Historically, 2 BHKs offer higher rental yields (percentage), while 3 BHKs command longer tenant retention and higher absolute monthly cash flow." }
        ],
        category: 'Finance'
    },
    {
        id: 'nri-investment',
        slug: 'nri-real-estate-investment-strategy-india',
        title: 'NRI Real Estate Investment Central — India 2026',
        h1: 'NRI Property Investment in India: The 2026 Strategy',
        description: 'A dedicated gateway for Non-Resident Indians to navigate the Indian real estate landscape, tax implications, and high-growth assets.',
        metaDescription: 'The ultimate NRI guide to property investment in India. Learn about FEMA regulations, tax benefits, and high-growth assets in Pune real estate.',
        keywords: ['NRI property investment India', 'FEMA guidelines real estate', 'tax on rental income NRI', 'best city for NRI investment 2026', 'Shapoorji Pallonji NRI services'],
        heroImage: '/images/author-vikas.webp',
        icon: 'Globe',
        content: [
            "For the global Indian, real estate back home remains the most trusted asset class. With the digitalization of ownership records and the protection of RERA, trust has been restored to the market.",
            "This hub provides a structured roadmap for NRIs based in the UAE, USA, UK, and Singapore. We cover currency advantages, remote management of rental properties, and the legal framework for seamless repatriation of funds.",
            "Shapoorji Pallonji's 150-year legacy offers a 'Sovereign-grade' security for NRIs who cannot be physically present to monitor construction progress."
        ],
        faqs: [
            { q: "Can an NRI buy property in India without a PAN card?", a: "No, a PAN card is mandatory for any property transaction in India. However, the application process for NRIs is now fully digital." },
            { q: "What is the tax on rental income for NRIs?", a: "Rental income is taxable in India. However, NRIs can claim a standard deduction of 30% for repairs and maintenance, plus deductions for property taxes paid." }
        ],
        category: 'Brand'
    },
    {
        id: 'pune-townships',
        slug: 'pune-integrated-townships-lifestyle-hubs',
        title: 'Pune Integrated Townships & Lifestyle Hub',
        h1: 'The Rise of Integrated Townships in Pune: 2026 Guide',
        description: 'Exploring the 15-minute city concept in Pune. Why gated townships are the future of residential living.',
        metaDescription: 'Discover why integrated townships are Pune\'s top residential choice. Explore the lifestyle benefits of the 15-minute city concept at Joyville.',
        keywords: ['integrated township Pune', 'gated community flats Hadapsar', '15 minute city Pune', 'township amenities list', 'safe living for children Pune'],
        heroImage: '/images/joyville_hadapsar_projectcard.webp',
        icon: 'Map',
        content: [
            "The standalone building is becoming a relic of the past. Modern Pune residents demand a 'Full Ecosystem'—where schools, healthcare, retail, and recreation are all within a 15-minute walk.",
            "This hub explores the 'Joyville Way' of life. We analyze the psychological and physical benefits of living in low-density, amenity-rich developments that prioritize open spaces and organic greenery.",
            "From the 2.8-acre sunken gardens to the biophilic design of our latest towers, discover how townships are redefining the meaning of 'Home' in 2026."
        ],
        faqs: [
            { q: "What are the benefits of living in a township?", a: "Major benefits include 24/7 security, dedicated water/power backup, managed infrastructure, and a ready community of like-minded professionals." },
            { q: "Are township flats more expensive than standalone ones?", a: "While the initial purchase price might be slightly higher, the long-term capital appreciation and resale value of township flats significantly outperform standalone units." }
        ],
        category: 'Lifestyle'
    }
];

export function getTopicById(id: string): TopicHub | undefined {
    return TOPIC_HUBS.find(t => t.id === id);
}

export function getTopicBySlug(slug: string): TopicHub | undefined {
    return TOPIC_HUBS.find(t => t.slug === slug);
}
