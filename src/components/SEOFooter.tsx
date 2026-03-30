"use client";

import Link from 'next/link';
import { useCurrency } from '@/context/CurrencyContext';

const footerLinks = {
    homebuyers: [
        { href: '/properties/ready-possession-flats-pune-2026', label: 'Ready Possession 2026' },
        { href: '/properties/under-1-crore-flats-pune', label: 'Flats Under ₹1 Cr' },
        { href: '/properties/rera-approved-flats-pune', label: 'RERA Approved Projects' },
        { href: '/properties/smart-home-apartments-pune', label: 'Smart Home Collection' },
        { href: '/properties/gated-community-pune-2026', label: 'Gated Communities' },
        { href: '/properties/pet-friendly-apartments-pune', label: 'Pet-Friendly Homes' },
        { href: '/properties/work-from-home-apartments-pune', label: 'WFH Ready Apartments' },
        { href: '/properties/vastu-compliant-flats-pune', label: 'Vastu Compliant Flats' },
        { href: '/insights/first-time-homebuyer-checklist-pune-2026', label: 'Homebuyer Checklist' },
        { href: '/glossary', label: 'Real Estate Glossary' },
    ],
    investors: [
        { href: '/properties/investment-property-pune-2026', label: 'Top Investment Picks' },
        { href: '/properties/best-flats-in-pune-2027', label: 'Best Flats 2027' },
        { href: '/properties/new-launch-projects-pune-2026', label: 'New Launch Opportunities' },
        { href: '/properties/flats-near-hinjewadi-metro-station-2027', label: 'Metro Station Flats' },
        { href: '/properties/flats-near-pune-ring-road', label: 'Ring Road Corridor' },
        { href: '/properties/vanaha-golfland-bavdhan-price-list', label: 'Vanaha Price List' },
        { href: '/properties/shapoorji-treetopia-plots-price-list', label: 'Treetopia Plots Price' },
        { href: '/properties/duplex-apartments-hinjewadi-pune', label: 'Duplex Hinjewadi' },
        { href: '/properties/luxury-penthouses-pune-2026', label: 'Luxury Penthouses' },
        { href: '/insights/matchmaker', label: 'Investment Matchmaker (New)' },
        { href: '/insights/joyville-vs-competitors', label: 'ROI Simulator Hub' },
    ],
    nris: [
        { href: '/properties/nri-investment-flats-pune', label: 'NRI Preferred Homes' },
        { href: '/insights/complete-nri-guide-buying-property-pune-2026', label: 'NRI Investment Guide' },
        { href: '/insights/rental-yields-hinjewadi-2025-nri-investment-guide', label: 'Rental Yield Analysis' },
        { href: '/properties/3-bhk-luxury-apartments-pune-west', label: 'Premium HNI Suites' },
        { href: '/insights/pune-it-corridor-hinjewadi-vs-kharadi-vs-magarpatta', label: 'IT Corridor Insights' },
        { href: '/insights/nri/region/nri-uae-dubai', label: 'UAE Regional Hub' },
        { href: '/insights/nri/region/nri-usa-tech', label: 'US Tech Investor Hub' },
    ],
    projects: [
        { href: '/projects/joyville-vyomora-hinjewadi', label: 'Joyville Vyomora' },
        { href: '/projects/joyville-sensorium-hinjewadi', label: 'Joyville Sensorium' },
        { href: '/projects/joyville-hadapsar-annexe-pune', label: 'Joyville Hadapsar Annexe' },
        { href: '/projects/joyville-celestia-hadapsar', label: 'Joyville Celestia' },
        { href: '/projects/vanaha-golfland-pune', label: 'Vanaha Golfland' },
        { href: '/projects/shapoorji-treetopia-pune', label: 'Shapoorji Treetopia' },
        { href: '/projects/vanaha-springs-pune', label: 'Vanaha Springs' },
        { href: '/projects/joyville-skyluxe-hadapsar', label: 'Skyluxe Edition' },
        { href: '/projects/wildernest-sp-kingstown', label: 'Wildernest Kingstown' },
    ],
    localities: [
        { href: '/locality/hinjewadi', label: 'Hinjewadi' },
        { href: '/locality/hadapsar', label: 'Hadapsar' },
        { href: '/locality/bavdhan', label: 'Bavdhan' },
        { href: '/locality/shewalewadi', label: 'Shewalewadi' },
        { href: '/locality/purandar', label: 'Purandar' },
    ],
    comparisons: [
        { href: '/insights/hinjewadi-it-lifeline-master-guide-2027-roi', label: 'Hinjewadi Master Guide' },
        { href: '/insights/pune-east-township-corridor-guide-hadapsar-shewalewadi', label: 'East Pune Hub Guide' },
        { href: '/insights/bavdhan-1000-acre-nature-valley-master-guide-vanaha', label: 'Bavdhan Nature Hub Guide' },
        { href: '/insights/shapoorji-pallonji-pune-project-review-2026-master-collection', label: 'Master Collection Review' },
    ],
    popular: [
        { href: '/flats-in-pune', label: 'Flats in Pune — Directory' },
        { href: '/properties/2-bhk-flats-in-hinjewadi', label: '2 BHK Hinjewadi' },
        { href: '/properties/ready-possession-flats-pune-2026', label: 'Ready Possession 2026' },
        { href: '/properties/nri-investment-flats-pune', label: 'NRI Investment Pune' },
        { href: '/properties/under-1-crore-flats-pune', label: 'Under ₹1 Crore' },
        { href: '/pune-real-estate-market', label: 'Pune Market 2026' },
    ]
};

