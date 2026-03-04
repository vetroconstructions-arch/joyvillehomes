import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { MapPin, ArrowRight, Building2, TrendingUp, Landmark } from 'lucide-react';
import BrochureButton from '@/components/BrochureButton';

interface LocalityData {
    id: string;
    slug: string;
    name: string;
    subtitle: string;
    seoKeywords: string[];
    description: string;
    infrastructure: { label: string; value: string }[];
    marketTrend: string;
    priceRange: string;
    avgPricePerSqFt: string;
    yoyAppreciation: string;
    latitude: number;
    longitude: number;
    faqs: { q: string; a: string }[];
}

const siteUrl = 'https://www.joyville-homes.com';

const localities: LocalityData[] = [
    {
        id: "l1",
        slug: "hinjewadi",
        name: "Hinjewadi",
        subtitle: "The IT Capital of Pune West",
        seoKeywords: [
            "Hinjewadi real estate market analysis 2025", "Hinjewadi real estate market analysis 2026",
            "flats in Hinjewadi Phase 1 near Infosys", "Pune IT Park apartments for sale",
            "property rates Hinjewadi Phase 1 2 3", "2 BHK luxury flats in Hinjewadi Phase 1",
            "3 BHK premium apartments Hinjewadi", "new launch projects Hinjewadi 2025", "new launch projects Hinjewadi 2026",
            "flats near Rajiv Gandhi Infotech Park Phase 1", "walk to work apartments Hinjewadi Phase 2",
            "Joyville Sensorium vs Joyville Celestia", "RERA approved flats Hinjewadi under 1 crore",
            "Hinjewadi Metro Line 3 impact on property prices", "rental yield in Hinjewadi for NRI investors",
            "flats near Wipro Hinjewadi", "flats near Infosys Pune", "flats near TCS Hinjewadi",
            "flats near Cognizant Hinjewadi", "Hinjewadi Phase 1 property appreciation 2026",
            "smart home apartments Hinjewadi", "gated community Hinjewadi", "Pune West luxury residences 2026",
            "Joyville Sensorium price 2026", "best IT corridor apartments Pune", "Hinjewadi rental demand 2026",
            "Shapoorji Pallonji Hinjewadi investment", "10 acre township Hinjewadi Phase 1"
        ],
        description: "Hinjewadi is the epicenter of Pune's IT revolution. Home to the sprawling Rajiv Gandhi Infotech Park — housing campuses of Infosys, Wipro, TCS, and 200+ MNCs — it boasts an incredible walk-to-work culture. With the upcoming Metro Line 3 (Maan to Civil Court) and the 170km Pune Ring Road, Hinjewadi is positioned for 12-15% annual capital appreciation. Property rates have surged 53% over the last 5 years, making it Pune's most lucrative investment hub.",
        infrastructure: [
            { label: "Metro Connectivity", value: "Metro Line 3 (Connecting Hinjewadi to Shivajinagar)" },
            { label: "Transit Hubs", value: "Proximity to Mumbai-Pune Expressway & NH48" },
            { label: "Tech Corridors", value: "Rajiv Gandhi IT Park (Phase 1, 2 & 3 Hubs)" },
            { label: "Education", value: "Blossom Public School & Mercedes-Benz International" }
        ],
        marketTrend: "Exponential Growth. The 'Maan-Mahalunge Smart City' initiative and Metro Line 3 are driving a massive influx of premium workforce, boosting both rental demand (4.5-5.5% yield) and resale value.",
        priceRange: "₹85 Lakhs – ₹1.45 Cr",
        avgPricePerSqFt: "₹12,250",
        yoyAppreciation: "8.5%",
        latitude: 18.5913,
        longitude: 73.7389,
        faqs: [
            { q: 'What is the average property rate in Hinjewadi Phase 1 in 2026?', a: 'The average property rate in Hinjewadi Phase 1 is approximately \u20b912,250 per sq.ft. as of 2026, with premium projects commanding higher rates.' },
            { q: 'Is Hinjewadi a good area for real estate investment?', a: 'Yes, Hinjewadi is one of Pune\'s best investment corridors with 8.5% YoY appreciation, 4.5-5.5% rental yield, and upcoming Metro Line 3.' },
            { q: 'Which IT companies are near Joyville Hinjewadi?', a: 'Infosys, Wipro, TCS, Cognizant, Persistent Systems, and 200+ MNCs in the Rajiv Gandhi Infotech Park.' },
            { q: 'How will Pune Metro Line 3 impact Hinjewadi prices?', a: 'Properties within 1.5-2 km of Metro stations typically see a 15-22% valuation spike. Joyville projects are positioned to benefit.' },
            { q: 'What flats are available in Hinjewadi?', a: '2 BHK from \u20b985 Lakhs and 3 BHK from \u20b91.10 Cr with smart home and EDGE green certification.' },
        ]
    },
    {
        id: "l2",
        slug: "bavdhan",
        name: "Bavdhan",
        subtitle: "Luxury Gated Communities in West Pune",
        seoKeywords: [
            "Bavdhan real estate trends 2025", "Bavdhan real estate trends 2026",
            "luxury flats in Bavdhan Pune", "apartments near Chandni Chowk interchange",
            "hill view properties Bavdhan Pune", "Vanaha Golfland price list 2025", "Vanaha Golfland price list 2026",
            "Shapoorji Pallonji Vanaha township Bavdhan", "1000 acre gated community Pune",
            "3 BHK flats in Bavdhan near Kothrud", "2 BHK apartments Bavdhan Pune West",
            "resort style living Pune Bavdhan", "flats near Mumbai Pune Expressway Bavdhan",
            "golf course view apartments Bavdhan", "Vanaha Springs Bavdhan price",
            "hills view apartments Pune West", "flats near Oxford Golf Resort Pune",
            "premium apartments Bavdhan 2026", "NRI investment Bavdhan",
            "Bavdhan property appreciation 2026", "FLAME University nearby flats",
            "nature homes Bavdhan", "integrated township Bavdhan Pune",
            "Bavdhan vs Baner real estate comparison", "sustainable living Bavdhan"
        ],
        description: "Bavdhan is Pune West's most prestigious residential extension. Nestled between the NDA hills and Pashan Lake, it offers a resort-like micro-climate. The area is dominated by Shapoorji Pallonji's 1,000-acre Vanaha township, which has redefined luxury with its 'City within a Forest' concept. Strategic proximity to Kothrud, Hinjewadi, and the Expressway makes it a preferred choice for HNIs and corporate leaders.",
        infrastructure: [
            { label: "Road Network", value: "New Chandni Chowk Multi-tier Interchange" },
            { label: "Lifestyle", value: "Oxford Golf Resort & Flame University" },
            { label: "Connectivity", value: "Direct Highway Access to Mumbai & Bangalore" },
            { label: "Greenery", value: "Surrounded by NDA Hills & Pashan Lake" }
        ],
        marketTrend: "Scarcity-driven Appreciation. Limited new land parcels and the success of integrated townships like Vanaha are pushing prices upwards. 13.18% YoY appreciation reflects its status as the fastest-growing luxury market.",
        priceRange: "₹95 Lakhs – ₹1.85 Cr",
        avgPricePerSqFt: "₹11,800",
        yoyAppreciation: "13.18%",
        latitude: 18.5170,
        longitude: 73.7785,
        faqs: [
            { q: 'Why is Bavdhan considered a premium market?', a: 'Hill views, NDA hills, Pashan Lake, and Shapoorji Pallonji\'s 1,000-acre Vanaha township make it Pune\'s largest integrated community.' },
            { q: 'What is the price range in Bavdhan?', a: 'Apartments range from \u20b995 Lakhs to \u20b91.85 Cr with golf course and valley views at Vanaha.' },
            { q: 'How is Bavdhan connectivity?', a: 'New Chandni Chowk interchange, Mumbai-Pune Expressway access, and proximity to Kothrud and Hinjewadi.' },
            { q: 'What is Bavdhan appreciation rate?', a: '13.18% YoY — the highest among Pune\'s established micro-markets. Limited land drives scarcity pricing.' },
        ]
    },
    {
        id: "l3",
        slug: "hadapsar",
        name: "Hadapsar",
        subtitle: "East Pune's Global IT & Township Hub",
        seoKeywords: [
            "Hadapsar property market analysis 2025", "Hadapsar property market analysis 2026",
            "flats near SP Infocity Phursungi", "apartments near Magarpatta City Hadapsar",
            "Joyville Hadapsar Annexe price trends", "affordable luxury flats Pune East",
            "ready to move 2 BHK in Hadapsar", "flats near EON IT Park Kharadi",
            "Hadapsar vs Kharadi real estate comparison", "township projects in Hadapsar Pune",
            "Shewalewadi property rates 2026", "flats near Amanora Mall Hadapsar",
            "1 BHK flats Hadapsar under 70 lakhs", "3 BHK flats Hadapsar Pune",
            "Hadapsar real estate investment 2026", "Pune Solapur Highway properties",
            "family apartments East Pune", "ready possession flats Hadapsar 2026",
            "Joyville Celestia Hadapsar", "Joyville Skyluxe Hadapsar",
            "Wildernest SP Kingstown Pune", "Manjri Hadapsar corridor properties",
            "Hadapsar Kharadi bypass properties", "East Pune micro market analysis 2026"
        ],
        description: "Hadapsar represents the perfect synergy of commercial power and residential comfort. Hosted by the legendary Magarpatta City and SP Infocity (home to IBM, Accenture, and Amazon), it is East Pune's most stable micro-market. Joyville Hadapsar Annexe has set new standards for gated communities here, offering high-quality living at a 25% price advantage over North Pune markets like Kharadi.",
        infrastructure: [
            { label: "Business Hubs", value: "SP Infocity (Phursungi) & Magarpatta City" },
            { label: "Shopping", value: "Amanora Mall & Seasons Mall" },
            { label: "Transportation", value: "Direct Highway Connectivity (Pune-Solapur)" },
            { label: "Investment", value: "Future Metro Connectivity to Pune East" }
        ],
        marketTrend: "Stable Appreciation & High Occupancy. Driven by a semi-permanent workforce in the banking and IT sectors. Excellent social infrastructure with schools and hospitals in a 2km radius.",
        priceRange: "₹65 Lakhs – ₹1.10 Cr",
        avgPricePerSqFt: "₹8,900",
        yoyAppreciation: "8.5%",
        latitude: 18.5089,
        longitude: 73.9260,
        faqs: [
            { q: 'What makes Hadapsar attractive for homebuyers?', a: '25% price advantage over Kharadi with proximity to Magarpatta City, SP Infocity, and Amanora Mall.' },
            { q: 'Are there affordable flats in Hadapsar?', a: 'Yes, Joyville Hadapsar Annexe offers 1 BHK from \u20b965 Lakhs — the most affordable RERA option in an IT corridor.' },
            { q: 'What is the rental demand in Hadapsar?', a: 'Consistently high occupancy driven by IT professionals at SP Infocity and Magarpatta City.' },
            { q: 'How many Shapoorji projects are in Hadapsar?', a: '5 projects in the Hadapsar-Shewalewadi corridor across 40+ acres.' },
        ]
    },
    {
        id: "l4",
        slug: "shewalewadi",
        name: "Shewalewadi",
        subtitle: "The Emerging Township Corridor of East Pune",
        seoKeywords: [
            "Shewalewadi property rates 2026", "flats in Shewalewadi Pune",
            "Shewalewadi real estate investment", "Shewalewadi Hadapsar Annexe",
            "Joyville Hadapsar Shewalewadi", "Joyville Celestia Shewalewadi",
            "Joyville Skyluxe Shewalewadi", "Wildernest SP Kingstown Shewalewadi",
            "SP Kingstown Shewalewadi Road", "Shewalewadi property appreciation",
            "flats near SP Infocity Shewalewadi", "2 BHK flats Shewalewadi",
            "3 BHK flats Shewalewadi", "township projects Shewalewadi",
            "Shewalewadi to Magarpatta distance", "upcoming projects Shewalewadi 2026",
            "Shapoorji Pallonji Shewalewadi", "affordable flats Shewalewadi Pune",
            "Shewalewadi vs Hadapsar property rates", "RERA projects Shewalewadi",
            "Pune Solapur Highway Shewalewadi", "investment hotspot East Pune 2026"
        ],
        description: "Shewalewadi is rapidly emerging as East Pune's most dynamic residential corridor. Located off the Pune-Solapur Highway, it hosts multiple Shapoorji Pallonji projects including Joyville Hadapsar Annexe (21 acres), Joyville Celestia, Skyluxe Edition, and Wildernest at SP Kingstown. The micro-market offers 15-25% price advantage over established Hadapsar while providing identical connectivity to SP Infocity and Magarpatta.",
        infrastructure: [
            { label: "Township Hub", value: "5 Shapoorji Pallonji Projects (40+ Acres)" },
            { label: "IT Proximity", value: "SP Infocity 2.5km, Magarpatta 4.5km" },
            { label: "Highway Access", value: "Pune-Solapur Highway & Ring Road" },
            { label: "Social Infra", value: "Lexicon School, Noble Hospital, Amanora Mall" }
        ],
        marketTrend: "Rapid Appreciation. Multiple Shapoorji Pallonji projects have created a 'developer premium zone' driving consistent 10-12% annual appreciation. Early investors are seeing 40%+ returns over 3 years.",
        priceRange: "₹65 Lakhs – ₹1.40 Cr",
        avgPricePerSqFt: "₹8,500",
        yoyAppreciation: "10.2%",
        latitude: 18.4944,
        longitude: 73.9675,
        faqs: [
            { q: 'Where is Shewalewadi?', a: 'Off the Pune-Solapur Highway, 4.5 km from Magarpatta City and 2.5 km from SP Infocity Phursungi.' },
            { q: 'Why are Shewalewadi prices lower than Hadapsar?', a: '15-25% price advantage as an emerging corridor, with rapid appreciation closing the gap.' },
            { q: 'What is Shewalewadi investment potential?', a: '40%+ returns over 3 years with 10.2% YoY appreciation driven by developer premium zone.' },
        ]
    },
    {
        id: "l5",
        slug: "purandar",
        name: "Purandar",
        subtitle: "Pune's Growth Corridor — Airport Proximity & Land Investment",
        seoKeywords: [
            "Purandar real estate investment 2026", "plots near Purandar Airport",
            "NA bungalow plots Purandar Pune", "Purandar airport real estate impact",
            "Shapoorji Treetopia Purandar", "Jadhavwadi property investment",
            "Saswad Road plots for sale", "land investment Pune corridor",
            "Purandar airport connectivity", "villa plots near Pune airport",
            "gated community plots Purandar", "RERA approved plots Purandar",
            "Purandar growth corridor 2026", "biophilic landscapes plots Pune",
            "investment plots Purandar Pune", "Purandar vs Pune suburbs investment",
            "capital appreciation Purandar", "Pune airport corridor real estate",
            "NA land Saswad Purandar", "farmland plots near Pune"
        ],
        description: "Purandar represents Pune's most exciting growth corridor. With the proposed Purandar International Airport and new expressway connectivity, land values are poised for exponential growth. Shapoorji Pallonji's Treetopia is the flagship plotted development here, offering NA bungalow plots starting ₹84 Lakhs with biophilic landscapes and gated community amenities. Early investors stand to gain 5-10x returns upon airport completion.",
        infrastructure: [
            { label: "Airport", value: "Proposed Purandar International Airport (20 mins)" },
            { label: "Connectivity", value: "Pune Ring Road & Saswad Highway" },
            { label: "Development", value: "Smart City Industrial Corridor" },
            { label: "Nature", value: "Surrounded by Sahyadri Hills & Green Valleys" }
        ],
        marketTrend: "Pre-Infrastructure Boom. Land banking opportunity with 5-10x appreciation potential upon airport operationalization. Similar to pre-development trajectories seen in Navi Mumbai (NMIA) and Bengaluru (KIA).",
        priceRange: "₹84 Lakhs – ₹3 Cr (Plots)",
        avgPricePerSqFt: "₹4,500 (per sq.ft. land)",
        yoyAppreciation: "15.5%",
        latitude: 18.2860,
        longitude: 74.2140,
        faqs: [
            { q: 'When will Purandar Airport be operational?', a: 'Currently in planning phase. Operations estimated in 5-7 years, making this a land banking opportunity.' },
            { q: 'What plots are available near Purandar?', a: 'Shapoorji Treetopia offers NA bungalow plots from \u20b984 Lakhs in a gated community with biophilic landscapes.' },
            { q: 'Is investing near Purandar risky?', a: 'Pre-airport investments near Navi Mumbai and Bengaluru airports delivered 5-10x returns. Shapoorji brand reduces developer risk.' },
        ]
    },
    {
        id: "l6",
        slug: "kharadi",
        name: "Kharadi",
        subtitle: "Pune's Premium IT & Commercial Hub — East Corridor",
        seoKeywords: [
            "Kharadi real estate 2026", "flats in Kharadi Pune", "apartments near EON IT Park",
            "Kharadi property rates 2026", "2 BHK flats Kharadi", "3 BHK Kharadi Pune",
            "luxury apartments Kharadi", "new launch projects Kharadi 2026",
            "property near World Trade Center Pune", "Kharadi bypass residential projects",
            "flats near Pune Airport", "Kharadi property appreciation 2026",
            "investment property Kharadi Pune", "ready to move flats Kharadi",
            "Kharadi vs Hinjewadi property", "IT corridor Kharadi apartments",
            "Kharadi Wagholi corridor flats", "premium residences Kharadi",
            "gated community Kharadi Pune", "rental yield Kharadi flats"
        ],
        description: "Kharadi is Pune's fastest-evolving IT & commercial corridor, anchored by EON IT Park, World Trade Center, and Zensar/Barclays campuses. Its strategic position — just 12 km from Pune Airport and well-connected via the Kharadi-Wagholi bypass — makes it the preferred choice for professionals seeking city-center proximity. Property prices have risen 38% over 5 years, with 2026 seeing sustained demand from IT professionals and NRI investors. While Shapoorji Pallonji's primary Pune presence is in Hinjewadi and Hadapsar, Kharadi homebuyers benefit from nearby Joyville projects that offer superior construction quality at competitive pricing.",
        infrastructure: [
            { label: "IT Parks", value: "EON IT Park, World Trade Center, Zensar Campus" },
            { label: "Airport", value: "12 km to Pune International Airport" },
            { label: "Connectivity", value: "Kharadi-Wagholi Bypass, Nagar Road" },
            { label: "Social", value: "Amanora Mall, Eon Free Zone, Phoenix Marketcity (10 km)" }
        ],
        marketTrend: "Premium Appreciation. Kharadi commands some of the highest price points in East Pune at ₹8,000-10,500/sq.ft. The upcoming Nagar Road Metro extension and Kharadi-Wagholi corridor expansion will drive further 8-10% annual appreciation.",
        priceRange: "₹80 Lakhs – ₹2.5 Cr",
        avgPricePerSqFt: "₹9,200",
        yoyAppreciation: "9.8%",
        latitude: 18.5530,
        longitude: 73.9450,
        faqs: [
            { q: 'Why is Kharadi property expensive?', a: 'Premium pricing due to proximity to city center, airport, and multiple IT parks. Established infrastructure justifies the rates.' },
            { q: 'Is Kharadi better than Hinjewadi for investment?', a: 'Kharadi offers city-center proximity; Hinjewadi offers higher rental yields (4.5-5.5% vs 4.0-4.5%) and superior metro connectivity (Line 3).' },
            { q: 'What Shapoorji Pallonji projects are near Kharadi?', a: 'Joyville Hadapsar Annexe (15 km) and Joyville Celestia offer competitive alternatives with Shapoorji Pallonji construction quality.' },
        ]
    },
    {
        id: "l7",
        slug: "wakad",
        name: "Wakad",
        subtitle: "Hinjewadi-Adjacent Growth Market — Affordable IT Corridor",
        seoKeywords: [
            "Wakad real estate 2026", "flats in Wakad Pune", "apartments Wakad",
            "Wakad property rates 2026", "2 BHK flats Wakad", "3 BHK Wakad Pune",
            "affordable flats Wakad", "Wakad Hinjewadi corridor",
            "property near Hinjewadi Phase 3", "Wakad residential projects 2026",
            "Wakad vs Hinjewadi property price", "ready to move flats Wakad",
            "Wakad metro station flats", "Pimpri Chinchwad Wakad corridor",
            "investment property Wakad Pune", "new projects Wakad 2026",
            "IT professionals Wakad housing", "Wakad ring road properties",
            "gated society Wakad Pune", "rental yield Wakad apartments"
        ],
        description: "Wakad is the affordable alternative to Hinjewadi, located just 5 km from Hinjewadi IT Park and well-connected via the Mumbai-Pune Expressway and Ring Road. As Hinjewadi prices have surged past ₹9,000/sq.ft., Wakad offers 20-30% lower entry points while maintaining excellent IT corridor connectivity. The upcoming Pune Metro Line 3 Wakad station will add significant transit premium. Young IT professionals and first-time homebuyers increasingly choose Wakad for its balance of affordability and lifestyle. Shapoorji Pallonji's Joyville Sensorium in nearby Hinjewadi Phase 1 offers a premium upgrade path within the same corridor.",
        infrastructure: [
            { label: "IT Connectivity", value: "5 km to Hinjewadi IT Park (Phase 1, 2, 3)" },
            { label: "Metro", value: "Pune Metro Line 3 — Wakad Station (upcoming)" },
            { label: "Highway", value: "Mumbai-Pune Expressway (2 km), Ring Road" },
            { label: "Social", value: "Westend Mall, DY Patil University, Symbiosis" }
        ],
        marketTrend: "Affordable Growth Hub. Wakad prices (₹6,500-8,000/sq.ft.) are 20-30% below Hinjewadi Phase 1, but appreciation rates are catching up at 11% YoY. Metro Line 3 will narrow this gap significantly by 2027-28.",
        priceRange: "₹55 Lakhs – ₹1.20 Cr",
        avgPricePerSqFt: "₹7,200",
        yoyAppreciation: "11.0%",
        latitude: 18.5980,
        longitude: 73.7620,
        faqs: [
            { q: 'Is Wakad a good investment compared to Hinjewadi?', a: 'Wakad offers 20-30% lower entry prices with 11% YoY appreciation. Metro Line 3 will add transit premium, making it an excellent value buy.' },
            { q: 'How far is Wakad from Hinjewadi IT Park?', a: 'Just 5 km via the Wakad-Hinjewadi bypass. Most IT professionals commute in 10-15 minutes.' },
            { q: 'What Shapoorji Pallonji projects are near Wakad?', a: 'Joyville Sensorium in Hinjewadi Phase 1 is the closest premium option, offering walk-to-work luxury 5 km from Wakad.' },
        ]
    }
];

