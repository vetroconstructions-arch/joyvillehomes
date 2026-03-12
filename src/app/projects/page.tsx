"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

const ITEMS_PER_PAGE = 2; // Strict pagination constraint for elegant display

export default function ProjectsPortfolio() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Dynamic JSON-LD for the Portfolio
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["ItemList", "CollectionPage"],
                "@id": "https://www.joyville-homes.com/projects/#portfolio",
                "name": "Joyville Homes Pune Residential Projects",
                "description": "Explore Shapoorji Pallonji's premium portfolio of luxury residential projects across Pune, Hinjewadi, Hadapsar, and Bavdhan. Find luxury 2 & 3 BHK flats.",
                "url": "https://www.joyville-homes.com/projects",
                "publisher": {
                    "@id": "https://www.joyville-homes.com/#organization"
                },
                "itemListElement": projects.map((project, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "url": `https://www.joyville-homes.com/projects/${project.slug}`,
                    "name": project.title,
                    "description": project.type
                }))
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.joyville-homes.com/projects/#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.joyville-homes.com" },
                    { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.joyville-homes.com/projects" }
                ]
            },
            {
                "@type": "HowTo",
                "@id": "https://www.joyville-homes.com/projects/#booking-process",
                "name": "How to Book a Home at Joyville Pune",
                "description": "Follow these simple steps to secure your dream home at Shapoorji Pallonji Joyville in Pune.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "name": "Digital Inquiry",
                        "text": "Browse the Joyville Pune portfolio and fill out an inquiry form for your preferred project.",
                        "url": "https://www.joyville-homes.com/projects"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Expert Consultation",
                        "text": "Receive a detailed presentation and cost sheet from our authorized relationship managers.",
                        "url": "https://www.joyville-homes.com/projects"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Prioritized Site Visit",
                        "text": "Schedule a visit to the actual site or experience center for a walkthrough.",
                        "url": "https://www.joyville-homes.com/projects"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Selection & Booking",
                        "text": "Finalize your unit, submit KYC documents, and pay the booking amount to receive your allotment letter.",
                        "url": "https://www.joyville-homes.com/projects"
                    }
                ],
                "totalTime": "P3D",
                "publisher": { "@id": "https://www.joyville-homes.com/#organization" }
            }
        ]
    };

    return (
        <article className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 text-[#323334] selection:bg-[#1D4F9C] selection:text-[#FFFFFF]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <header className="max-w-7xl mx-auto px-6 mb-24 text-center">
                <div className="inline-flex items-center gap-4 text-[#1D4F9C] font-light text-xs tracking-[0.3em] uppercase mb-6">
                    <span className="w-8 h-[1px] bg-[#1D4F9C]" /> Pune Real Estate Portfolio <span className="w-8 h-[1px] bg-[#1D4F9C]" />
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-[#323334] font-light">
                    Joyville Pune <span className="text-[#1D4F9C] italic text-gradient">Projects</span>
                </h1>
                <p className="text-[#323334] text-lg max-w-3xl mx-auto font-light leading-relaxed">
                    Discover the definitive collection of Joyville Pune residential projects. From the IT hubs of Hinjewadi Phase 1 to Hadapsar, explore our premium 2 & 3 BHK flats crafted with the 150-year legacy of Shapoorji Pallonji Pune.
                </p>
            </header>

            <main className="max-w-5xl mx-auto px-6 space-y-16 mb-24">
                {currentProjects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.slug}`} className="group flex flex-col md:flex-row bg-[#FFFFFF] border border-[#C5A059]/30 shadow-lg hover:shadow-2xl overflow-hidden rounded-sm hover:border-[#C5A059]/80 transition-all duration-500 cursor-pointer block">
                        {/* Elegant Cinematic Image */}
                        <div className="md:w-5/12 relative aspect-[4/3] md:min-h-[300px] overflow-hidden bg-[#F8FAFC]">
                            <Image
                                src={project.image}
                                alt={`Shapoorji Pallonji ${project.title} - ${project.type} in ${project.location}`}
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={true}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/20 to-transparent pointer-events-none md:w-3/4" />
                            <div className="absolute top-6 left-6 flex gap-3 z-10">
                                <span className="px-4 py-1.5 bg-[#1D4F9C] text-[#FFFFFF] text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#1D4F9C]/30 rounded-sm">{project.status}</span>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="md:w-7/12 p-10 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-[#1D4F9C] text-xs font-light tracking-[0.2em] uppercase mb-4">
                                <MapPin size={12} /> {project.location}
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-serif mb-4 text-[#323334] font-light">{project.title}</h2>
                            <p className="text-xl text-[#1D4F9C] mb-6 font-serif italic text-gradient">{project.price}</p>

                            <p className="text-[#323334] font-light text-sm leading-relaxed mb-8 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-10 pb-10 border-b border-[#C5A059]/60">
                                {project.highlights.slice(0, 4).map((hl, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1D4F9C] mt-1.5 flex-shrink-0" />
                                        <span className="text-[#323334] text-xs font-light tracking-wide">{hl}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="inline-flex items-center gap-4 text-[#1D4F9C] font-semibold uppercase tracking-[0.2em] text-xs group-hover:text-[#1A1A1A] transition-colors self-start mt-auto">
                                View Project Details <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                        </div>
                    </Link>
                ))}
            </main>

            {/* Elegant Pagination System */}
            {totalPages > 1 && (
                <div className="max-w-5xl mx-auto px-6 flex justify-center items-center gap-6 pb-12">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="w-12 h-12 flex items-center justify-center border border-[#C5A059]/60 text-[#1D4F9C] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1D4F9C] hover:text-[#FFFFFF] transition-all duration-300 rounded-sm"
                        aria-label="Previous Page"
                    >
                        <ChevronLeft size={20} strokeWidth={1} />
                    </button>

                    <div className="flex gap-3 text-sm tracking-[0.2em] text-[#323334]">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                aria-label={`Go to page ${i + 1}`}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 rounded-sm
                                    ${currentPage === i + 1
                                        ? 'border-[#C5A059] text-[#FFFFFF] bg-[#1D4F9C] font-bold shadow-md'
                                        : 'border-[#C5A059]/60 hover:border-[#C5A059] hover:bg-[#1D4F9C]/5 text-[#1D4F9C] font-medium'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="w-12 h-12 flex items-center justify-center border border-[#C5A059]/60 text-[#1D4F9C] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1D4F9C] hover:text-[#FFFFFF] transition-all duration-300 rounded-sm"
                        aria-label="Next Page"
                    >
                        <ChevronRight size={20} strokeWidth={1} />
                    </button>
                </div>
            )}
        </article>
    );
}
