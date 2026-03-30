import { Metadata } from 'next';
export const dynamic = 'force-static';
import { 
    ShieldCheck, 
    Scale, 
    Building2, 
    ArrowLeft, 
    FileText, 
    AlertCircle,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

const siteUrl = 'https://joyville-homes.com';

export const metadata: Metadata = {
    title: 'FEMA & Legal Compliance for NRI Property Investment in Pune 2026',
    description: 'The official NRI legal roadmap for investing in Shapoorji Pallonji Joyville projects. Detailed guide on FEMA rules, RBI guidelines, NRE/NRO accounts, and property repatriation.',
    keywords: [
        'FEMA rules for NRI property in India',
        'NRI real estate legal guide Pune',
        'Repatriation of funds India property',
        'NRE NRO account property purchase',
        'Shapoorji Pallonji NRI compliance'
    ],
    alternates: {
        canonical: `${siteUrl}/insights/nri/fema-check`
    }
};

export default function FEMACompliancePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FEMA & Legal Compliance Guide for NRI Property Buyers",
        "description": "Comprehensive guide on Foreign Exchange Management Act (FEMA) guidelines for non-resident Indian investors.",
        "author": { "@id": "https://joyville-homes.com/#organization" },
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can NRIs repatriate the sale proceeds of a property in India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, NRIs can repatriate the sale proceeds of up to two residential properties, provided the purchase was made using foreign exchange via NRE/FCNR accounts or direct remittance."
                }
            }
        ]
    };

    const sections = [
        {
            title: "FEMA Framework: Section 6 Overview",
            icon: <ShieldCheck size={24} className="text-[#1D4F9C]" />,
            content: "Under the Foreign Exchange Management Act (FEMA), NRIs and OCIs (Overseas Citizens of India) have a general permission to acquire any immovable property in India, other than agricultural land, plantation property, or farmhouse.",
            points: [
                "No prior permission required from RBI for residential assets.",
                "Payment proceeds must be routed through banking channels.",
                "Mandatory PAN card for property registration."
            ]
        },
        {
            title: "Financial Routing: NRE vs NRO",
            icon: <Scale size={24} className="text-[#C5A059]" />,
            content: "Choosing the correct account type is critical for future fund repatriation. Direct remittances from abroad are the most streamlined for Joyville transactions.",
            points: [
                "NRE Account: 100% Repatriable funds, preferred for future exits.",
                "NRO Account: Used for local income (rents); restricted repatriation (up to $1M/year).",
                "Digital KYC: Joyville supports 100% remote account verification via bank partners."
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-[#EEF2F6] text-[#323334] pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            
            {/* Legend Hero */}
            <section className="relative pt-40 pb-20 bg-[#FFFFFF] border-b border-[#C5A059]/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-[#1D4F9C]/5 blur-3xl -translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link href="/insights/topic/nri-investment" className="inline-flex items-center gap-2 text-[#1D4F9C] hover:text-[#323334] font-light text-xs tracking-widest uppercase transition-colors mb-12">
                        <ArrowLeft size={16} /> Back to Global Hub
                    </Link>

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 text-[#C5A059] font-bold text-[10px] tracking-[0.4em] uppercase mb-8">
                            <span className="p-3 bg-[#EEF2F6] rounded-sm">
                                <FileText size={24} className="text-[#1D4F9C]" />
                            </span>
                            Legal Authority Hub
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif text-[#323334] leading-tight mb-8">
                            FEMA & Legal <br /><span className="text-[#1D4F9C] italic">Compliance Guide 2026</span>
                        </h1>
                        <p className="text-lg text-[#323334]/70 font-light leading-relaxed mb-6 border-l-2 border-[#C5A059] pl-8">
                            A comprehensive roadmap for the global Indian diaspora to acquire, manage, and repatriate residential property assets in Pune while staying 100% FEMA-compliant.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        {sections.map((section, idx) => (
                            <div key={idx} className="bg-[#FFFFFF] p-10 border border-[#C5A059]/10 rounded-sm shadow-xl">
                                <div className="flex items-center gap-4 mb-8">
                                    {section.icon}
                                    <h2 className="text-2xl font-serif text-[#323334]">{section.title}</h2>
                                </div>
                                <p className="text-sm text-[#323334]/80 leading-loose mb-8 font-light italic">
                                    {section.content}
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {section.points.map((point, pIdx) => (
                                        <div key={pIdx} className="flex items-start gap-3 p-4 bg-[#EEF2F6] rounded-sm border border-[#1D4F9C]/5">
                                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                            <span className="text-xs font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Repatriation Table */}
                        <div className="bg-[#1A1A1A] text-white p-10 rounded-sm">
                            <h3 className="text-xl font-serif mb-8 flex items-center gap-3">
                                <AlertCircle className="text-[#C5A059]" /> Repatriation Limits (Standard Guidelines)
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/20">
                                            <th className="py-4 text-[10px] uppercase tracking-widest font-bold opacity-60">Aspect</th>
                                            <th className="py-4 text-[10px] uppercase tracking-widest font-bold opacity-60">Limit / Rule</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-light">
                                        <tr className="border-b border-white/10 group hover:bg-white/5 transition-colors">
                                            <td className="py-4">Principal Amount</td>
                                            <td className="py-4 text-[#C5A059]">100% Repatriable (if bought via foreign inward remittance)</td>
                                        </tr>
                                        <tr className="border-b border-white/10 group hover:bg-white/5 transition-colors">
                                            <td className="py-4">Capital Gains</td>
                                            <td className="py-4 text-[#C5A059]">Repatriable after applicable TDS (Long/Short term)</td>
                                        </tr>
                                        <tr className="group hover:bg-white/5 transition-colors">
                                            <td className="py-4">Property Count</td>
                                            <td className="py-4">Up to 2 residential properties per OCI/NRI card</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-32">
                            <div className="bg-[#FFFFFF] p-8 border border-[#1D4F9C]/20 rounded-sm shadow-2xl">
                                <Building2 size={32} className="text-[#1D4F9C] mb-6" />
                                <h3 className="text-lg font-serif mb-4">MahaRERA Integrated Filing</h3>
                                <p className="text-xs text-[#323334]/60 font-light leading-relaxed mb-8">
                                    Every Shapoorji Pallonji agreement for NRI buyers is pre-cleared for FEMA banking compliance. We provide the requisite <b>Audit Trail</b> for your home loan or direct remittance bank.
                                </p>
                                <button className="w-full bg-[#1D4F9C] text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#323334] transition-colors">
                                    Download Compliance Check-list
                                </button>
                            </div>

                            <div className="p-6 mt-8 bg-[#EEF2F6] rounded-sm italic border-l-4 border-[#C5A059]">
                                <p className="text-[10px] leading-relaxed text-[#323334]/70">
                                    Disclaimer: While FEMA guidelines are standardized, individual tax implications depend on your country of residence (DTAA rules). Consult our empaneled tax advisors for cross-border filing support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
