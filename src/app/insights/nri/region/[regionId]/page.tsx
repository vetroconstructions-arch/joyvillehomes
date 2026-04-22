import { Metadata } from 'next';
export const dynamic = 'force-static';
import { notFound } from 'next/navigation';
import { NRI_REGIONS, getNRIRegionById } from '@/data/GlobalNRI';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Globe, 
    ArrowLeft, 
    TrendingUp, 
    ShieldCheck, 
    Landmark, 
    Scale, 
    Building2, 
    ChevronRight, 
    MapPin, 
    ExternalLink,
    Wallet
} from 'lucide-react';

const siteUrl = 'https://joyville-homes.com';

export async function generateStaticParams() {
    return NRI_REGIONS.map((region) => ({
        regionId: region.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ regionId: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const region = getNRIRegionById(resolvedParams.regionId);

    if (!region) {
        return { title: 'Global NRI Investment | Joyville Homes' };
    }

    return {
        title: `${region.name} | Pune Real Estate Investment Hub 2026`,
        description: `Dedicated investment strategy for NRIs based in ${region.name}. Explore exchange rate advantages, FEMA rules, and high-growth assets in Pune.`,
        keywords: [
            `NRI investment from ${region.name}`,
            `${region.currencyLabel} to INR real estate advantage`,
            `Pune property for NRI in ${region.name}`,
            `MahaRERA guidance for ${region.name} buyers`
        ],
        alternates: {
            canonical: `${siteUrl}/insights/nri/region/${region.id}`
        }
    };
}

export default async function RegionalNRIHub({ params }: { params: Promise<{ regionId: string }> }) {
    const resolvedParams = await params;
    const region = getNRIRegionById(resolvedParams.regionId);

    if (!region) {
        notFound();
    }

    const relevantProjects = projects.filter(p => region.relatedProjects.includes(p.slug));

    const breadcrumbLd = {
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
                "name": "Insights",
                "item": `${siteUrl}/insights`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "NRI Investment",
                "item": `${siteUrl}/insights/topic/nri-investment`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": region.name,
                "item": `${siteUrl}/insights/nri/region/${region.id}`
            }
        ]
    };

    const projectListLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `Preferred Projects for NRIs in ${region.name}`,
        "description": `Curated multi-unit assets in Pune, India for investors from ${region.name}.`,
        "numberOfItems": relevantProjects.length,
        "itemListElement": relevantProjects.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
                "@type": "RealEstateProject",
                "name": p.title,
                "url": `${siteUrl}/projects/${p.slug}`,
                "image": `${siteUrl}${p.image}`
            }
        }))
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${siteUrl}/insights/nri/region/${region.id}/#webpage`,
        "url": `${siteUrl}/insights/nri/region/${region.id}`,
        "name": `${region.name} NRI Real Estate Hub`,
        "description": `Strategic investment data for NRIs based in ${region.name}, specifically for Pune West and East markets.`,
        "mainEntity": {
            "@type": "Service",
            "name": "Global NRI Investment Services",
            "serviceType": "Real Estate Advisory",
            "areaServed": region.name,
            "provider": { "@id": "https://joyville-homes.com/#organization" }
        }
    };

    return (
        <main className="min-h-screen bg-[#EEF2F6] text-[#323334]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListLd) }} />
            
            {/* Regional Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden bg-[#FFFFFF]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1D4F9C]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link href="/insights/topic/nri-investment" className="inline-flex items-center gap-2 text-[#1D4F9C] hover:text-[#323334] font-light text-xs tracking-widest uppercase transition-colors mb-12">
                        <ArrowLeft size={16} /> Back to Global Hub
                    </Link>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 text-[#1D4F9C] font-bold text-[10px] tracking-[0.4em] uppercase mb-8">
                                <span className="p-3 bg-[#1D4F9C]/5 rounded-sm">
                                    <Globe size={24} />
                                </span>
                                Regional Authority Hub
                            </div>
                            <h1 className="text-5xl md:text-7xl font-serif text-[#323334] font-light leading-tight mb-8">
                                Investing from <span className="text-[#1D4F9C] italic">{region.name}</span>
                            </h1>
                            <p className="text-xl text-[#323334]/80 font-light max-w-2xl leading-relaxed mb-12 border-l-2 border-[#C5A059] pl-8">
                                Specialized real estate strategy for the {region.name} diaspora, focusing on the Pune corridor.
                            </p>
                        </div>
                        
                        {/* Currency Advantage Card */}
                        <div className="bg-[#1D4F9C] p-8 rounded-sm text-white shadow-2xl w-full max-w-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Wallet size={120} />
                            </div>
                            <h3 className="text-xs uppercase tracking-[0.3em] font-bold opacity-60 mb-8 relative z-10">
                                Regional Yield Advantage
                            </h3>
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                                    <span>Exchange Status</span>
                                    <span className="text-emerald-400 font-bold flex items-center gap-2">
                                        Bullish Entry <TrendingUp size={16} />
                                    </span>
                                </div>
                                <p className="text-sm font-light leading-relaxed opacity-80">
                                    Current regional currency strength against the INR makes entry points into Grade-A Pune assets approximately 14% more favorable than the 5-year average.
                                </p>
                                <div className="text-[10px] text-white/40 uppercase font-bold flex items-center gap-2">
                                    Data Source: {region.exchangeRateSource}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-3 gap-16">
                    
                    {/* Left Column: Intelligence Matrix */}
                    <div className="lg:col-span-2 space-y-20">
                        
                        {/* Regional Advantages */}
                        <div>
                            <h2 className="text-3xl font-serif text-[#1D4F9C] mb-8 font-light flex items-center gap-3">
                                <ShieldCheck size={24} className="text-[#C5A059]" /> Strategic Advantages for Regional Earners
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {region.investmentAdvantage.map((adv, i) => (
                                    <div key={i} className="bg-[#FFFFFF] p-8 border border-[#C5A059]/10 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                        <p className="text-[#323334] font-light leading-relaxed text-base italic">&quot;{adv}&quot;</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Legal & Tax Roadmap */}
                        <div className="bg-[#FFFFFF] p-10 border border-[#1D4F9C]/10 rounded-sm">
                            <h2 className="text-2xl font-serif text-[#323334] mb-12 font-light flex items-center gap-3 text-center lg:text-left justify-center lg:justify-start">
                                <Scale size={24} className="text-[#1D4F9C]" /> FEMA & Tax Compliance Hub
                            </h2>
                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#323334]/40 mb-4 border-b border-[#C5A059]/20 pb-2">Tax Matrix</h4>
                                    <p className="text-sm text-[#323334] leading-loose font-light">
                                        {region.taxNotes}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#323334]/40 mb-4 border-b border-[#C5A059]/20 pb-2">Operational Roadmap</h4>
                                    <ul className="space-y-4">
                                        {region.legalProcess.map((step, i) => (
                                            <li key={i} className="flex items-start gap-3 text-xs text-[#323334] font-light leading-relaxed">
                                                <ChevronRight size={14} className="text-[#1D4F9C] shrink-0 mt-0.5" /> {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Market Sentiment Summary */}
                        <div className="text-center bg-[#EEF2F6] p-12 border-y border-[#C5A059]/20">
                            <h4 className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#323334]/40 mb-6">Localized Sentiment</h4>
                            <p className="text-3xl font-serif text-[#323334] leading-tight italic max-w-3xl mx-auto">
                                &quot;{region.marketSentiment}&quot;
                            </p>
                        </div>
                    </div>

                    {/* Right Sidebar: Contextual Regional Match */}
                    <aside className="space-y-8">
                        <div className="sticky top-32">
                            <h2 className="text-xl font-serif text-[#323334] mb-8 font-light tracking-wide uppercase flex items-center gap-3">
                                <Building2 size={20} className="text-[#1D4F9C]" /> Preferred Multi-Unit Assets
                            </h2>
                            <div className="space-y-4">
                                {relevantProjects.map(project => (
                                    <Link key={project.id} href={`/projects/${project.slug}`} className="group block bg-[#FFFFFF] border border-[#C5A059]/20 p-5 rounded-sm hover:border-[#1D4F9C]/40 transition-all shadow-sm">
                                        <div className="relative aspect-video mb-4 overflow-hidden rounded-sm">
                                            <Image src={project.image} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={project.title} />
                                        </div>
                                        <h3 className="text-lg font-serif text-[#323334] group-hover:text-[#1D4F9C] transition-colors mb-1">{project.title}</h3>
                                        <div className="flex items-center gap-2 text-[#323334]/60 text-[10px] uppercase font-bold tracking-widest mb-4">
                                            <MapPin size={10} /> {project.location}
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-[#C5A059]/10">
                                            <span className="text-[#1D4F9C] font-serif italic text-sm">{project.price}</span>
                                            <ChevronRight size={16} className="text-[#1D4F9C] group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Global Entity Anchoring */}
                            <div className="mt-12 p-8 bg-[#1A1A1A] text-[#FFFFFF] rounded-sm text-center">
                                <Landmark className="text-[#C5A059] mx-auto mb-4" size={32} />
                                <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 opacity-60">FEMA Compliance Notice</h3>
                                <p className="text-[10px] font-light leading-relaxed opacity-60 mb-6">
                                    All projected returns are compliant with FEMA Guidelines (Section 6) for NRI property acquisition.
                                </p>
                                <Link href="/insights/nri/fema-check" className="text-[9px] uppercase tracking-widest font-bold text-[#C5A059] flex items-center justify-center gap-2 hover:underline">
                                    Verify Legal Framework <ExternalLink size={10} />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}
