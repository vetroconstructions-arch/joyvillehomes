import { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ShieldAlert, Award, Star, TrendingUp, Landmark } from 'lucide-react';
import BrochureButton from '@/components/BrochureButton';

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
    ]
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
        joyville: "Corporate Professional Management",
        others: "Variable / Third-Party",
        winner: "Joyville",
        impact: "Long-term asset preservation and lower depreciation."
    }
];

export default function ComparisonMatrix() {
    return (
        <article className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 text-[#323334] font-sans">
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
