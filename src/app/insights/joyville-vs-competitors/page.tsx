import { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ShieldAlert, Award, Star, TrendingUp, Landmark, BarChart3 } from 'lucide-react';
import BrochureButton from '@/components/BrochureButton';
import { comparisons } from '@/data/comparisons';

export const metadata: Metadata = {
    title: "Joyville vs Competitors | Real Estate Comparison Pune 2025",
    description: "Detailed comparison: Joyville Homes vs Godrej Park Greens, Kolte Patil Life Republic, and Amanora. Compare construction quality, amenities, and ROI.",
    keywords: [
        "Joyville vs Godrej Hinjewadi",
        "Joyville Hadapsar vs Amanora",
        "Shapoorji Pallonji vs Kolte Patil",
        "Best construction quality real estate Pune",
        "Compare premium flats Pune 2025",
        "Real estate investment ROI Pune comparison",
        "Aluform vs traditional construction Pune"
    ],
    alternates: {
        canonical: "https://www.joyville-homes.com/insights/joyville-vs-competitors"
    }
};

const comparisonData = [
    {
        feature: "Construction Technology",
        joyville: "Advanced Aluform (Monolithic Concrete)",
        others: "Traditional RCC or Mix",
        winner: "Joyville",
        impact: "Superior sound insulation, leak-proof finish, and earthquake resistance."
    },
    {
        feature: "Brand Legacy",
        joyville: "150+ Years (Shapoorji Pallonji)",
        others: "25-30 Years",
        winner: "Joyville",
        impact: "Trust, project delivery reliability, and resale value stability."
    },
    {
        feature: "Green Open Spaces",
        joyville: "75-80% Open Area (Joyville Sensorium)",
        others: "40-60% Average",
        winner: "Joyville",
        impact: "Better lifestyle, health wellness, and premium aesthetics."
    },
    {
        feature: "Maintenance & Quality",
        joyville: "Corporate Professional (Elite Facility Management)",
        others: "Variable / Third-Party Local",
        winner: "Joyville",
        impact: "Long-term asset preservation and lower depreciation through institutional management."
    },
    {
        feature: "RERA Transparency",
        joyville: "100% Milestone Compliance (Escrow Protected)",
        others: "Variable Compliance Check",
        winner: "Joyville",
        impact: "Maximum safety for buyer funds with zero diversion risk."
    },
    {
        feature: "Appreciation Track Record",
        joyville: "Historically 12-15% (Superior Resale Demand)",
        others: "Market Average 8-10%",
        winner: "Joyville",
        impact: "SP brand legacy ensures higher liquidity and faster resale velocity."
    }
];

