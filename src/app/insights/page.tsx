import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { blogs } from '@/data/blogs';
import Navbar from '@/components/Navigation';
import MicroMarketBulletin from '@/components/MicroMarketBulletin';

export const metadata: Metadata = {
    title: 'Pune Real Estate Insights & Property Market Analysis 2025 | Joyville Homes',
    description: 'Expert market analysis, property price trends, NRI investment guides, RERA compliance education, and infrastructure impact reports for Pune real estate by Shapoorji Pallonji.',
    keywords: [
        'Pune real estate news', 'Hinjewadi market trends', 'Property investment Pune', 'Pune infrastructure projects 2025',
        'best residential projects Hinjewadi 2025', 'RERA approved projects Pune', 'Pune property price trends',
        'NRI investment Pune', 'Hinjewadi vs Hadapsar vs Bavdhan', 'rental yield Hinjewadi', 'Pune Metro real estate impact',
        'property rates Hinjewadi 2025', 'Joyville vs Kolte Patil', 'micro market analysis Pune'
    ],
    alternates: {
        canonical: 'https://www.joyville-homes.com/insights'
    }
};

export default function InsightsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["Blog", "CollectionPage"],
                "@id": "https://www.joyville-homes.com/insights/#blog",
                "name": "Joyville Pune Market Insights",
                "description": metadata.description,
                "url": "https://www.joyville-homes.com/insights",
                "publisher": {
                    "@id": "https://www.joyville-homes.com/#organization"
                },
                "blogPost": blogs.map(blog => ({
                    "@type": "BlogPosting",
                    "headline": blog.title,
                    "url": `https://www.joyville-homes.com/insights/${blog.slug}`,
                    "datePublished": new Date(blog.date).toISOString()
                }))
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.joyville-homes.com/insights/#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.joyville-homes.com" },
                    { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://www.joyville-homes.com/insights" }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#EEF2F6] pt-32 pb-24 text-[#323334]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <header className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#1D4F9C] font-semibold block mb-4">Shapoorji Pallonji Knowledge Hub</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#323334] font-light mb-6">Market Insights & Trends</h1>
                <p className="text-[#323334] text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    Data-driven analysis and expert perspectives on Pune&apos;s dynamic real estate landscape to empower your investment decisions.
                </p>
            </header>

            <MicroMarketBulletin />

            <section className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                    {blogs.map((blog) => (
                        <article key={blog.id} className="group bg-[#FFFFFF] flex flex-col rounded-sm overflow-hidden border border-[#C5A059]/20 shadow-lg hover:shadow-2xl transition-all duration-500">
                            <Link href={`/insights/${blog.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 mix-blend-luminosity"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute top-4 left-4 bg-[#1D4F9C] px-3 py-1 text-[#FFFFFF] text-[9px] uppercase tracking-widest font-bold">
                                    {blog.category}
                                </div>
                            </Link>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex flex-wrap items-center gap-4 text-[#323334]/70 mb-4 text-xs font-light">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime}</span>
                                    <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
                                </div>

                                <h2 className="text-2xl lg:text-3xl font-serif text-[#323334] mb-4 leading-tight group-hover:text-[#1D4F9C] transition-colors">
                                    <Link href={`/insights/${blog.slug}`}>{blog.title}</Link>
                                </h2>

                                <p className="text-[#323334]/90 font-light leading-relaxed mb-8 flex-grow">
                                    {blog.excerpt}
                                </p>

                                <Link href={`/insights/${blog.slug}`} className="inline-flex items-center gap-2 text-[#1D4F9C] text-xs uppercase tracking-widest font-bold hover:text-[#323334] transition-colors mt-auto w-max">
                                    Read Full Article <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
