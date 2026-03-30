"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Grid3X3 } from 'lucide-react';

interface ImmersiveGalleryProps {
    images: string[];
    galleryItems?: { url: string; caption: string; alt: string; category?: string }[];
    projectName: string;
}

export default function ImmersiveGallery({ images, galleryItems, projectName }: ImmersiveGalleryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('All');

    // Manage body scroll lock via effect
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // Build unified image list
    const allItems = galleryItems && galleryItems.length > 0
        ? galleryItems
        : images.map((url, idx) => ({ url, caption: `${projectName} View ${idx + 1}`, alt: `${projectName} - View ${idx + 1}`, category: 'Exterior' }));

    const categories = ['All', ...Array.from(new Set(allItems.map(i => i.category || 'Exterior')))];
    const filteredItems = activeCategory === 'All' ? allItems : allItems.filter(i => (i.category || 'Exterior') === activeCategory);

    const openLightbox = (idx: number) => {
        setCurrentIndex(idx);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const navigate = (dir: 1 | -1) => {
        setCurrentIndex(prev => (prev + dir + filteredItems.length) % filteredItems.length);
    };

    return (
        <section id="gallery" className="scroll-mt-32">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#1D4F9C]" />
                    <h2 className="text-3xl font-serif text-[#323334] font-light">Project Gallery — {projectName}</h2>
                </div>
                <div className="hidden md:flex items-center gap-1 text-[9px] uppercase tracking-widest text-[#323334]/50">
                    <Grid3X3 size={12} /> {allItems.length} Images
                </div>
            </div>

            {/* Category Filters */}
            {categories.length > 2 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all ${activeCategory === cat
                                ? 'bg-[#1D4F9C] text-[#FFFFFF] border-[#1D4F9C]'
                                : 'bg-[#FFFFFF] text-[#323334]/60 border-[#C5A059]/20 hover:border-[#1D4F9C]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="aspect-square relative overflow-hidden rounded-sm group cursor-pointer"
                        onClick={() => openLightbox(idx)}
                    >
                        <Image
                            src={item.url}
                            alt={item.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#323334]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                            <span className="text-[#FFFFFF] text-[10px] uppercase tracking-widest font-medium">{item.caption}</span>
                            <Maximize2 size={16} className="text-[#FFFFFF]" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close */}
                        <button onClick={closeLightbox} className="absolute top-6 right-6 text-[#FFFFFF]/60 hover:text-[#FFFFFF] transition-colors z-10" aria-label="Close gallery">
                            <X size={28} />
                        </button>

                        {/* Counter */}
                        <div className="absolute top-6 left-6 text-[#FFFFFF]/40 text-xs tracking-widest uppercase">
                            {currentIndex + 1} / {filteredItems.length}
                        </div>

                        {/* Nav */}
                        <button
                            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                            className="absolute left-4 md:left-8 text-[#FFFFFF]/40 hover:text-[#FFFFFF] transition-colors p-2"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={36} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); navigate(1); }}
                            className="absolute right-4 md:right-8 text-[#FFFFFF]/40 hover:text-[#FFFFFF] transition-colors p-2"
                            aria-label="Next image"
                        >
                            <ChevronRight size={36} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-[90vw] h-[75vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={filteredItems[currentIndex].url}
                                alt={filteredItems[currentIndex].alt}
                                fill
                                className="object-contain"
                                sizes="90vw"
                                priority
                            />
                        </motion.div>

                        {/* Caption */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                            <p className="text-[#FFFFFF]/80 text-sm font-light">{filteredItems[currentIndex].caption}</p>
                            {filteredItems[currentIndex].category && (
                                <p className="text-[#C5A059] text-[9px] uppercase tracking-widest mt-1">{filteredItems[currentIndex].category}</p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
