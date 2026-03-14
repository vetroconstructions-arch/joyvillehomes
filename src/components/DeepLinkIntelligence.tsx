import React from 'react';
import Link from 'next/link';
import { Share2, ArrowRight, MousePointer2 } from 'lucide-react';
import { Project, projects } from '@/data/projects';
import { blogs } from '@/data/blogs';

interface DeepLinkIntelligenceProps {
    currentProject: Project;
}

export default function DeepLinkIntelligence({ currentProject }: DeepLinkIntelligenceProps) {
    // Logic: Find sister projects in the same micro-market area (e.g. Hinjewadi, Hadapsar, Bavdhan)
    const normalizedLocation = currentProject.location.split(',')[0].trim().toLowerCase();
    
    const sisterProjects = projects
        .filter(p => p.id !== currentProject.id && (
            p.location.toLowerCase().includes(normalizedLocation) ||
            currentProject.seoKeywords?.some(k => p.seoKeywords?.includes(k))
        ))
        .slice(0, 4);

    // Logic: Find related blogs that mention this project or location
    const relatedBlogs = blogs
        .filter(b => 
            b.mentionsProject?.includes(currentProject.title) || 
            b.relatedLocalities?.some(loc => currentProject.location.toLowerCase().includes(loc.toLowerCase()))
        )
        .slice(0, 2);

    if (sisterProjects.length === 0 && relatedBlogs.length === 0) return null;

    return (
        <section 
            className="my-16 p-8 bg-[#F8FAFC] border-l-4 border-[#1D4F9C] rounded-sm shadow-sm"
            aria-label="Predictive Navigation Intelligence"
        >
            <div className="flex items-center gap-2 mb-8">
                <Share2 className="text-[#1D4F9C]" size={18} />
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1D4F9C]">
                    Predictive Intelligence: Pune Micro-Market Connect
                </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {sisterProjects.length > 0 && (
                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-[#323334]/50 mb-4 flex items-center gap-2">
                            <MousePointer2 size={12} /> Sister Projects in {currentProject.location.split(',')[0]}
                        </h4>
                        <ul className="space-y-4">
                            {sisterProjects.map(project => (
                                <li key={project.id}>
                                    <Link 
                                        href={`/projects/${project.slug}`}
                                        className="group inline-flex flex-col"
                                    >
                                        <span className="text-lg font-serif text-[#1D4F9C] group-hover:underline decoration-[#1D4F9C]/30 flex items-center gap-2">
                                            {project.title} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0" />
                                        </span>
                                        <span className="text-[10px] text-[#323334]/60 uppercase tracking-tighter">
                                            {project.type} • {project.status}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {relatedBlogs.length > 0 && (
                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-[#323334]/50 mb-4 flex items-center gap-2">
                            <MousePointer2 size={12} /> Researcher Insights
                        </h4>
                        <ul className="space-y-4">
                            {relatedBlogs.map(blog => (
                                <li key={blog.id}>
                                    <Link 
                                        href={`/insights/${blog.slug}`}
                                        className="group inline-flex flex-col"
                                    >
                                        <span className="text-lg font-serif text-[#1D4F9C] group-hover:underline decoration-[#1D4F9C]/30 flex items-center gap-2">
                                            {blog.title} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-2 group-hover:ml-0" />
                                        </span>
                                        <span className="text-[10px] text-[#323334]/60 uppercase tracking-tighter">
                                            Market Analysis • {blog.readTime}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Predictive Intent CTA Loop */}
            <div className="mt-12 p-6 bg-[#1D4F9C] text-white rounded-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="relative z-10">
                    <h4 className="text-xl font-serif mb-2">Intent-Based Resource</h4>
                    <p className="text-white/80 text-sm font-light max-w-md">
                        {currentProject.status.toLowerCase().includes('launch') 
                            ? `Download the exclusive Investor's Priority Pack for ${currentProject.title} and secure early-bird benefits.`
                            : `Get the detailed 5-Year ROI Projection & Infrastructure Impact Report for the ${currentProject.location.split(',')[0]} corridor.`
                        }
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                    <button className="bg-[#C5A059] hover:bg-[#B38E48] text-[#FFFFFF] px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg whitespace-nowrap">
                        {currentProject.status.toLowerCase().includes('launch') ? 'Get Priority Access' : 'Download ROI Report'}
                    </button>
                    {currentProject.location.toLowerCase().includes('hinjewadi') && (
                        <Link 
                            href="/properties/2-bhk-flats-in-hinjewadi"
                            className="bg-white/10 hover:bg-white/20 border border-white/30 text-[#FFFFFF] px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all backdrop-blur-sm text-center"
                        >
                            Compare Local Prices
                        </Link>
                    )}
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#323334]/10 text-[9px] text-[#323334]/40 uppercase tracking-[0.2em] italic">
                Cross-linked by SP Research Desk for Link Equity Optimization
            </div>
        </section>
    );
}
