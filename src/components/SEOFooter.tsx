import Link from 'next/link';
import { MapPin, Building2, FileText, TrendingUp } from 'lucide-react';

const footerLinks = {
    projects: [
        { href: '/projects/joyville-sensorium-hinjewadi', label: 'Joyville Sensorium' },
        { href: '/projects/joyville-hadapsar-annexe-pune', label: 'Joyville Hadapsar Annexe' },
        { href: '/projects/joyville-celestia-hadapsar', label: 'Joyville Celestia' },
        { href: '/projects/joyville-skyluxe-hadapsar', label: 'Skyluxe Edition' },
        { href: '/projects/vanaha-golfland-pune', label: 'Vanaha Golfland' },
        { href: '/projects/vanaha-springs-pune', label: 'Vanaha Springs' },
        { href: '/projects/shapoorji-treetopia-pune', label: 'Shapoorji Treetopia' },
    ],
    localities: [
        { href: '/locality/hinjewadi', label: 'Hinjewadi Real Estate' },
        { href: '/locality/hadapsar', label: 'Hadapsar Real Estate' },
        { href: '/locality/bavdhan', label: 'Bavdhan Real Estate' },
    ],
    properties: [
        { href: '/properties/2-bhk-flats-in-hinjewadi', label: '2 BHK Flats Hinjewadi' },
        { href: '/properties/3-bhk-flats-in-hinjewadi', label: '3 BHK Flats Hinjewadi' },
        { href: '/properties/1-bhk-flats-in-hadapsar', label: '1 BHK Flats Hadapsar' },
        { href: '/properties/flats-in-bavdhan-pune', label: 'Flats in Bavdhan' },
        { href: '/properties/ready-to-move-flats-hadapsar', label: 'Ready to Move Hadapsar' },
        { href: '/properties/luxury-apartments-hadapsar-pune', label: 'Luxury Apartments Hadapsar' },
        { href: '/properties/new-launch-projects-hadapsar-2025', label: 'New Launch Hadapsar 2025' },
        { href: '/properties/na-bungalow-plots-near-purandar-airport', label: 'Plots Near Purandar Airport' },
        { href: '/properties/joyville-vs-kolte-patil-life-republic-hinjewadi', label: 'Joyville vs Kolte Patil' },
        { href: '/properties/joyville-vs-godrej-hinjewadi', label: 'Joyville vs Godrej' },
    ],
    insights: [
        { href: '/insights/best-residential-projects-hinjewadi-2025-complete-guide', label: 'Best Projects Hinjewadi 2025' },
        { href: '/insights/rera-approved-projects-pune-everything-you-need-to-know', label: 'RERA Guide Pune' },
        { href: '/insights/pune-property-price-trends-2025-micro-market-analysis', label: 'Price Trends 2025' },
        { href: '/insights/rental-yields-hinjewadi-2025-nri-investment-guide', label: 'NRI Investment Guide' },
    ],
};

export default function SEOFooter() {
    return (
        <footer className="bg-[#1A1A2E] text-[#FFFFFF] pt-20 pb-8">
            {/* Main link grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
                    {/* Projects Column */}
                    <div>
                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#FFFFFF]/90 mb-6">
                            <Building2 size={14} className="text-[#1D4F9C]" /> Projects
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.projects.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-[#FFFFFF]/60 text-sm font-light hover:text-[#FFFFFF] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations Column */}
                    <div>
                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#FFFFFF]/90 mb-6">
                            <MapPin size={14} className="text-[#1D4F9C]" /> Locations
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.localities.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-[#FFFFFF]/60 text-sm font-light hover:text-[#FFFFFF] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#FFFFFF]/90 mb-6 mt-10">
                            <FileText size={14} className="text-[#1D4F9C]" /> Insights
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.insights.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-[#FFFFFF]/60 text-sm font-light hover:text-[#FFFFFF] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Searches Column (spans 2) */}
                    <div className="col-span-2">
                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#FFFFFF]/90 mb-6">
                            <TrendingUp size={14} className="text-[#1D4F9C]" /> Popular Searches
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {footerLinks.properties.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[#FFFFFF]/50 text-xs font-light px-3 py-2 border border-[#FFFFFF]/10 hover:border-[#C5A059]/60 hover:text-[#FFFFFF] transition-all rounded-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#FFFFFF]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <span className="text-2xl font-serif text-[#FFFFFF]/80 tracking-widest">JOYVILLE</span>
                        <span className="text-[8px] font-sans tracking-[0.4em] text-[#FFFFFF]/40 uppercase ml-2">Pune</span>
                    </div>
                    <p className="text-[#FFFFFF]/30 text-[9px] tracking-[0.2em] uppercase text-center">
                        MahaRERA: P52100000000 | © {new Date().getFullYear()} Shapoorji Pallonji Real Estate | All Rights Reserved
                    </p>
                    <div className="flex gap-6 text-[#FFFFFF]/40 text-xs">
                        <Link href="/projects" className="hover:text-[#FFFFFF] transition-colors">All Projects</Link>
                        <Link href="/insights" className="hover:text-[#FFFFFF] transition-colors">Insights</Link>
                        <Link href="/location" className="hover:text-[#FFFFFF] transition-colors">Location</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
