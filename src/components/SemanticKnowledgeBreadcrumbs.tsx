"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home, Map, Building2 } from 'lucide-react';

interface BreadcrumbItem {
    name: string;
    url: string;
    type: 'City' | 'Locality' | 'Project' | 'Home';
}

interface SemanticKnowledgeBreadcrumbsProps {
    items: BreadcrumbItem[];
}

const SemanticKnowledgeBreadcrumbs: React.FC<SemanticKnowledgeBreadcrumbsProps> = ({ items }) => {
    // Generate JSON-LD BreadcrumbList with Entity References
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": {
                "@type": item.type === 'Home' ? 'WebPage' : item.type,
                "@id": `https://joyville-homes.com${item.url}`,
                "url": `https://joyville-homes.com${item.url}`,
                "name": item.name
            }
        }))
    };

    return (
        <nav className="mb-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-medium text-[#323334]/50 overflow-x-auto no-scrollbar whitespace-nowrap py-2 border-b border-[#C5A059]/10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            
            <Link href="/" className="flex items-center gap-1.5 hover:text-[#1D4F9C] transition-colors group">
                <Home size={10} className="group-hover:scale-110 transition-transform" />
                <span>PUNE HUB</span>
            </Link>

            {items.filter(item => item.type !== 'Home').map((item, idx) => (
                <React.Fragment key={idx}>
                    <ChevronRight size={8} className="text-[#C5A059]/40 flex-shrink-0" />
                    <Link 
                        href={item.url} 
                        className="flex items-center gap-1.5 hover:text-[#1D4F9C] transition-colors group"
                    >
                        {item.type === 'Locality' ? <Map size={10} /> : <Building2 size={10} />}
                        <span className={idx === items.length - 2 ? 'text-[#1D4F9C] font-bold' : ''}>
                            {item.name}
                        </span>
                    </Link>
                </React.Fragment>
            ))}
        </nav>
    );
};

export default SemanticKnowledgeBreadcrumbs;
