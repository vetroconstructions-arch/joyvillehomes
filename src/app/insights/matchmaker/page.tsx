import { Metadata } from 'next';
export const dynamic = 'force-static';
import InvestmentMatchmaker from '@/components/InvestmentMatchmaker';
import { 
    Sparkles, 
    ShieldCheck, 
    Target, 
    ArrowLeft, 
    Brain 
} from 'lucide-react';
import Link from 'next/link';

const siteUrl = 'https://joyville-homes.com';

export const metadata: Metadata = {
    title: 'Investment Matchmaker | Data-Driven Pune Property Selection 2026',
    description: 'Use the Joyville Investment Matchmaker to find your ideal Pune home based on budget, ROI goals, and location priority. Zero-search project matching.',
    keywords: [
        'Pune property matchmaker',
        'Real estate investment tool Pune',
        'Which Joyville project is right for me',
        'Hinjewadi vs Hadapsar investment guide',
        'Investment ROI Pune 2026'
    ],
    alternates: {
        canonical: `${siteUrl}/insights/matchmaker`
    }
};

export default function MatchmakerPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Joyville Investment Matchmaker",
        "applicationCategory": "Real Estate Search & ROI Simulation",
        "operatingSystem": "Web-based",
        "author": { "@id": "https://joyville-homes.com/#organization" },
        "description": "Find the perfect Pune real estate asset based on your specific budget, yield goals, and location needs.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        }
    };

    return (
        <main className="min-h-screen bg-[#EEF2F6] text-[#323334] pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            
            {/* Matchmaker Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-[#FFFFFF] border-b border-[#C5A059]/10">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1D4F9C]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <Link href="/insights" className="inline-flex items-center gap-2 text-[#1D4F9C] hover:text-[#323334] font-light text-[10px] tracking-[0.3em] uppercase transition-colors mb-12">
                        <ArrowLeft size={16} /> Back to Authority Hub
                    </Link>

                    <div className="flex flex-col items-center max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 text-[#1D4F9C] font-bold text-[10px] tracking-[0.4em] uppercase mb-8">
                            <span className="p-3 bg-[#EEF2F6] rounded-full">
                                <Brain size={24} className="text-[#1D4F9C]" />
                            </span>
                            Strategic Matching Engine
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif text-[#323334] font-light leading-tight mb-8">
                            Finding Your <span className="text-[#1D4F9C] italic">Perfect Asset</span>
                        </h1>
                        <p className="text-xl text-[#323334]/80 font-light leading-relaxed mb-12 border-y border-[#C5A059]/20 py-8">
                            Bypass the research gap. Answer 3 critical questions and receive a data-backed recommendation linking you to real-time ROI and project intelligence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Matchmaker Tool Injection */}
            <section className="relative -mt-12 z-20 px-6">
                <InvestmentMatchmaker />
            </section>

            <section className="max-w-4xl mx-auto px-6 py-24 text-center space-y-16">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <ShieldCheck className="mx-auto text-[#C5A059]" size={32} />
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#323334]">FEMA Compliant</h4>
                        <p className="text-[10px] text-[#323334]/60 font-light">All suggested matches follow MahaRERA and Global Capital Repatriation standards.</p>
                    </div>
                    <div className="space-y-4">
                        <Target className="mx-auto text-[#1D4F9C]" size={32} />
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#323334]">Goal-Aligned</h4>
                        <p className="text-[10px] text-[#323334]/60 font-light">Whether it&apos;s Rental Yield or Capital Gains, our logic uses real-time market data.</p>
                    </div>
                    <div className="space-y-4">
                        <Sparkles className="mx-auto text-[#C5A059]" size={32} />
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#323334]">Instant ROI</h4>
                        <p className="text-[10px] text-[#323334]/60 font-light">Every match deep-links to the Joyville ROI Simulator for detailed 10-year modeling.</p>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] p-12 border border-[#1D4F9C]/10 rounded-sm italic">
                    <p className="text-xl font-serif text-[#323334]/80 leading-relaxed max-w-2xl mx-auto">
                        &quot;Real estate investment in Pune is no longer about browsing; it&apos;s about matching intent to infrastructure. This tool uses the same logic our institutional desks use.&quot;
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#EEF2F6] overflow-hidden" />
                        <div className="text-left">
                            <span className="block text-[10px] uppercase font-bold tracking-widest text-[#1D4F9C]">Vikas Y.</span>
                            <span className="block text-[9px] text-[#323334]/40 font-bold tracking-tighter">Principal Market Analyst, SP Hub</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
