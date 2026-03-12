"use client";

import { motion } from 'framer-motion';
import { FileText, Download, Briefcase, ChevronRight, BarChart } from 'lucide-react';

const reports = [
    {
        title: "Pune Residential Market ROI Report 2026",
        slug: "pune-roi-2026",
        size: "2.4 MB",
        type: "PDF Portfolio",
        category: "Market Analysis",
        description: "An institutional-grade analysis of capital appreciation and rental yield trajectories across 12 Pune micro-markets."
    },
    {
        title: "Hinjewadi IT Corridor Infrastructure Whitepaper",
        slug: "hinjewadi-infra-whitepaper",
        size: "1.8 MB",
        type: "Technical Report",
        category: "Infrastructure",
        description: "Detailed impact study of Pune Metro Line 3 and Ring Road on Phase 1 & 2 property valuations."
    },
    {
        title: "Pune Q1 2026 Micro-Market Performance Report",
        slug: "pune-q1-2026-micro-market-real-estate-report",
        size: "3.1 MB",
        type: "Quarterly Bulletin",
        category: "Market Report",
        description: "Deep dive into absorption rates, price premiums, and IT corridor demand surges for the first quarter of 2026."
    },
    {
        title: "Sustainability Economics: EDGE Certification Impact",
        slug: "edge-certification-impact-on-property-value-pune",
        size: "1.2 MB",
        type: "Whitepaper",
        category: "ESG & Sustainability",
        description: "Exploring the financial correlation between green building certifications and long-term capital appreciation."
    }
];

export default function ResearchHub() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold block mb-4">Institutional Desk</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#323334] font-light">Research & Intelligence</h2>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1D4F9C] border-b border-[#1D4F9C]/20 pb-2">
                        <BarChart size={16} /> Data-Backed Compliance
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {reports.map((report, idx) => (
                        <motion.div 
                            key={report.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-[#EEF2F6] p-8 border border-[#C5A059]/10 hover:border-[#C5A059]/40 transition-all"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white rounded-sm text-[#1D4F9C]">
                                    <FileText size={24} />
                                </div>
                                <span className="text-[10px] font-mono text-[#323334]/40">{report.size}</span>
                            </div>

                            <span className="text-[9px] uppercase tracking-widest text-[#1D4F9C] font-bold block mb-2">{report.category}</span>
                            <h3 className="text-2xl font-serif text-[#323334] mb-4 group-hover:text-[#1D4F9C] transition-colors">{report.title}</h3>
                            <p className="text-sm font-light text-[#323334]/70 leading-relaxed mb-8">
                                {report.description}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-[#C5A059]/10">
                                <span className="text-[10px] font-bold text-[#323334]/40 uppercase tracking-widest">{report.type}</span>
                                <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#1D4F9C] transition-colors group/btn">
                                    Request Access <Download size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                                </button>
                            </div>

                            {/* Schema.org Meta */}
                            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "DigitalDocument",
                                "name": report.title,
                                "description": report.description,
                                "educationalLevel": "Professional",
                                "fileFormat": "application/pdf"
                            })}} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-[#1D4F9C] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <Briefcase size={32} className="text-[#C5A059]" />
                        <div>
                            <h4 className="text-lg font-serif">Corporate & Institutional Sales</h4>
                            <p className="text-xs text-white/70 font-light mt-1 uppercase tracking-widest">Global Desk for HNI & Real Estate Funds</p>
                        </div>
                    </div>
                    <button className="px-10 py-4 bg-[#C5A059] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1D4F9C] transition-all flex items-center gap-3">
                        Contact Institutional Team <ChevronRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
}
