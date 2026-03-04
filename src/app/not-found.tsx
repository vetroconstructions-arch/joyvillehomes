import Link from 'next/link';
import { Home, Search, MapPin, Building2, FileText, ArrowRight } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#EEF2F6] flex items-center justify-center px-6">
            <div className="max-w-2xl w-full text-center">
                <div className="mb-8">
                    <span className="text-8xl font-serif text-[#1D4F9C]/20 font-light">404</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif text-[#323334] font-light mb-4">
                    Page Not Found
                </h1>
                <p className="text-[#323334]/70 font-light mb-10 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved. Explore our premium Shapoorji Pallonji residences below.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-10 text-left">
                    <Link href="/" className="flex items-center gap-3 p-4 bg-[#FFFFFF] border border-[#C5A059]/10 hover:border-[#1D4F9C]/30 transition-all rounded-sm group">
                        <Home size={18} className="text-[#1D4F9C] flex-shrink-0" />
                        <div>
                            <span className="text-sm text-[#323334] group-hover:text-[#1D4F9C] transition-colors font-medium block">Home</span>
                            <span className="text-xs text-[#323334]/50 font-light">Joyville Homes Pune</span>
                        </div>
                    </Link>
                    <Link href="/projects" className="flex items-center gap-3 p-4 bg-[#FFFFFF] border border-[#C5A059]/10 hover:border-[#1D4F9C]/30 transition-all rounded-sm group">
                        <Building2 size={18} className="text-[#1D4F9C] flex-shrink-0" />
                        <div>
                            <span className="text-sm text-[#323334] group-hover:text-[#1D4F9C] transition-colors font-medium block">All Projects</span>
                            <span className="text-xs text-[#323334]/50 font-light">9 premium developments</span>
                        </div>
                    </Link>
                    <Link href="/flats-in-pune" className="flex items-center gap-3 p-4 bg-[#FFFFFF] border border-[#C5A059]/10 hover:border-[#1D4F9C]/30 transition-all rounded-sm group">
                        <Search size={18} className="text-[#1D4F9C] flex-shrink-0" />
                        <div>
                            <span className="text-sm text-[#323334] group-hover:text-[#1D4F9C] transition-colors font-medium block">Flats in Pune</span>
                            <span className="text-xs text-[#323334]/50 font-light">32+ property searches</span>
                        </div>
                    </Link>
                    <Link href="/insights" className="flex items-center gap-3 p-4 bg-[#FFFFFF] border border-[#C5A059]/10 hover:border-[#1D4F9C]/30 transition-all rounded-sm group">
                        <FileText size={18} className="text-[#1D4F9C] flex-shrink-0" />
                        <div>
                            <span className="text-sm text-[#323334] group-hover:text-[#1D4F9C] transition-colors font-medium block">Market Insights</span>
                            <span className="text-xs text-[#323334]/50 font-light">10 research articles</span>
                        </div>
                    </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    <span className="text-xs text-[#323334]/40 font-light self-center mr-1">Quick links:</span>
                    {[
                        { href: '/locality/hinjewadi', label: 'Hinjewadi' },
                        { href: '/locality/hadapsar', label: 'Hadapsar' },
                        { href: '/locality/bavdhan', label: 'Bavdhan' },
                        { href: '/locality/kharadi', label: 'Kharadi' },
                        { href: '/locality/wakad', label: 'Wakad' },
                    ].map(loc => (
                        <Link key={loc.href} href={loc.href} className="px-3 py-1.5 bg-[#1D4F9C]/5 border border-[#1D4F9C]/10 hover:bg-[#1D4F9C]/10 text-[#1D4F9C] text-xs font-light rounded-sm transition-all">
                            {loc.label}
                        </Link>
                    ))}
                </div>

                <Link href="/" className="inline-flex items-center gap-2 text-[#1D4F9C] text-xs uppercase tracking-[0.2em] font-semibold hover:text-[#323334] transition-colors group">
                    <ArrowRight size={12} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </div>
        </div>
    );
}
