import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download, TrendingUp, Newspaper, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navigation';

export const metadata: Metadata = {
    title: 'Media & Digital PR | Real Estate Insights Pune | Joyville',
    description: 'Download the official Pune Real Estate Market Outlook Report 2025 by Shapoorji Pallonji. Access premium data, investor kits, and official press releases.',
    keywords: ['Pune Real Estate Report', 'Hinjewadi Property Trends', 'Joyville Press Kit', 'Shapoorji Pallonji Media', 'Pune Investor Report 2025'],
    alternates: {
        canonical: 'https://joyvillehomes-6fmc-git-main-vetroconstructions-7870s-projects.vercel.app/media'
    }
};

export default function MediaPRPage() {
    return (
        <main className="min-h-screen bg-[#EEF2F6] pt-32 pb-24 text-[#323334]">
            <Navbar />

            <header className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#1D4F9C] font-semibold block mb-4">Shapoorji Pallonji Media Center</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#323334] font-light mb-6">In the Media & Industry Reports</h1>
                <p className="text-[#323334] text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    Access our authoritative research, exclusive market outlooks, and official press releases defining the future of Pune real estate.
                </p>
            </header>

            <section className="max-w-7xl mx-auto px-6 mb-24">
                <div className="bg-[#FFFFFF] border border-[#C5A059]/30 shadow-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 rounded-sm group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1D4F9C]/5 blur-[80px] pointer-events-none rounded-bl-full" />

                    <div className="lg:w-1/2 relative z-10">
                        <div className="inline-flex items-center gap-3 bg-[#EEF2F6] px-4 py-2 rounded-sm text-[#1D4F9C] font-bold text-[10px] uppercase tracking-widest mb-6 border border-[#C5A059]/20">
                            <TrendingUp size={14} /> Official Industry Report
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-serif text-[#323334] mb-6">Pune Real Estate Outlook 2025: The Infrastructure Dividend</h2>
                        <p className="text-[#323334]/80 font-light leading-relaxed mb-8">
                            A comprehensive 40-page analysis detailing how the Pune Metro Line 3 and Ring Road will impact property valuations across Hinjewadi, Bavdhan, and East Pune corridors over the next 5 years.
                        </p>

                        <div className="flex items-center gap-6">
                            <button className="flex items-center gap-3 bg-[#1D4F9C] text-[#FFFFFF] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#323334] transition-colors shadow-lg">
                                <Download size={16} /> Download Full PDF Report
                            </button>
                            <span className="text-[#323334]/50 text-xs font-mono">Size: 4.2 MB</span>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative z-10 aspect-[4/3]">
                        <div className="w-full h-full relative rounded-sm overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-[#C5A059]/20 group-hover:scale-105 transition-transform duration-700">
                            <Image
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
                                alt="Pune Real Estate Outlook Report Cover"
                                fill
                                className="object-cover mix-blend-luminosity opacity-90"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-10 border-b border-[#C5A059]/20 pb-4">
                    <Newspaper className="text-[#1D4F9C]" size={24} />
                    <h2 className="text-2xl font-serif text-[#323334]">Recent Press Releases</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Shapoorji Pallonji Real Estate Announces Record Sales at Joyville Sensorium", date: "Feb 15, 2024", outlet: "Economic Times" },
                        { title: "Joyville Unveils 'The Vastion' - Ultra Luxury Villaments in Pune East", date: "Jan 28, 2024", outlet: "Moneycontrol" },
                        { title: "SPRE Recognized as Developer of the Year at Real Estate Awards 2023", date: "Dec 10, 2023", outlet: "Financial Express" }
                    ].map((pr, idx) => (
                        <div key={idx} className="bg-[#FFFFFF] p-8 border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors shadow-md hover:shadow-xl group flex flex-col">
                            <div className="flex justify-between items-center mb-4 text-[#323334]/60 text-xs font-medium uppercase tracking-widest">
                                <span>{pr.date}</span>
                                <span className="text-[#1D4F9C]">{pr.outlet}</span>
                            </div>
                            <h3 className="text-xl font-serif text-[#323334] mb-6 leading-snug group-hover:text-[#1D4F9C] transition-colors">{pr.title}</h3>
                            <Link href="#" className="mt-auto inline-flex items-center gap-2 text-[#1D4F9C] text-[10px] uppercase tracking-[0.2em] font-bold">
                                Read Press Release <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
