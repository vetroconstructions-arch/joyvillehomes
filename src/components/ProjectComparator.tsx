"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight, MapPin, CheckCircle2, BarChart3 } from 'lucide-react';
import { Project, projects } from '@/data/projects';

interface ProjectComparatorProps {
    currentProject: Project;
}

export default function ProjectComparator({ currentProject }: ProjectComparatorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [compareProject, setCompareProject] = useState<Project | null>(null);
    const [showPicker, setShowPicker] = useState(false);

    const otherProjects = projects.filter(p => p.id !== currentProject.id);

    const selectProject = (p: Project) => {
        setCompareProject(p);
        setShowPicker(false);
    };

    const renderMetricRow = (label: string, valA: string, valB: string, highlight?: 'a' | 'b' | null) => (
        <div className="grid grid-cols-3 border-b border-[#EEF2F6] last:border-0">
            <div className="py-4 px-4 text-[10px] uppercase tracking-widest text-[#323334]/50 font-medium flex items-center">{label}</div>
            <div className={`py-4 px-4 text-sm text-center font-light ${highlight === 'a' ? 'text-[#1D4F9C] font-medium bg-[#1D4F9C]/5' : 'text-[#323334]'}`}>{valA}</div>
            <div className={`py-4 px-4 text-sm text-center font-light ${highlight === 'b' ? 'text-[#1D4F9C] font-medium bg-[#1D4F9C]/5' : 'text-[#323334]'}`}>{valB}</div>
        </div>
    );

    const getHighlight = (a: number, b: number): 'a' | 'b' | null => {
        if (a > b) return 'a';
        if (b > a) return 'b';
        return null;
    };

    return (
        <section className="mt-16 pt-12 border-t border-[#C5A059]/10">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <BarChart3 size={18} className="text-[#1D4F9C]" />
                    <h3 className="text-xl font-serif text-[#323334] font-light">Compare Projects</h3>
                </div>
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-2 px-5 py-2.5 border border-[#1D4F9C] text-[#1D4F9C] text-[10px] uppercase tracking-widest font-bold hover:bg-[#1D4F9C] hover:text-[#FFFFFF] transition-all"
                    >
                        <Plus size={14} /> Compare Side-by-Side
                    </button>
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        {/* Project Selector */}
                        {!compareProject && (
                            <div className="mb-8">
                                <p className="text-sm text-[#323334]/60 font-light mb-4">Select a project to compare with <span className="font-medium text-[#1D4F9C]">{currentProject.title}</span>:</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {otherProjects.map(p => (
                                        <button
                                            key={p.id}
                                            onClick={() => selectProject(p)}
                                            className="flex items-center gap-3 p-3 border border-[#C5A059]/20 bg-[#FFFFFF] hover:border-[#1D4F9C] transition-all text-left group"
                                        >
                                            <div className="relative w-12 h-12 rounded-sm overflow-hidden flex-shrink-0">
                                                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="48px" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-medium text-[#323334] group-hover:text-[#1D4F9C] transition-colors">{p.title}</div>
                                                <div className="text-[9px] text-[#323334]/40 uppercase tracking-widest">{p.location.split(',')[0]}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Comparison Table */}
                        {compareProject && (
                            <div className="bg-[#FFFFFF] border border-[#C5A059]/20 overflow-hidden">
                                {/* Header */}
                                <div className="grid grid-cols-3 bg-[#EEF2F6] border-b border-[#C5A059]/20">
                                    <div className="py-4 px-4 text-[10px] uppercase tracking-widest text-[#323334]/50 font-bold">Metric</div>
                                    <div className="py-4 px-4 text-center">
                                        <Link href={`/projects/${currentProject.slug}`} className="text-sm font-serif text-[#1D4F9C] hover:underline">{currentProject.title}</Link>
                                        <div className="text-[9px] text-[#323334]/40 flex items-center justify-center gap-1 mt-1"><MapPin size={8} />{currentProject.location.split(',')[0]}</div>
                                    </div>
                                    <div className="py-4 px-4 text-center relative">
                                        <Link href={`/projects/${compareProject.slug}`} className="text-sm font-serif text-[#1D4F9C] hover:underline">{compareProject.title}</Link>
                                        <div className="text-[9px] text-[#323334]/40 flex items-center justify-center gap-1 mt-1"><MapPin size={8} />{compareProject.location.split(',')[0]}</div>
                                        <button onClick={() => { setCompareProject(null); setShowPicker(true); }} className="absolute top-2 right-2 text-[#323334]/30 hover:text-red-500 transition-colors" aria-label="Change project">
                                            <X size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* Metrics */}
                                {renderMetricRow('Starting Price', currentProject.price, compareProject.price)}
                                {renderMetricRow('Configuration', currentProject.type, compareProject.type)}
                                {renderMetricRow('Status', currentProject.status, compareProject.status)}
                                {renderMetricRow('Location', currentProject.location, compareProject.location)}
                                {renderMetricRow(
                                    'Metro Score',
                                    `${currentProject.infrastructureScores.metro}/10`,
                                    `${compareProject.infrastructureScores.metro}/10`,
                                    getHighlight(currentProject.infrastructureScores.metro, compareProject.infrastructureScores.metro)
                                )}
                                {renderMetricRow(
                                    'IT Hub Score',
                                    `${currentProject.infrastructureScores.itHub}/10`,
                                    `${compareProject.infrastructureScores.itHub}/10`,
                                    getHighlight(currentProject.infrastructureScores.itHub, compareProject.infrastructureScores.itHub)
                                )}
                                {renderMetricRow(
                                    'Ring Road',
                                    `${currentProject.infrastructureScores.ringRoad}/10`,
                                    `${compareProject.infrastructureScores.ringRoad}/10`,
                                    getHighlight(currentProject.infrastructureScores.ringRoad, compareProject.infrastructureScores.ringRoad)
                                )}
                                {currentProject.priceTrend && compareProject.priceTrend && renderMetricRow(
                                    'YoY Growth',
                                    currentProject.priceTrend.yoyGrowth,
                                    compareProject.priceTrend.yoyGrowth
                                )}
                                {renderMetricRow('RERA', 
                                    Array.isArray(currentProject.reraNumber) ? currentProject.reraNumber[0] : currentProject.reraNumber,
                                    Array.isArray(compareProject.reraNumber) ? compareProject.reraNumber[0] : compareProject.reraNumber
                                )}
                                {renderMetricRow(
                                    'Expert Rating',
                                    currentProject.expertReview ? `${currentProject.expertReview.rating}/5` : 'N/A',
                                    compareProject.expertReview ? `${compareProject.expertReview.rating}/5` : 'N/A',
                                    currentProject.expertReview && compareProject.expertReview
                                        ? getHighlight(currentProject.expertReview.rating, compareProject.expertReview.rating)
                                        : null
                                )}

                                {/* Footer */}
                                <div className="grid grid-cols-3 bg-[#EEF2F6]/50 border-t border-[#C5A059]/20">
                                    <div className="py-4 px-4" />
                                    <div className="py-4 px-4 text-center">
                                        <Link href={`/projects/${currentProject.slug}`} className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#1D4F9C] font-bold hover:underline">
                                            <CheckCircle2 size={12} /> View Details <ArrowRight size={10} />
                                        </Link>
                                    </div>
                                    <div className="py-4 px-4 text-center">
                                        <Link href={`/projects/${compareProject.slug}`} className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#1D4F9C] font-bold hover:underline">
                                            <CheckCircle2 size={12} /> View Details <ArrowRight size={10} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => { setIsOpen(false); setCompareProject(null); }}
                                className="text-[10px] uppercase tracking-widest text-[#323334]/40 hover:text-[#323334] transition-colors"
                            >
                                Close Comparison
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
