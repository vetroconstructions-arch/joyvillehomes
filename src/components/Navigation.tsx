"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Menu, X, ChevronDown, MapPin } from "lucide-react";
import { projects } from "@/data/projects";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProjectsHovered, setIsProjectsHovered] = useState(false);
    const pathname = usePathname();

    // Check if the current page is the homepage (where transparent nav looks best before scroll)
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset' };
    }, [isMobileMenuOpen]);

    const navBackground = (isScrolled || !isHomePage)
        ? 'bg-[#EEF2F6]/95 backdrop-blur-2xl border-b border-[#1D4F9C]/50 shadow-[0_15px_40px_rgba(0,0,0,0.1)] py-4'
        : 'bg-transparent py-8';

    const textColor = (isScrolled || !isHomePage) ? 'text-[#323334] font-medium' : 'text-[#323334] font-medium';

    return (
        <>
            <nav
                className={`fixed w-full z-[100] transition-all duration-700 ease-out px-6 md:px-12 ${navBackground}`}
                onMouseLeave={() => setIsProjectsHovered(false)}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center relative">

                    {/* Logo & Branding */}
                    <Link href="/" className="flex flex-col z-20 focus:outline-none group">
                        <span className="text-2xl font-serif font-light tracking-widest text-[#1D4F9C] group-hover:text-[#323334] transition-colors duration-500">
                            JOYVILLE
                        </span>
                        <span className={`text-[10px] font-sans tracking-[0.4em] font-medium uppercase mt-1 transition-colors duration-500 ${(isScrolled || !isHomePage) ? 'text-[#323334] group-hover:text-[#1D4F9C]' : 'text-[#323334] group-hover:text-[#1D4F9C]'}`}>
                            Pune • Hinjewadi
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className={`hidden lg:flex items-center gap-12 text-xs tracking-[0.2em] uppercase font-light ${textColor}`}>
                        {/* Mega Menu Trigger */}
                        <div
                            className="relative h-full py-4 cursor-pointer flex items-center gap-1 group/trigger"
                            onMouseEnter={() => setIsProjectsHovered(true)}
                            onClick={() => setIsProjectsHovered(!isProjectsHovered)}
                        >
                            <Link href="/projects" className="hover:text-[#1D4F9C] transition-colors duration-300">Portfolios</Link>
                            <ChevronDown size={14} className={`transition-transform duration-300 ${isProjectsHovered ? 'rotate-180 text-[#1D4F9C]' : ''}`} />
                        </div>

                        <Link href="/amenities" className="hover:text-[#1D4F9C] hover:font-bold transition-all duration-300 py-4">Amenities</Link>
                        <Link href="/location" className="hover:text-[#1D4F9C] hover:font-bold transition-all duration-300 py-4">Location</Link>
                        <Link href="/#floor-plans" className="hover:text-[#1D4F9C] hover:font-bold transition-all duration-300 py-4">Floor Plans</Link>
                    </div>

                    {/* Enquire Button & Mobile Toggle */}
                    <div className="flex items-center gap-6 z-20">
                        <button aria-label="Enquire Now" className={`hidden sm:flex items-center gap-3 px-8 py-3 rounded-sm font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-500 group border ${(isScrolled || !isHomePage) ? 'bg-[#1D4F9C] text-[#FFFFFF] border-[#1D4F9C] hover:bg-transparent hover:text-[#1D4F9C]' : 'bg-[#1D4F9C] text-[#FFFFFF] border-[#1D4F9C] hover:bg-transparent hover:text-[#1D4F9C]'}`}>
                            <PhoneCall size={14} className="group-hover:animate-pulse" />
                            <span>Enquire Now</span>
                        </button>

                        <button
                            className={`lg:hidden flex items-center justify-center w-12 h-12 border rounded-sm transition-colors duration-300 ${(isScrolled || !isHomePage || isMobileMenuOpen) ? 'border-[#1D4F9C]/30 text-[#1D4F9C] hover:bg-[#1D4F9C] hover:text-[#FFFFFF]' : 'border-[#323334]/30 text-[#323334] hover:border-[#1D4F9C] hover:text-[#1D4F9C]'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                        </button>
                    </div>

                    {/* --- DESKTOP MEGA MENU OVERLAY --- */}
                    <AnimatePresence>
                        {isProjectsHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute top-[100%] left-0 w-full pt-2"
                            >
                                <div className="bg-[#FFFFFF] border border-[#1D4F9C]/20 shadow-[0_20px_50px_rgba(29,79,156,0.15)] rounded-sm overflow-hidden p-6 grid grid-cols-4 gap-4 relative">
                                    {projects.map((proj) => (
                                        <Link href={`/projects/${proj.slug}`} key={proj.id} className="group/dropdown overflow-hidden block relative border border-[#E0E5EC] hover:border-[#1D4F9C]/50 bg-[#FFFFFF] rounded-sm transition-all duration-300 hover:shadow-lg" onClick={() => setIsProjectsHovered(false)}>
                                            <div className="aspect-[4/3] relative overflow-hidden">
                                                <div className="absolute inset-0 bg-cover bg-center opacity-90 group-hover/dropdown:opacity-100 group-hover/dropdown:scale-105 transition-all duration-500" style={{ backgroundImage: `url(${proj.image})` }} />
                                            </div>
                                            <div className="p-4 bg-[#FFFFFF]">
                                                <div className="text-[#1D4F9C] text-[9px] uppercase tracking-[0.15em] font-medium mb-1 flex items-center gap-1.5"><MapPin size={10} /> {proj.location.split(',')[0]}</div>
                                                <h4 className="text-[#323334] font-serif text-sm font-medium">{proj.title}</h4>
                                            </div>
                                        </Link>
                                    ))}
                                    <div className="col-span-4 flex justify-end mt-4 pt-4 border-t border-[#1D4F9C]/30">
                                        <Link href="/projects" className="text-xs uppercase tracking-[0.2em] text-[#1D4F9C] hover:text-[#323334] font-medium flex items-center gap-2 group/all">
                                            View Full Portfolio <span className="w-6 h-[1px] bg-[#1D4F9C] group-hover/all:w-10 transition-all duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>

            {/* --- MOBILE FULL-SCREEN DRAWER --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[90] bg-[#FFFFFF] flex flex-col justify-center px-10"
                    >
                        {/* Drawer Background Pattern */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-10">
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-[#1D4F9C] text-xs tracking-[0.3em] uppercase font-light border-b border-[#1D4F9C]/30 pb-4">
                                Navigate
                            </motion.div>

                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                                <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="text-4xl sm:text-5xl font-serif text-[#323334] font-light hover:text-[#1D4F9C] transition-colors inline-block">Home</Link>
                            </motion.div>
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                                <Link onClick={() => setIsMobileMenuOpen(false)} href="/projects" className="text-4xl sm:text-5xl font-serif text-[#323334] font-light hover:text-[#1D4F9C] transition-colors inline-block">Portfolios</Link>
                            </motion.div>
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                                <Link onClick={() => setIsMobileMenuOpen(false)} href="/amenities" className="text-4xl sm:text-5xl font-serif text-[#323334] font-light hover:text-[#1D4F9C] transition-colors inline-block">Amenities</Link>
                            </motion.div>
                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
                                <Link onClick={() => setIsMobileMenuOpen(false)} href="/location" className="text-4xl sm:text-5xl font-serif text-[#323334] font-light hover:text-[#1D4F9C] transition-colors inline-block">Location</Link>
                            </motion.div>

                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10">
                                <button aria-label="Schedule a Call" className="w-full bg-[#1D4F9C] text-[#FFFFFF] uppercase tracking-[0.2em] text-xs font-bold py-5 shadow-[0_10px_30px_rgba(197,160,89,0.2)]">
                                    Schedule a Call
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