export async function generateStaticParams() {
    return localities.map((loc) => ({
        microMarket: loc.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ microMarket: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const locality = localities.find(l => l.slug === resolvedParams.microMarket);

    if (!locality) return { title: 'Locality Not Found' };

    return {
        title: `${locality.name} Real Estate 2025-2026 — Property Rates, Trends & Projects | Shapoorji Pallonji`,
        description: locality.description,
        keywords: locality.seoKeywords,
        openGraph: {
            title: `${locality.name} Real Estate Guide 2025-2026 | Shapoorji Pallonji Joyville`,
            description: locality.description,
        },
        alternates: {
            canonical: `${siteUrl}/locality/${locality.slug}`
        }
    };
}

export default async function LocalityPage({ params }: { params: Promise<{ microMarket: string }> }) {
    const resolvedParams = await params;
    const locality = localities.find(l => l.slug === resolvedParams.microMarket);

    if (!locality) notFound();

    // Filter projects by this location
    const localProjects = projects.filter(p => p.location.toLowerCase().includes(locality.name.toLowerCase()));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Place",
        "name": `${locality.name}, Pune`,
        "description": locality.description,
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": locality.latitude,
            "longitude": locality.longitude
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": locality.name,
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "containsPlace": localProjects.map(project => ({
            "@type": "Residence",
            "name": project.title,
            "url": `${siteUrl}/projects/${project.slug}`
        }))
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Localities",
                "item": `${siteUrl}/location`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": locality.name,
                "item": `${siteUrl}/locality/${locality.slug}`
            }
        ]
    };

    const faqJsonLd = locality.faqs && locality.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": locality.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    } : null;

    return (
        <div className="min-h-screen bg-[#F4F6F9] pt-32 pb-24 text-[#323334]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <header className="max-w-7xl mx-auto px-6 mb-16">
                <div className="inline-flex items-center gap-2 text-[#1D4F9C] font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                    <MapPin size={14} /> Micro-Market Intelligence
                </div>
                <h1 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] mb-4 drop-shadow-sm">{locality.name} Real Estate Guide</h1>
                <p className="text-2xl text-[#1D4F9C] font-light italic mb-8 border-l-4 border-[#C5A059] pl-6 py-2 bg-[#FFFFFF] shadow-lg inline-block">{locality.subtitle}</p>
                <p className="text-lg text-[#1A1A1A] max-w-3xl leading-relaxed text-shadow-sm">{locality.description}</p>

                {/* Market Data Stats Bar */}
                <div className="grid grid-cols-3 gap-6 mt-12 max-w-3xl">
                    <div className="bg-[#FFFFFF] border border-[#C5A059]/20 rounded-sm p-6 text-center shadow-lg">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold block mb-2">Price Range</span>
                        <span className="text-xl font-serif text-[#323334]">{locality.priceRange}</span>
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#C5A059]/20 rounded-sm p-6 text-center shadow-lg">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold block mb-2">Avg. Rate /sq.ft.</span>
                        <span className="text-xl font-serif text-[#323334]">{locality.avgPricePerSqFt}</span>
                    </div>
                    <div className="bg-[#FFFFFF] border border-[#C5A059]/20 rounded-sm p-6 text-center shadow-lg">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold block mb-2">YoY Appreciation</span>
                        <span className="text-xl font-serif text-green-600">↑ {locality.yoyAppreciation}</span>
                    </div>
                </div>
            </header>

            {/* Infrastructure & Trends Section */}
            <section className="bg-[#1D4F9C] py-20 mb-20 text-[#FFFFFF] shadow-[0_20px_50px_rgba(29,79,156,0.3)]" >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif mb-12 flex items-center gap-4 border-b border-[#FFFFFF]/20 pb-6"><Building2 size={32} /> Key Infrastructure</h2>
                        <div className="space-y-8">
                            {locality.infrastructure.map((item, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="text-[#FFFFFF]/70 text-xs tracking-[0.2em] uppercase font-semibold mb-2">{item.label}</span>
                                    <span className="text-xl font-light tracking-wide">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF]/10 backdrop-blur-md p-10 border border-[#FFFFFF]/20 rounded-sm shadow-2xl">
                        <h2 className="text-2xl font-serif mb-6 flex items-center gap-4 border-b border-[#FFFFFF]/20 pb-4"><TrendingUp size={24} /> Market Trend</h2>
                        <p className="text-lg font-light leading-relaxed">{locality.marketTrend}</p>
                    </div>
                </div>
            </section >

            {/* Relevant Projects Section */}
            < section className="max-w-7xl mx-auto px-6" >
                <div className="flex items-center gap-4 mb-12 border-b border-[#C5A059]/20 pb-4">
                    <Landmark className="text-[#1D4F9C]" size={32} />
                    <h2 className="text-4xl font-serif text-[#1A1A1A]">Shapoorji Pallonji Properties in {locality.name}</h2>
                </div>

                {
                    localProjects.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {localProjects.map(project => (
                                <div key={project.id} className="bg-[#FFFFFF] border border-[#C5A059]/60 shadow-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 rounded-sm group flex flex-col">
                                    <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold mb-3 bg-[#EEF2F6] self-start px-3 py-1 rounded-sm border border-[#C5A059]/20">{project.type}</div>
                                        <h3 className="text-2xl font-serif text-[#1A1A1A] mb-2">{project.title}</h3>
                                        <p className="text-sm text-[#1A1A1A] font-light mb-6 flex-grow">{project.description.substring(0, 100)}...</p>

                                        <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-[#C5A059]/20">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-[#1A1A1A] uppercase tracking-wide">Starting From</span>
                                                <span className="font-serif text-lg text-[#1D4F9C] italic">{project.price}</span>
                                            </div>
                                            <Link href={`/projects/${project.slug}`} className="w-full bg-[#1D4F9C] text-[#FFFFFF] py-4 text-center text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#323334] transition-colors flex items-center justify-center gap-2 group/btn shadow-lg">
                                                View Project Summary <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-[#FFFFFF] border border-[#C5A059]/60 shadow-2xl rounded-sm">
                            <h3 className="text-2xl font-serif text-[#1D4F9C] mb-4">New Projects Launching Soon</h3>
                            <p className="text-[#1A1A1A]">We are currently planning exclusive premium developments in {locality.name}.</p>
                            <div className="mt-8 flex justify-center">
                                <BrochureButton projectName={`Upcoming Projects in ${locality.name}`} label="Register for Updates" />
                            </div>
                        </div>
                    )
                }
            </section >

            {/* FAQ Section */}
            {locality.faqs && locality.faqs.length > 0 && (
                <section className="max-w-5xl mx-auto px-6 mt-20">
                    <h2 className="text-3xl font-serif text-[#1A1A1A] mb-8">Frequently Asked Questions About {locality.name}</h2>
                    <div className="space-y-4">
                        {locality.faqs.map((faq, idx) => (
                            <details key={idx} className="bg-[#FFFFFF] border border-[#C5A059]/20 rounded-sm group shadow-md">
                                <summary className="px-6 py-5 cursor-pointer text-[#323334] font-medium text-sm hover:text-[#1D4F9C] transition-colors list-none flex justify-between items-center">
                                    {faq.q}
                                    <span className="text-[#1D4F9C] text-lg group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-6 pb-5 text-[#323334] font-light text-sm leading-relaxed border-t border-[#C5A059]/10 pt-4">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            )}
        </div >
    );
}