export default function SEOFooter() {
    const { formatPrice } = useCurrency();

    const getDynamicLabel = (label: string) => {
        if (label.includes('₹')) {
            // Special case for "₹1 Cr"
            if (label.includes('₹1 Cr')) {
                return label.replace('₹1 Cr', formatPrice('₹1.00 Cr'));
            }
            return label;
        }
        return label;
    };

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
                                        {getDynamicLabel(link.label)}
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
                                        {getDynamicLabel(link.label)}
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
                                        {getDynamicLabel(link.label)}
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
                                        {getDynamicLabel(link.label)}
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
                                        {getDynamicLabel(link.label)}
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

                {/* Phase 16.7: Popular Searches — PageRank distribution to money pages */}
                <div className="border-t border-[#FFFFFF]/10 pt-8 pb-8 mb-8">
                    <h3 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#C5A059] mb-4">Popular Searches</h3>
                    <div className="flex flex-wrap gap-3">
                        {footerLinks.popular.map(link => (
                            <Link key={link.href} href={link.href} className="px-4 py-2 border border-[#FFFFFF]/10 text-[#FFFFFF]/60 text-[10px] font-light tracking-wider hover:border-[#C5A059]/40 hover:text-[#FFFFFF] transition-all">
                                {link.label}
                            </Link>
                        ))}
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
                    <p className="text-[#FFFFFF]/30 text-[9px] tracking-[0.2em] uppercase text-center max-w-md">
                        Digital presence managed by Authorized Channel Partners. All projects are MahaRERA Registered. 
                        Official verification: <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#C5A059]">MahaRERA Portal</a>. 
                        © {new Date().getFullYear()} Shapoorji Pallonji Real Estate.
                    </p>
                    <div className="flex flex-wrap gap-6 text-[#FFFFFF]/40 text-[10px] uppercase tracking-widest font-light">
                        <Link href="/projects" className="hover:text-[#FFFFFF] transition-colors">Projects</Link>
                        <Link href="/insights" className="hover:text-[#FFFFFF] transition-colors">Insights</Link>
                        <Link href="/privacy-policy" className="hover:text-[#FFFFFF] transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-[#FFFFFF] transition-colors">Terms</Link>
                        <Link href="/disclaimer" className="hover:text-[#FFFFFF] transition-colors">Disclaimer</Link>
                        <Link href="/glossary" className="hover:text-[#FFFFFF] transition-colors">Glossary</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
