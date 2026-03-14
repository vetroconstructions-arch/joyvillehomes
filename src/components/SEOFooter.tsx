import Link from 'next/link';
import { MapPin, Building2, FileText, TrendingUp } from 'lucide-react';

const footerLinks = {
    homebuyers: [
        { href: '/properties/ready-possession-flats-pune-2026', label: 'Ready Possession 2026' },
        { href: '/properties/under-1-crore-flats-pune', label: 'Flats Under ₹1 Cr' },
        { href: '/properties/rera-approved-flats-pune', label: 'RERA Approved Projects' },
        { href: '/properties/smart-home-apartments-pune', label: 'Smart Home Collection' },
        { href: '/properties/gated-community-pune-2026', label: 'Gated Communities' },
        { href: '/insights/first-time-homebuyer-checklist-pune-2026', label: 'Homebuyer Checklist' },
        { href: '/glossary', label: 'Real Estate Glossary' },
    ],
    investors: [
        { href: '/properties/investment-property-pune-2026', label: 'Top Investment Picks' },
        { href: '/properties/new-launch-projects-pune-2026', label: 'New Launch Opportunities' },
        { href: '/insights/pune-real-estate-market-forecast-2026-investment-hotspots', label: '2026 Market Forecast' },
        { href: '/properties/joyville-vs-godrej-hinjewadi', label: 'Joyville vs Godrej' },
        { href: '/properties/joyville-vs-kolte-patil-life-republic-hinjewadi', label: 'Joyville vs Kolte Patil' },
        { href: '/properties/na-bungalow-plots-near-purandar-airport', label: 'High-ROI Plots' },
    ],
    nris: [
        { href: '/properties/nri-investment-flats-pune', label: 'NRI Preferred Homes' },
        { href: '/insights/complete-nri-guide-buying-property-pune-2026', label: 'NRI Investment Guide' },
        { href: '/insights/rental-yields-hinjewadi-2025-nri-investment-guide', label: 'Rental Yield Analysis' },
        { href: '/properties/3-bhk-luxury-apartments-pune-west', label: 'Premium HNI Suites' },
        { href: '/insights/pune-it-corridor-hinjewadi-vs-kharadi-vs-magarpatta', label: 'IT Corridor Insights' },
    ],
    projects: [
        { href: '/projects/joyville-vyomora-hinjewadi', label: 'Joyville Vyomora' },
        { href: '/projects/joyville-sensorium-hinjewadi', label: 'Joyville Sensorium' },
        { href: '/projects/joyville-hadapsar-annexe-pune', label: 'Joyville Hadapsar Annexe' },
        { href: '/projects/joyville-celestia-hadapsar', label: 'Joyville Celestia' },
        { href: '/projects/vanaha-golfland-pune', label: 'Vanaha Golfland' },
        { href: '/projects/shapoorji-treetopia-pune', label: 'Shapoorji Treetopia' },
    ],
    localities: [
        { href: '/locality/hinjewadi', label: 'Hinjewadi' },
        { href: '/locality/hadapsar', label: 'Hadapsar' },
        { href: '/locality/bavdhan', label: 'Bavdhan' },
        { href: '/locality/shewalewadi', label: 'Shewalewadi' },
        { href: '/locality/purandar', label: 'Purandar' },
    ],
    comparisons: [
        { href: '/insights/joyville-vs-competitors', label: 'Joyville vs Industry Matrix' },
        { href: '/insights/comparative-roi-hinjewadi-vs-hadapsar-vs-bavdhan-shapoorji', label: 'Micro-Market ROI Study' },
        { href: '/insights/shapoorji-pallonji-pune-project-review-2026-master-collection', label: 'The Master Collection Review' },
    ]
};

export default function SEOFooter() {
    return (
        <footer className="bg-[#1A1A2E] text-[#FFFFFF] pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
                    {/* Column 1: Homebuyers */}
                    <div>
                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] mb-6">
                            For Homebuyers
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.homebuyers.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="block py-1 text-[#FFFFFF]/60 text-xs font-light hover:text-[#FFFFFF] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Investors */}
                    <div>
                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] mb-6">
                            For Investors
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.investors.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="block py-1 text-[#FFFFFF]/60 text-xs font-light hover:text-[#FFFFFF] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: NRIs */}
                    <div>
                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] mb-6">
                            For NRI Investors
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.nris.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="block py-1 text-[#FFFFFF]/60 text-xs font-light hover:text-[#FFFFFF] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Projects */}
                    <div>
                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#FFFFFF]/90 mb-6">
                            Portfolios
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.projects.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="block py-1 text-[#FFFFFF]/60 text-xs font-light hover:text-[#FFFFFF] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Hubs */}
                    <div>
                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#FFFFFF]/90 mb-6">
                            Locality Hubs
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.localities.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="block py-1 text-[#FFFFFF]/60 text-xs font-light hover:text-[#FFFFFF] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 6: Comparisons (Optional/Dynamic) */}
                    <div className="hidden lg:block">
                        <h3 className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] mb-6">
                            Comparison Data
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.comparisons.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="block py-1 text-[#FFFFFF]/60 text-xs font-light hover:text-[#FFFFFF] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#FFFFFF]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Shapoorji Pallonji Real Estate" />
                    <meta itemProp="url" content="https://joyville-homes.com" />
                    <meta itemProp="logo" content="https://joyville-homes.com/logo.png" />
                    <div>
                        <span className="text-2xl font-serif text-[#FFFFFF]/80 tracking-widest uppercase">Joyville</span>
                        <span className="text-[8px] font-sans tracking-[0.4em] text-[#C5A059] uppercase ml-2">Pune</span>
                    </div>
                    <p className="text-[#FFFFFF]/30 text-[9px] tracking-[0.2em] uppercase text-center">
                        MahaRERA: <span itemProp="identifier">P52100000000</span> | © {new Date().getFullYear()} <span itemProp="legalName">Shapoorji Pallonji Real Estate</span>
                    </p>
                    <div className="flex flex-wrap gap-6 text-[#FFFFFF]/40 text-[10px] uppercase tracking-widest font-light">
                        <Link href="/projects" className="hover:text-[#FFFFFF] transition-colors">Projects</Link>
                        <Link href="/insights" className="hover:text-[#FFFFFF] transition-colors">Insights</Link>
                        <Link href="/glossary" className="hover:text-[#FFFFFF] transition-colors">Glossary</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
