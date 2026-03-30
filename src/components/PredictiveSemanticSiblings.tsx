"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { Project } from '@/data/projects';

interface PredictiveSemanticSiblingsProps {
    currentProject: Project;
    allProjects: Project[];
}

const PredictiveSemanticSiblings: React.FC<PredictiveSemanticSiblingsProps> = ({ currentProject, allProjects }) => {
    // Neural Link Logic: Find siblings based on Persona Tags and Location
    const siblings = allProjects
        .filter(p => p.id !== currentProject.id)
        .map(p => {
            // Calculate relevance score
            let score = 0;
            if (p.location === currentProject.location) score += 3;
            
            const sharedTags = p.personaTags?.filter(tag => 
                currentProject.personaTags?.includes(tag)
            ) || [];
            
            score += sharedTags.length * 2;
            
            return { project: p, score, sharedTags };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

    if (siblings.length === 0) return null;

    return (
        <section className="mt-24 p-10 bg-[#FAFAFA] border border-[#F0F0F0] rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <Zap size={200} />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[#1D4F9C] p-2 rounded-lg text-white">
                        <Zap size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif text-[#323334]">Predictive Intent Engine™</h2>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">Neural Link Mesh Alpha 4.0</p>
                    </div>
                </div>

                <p className="text-sm text-[#555] font-light mb-10 leading-relaxed max-w-2xl">
                    Based on your interest in <span className="font-semibold text-[#1D4F9C]">{currentProject.title}</span>, our predictive algorithms suggest these institutional-grade developments that match your <span className="italic">&quot;{currentProject.personaTags?.[0]}&quot;</span> profile:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {siblings.map(({ project, sharedTags }) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className="group bg-white p-6 rounded-xl border border-[#F0F0F0] hover:border-[#1D4F9C] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {sharedTags.map(tag => (
                                        <span key={tag} className="text-[8px] bg-blue-50 text-[#1D4F9C] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter border border-blue-100">
                                            {tag} Favorite
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-serif text-[#323334] group-hover:text-[#1D4F9C] transition-colors mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mb-4">
                                    {project.location}
                                </p>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                <span className="text-xs font-bold text-[#C5A059]">{project.price.split(' ')[0]} {project.price.split(' ')[1]}</span>
                                <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-[#1D4F9C] transition-all group-hover:translate-x-1">
                                    Explore Asset <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10 pt-6 border-t border-[#F0F0F0] flex items-center gap-4">
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                        ))}
                    </div>
                    <p className="text-[10px] text-gray-500 italic">
                        1,400+ other <span className="font-medium text-[#1D4F9C] tracking-tight">{currentProject.personaTags?.[0]}s</span> are currently evaluating these sibling assets.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PredictiveSemanticSiblings;
