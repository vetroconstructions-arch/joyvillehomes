import { Metadata } from 'next';
export const dynamic = 'force-static';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/data/projects';
import { getProjectInsider } from '@/data/ProjectInsider';
import Link from 'next/link';
import { 
    Construction, 
    ArrowLeft, 
    ShieldCheck, 
    Wallet, 
    Car, 
    Milestone, 
    MapPin, 
    BarChart, 
    Info, 
    Calendar, 
    Landmark
} from 'lucide-react';

const siteUrl = 'https://joyville-homes.com';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        return { title: 'Project Insider | Joyville Homes' };
    }

    return {
        title: `${project.title} Insider Guide | Maintenance, Parking & Construction Status 2026`,
        description: `Everything you need to know about ${project.title}: Detailed construction slab-tracker, maintenance ₹/sqft cost, parking ratios, and locality roadmap.`,
        keywords: [
            `${project.title} construction status`,
            `${project.title} maintenance cost 2026`,
            `${project.title} parking price and policy`,
            `Joyville Pune project insider analysis`
        ],
        alternates: {
            canonical: `${siteUrl}/projects/${project.slug}/insider`
        }
    };
}

export default async function ProjectInsiderHub({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);
    const insider = getProjectInsider(resolvedParams.slug);

    if (!project || !insider) {
        notFound();
    }

    const completionPercentage = (insider.constructionStatus.slabsCompleted / insider.constructionStatus.totalSlabs) * 100;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `What is the maintenance cost for ${project.title}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${project.title} maintenance is approximately ${insider.maintenancePremium}. This includes ELITE Facility Management, garden upkeep, and 24/7 security tiers.`
                }
            },
            {
                "@type": "Question",
                "name": `What is the construction status of ${project.title}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `As of ${insider.constructionStatus.lastUpdate}, ${project.title} has completed ${insider.constructionStatus.slabsCompleted} out of ${insider.constructionStatus.totalSlabs} slabs. Current state: ${insider.constructionStatus.currentPhase}.`
                }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#EEF2F6] text-[#323334] font-sans pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            
            {/* Insider Hero */}
            <section className="relative pt-40 pb-20 bg-[#FFFFFF] border-b border-[#C5A059]/10">
                <div className="max-w-7xl mx-auto px-6">
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-[#1D4F9C] hover:text-[#323334] font-light text-[10px] tracking-[0.3em] uppercase transition-colors mb-12">
                        <ArrowLeft size={16} /> Back to Project Details
                    </Link>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 text-[#C5A059] font-bold text-[10px] tracking-[0.4em] uppercase mb-6">
                                <span className="p-2 bg-[#EEF2F6] rounded-sm">
                                    <Construction size={20} className="text-[#1D4F9C]" />
                                </span>
                                Project Intelligence Center
                            </div>
                            <h1 className="text-4xl md:text-6xl font-serif text-[#323334] leading-tight mb-4">
                                The Insider&apos;s View: <br /><span className="text-[#1D4F9C] italic">{project.title}</span>
                            </h1>
                            <p className="text-sm text-[#323334]/60 font-light flex items-center gap-2">
                                <MapPin size={14} className="text-[#C5A059]" /> {project.location} • Data audit as of {insider.constructionStatus.lastUpdate}
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-6 bg-[#EEF2F6] p-6 border border-[#C5A059]/20 rounded-sm shadow-xl">
                            <BarChart size={32} className="text-[#1D4F9C] opacity-20" />
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-[#323334]/40">Status Code</p>
                                <p className="text-lg font-serif text-[#1D4F9C]">{insider.constructionStatus.totalSlabs === insider.constructionStatus.slabsCompleted ? 'Ready & Final' : 'Predictive Alpha'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    
                    {/* Left: Operational Metrics */}
                    <div className="lg:col-span-8 space-y-12">
                        
                        {/* Slab-Tracker (Construction Progress) */}
                        <div className="bg-[#FFFFFF] p-10 border border-[#C5A059]/20 rounded-sm shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 rotate-12 opacity-[0.03]">
                                <Construction size={180} />
                            </div>
                            <h2 className="text-2xl font-serif text-[#323334] mb-10 flex items-center gap-3">
                                <Milestone size={24} className="text-[#1D4F9C]" /> Structural Milestone Tracker
                            </h2>

                            <div className="space-y-12 relative z-10">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-medium">Slab Completion Status</span>
                                        <span className="text-2xl font-serif text-[#1D4F9C]">{completionPercentage.toFixed(0)}%</span>
                                    </div>
                                    <div className="h-6 w-full bg-[#EEF2F6] rounded-full overflow-hidden border border-[#C5A059]/10 p-1">
                                        <div 
                                            className="h-full bg-gradient-to-r from-[#1D4F9C] to-[#323334] rounded-full transition-all duration-1000 shadow-xl"
                                            style={{ '--width': `${completionPercentage}%` } as React.CSSProperties}
                                        >
                                            <div className="h-full bg-gradient-to-r from-[#1D4F9C] to-[#323334] w-[var(--width)]" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-[#323334]/40">
                                        <span>Ground Zero</span>
                                        <span className="text-[#1D4F9C]">Projected Finish: {completionPercentage === 100 ? 'Delivered' : 'On Track'}</span>
                                        <span>Total {insider.constructionStatus.totalSlabs} Slabs</span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[#C5A059]/10">
                                    <div className="flex items-center gap-5">
                                        <div className="p-3 bg-[#EEF2F6] rounded-sm"><ShieldCheck className="text-emerald-500" size={24} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-[#323334]/40 mb-1">Current State</p>
                                            <p className="text-sm font-serif">{insider.constructionStatus.currentPhase}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <div className="p-3 bg-[#EEF2F6] rounded-sm"><Calendar className="text-[#C5A059]" size={24} /></div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-[#323334]/40 mb-1">Next Milestone</p>
                                            <p className="text-sm font-serif">{insider.constructionStatus.nextMilestone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Inventory Velocity (Decisive Signal) */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#FFFFFF] p-8 border border-[#1D4F9C]/10 rounded-sm">
                                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#323334]/40 mb-6 border-b border-[#C5A059]/20 pb-3">Unit Availability Metrics</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center group">
                                        <span className="text-sm font-light">2 BHK Collection</span>
                                        <span className="text-xs font-bold px-3 py-1 bg-[#EEF2F6] text-[#1D4F9C] rounded-full group-hover:bg-[#1D4F9C] group-hover:text-white transition-colors">
                                            {insider.inventoryStatus.twoBHK}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-sm font-light">3 BHK Collection</span>
                                        <span className="text-xs font-bold px-3 py-1 bg-[#EEF2F6] text-[#1D4F9C] rounded-full group-hover:bg-[#1D4F9C] group-hover:text-white transition-colors">
                                            {insider.inventoryStatus.threeBHK}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#FFFFFF] p-8 border border-[#1D4F9C]/10 rounded-sm">
                                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#323334]/40 mb-6 border-b border-[#C5A059]/20 pb-3">Operational IQ</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <Wallet size={18} className="text-[#1D4F9C]" />
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-[#323334]/40">Est. Maintenance Premium</p>
                                            <p className="text-base font-serif text-[#1D4F9C]">{insider.maintenancePremium}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Car size={18} className="text-[#C5A059]" />
                                        <div>
                                            <p className="text-[9px] uppercase font-bold text-[#323334]/40">Parking Allocation Note</p>
                                            <p className="text-xs font-light">{insider.parkingDetails.covered || insider.parkingDetails.open}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Local Roadmap */}
                        <div className="bg-[#1A1A1A] text-[#FFFFFF] p-10 rounded-sm">
                            <h2 className="text-2xl font-serif mb-10 flex items-center gap-3">
                                <MapPin size={24} className="text-[#C5A059]" /> Critical Locality Roadmap (2026-28)
                            </h2>
                            <div className="space-y-6">
                                {insider.civicRoadmap.map((item, i) => (
                                    <div key={i} className="flex gap-6 pb-6 border-b border-white/10 last:border-0 last:pb-0 group">
                                        <div className="shrink-0 w-16 text-center">
                                            <p className="text-[#C5A059] font-serif text-lg">{item.eta}</p>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-serif mb-1 group-hover:text-[#C5A059] transition-colors">{item.event}</h4>
                                            <p className="text-xs font-light text-white/60 mb-2">{item.distance} from Project Entry</p>
                                            <p className="text-sm font-light text-white/80 leading-relaxed italic border-l border-[#C5A059]/40 pl-4">
                                                {item.impact}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Expert Consultation & CTA */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-32">
                            <div className="bg-[#FFFFFF] p-8 border border-[#1D4F9C]/30 rounded-sm shadow-xl">
                                <div className="text-center mb-8">
                                    <Landmark className="text-[#1D4F9C] mx-auto mb-4" size={40} />
                                    <h3 className="text-xl font-serif text-[#323334] mb-2 leading-tight">Request Current Building Audit</h3>
                                    <p className="text-xs text-[#323334]/60 font-light">Get the high-resolution site photo & slab report directly from the project manager.</p>
                                </div>
                                <div className="space-y-4">
                                    <Link href="/projects" className="block w-full bg-[#1D4F9C] text-white py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#323334] transition-colors">
                                        Request Updated Cost Sheet
                                    </Link>
                                    <button className="w-full bg-[#FFFFFF] border border-[#1D4F9C] text-[#1D4F9C] py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#EEF2F6] transition-colors">
                                        Download Master Layout
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-[#EEF2F6] border-l-4 border-[#C5A059] rounded-r-sm">
                                <div className="flex items-center gap-2 text-[#1D4F9C] mb-4">
                                    <Info size={16} />
                                    <h4 className="text-xs font-bold uppercase tracking-widest">Transparency Notice</h4>
                                </div>
                                <p className="text-[10px] text-[#323334]/70 leading-relaxed font-light mb-4">
                                    Operational IQ and Maintenance ₹ figures reflect the SP-Corporate benchmark for the current fiscal quarter. Rates are subject to society registration finality.
                                </p>
                                <span className="text-[9px] uppercase tracking-tighter text-[#323334]/40 font-bold">MahaRERA Registered Project Intelligence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
