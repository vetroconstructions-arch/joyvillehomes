import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navigation';

// Define the supported SEO Slugs based on our strategy matrix
const siteUrl = 'https://www.joyville-homes.com';

const SEO_ROUTES = [
    // Existing high-volume locational pages
    {
        slug: '2-bhk-flats-in-hinjewadi',
        title: 'Premium 2 BHK Flats in Hinjewadi Phase 1 | Shapoorji Pallonji Joyville',
        description: 'Explore the best 2 BHK luxury flats in Hinjewadi Phase 1 by Shapoorji Pallonji. RERA approved, smart home apartments near Rajiv Gandhi Infotech Park. Starting ₹85 Lakhs.',
        h1: 'Premium 2 BHK Flats in Hinjewadi Phase 1',
        keywords: ['2 BHK flats in Hinjewadi', 'buy 2 BHK Hinjewadi Phase 1', 'Joyville Hinjewadi 2 BHK price', 'RERA approved 2 BHK Hinjewadi', 'flats near Rajiv Gandhi Infotech Park', 'walk to work apartments Hinjewadi'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '2' }
    },
    {
        slug: '3-bhk-luxury-apartments-pune-west',
        title: '3 BHK Luxury Apartments in Pune West — Hinjewadi & Bavdhan | Shapoorji Pallonji',
        description: 'Discover spacious 3 BHK luxury residences in Pune West (Hinjewadi Phase 1, Bavdhan). Premium townships with Italian marble, concierge services. 150-year Shapoorji Pallonji legacy.',
        h1: '3 BHK Luxury Apartments in Pune West',
        keywords: ['3 BHK luxury apartments Pune West', '3 BHK Bavdhan', '3 BHK luxury flats Hinjewadi', 'premium 3 BHK Pune', 'penthouse Hinjewadi', 'ultra luxury apartments Pune'],
        filters: { locationMatch: 'Pune|Hinjewadi|Bavdhan', typeMatch: '3' }
    },
    {
        slug: 'townships-near-magarpatta-city',
        title: 'Township Projects near Magarpatta City & SP Infocity | Joyville Hadapsar',
        description: 'Find premium township flats near Magarpatta City and SP Infocity in East Pune. 21-acre Joyville Hadapsar Annexe with 60+ amenities. Ready to move options from ₹65 Lakhs.',
        h1: 'Premium Township Projects Near Magarpatta City',
        keywords: ['flats near Magarpatta City', 'townships East Pune', 'Joyville Hadapsar Annexe', 'flats near SP Infocity', 'ready to move flats Hadapsar', 'Shewalewadi property'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'na-bungalow-plots-near-purandar-airport',
        title: 'NA Bungalow Plots Near Purandar Airport — Shapoorji Treetopia Pune',
        description: 'Invest in RERA approved NA Bungalow Plots near the upcoming Purandar Airport in Pune. Shapoorji Pallonji Treetopia plots from ₹84 Lakhs. Gated community with biophilic landscapes.',
        h1: 'Premium NA Bungalow Plots Near Upcoming Purandar Airport',
        keywords: ['NA bungalow plots Pune', 'plots near Purandar Airport', 'Shapoorji Treetopia price', 'villa plots Pune', 'land investment Pune airport', 'RERA approved plots Pune'],
        filters: { locationMatch: 'Jadhavwadi|Purandar', typeMatch: 'Plots' }
    },

    // NEW: Typology pages mirroring joyvillehomes.com structure
    {
        slug: '3-bhk-flats-in-hinjewadi',
        title: '3 BHK Flats in Hinjewadi Phase 1 | Joyville Sensorium & Celestia',
        description: 'Explore spacious 3 BHK apartments in Hinjewadi Phase 1 by Shapoorji Pallonji. Options from Joyville Sensorium (979 sq.ft.) and Celestia (950 sq.ft.). Smart home ready. RERA approved.',
        h1: '3 BHK Flats in Hinjewadi Phase 1',
        keywords: ['3 BHK flats in Hinjewadi', '3 BHK Hinjewadi Phase 1', '3 BHK apartments Hinjewadi', 'Joyville Sensorium 3 BHK', 'Joyville Celestia 3 BHK'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '3' }
    },
    {
        slug: '1-bhk-flats-in-hadapsar',
        title: '1 BHK Flats in Hadapsar Pune — Starting ₹65 Lakhs | Joyville Hadapsar Annexe',
        description: 'Affordable 1 BHK flats in Hadapsar, Pune starting just ₹65 Lakhs. Ready to move options at Joyville Hadapsar Annexe. 21-acre township near Magarpatta City. 60+ amenities.',
        h1: 'Affordable 1 BHK Flats in Hadapsar, Pune',
        keywords: ['1 BHK flats Hadapsar', '1 BHK Hadapsar under 70 lakhs', 'affordable flats Pune East', 'ready to move 1 BHK Hadapsar', 'Joyville Hadapsar 1 BHK'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '1' }
    },
    {
        slug: 'flats-in-bavdhan-pune',
        title: 'Premium Flats in Bavdhan, Pune — Vanaha Township by Shapoorji Pallonji',
        description: 'Explore luxury flats and apartments in Bavdhan, Pune. Vanaha — a 1,000-acre township with golf course views, valley vistas, and world-class amenities. Shapoorji Pallonji.',
        h1: 'Premium Flats in Bavdhan, Pune',
        keywords: ['flats in Bavdhan Pune', '2 BHK Bavdhan', '3 BHK Bavdhan', 'Vanaha Bavdhan', 'golf course apartments Pune', 'township Bavdhan Pune', 'luxury flats Bavdhan'],
        filters: { locationMatch: 'Bavdhan', typeMatch: '' }
    },
    {
        slug: 'ready-to-move-flats-hadapsar',
        title: 'Ready to Move Flats in Hadapsar Pune — Immediate Possession | Joyville',
        description: 'Move in immediately. Ready to move 1, 2 & 3 BHK flats at Joyville Hadapsar Annexe by Shapoorji Pallonji. 21-acre township near Magarpatta. Starting ₹65 Lakhs.',
        h1: 'Ready to Move Flats in Hadapsar, Pune',
        keywords: ['ready to move flats Hadapsar', 'ready possession flats Pune East', 'immediate possession Hadapsar', 'Joyville Hadapsar ready to move', 'move in ready flats Pune'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },

    // NEW: Comparison landing pages (Competitor gap keywords)
    {
        slug: 'joyville-vs-kolte-patil-life-republic-hinjewadi',
        title: 'Joyville Sensorium vs Kolte Patil Life Republic — Hinjewadi Comparison 2025',
        description: 'An objective comparison of Joyville Sensorium by Shapoorji Pallonji and Kolte Patil Life Republic in Hinjewadi. Compare price, amenities, construction quality, RERA status, and ROI potential.',
        h1: 'Joyville Sensorium vs Kolte Patil Life Republic — Which Is Better?',
        keywords: ['Joyville vs Kolte Patil Life Republic', 'Joyville vs Life Republic', 'Hinjewadi project comparison', 'best project Hinjewadi 2025', 'Shapoorji Pallonji vs Kolte Patil'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: 'joyville-vs-godrej-hinjewadi',
        title: 'Joyville Sensorium vs Godrej Evergreen Square — Hinjewadi Comparison 2025',
        description: 'Detailed comparison of Joyville Sensorium (Shapoorji Pallonji) vs Godrej Evergreen Square in Hinjewadi. Price per sq.ft., amenities, green certifications, and investment returns compared.',
        h1: 'Joyville Sensorium vs Godrej Evergreen Square — Complete Comparison',
        keywords: ['Joyville vs Godrej Hinjewadi', 'Joyville Sensorium vs Godrej', 'Hinjewadi apartments comparison', 'Shapoorji Pallonji vs Godrej Properties', 'best apartments Hinjewadi'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: 'luxury-apartments-hinjewadi-phase-1',
        title: 'Luxury Apartments in Hinjewadi Phase 1 — Skyluxe Edition by Shapoorji Pallonji',
        description: 'Ultra-luxury 3 BHK apartments in Hinjewadi Phase 1. Italian marble, private terraces, concierge services, Turkish Hammam. Joyville Skyluxe Edition from ₹1.40 Cr. Pre-launch prices.',
        h1: 'Ultra-Luxury Apartments in Hinjewadi Phase 1',
        keywords: ['luxury apartments Hinjewadi Phase 1', 'ultra luxury flats Hinjewadi', 'Joyville Skyluxe', 'penthouse Hinjewadi', '3 BHK luxury Hinjewadi', 'premium flats near Mumbai Pune Expressway'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: 'Luxury|Ultra' }
    },
    {
        slug: 'new-launch-projects-hinjewadi-2025',
        title: 'New Launch Projects in Hinjewadi 2025 — Joyville Celestia | Shapoorji Pallonji',
        description: 'Discover the newest residential launches in Hinjewadi for 2025. Joyville Celestia by Shapoorji Pallonji — Vastu compliant 2 & 3 BHK from ₹85 Lakhs. Pre-launch pricing available.',
        h1: 'New Launch Projects in Hinjewadi — 2025',
        keywords: ['new launch Hinjewadi 2025', 'new projects Hinjewadi', 'Joyville Celestia new launch', 'upcoming projects Hinjewadi Phase 1', 'pre launch flats Hinjewadi'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    }
];

export async function generateStaticParams() {
    return SEO_ROUTES.map((route) => ({
        seoSlug: route.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ seoSlug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const routeData = SEO_ROUTES.find(r => r.slug === resolvedParams.seoSlug);

    if (!routeData) {
        return { title: 'Properties | Joyville Pune' };
    }

    return {
        title: routeData.title,
        description: routeData.description,
        keywords: routeData.keywords,
        openGraph: {
            title: routeData.title,
            description: routeData.description,
        },
        alternates: {
            canonical: `${siteUrl}/properties/${routeData.slug}`
        }
    };
}

export default async function ProgrammaticSEOPage({ params }: { params: Promise<{ seoSlug: string }> }) {
    const resolvedParams = await params;
    const routeData = SEO_ROUTES.find(r => r.slug === resolvedParams.seoSlug);

    if (!routeData) {
        notFound();
    }

    // Filter projects based on the programmatic route logic
    const matchedProjects = projects.filter(project => {
        const matchesLocation = routeData.filters.locationMatch ? new RegExp(routeData.filters.locationMatch, 'i').test(project.location) : true;
        const matchesType = routeData.filters.typeMatch ? new RegExp(routeData.filters.typeMatch, 'i').test(project.type) : true;
        return matchesLocation && matchesType;
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": routeData.h1,
        "description": routeData.description,
        "itemListElement": matchedProjects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "RealEstateListing",
                "name": project.title,
                "url": `${siteUrl}/projects/${project.slug}`,
                "image": project.image
            }
        }))
    };

    return (
        <main className="min-h-screen bg-[#EEF2F6] pt-32 pb-24 text-[#323334]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <header className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#1D4F9C] font-semibold block mb-4">Shapoorji Pallonji Curated Collection</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#323334] font-light mb-6">{routeData.h1}</h1>
                <p className="text-[#323334] text-lg max-w-3xl mx-auto font-light leading-relaxed">
                    {routeData.description} Explore our portfolio of premium properties crafted with a 150-year legacy of trust and engineering excellence.
                </p>
            </header>

            {/* Rich Comparison Content for vs Pages */}
            {routeData.slug.includes('-vs-') && (
                <section className="max-w-5xl mx-auto px-6 mb-20">
                    <div className="bg-[#FFFFFF] border border-[#C5A059]/20 rounded-sm overflow-hidden shadow-lg">
                        <div className="bg-[#1D4F9C] text-[#FFFFFF] py-4 px-8">
                            <h2 className="text-xl font-serif">Head-to-Head Comparison</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#C5A059]/10">
                                        <th className="py-4 px-6 text-left text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold">Parameter</th>
                                        <th className="py-4 px-6 text-left text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold">Joyville Sensorium</th>
                                        <th className="py-4 px-6 text-left text-[10px] tracking-[0.2em] uppercase text-[#323334] font-semibold">
                                            {routeData.slug.includes('kolte-patil') ? 'Kolte Patil Life Republic' : 'Godrej Evergreen Square'}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(routeData.slug.includes('kolte-patil') ? [
                                        ['Developer Legacy', '150 Years (Since 1865)', '33 Years (Since 1991)'],
                                        ['Land Area', '10.5 Acres', '390 Acres (Full Township)'],
                                        ['2 BHK Starting Price', '₹1.10 Cr', '₹72-75 Lakhs'],
                                        ['Construction Quality', 'Premium (Built Indian Parliament)', 'Mid-Market Standard'],
                                        ['Amenities Count', '60+', '30-40 per cluster'],
                                        ['Open Space', '75% of total land', '~60%'],
                                        ['Smart Home', '✅ Standard', '❌ Not standard'],
                                        ['Green Certification', '✅ EDGE Certified', '❌ No'],
                                        ['Rental Yield', '4.5-5.5%', '3.5-4.0%'],
                                        ['Best For', 'Luxury + Investment', 'Budget-first buyers'],
                                    ] : [
                                        ['Developer Legacy', '150 Years (Since 1865)', '127 Years (Since 1897)'],
                                        ['Land Area', '10.5 Acres', '~5 Acres'],
                                        ['2 BHK Starting Price', '₹1.10 Cr', '₹90 Lakhs - 1 Cr'],
                                        ['Construction Quality', 'Premium (Built Indian Parliament)', 'Premium (Godrej National Brand)'],
                                        ['Amenities Count', '60+', '40+'],
                                        ['Open Space', '75% of total land', '~65%'],
                                        ['Smart Home', '✅ Standard', '✅ Available'],
                                        ['Green Certification', '✅ EDGE Certified', '✅ IGBC Certified'],
                                        ['Unique Selling Point', '1.8km Walking Boulevard', 'Green Building Focus'],
                                        ['Best For', 'Luxury + Lifestyle', 'Green-conscious buyers'],
                                    ]).map(([param, joyville, competitor], idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-[#F4F6F9]' : 'bg-[#FFFFFF]'}>
                                            <td className="py-3 px-6 font-medium text-[#323334]">{param}</td>
                                            <td className="py-3 px-6 text-[#1D4F9C] font-medium">{joyville}</td>
                                            <td className="py-3 px-6 text-[#323334]">{competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-6 bg-[#F4F6F9] border-t border-[#C5A059]/10">
                            <p className="text-sm text-[#323334] font-light">
                                <strong className="text-[#1D4F9C]">Verdict:</strong> {routeData.slug.includes('kolte-patil')
                                    ? 'Joyville Sensorium delivers premium construction quality and luxury amenities backed by 150+ years of Shapoorji Pallonji engineering legacy. Kolte Patil Life Republic offers a full township ecosystem at a lower price point. Choose Sensorium for quality and ROI; choose Life Republic for budget and township scale.'
                                    : 'Both are premium developers with strong legacies. Joyville Sensorium edges ahead with its 10.5-acre scale, 60+ amenities, and 1.8km walking boulevard. Godrej Evergreen Square offers compelling green certifications. Choose Sensorium for amenity density; choose Godrej for green-first living.'
                                }
                            </p>
                        </div>
                    </div>
                </section>
            )}

            <section className="max-w-7xl mx-auto px-6">
                {matchedProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {matchedProjects.map(project => (
                            <Link href={`/projects/${project.slug}`} key={project.id} className="group flex flex-col bg-[#FFFFFF] rounded-sm overflow-hidden border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-500 shadow-lg hover:shadow-2xl">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase text-[#1D4F9C]">
                                        {project.status}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-[#1D4F9C] text-xs font-medium tracking-wider uppercase mb-3">
                                        <MapPin size={14} /> {project.location}
                                    </div>
                                    <h2 className="text-2xl font-serif text-[#323334] mb-3">{project.title}</h2>
                                    <p className="text-[#1D4F9C] font-serif italic text-xl mb-4">{project.price}</p>

                                    <p className="text-[#323334] font-light text-sm line-clamp-2 mb-6 border-b border-[#C5A059]/10 pb-6">
                                        {project.type}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between text-[#323334] group-hover:text-[#1D4F9C] transition-colors">
                                        <span className="text-[10px] tracking-[0.2em] font-bold uppercase">View Project</span>
                                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-[#FFFFFF] border border-[#C5A059]/20 rounded-sm">
                        <p className="text-[#323334] text-lg font-light">New inventory coming soon for this specific requirement.</p>
                        <Link href="/projects" className="inline-block mt-6 text-[#1D4F9C] border-b border-[#C5A059] pb-1 uppercase tracking-widest text-xs font-bold hover:text-[#323334] hover:border-[#323334] transition-colors">
                            View All Projects
                        </Link>
                    </div>
                )}
            </section>

            <footer className="py-20 bg-[#FFFFFF] border-t border-[#C5A059]/30 text-center">
                <div className="text-3xl font-serif text-[#1D4F9C] font-light tracking-widest mb-4">JOYVILLE <span className="text-[10px] font-sans tracking-[0.4em] text-[#323334] uppercase ml-2">Pune</span></div>
                <p className="text-[#323334]/40 text-[9px] tracking-[0.3em] uppercase font-medium">MahaRERA: P52100000000 | A Shapoorji Pallonji Real Estate Project</p>
            </footer>
        </main>
    );
}
