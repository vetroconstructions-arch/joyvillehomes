import Link from 'next/link';
import { Building2, MapPin, ArrowRight } from 'lucide-react';
import { getProjectBySlug } from '@/data/projects';
import { localities } from '@/data/localities';

interface DiscussedEntitiesProps {
    projectSlugs?: string[];
    localitySlugs?: string[];
}

export default function DiscussedEntities({ projectSlugs = [], localitySlugs = [] }: DiscussedEntitiesProps) {
    if (projectSlugs.length === 0 && localitySlugs.length === 0) return null;

    const discussedProjects = projectSlugs.map(slug => getProjectBySlug(slug)).filter(Boolean);
    const discussedLocalities = localitySlugs.map(slug => localities.find(l => l.slug === slug)).filter(Boolean);

    return (
        <section className="mt-16 py-12 border-t border-[#C5A059]/20">
            <h3 className="text-xl font-serif text-[#1D4F9C] mb-8 uppercase tracking-widest text-center">
                Discussed in this Article
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Projects Column */}
                {discussedProjects.length > 0 && (
                    <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#C5A059] mb-4">
                            <Building2 size={14} /> Featured Portfolios
                        </h4>
                        {discussedProjects.map((project: any) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="flex items-center justify-between p-4 bg-[#F9FBFF] border border-[#C5A059]/10 rounded-sm hover:border-[#C5A059]/50 transition-all group"
                            >
                                <div>
                                    <h5 className="text-sm font-semibold text-[#323334] group-hover:text-[#1D4F9C] transition-colors">{project.title}</h5>
                                    <p className="text-[10px] text-[#323334]/60 uppercase tracking-wider">{project.location}</p>
                                </div>
                                <ArrowRight size={16} className="text-[#C5A059] transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ))}
                    </div>
                )}

                {/* Localities Column */}
                {discussedLocalities.length > 0 && (
                    <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#C5A059] mb-4">
                            <MapPin size={14} /> Micro-Market Insights
                        </h4>
                        {discussedLocalities.map((loc: any) => (
                            <Link
                                key={loc.slug}
                                href={`/locality/${loc.slug}`}
                                className="flex items-center justify-between p-4 bg-[#F9FBFF] border border-[#C5A059]/10 rounded-sm hover:border-[#C5A059]/50 transition-all group"
                            >
                                <div>
                                    <h5 className="text-sm font-semibold text-[#323334] group-hover:text-[#1D4F9C] transition-colors">{loc.name} Guide</h5>
                                    <p className="text-[10px] text-[#323334]/60 uppercase tracking-wider">Property Trends & ROI</p>
                                </div>
                                <ArrowRight size={16} className="text-[#C5A059] transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
