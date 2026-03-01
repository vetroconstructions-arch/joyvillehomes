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

const siteUrl = 'https://joyvillehomes-6fmc-git-main-vetroconstructions-7870s-projects.vercel.app';

const localities: LocalityData[] = [
    {
        id: "l1",
        slug: "hinjewadi",
        name: "Hinjewadi",
        subtitle: "The IT Capital of Pune West",
        seoKeywords: [
            "Hinjewadi real estate", "flats in Hinjewadi Phase 1", "Pune IT Park apartments",
            "property rates Hinjewadi 2025", "2 BHK flats in Hinjewadi", "3 BHK apartments Hinjewadi",
            "new launch Hinjewadi 2025", "luxury apartments Hinjewadi Phase 1",
            "flats near Rajiv Gandhi Infotech Park", "walk to work apartments Hinjewadi",
            "Joyville Sensorium Hinjewadi", "Joyville Celestia Hinjewadi",
            "under construction projects Hinjewadi", "RERA approved flats Hinjewadi"
        ],
        description: "Hinjewadi is the epicenter of Pune's IT revolution. Home to the sprawling Rajiv Gandhi Infotech Park — housing campuses of Infosys, Wipro, TCS, Cognizant, and 200+ MNCs — it boasts an incredible walk-to-work culture, rapid infrastructural growth, and exceptional ROI for premium real estate investments. Property rates have surged 53% over 5 years.",
        infrastructure: [
            { label: "Upcoming Metro", value: "Line 3 (Hinjewadi - Shivaji Nagar)" },
            { label: "Tech Parks", value: "Rajiv Gandhi Infotech Park (Phase 1, 2, 3)" },
            { label: "Highway Access", value: "Mumbai-Bengaluru Highway (NH48)" },
            { label: "Ring Road", value: "170 km Pune Ring Road (under construction)" }
        ],
        marketTrend: "High Demand fueled by IT influx, upcoming Metro Line 3, and Ring Road connectivity. Rental yields at 4.5-5.5% annually — highest in Pune.",
        priceRange: "₹85 Lakhs – ₹1.45 Cr",
        avgPricePerSqFt: "₹12,217",
        yoyAppreciation: "5.5%",
        latitude: 18.5913,
        longitude: 73.7389
    },
    {
        id: "l2",
        slug: "bavdhan",
        name: "Bavdhan",
        subtitle: "Nature's Haven in West Pune",
        seoKeywords: [
            "Bavdhan real estate", "flats in Bavdhan Pune", "luxury apartments near Chandni Chowk",
            "properties with hill views Pune", "Vanaha Bavdhan", "Vanaha Golfland",
            "golf course view apartments Pune", "1000 acre township Pune",
            "township Bavdhan Pune", "Shapoorji Pallonji Bavdhan",
            "eco friendly homes Pune", "flats near Mumbai Pune Expressway"
        ],
        description: "Nestled amidst lush green hills and pristine lakes, Bavdhan offers a tranquil lifestyle with the convenience of city life. Home to the massive 1,000-acre Vanaha township by Shapoorji Pallonji, it features golf course views, valley vistas, and resort-style living. Located strategically near Kothrud and the Mumbai-Pune Expressway. 13.18% YoY appreciation — highest in Pune.",
        infrastructure: [
            { label: "Key Junction", value: "Chandni Chowk Interchange" },
            { label: "Nature Access", value: "Pashan Lake & NDA Hills" },
            { label: "Proximity", value: "10 mins to Kothrud & Hinjewadi" },
            { label: "Expressway", value: "Direct access to Mumbai-Pune Expressway" }
        ],
        marketTrend: "Premium pricing driven by low-density development, natural topography, and Vanaha mega-township. 13.18% YoY appreciation — fastest growing micro-market.",
        priceRange: "₹95 Lakhs – ₹1.8 Cr",
        avgPricePerSqFt: "₹11,500",
        yoyAppreciation: "13.18%",
        latitude: 18.5170,
        longitude: 73.7785
    },
    {
        id: "l3",
        slug: "hadapsar",
        name: "Hadapsar",
        subtitle: "The Corporate Hub of East Pune",
        seoKeywords: [
            "Hadapsar real estate", "flats near Magarpatta City", "SP Infocity apartments",
            "East Pune properties", "flats in Hadapsar Pune", "1 BHK flats Hadapsar",
            "2 BHK flats Hadapsar", "ready to move flats Hadapsar",
            "affordable flats Pune East", "Joyville Hadapsar Annexe",
            "township projects Hadapsar", "flats near Amanora Mall",
            "Shewalewadi property rates", "Hadapsar real estate trends 2025"
        ],
        description: "Hadapsar has transformed into a global corporate destination. Powered by mega-townships like Magarpatta City and major IT SEZs like SP Infocity, it offers a robust cosmopolitan lifestyle with unmatched convenience. With property rates 20-35% lower than Hinjewadi, it's the best value proposition in Pune — especially for ready-to-move buyers.",
        infrastructure: [
            { label: "Major IT SEZs", value: "Magarpatta City & SP Infocity" },
            { label: "Connectivity", value: "Pune-Solapur Highway" },
            { label: "Commercial", value: "Amanora Mall & Seasons Mall" },
            { label: "Healthcare", value: "Noble Hospital & Sahyadri Hospital" }
        ],
        marketTrend: "Steady 8-10% annual appreciation driven by established corporate parks and excellent social infrastructure. Best value for first-time buyers.",
        priceRange: "₹65 Lakhs – ₹95 Lakhs",
        avgPricePerSqFt: "₹8,500",
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

    return (
        <div className="min-h-screen bg-[#F4F6F9] pt-32 pb-24 text-[#323334]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            <section className="bg-[#1D4F9C] py-20 mb-20 text-[#FFFFFF] shadow-[0_20px_50px_rgba(29,79,156,0.3)]">
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
            </section>

            {/* Relevant Projects Section */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12 border-b border-[#C5A059]/20 pb-4">
                    <Landmark className="text-[#1D4F9C]" size={32} />
                    <h2 className="text-4xl font-serif text-[#1A1A1A]">Shapoorji Pallonji Properties in {locality.name}</h2>
                </div>

                {localProjects.length > 0 ? (
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
                )}
            </section>
        </div>
    );
}
