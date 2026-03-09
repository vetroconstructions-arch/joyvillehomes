import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { localities, LocalityData } from '@/data/localities';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Building2, TrendingUp, Landmark, Activity, GraduationCap, Hospital, ShoppingBag, Train, Clock } from 'lucide-react';
import BrochureButton from '@/components/BrochureButton';

const siteUrl = 'https://www.joyville-homes.com';

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

    const jsonLd = [
        {
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
            })),
            ...(locality.lifestyleScores ? {
                "identifier": [
                    { "@type": "PropertyValue", "name": "Transit Score", "value": locality.lifestyleScores.transit },
                    { "@type": "PropertyValue", "name": "Safety Score", "value": locality.lifestyleScores.safety }
                ]
            } : {}),
            ...(locality.neighborhoodHighlights ? {
                "amenityFeature": locality.neighborhoodHighlights.map(h => ({
                    "@type": "LocationFeatureSpecification",
                    "name": h.name,
                    "value": h.distance
                }))
            } : {})
        },
        {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": `Shapoorji Pallonji Real Estate - ${locality.name}`,
            "image": "https://www.joyville-homes.com/og-image.jpg",
            "url": `${siteUrl}/locality/${locality.slug}`,
            "telephone": "+912067210000",
            "priceRange": locality.priceRange,
            "openingHours": "Mo-Su 09:00-20:00",
            "knowsLanguage": ["English", "Hindi", "Marathi"],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": locality.name,
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": locality.latitude,
                "longitude": locality.longitude
            }
        }
    ];

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

            {/* Lifestyle Scores Section */}
            {locality.lifestyleScores && (
                <section className="max-w-7xl mx-auto px-6 mb-20">
                    <div className="bg-white border border-[#C5A059]/30 p-10 rounded-sm shadow-xl">
                        <h2 className="text-3xl font-serif text-[#1D4F9C] mb-12 flex items-center gap-4 border-b border-[#C5A059]/20 pb-6">
                            <Activity size={32} /> {locality.name} Lifestyle Analysis
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { label: 'Connectivity & Transit', value: locality.lifestyleScores.transit, icon: '🚆' },
                                { label: 'Work-Life Balance', value: locality.lifestyleScores.work, icon: '💼' },
                                { label: 'Safety & Security', value: locality.lifestyleScores.safety, icon: '🛡️' },
                                { label: 'Lifestyle & Amenities', value: locality.lifestyleScores.lifestyle, icon: '🌟' }
                            ].map((score, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center" id={`lifestyle-score-${idx}`}>
                                    <span className="text-4xl mb-4">{score.icon}</span>
                                    <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle
                                                cx="40" cy="40" r="36"
                                                stroke="#EEF2F6" strokeWidth="8" fill="none"
                                            />
                                            <circle
                                                cx="40" cy="40" r="36"
                                                stroke="#C5A059" strokeWidth="8" fill="none"
                                                strokeDasharray={`${2 * Math.PI * 36}`}
                                                strokeDashoffset={`${2 * Math.PI * 36 * (1 - score.value / 10)}`}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <span className="absolute text-xl font-bold text-[#1D4F9C]">{score.value}<span className="text-xs">/10</span></span>
                                    </div>
                                    <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#323334]/60">{score.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Neighborhood Proximity Engine */}
            {locality.neighborhoodHighlights && (
                <section className="max-w-7xl mx-auto px-6 mb-24">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                        <h2 className="text-3xl font-serif text-[#323334] font-light">Neighborhood Proximity Guide</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {locality.neighborhoodHighlights.map((highlight, index) => (
                            <div key={index} className="bg-[#EEF2F6] p-6 border-l-2 border-[#C5A059] rounded-sm hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C]/60 font-medium">{highlight.category}</span>
                                    {highlight.category.toLowerCase().includes('educat') ? <GraduationCap size={16} className="text-[#1D4F9C]" /> :
                                        highlight.category.toLowerCase().includes('health') ? <Hospital size={16} className="text-[#1D4F9C]" /> :
                                            highlight.category.toLowerCase().includes('shop') ? <ShoppingBag size={16} className="text-[#1D4F9C]" /> :
                                                highlight.category.toLowerCase().includes('trans') ? <Train size={16} className="text-[#1D4F9C]" /> :
                                                    <MapPin size={16} className="text-[#1D4F9C]" />}
                                </div>
                                <h3 className="text-[#323334] font-medium mb-1 line-clamp-1">{highlight.name}</h3>
                                <p className="text-2xl font-serif text-[#1D4F9C] italic">{highlight.distance}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Local Market Trend Hardening */}
            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#1D4F9C] text-[#FFFFFF] p-12 rounded-sm relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFFFFF]/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[1px] bg-[#C5A059]"></span>
                                <h2 className="text-3xl font-serif text-[#C5A059] font-light italic">Market Intelligence</h2>
                            </div>
                            <p className="text-lg font-light leading-relaxed mb-8 opacity-90">
                                {locality.name} has consistently outperformed parity markets with a <span className="text-[#C5A059] font-medium">{locality.yoyAppreciation} Year-on-Year appreciation</span>. Driven by infrastructure upgrades and steady rental yield, it remains Pune's most resilient micro-market.
                            </p>
                            <div className="flex items-baseline gap-4">
                                <span className="text-5xl font-serif">{locality.avgPricePerSqFt}</span>
                                <span className="text-xs tracking-widest uppercase opacity-60">Avg. Price / Sq.Ft</span>
                            </div>
                        </div>
                        <div className="bg-[#FFFFFF]/5 backdrop-blur-sm border border-[#FFFFFF]/10 p-8 rounded-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-sm tracking-widest uppercase font-light">Price Trajectory (2022 - 2026)</h3>
                                <TrendingUp size={18} className="text-[#C5A059]" />
                            </div>
                            <div className="h-40 w-full flex items-end justify-between gap-4">
                                {[40, 55, 65, 85, 100].map((height, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-3">
                                        <div
                                            className="w-full bg-gradient-to-t from-[#C5A059] to-[#C5A059]/40 rounded-t-sm transition-all duration-1000"
                                            style={{ height: `${height}%` }}
                                        ></div>
                                        <span className="text-[10px] opacity-40 uppercase tracking-tighter">{2022 + i}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Property Type Matrix for SEO Connectivity */}
            <section className="max-w-7xl mx-auto px-6 mb-20 mt-20" id="property-types">
                <div className="bg-[#EEF2F6] border border-[#C5A059]/30 p-10 rounded-sm shadow-inner">
                    <div className="flex items-center gap-3 mb-8 border-b border-[#C5A059]/20 pb-4">
                        <Activity className="text-[#1D4F9C]" size={20} />
                        <h2 className="text-2xl font-serif text-[#1A1A1A]">Property Varieties in {locality.name}</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['1 BHK Flats', '2 BHK Flats', '3 BHK Flats', 'Luxury Penthouses'].map((type) => (
                            <Link
                                key={type}
                                href="/projects"
                                className="group flex flex-col p-4 bg-white border border-[#C5A059]/10 hover:border-[#1D4F9C] transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <span className="text-[10px] tracking-[0.1em] text-[#1D4F9C] font-semibold mb-1 uppercase">{locality.name}</span>
                                <span className="text-[#1A1A1A] font-serif group-hover:text-[#1D4F9C] transition-colors">{type}</span>
                                <div className="mt-4 flex items-center gap-2 text-[10px] text-[#C5A059] uppercase tracking-wider font-bold group-hover:gap-3 transition-all">
                                    Browse Collection <ArrowRight size={12} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Relevant Projects Section */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12 border-b border-[#C5A059]/20 pb-4">
                    <Landmark className="text-[#1D4F9C]" size={32} />
                    <h2 className="text-4xl font-serif text-[#1A1A1A]">Shapoorji Pallonji Properties in {locality.name}</h2>
                </div>

                {
                    localProjects.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {localProjects.map(project => (
                                <div key={project.id} className="bg-[#FFFFFF] border border-[#C5A059]/60 shadow-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 rounded-sm group flex flex-col">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} - ${project.type} in ${locality.name}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
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
            {
                locality.faqs && locality.faqs.length > 0 && (
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
                )
            }

            {/* Cross-Locality Internal Link Mesh — Phase 13 */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <h2 className="text-2xl font-serif text-[#1A1A1A] mb-6">Explore Other Pune Micro-Markets</h2>
                <div className="flex flex-wrap gap-3">
                    {localities.filter(l => l.slug !== locality.slug).map(otherLocality => (
                        <Link
                            key={otherLocality.slug}
                            href={`/locality/${otherLocality.slug}`}
                            className="px-5 py-3 bg-[#1D4F9C]/5 border border-[#1D4F9C]/10 hover:bg-[#1D4F9C]/10 hover:border-[#1D4F9C]/30 text-[#1D4F9C] text-xs font-medium tracking-wide rounded-sm transition-all"
                        >
                            {otherLocality.name} Real Estate →
                        </Link>
                    ))}
                </div>
            </section>

            {/* Contextual Insights Cross-Links — Phase 13 */}
            <section className="max-w-7xl mx-auto px-6 mt-12 mb-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] mb-6">Related Market Insights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { slug: 'pune-real-estate-market-forecast-2026-investment-hotspots', title: 'Pune Real Estate Forecast 2026 — Investment Hotspots' },
                        { slug: 'pune-property-price-trends-2025-micro-market-analysis', title: 'Pune Property Price Trends — Micro-Market Analysis' },
                        { slug: 'complete-nri-guide-buying-property-pune-2026', title: 'NRI Guide to Buying Property in Pune 2026' },
                        ...(locality.slug === 'hinjewadi' || locality.slug === 'wakad' ? [
                            { slug: 'rental-yields-hinjewadi-2025-nri-investment-guide', title: 'Rental Yields Hinjewadi — NRI Investment Guide' },
                            { slug: 'best-residential-projects-hinjewadi-2025-complete-guide', title: 'Best Projects in Hinjewadi — Buyer\'s Guide' },
                            { slug: 'why-joyville-vyomora-is-best-new-launch-hinjewadi-2026', title: 'Why Joyville Vyomora Is the Best New Launch in Hinjewadi' },
                        ] : []),
                        ...(locality.slug === 'hadapsar' || locality.slug === 'kharadi' ? [
                            { slug: 'the-ultimate-guide-pune-east-townships-hadapsar', title: 'The Ultimate Guide to Pune East Townships — Hadapsar' },
                            { slug: 'pune-it-corridor-hinjewadi-vs-kharadi-vs-magarpatta', title: 'IT Corridor Comparison — Hinjewadi vs Kharadi vs Magarpatta' },
                        ] : []),
                        ...(locality.slug === 'bavdhan' ? [
                            { slug: 'pune-mega-infrastructure-projects-impact-2028', title: 'Pune Mega Infrastructure Projects — Impact by 2028' },
                        ] : []),
                    ].slice(0, 4).map(article => (
                        <Link key={article.slug} href={`/insights/${article.slug}`} className="flex items-center gap-3 p-4 bg-[#FFFFFF] border border-[#C5A059]/10 hover:border-[#C5A059]/40 transition-all rounded-sm group shadow-md">
                            <ArrowRight size={14} className="text-[#1D4F9C] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            <span className="text-sm text-[#323334] group-hover:text-[#1D4F9C] transition-colors font-light">{article.title}</span>
                        </Link>
                    ))}
                </div>
            </section>
        </div >
    );
}