export default function ComparisonMatrix() {
    const tableJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.joyville-homes.com/insights/joyville-vs-competitors/#webpage",
                "url": "https://www.joyville-homes.com/insights/joyville-vs-competitors",
                "name": "Joyville vs Competitors | Real Estate Comparison Pune 2025",
                "description": "Expert side-by-side comparison of construction quality, brand legacy, and ROI between Joyville and other Pune developers.",
                "publisher": { "@id": "https://www.joyville-homes.com/#organization" },
                "author": { "@id": "https://www.joyville-homes.com/#research-desk" }
            },
            {
                "@type": "Table",
                "name": "Shapoorji Pallonji Joyville vs. Pune Real Estate Industry Comparison Matrix 2026",
                "about": "Technical and financial comparison of residential project quality parameters in Pune micro-markets",
                "mainEntityOfPage": { "@id": "https://www.joyville-homes.com/insights/joyville-vs-competitors/#webpage" }
            },
            {
                "@type": "Dataset",
                "name": "Pune Real Estate Competitive Analysis Data 2026",
                "description": "Comparative data on construction technology, green space ratios, and ROI benchmarks for top developers in Hinjewadi, Hadapsar, and Bavdhan.",
                "publisher": { "@id": "https://www.joyville-homes.com/#organization" },
                "license": "https://creativecommons.org/licenses/by/4.0/",
                "variableMeasured": ["Construction Technology", "Green Space Ratio", "Capital Appreciation", "Rental Yield"]
            }
        ]
    };

    return (
        <article className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 text-[#323334] font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tableJsonLd) }}
            />
            <header className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <div className="inline-flex items-center gap-2 text-[#1D4F9C] font-medium text-xs tracking-widest uppercase mb-4">
                    <ShieldAlert size={16} /> Investor Intelligence
                </div>
                <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                    The <span className="italic text-[#1D4F9C]">Excellence Matrix</span> <br /> Joyville vs. The Market
                </h1>
                <p className="text-lg text-[#323334]/70 font-light leading-relaxed max-w-3xl mx-auto">
                    Transparency is our core value. See how Shapoorji Pallonji&apos;s Joyville homes compare against Pune&apos;s leading developers in Hinjewadi, Hadapsar, and Bavdhan.
                </p>
            </header>

            <main className="max-w-7xl mx-auto px-6">
                {/* Comparison Table */}
                <div className="overflow-x-auto border border-[#C5A059]/60 mb-32 shadow-2xl">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#EEF2F6] border-b border-[#C5A059]/60">
                            <tr>
                                <th className="p-8 text-xs uppercase tracking-[0.2em] font-bold text-[#1D4F9C]">Parameter</th>
                                <th className="p-8 text-xs uppercase tracking-[0.2em] font-bold text-[#1D4F9C] bg-[#FFFFFF]">Joyville Homes</th>
                                <th className="p-8 text-xs uppercase tracking-[0.2em] font-bold text-[#323334]/60">Industry Average</th>
                                <th className="p-8 text-xs uppercase tracking-[0.2em] font-bold text-[#1D4F9C]">The Advantage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, idx) => (
                                <tr key={idx} className="border-b border-[#C5A059]/10 hover:bg-[#EEF2F6]/30 transition-colors">
                                    <td className="p-8 font-serif text-lg">{row.feature}</td>
                                    <td className="p-8 font-medium text-[#1D4F9C] bg-[#FFFFFF]/50">{row.joyville}</td>
                                    <td className="p-8 font-light text-[#323334]/70">{row.others}</td>
                                    <td className="p-8 text-sm italic font-light leading-relaxed text-[#323334]/80">{row.impact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Detailed Analytics Grid */}
                <section className="mb-32">
                    <div className="flex items-center gap-3 mb-12">
                        <BarChart3 className="text-[#1D4F9C]" size={24} />
                        <h2 className="text-3xl font-serif">Project-Specific Benchmarks</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {comparisons.map((project) => (
                            <div key={project.projectId} className="bg-[#EEF2F6] border border-[#C5A059]/30 p-8 rounded-sm shadow-sm hover:shadow-xl transition-all group">
                                <h3 className="text-xl font-serif text-[#1D4F9C] mb-2">{project.projectTitle}</h3>
                                <p className="text-[10px] uppercase tracking-widest text-[#323334]/60 mb-6">{project.competitorGroup}</p>
                                
                                <div className="space-y-4 mb-8">
                                    {project.metrics.map((metric, mIdx) => (
                                        <div key={mIdx} className="flex justify-between items-center border-b border-[#C5A059]/10 pb-2">
                                            <span className="text-xs font-light">{metric.label}</span>
                                            <div className="text-right">
                                                <span className="text-sm font-bold text-[#1D4F9C]">{metric.joyvilleValue}{metric.unit}</span>
                                                <span className="text-[9px] text-[#323334]/40 block uppercase tracking-tighter">Market: {metric.competitorAvg}{metric.unit}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <p className="text-xs font-light italic leading-relaxed text-[#323334]/70">
                                    "{project.summary}"
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Brand Authority Cards */}
                <section className="grid lg:grid-cols-3 gap-8 mb-32">
                    <div className="bg-[#EEF2F6] p-10 border border-[#C5A059]/60 rounded-sm">
                        <Landmark className="text-[#1D4F9C] mb-6" size={32} strokeWidth={1} />
                        <h3 className="text-2xl font-serif mb-4">Legacy Advantage</h3>
                        <p className="text-sm font-light leading-relaxed text-[#323334]/70">
                            Shapoorji Pallonji has built global icons like the RBI Headquarters and Palace of the Sultan of Oman. Buying a Joyville home means buying into a legacy of zero compromising on structural integrity.
                        </p>
                    </div>
                    <div className="bg-[#FFFFFF] p-10 border border-[#C5A059]/60 rounded-sm shadow-xl">
                        <Award className="text-[#1D4F9C] mb-6" size={32} strokeWidth={1} />
                        <h3 className="text-2xl font-serif mb-4">Value Retention</h3>
                        <p className="text-sm font-light leading-relaxed text-[#323334]/70">
                            Properties by A-list developers like SP Real Estate see significantly lower depreciation compared to smaller local players, ensuring your investment remains an asset.
                        </p>
                    </div>
                    <div className="bg-[#EEF2F6] p-10 border border-[#C5A059]/60 rounded-sm">
                        <TrendingUp className="text-[#1D4F9C] mb-6" size={32} strokeWidth={1} />
                        <h3 className="text-2xl font-serif mb-4">Rental Yield</h3>
                        <p className="text-sm font-light leading-relaxed text-[#323334]/70">
                            Tenants in IT hubs like Hinjewadi prefer brand-name societies for safety and amenities, leading to 15-20% higher rental premiums for Joyville properties.
                        </p>
                    </div>
                </section>

                {/* Lead Capture Widget */}
                <section className="bg-[#1D4F9C] text-[#FFFFFF] p-16 flex flex-col items-center text-center">
                    <Star className="text-[#C5A059] mb-6" size={40} />
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 italic leading-tight">Get the Full Market Side-by-Side Analysis</h2>
                    <p className="text-lg font-light text-[#FFFFFF]/80 max-w-2xl mb-12">
                        Speak with our investment consultants for a customized project ROI comparison based on your budget and preferred micro-market.
                    </p>
                    <div className="w-full max-w-md">
                        <BrochureButton projectName="Competition Analysis" label="Review Project ROI Case Studies" />
                    </div>
                </section>
            </main>

            <footer className="py-20 text-center border-t border-[#C5A059]/10 mt-32">
                <Link href="/projects" className="inline-flex items-center gap-2 text-[#1D4F9C] font-semibold text-xs uppercase tracking-widest hover:text-[#323334] transition-colors">
                    Explore the Joyville Portfolio — Hinjewadi • Hadapsar • Bavdhan
                </Link>
            </footer>
        </article>
    );
}
