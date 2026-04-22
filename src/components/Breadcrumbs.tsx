"use client";

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://joyville-homes.com"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": `https://joyville-homes.com${item.href}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ol className="flex items-center flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] font-bold">
                <li className="flex items-center gap-2">
                    <Link href="/" className="text-[#323334]/40 hover:text-[#1D4F9C] transition-colors flex items-center gap-1">
                        <Home size={12} strokeWidth={2} />
                        <span>Home</span>
                    </Link>
                </li>
                
                {items.map((item, index) => (
                    <motion.li 
                        key={item.href}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                    >
                        <ChevronRight size={10} className="text-[#323334]/20" />
                        <Link 
                            href={item.href} 
                            className={`transition-colors ${
                                index === items.length - 1 
                                ? "text-[#1D4F9C] cursor-default" 
                                : "text-[#323334]/40 hover:text-[#1D4F9C]"
                            }`}
                            aria-current={index === items.length - 1 ? "page" : undefined}
                        >
                            {item.label}
                        </Link>
                    </motion.li>
                ))}
            </ol>
        </nav>
    );
}
