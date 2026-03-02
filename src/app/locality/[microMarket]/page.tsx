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
}

const siteUrl = 'https://www.joyville-homes.com';

const localities: LocalityData[] = [
    {
        id: "l1",
        slug: "hinjewadi",
        name: "Hinjewadi",
        subtitle: "The IT Capital of Pune West",
        seoKeywords: [
            "Hinjewadi real estate market analysis 2025",
            "flats in Hinjewadi Phase 1 near Infosys",
            "Pune IT Park apartments for sale",
            "property rates Hinjewadi Phase 1 2 3",
            "2 BHK luxury flats in Hinjewadi Phase 1",
            "3 BHK premium apartments Hinjewadi",
            "new launch projects Hinjewadi 2025",
            "flats near Rajiv Gandhi Infotech Park Phase 1",
            "walk to work apartments Hinjewadi Phase 2",
            "Joyville Sensorium vs Joyville Celestia",
            "RERA approved flats Hinjewadi under 1 crore",
            "Hinjewadi Metro Line 3 impact on property prices",
            "rental yield in Hinjewadi for NRI investors"
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
        longitude: 73.7389
    },
    {
        id: "l2",
        slug: "bavdhan",
        name: "Bavdhan",
        subtitle: "Luxury Gated Communities in West Pune",
        seoKeywords: [
            "Bavdhan real estate trends 2025",
            "luxury flats in Bavdhan Pune",
            "apartments near Chandni Chowk interchange",
            "hill view properties Bavdhan Pune",
            "Vanaha Golfland price list 2025",
            "Shapoorji Pallonji Vanaha township Bavdhan",
            "1000 acre gated community Pune",
            "3 BHK flats in Bavdhan near Kothrud",
            "2 BHK apartments Bavdhan Pune West",
            "resort style living Pune Bavdhan",
            "flats near Mumbai Pune Expressway Bavdhan"
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
        longitude: 73.7785
    },
    {
        id: "l3",
        slug: "hadapsar",
        name: "Hadapsar",
        subtitle: "East Pune's Global IT & Township Hub",
        seoKeywords: [
            "Hadapsar property market analysis 2025",
            "flats near SP Infocity Phursungi",
            "apartments near Magarpatta City Hadapsar",
            "Joyville Hadapsar Annexe price trends",
            "affordable luxury flats Pune East",
            "ready to move 2 BHK in Hadapsar",
            "flats near EON IT Park Kharadi",
            "Hadapsar vs Kharadi real estate comparison",
            "township projects in Hadapsar Pune"
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
        longitude: 73.9260
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
        title: `${locality.name} Real Estate 2025 — Property Rates, Trends & Projects | Shapoorji Pallonji`,
        description: locality.description,
        keywords: locality.seoKeywords,
        openGraph: {
            title: `${locality.name} Real Estate Guide 2025 | Shapoorji Pallonji Joyville`,
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

    return (
        <div className="min-h-screen bg-[#F4F6F9] pt-32 pb-24 text-[#323334]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
        </div >
    );
}
