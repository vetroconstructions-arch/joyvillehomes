'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Search, ZoomIn, ZoomOut, Maximize } from 'lucide-react';

interface InteractiveFloorPlanProps {
    src: string;
    alt: string;
    className?: string;
}

export default function InteractiveFloorPlan({ src, alt, className = "" }: InteractiveFloorPlanProps) {
    const [isInteracting, setIsInteracting] = useState(false);

    return (
        <div 
            className={`relative w-full h-full group ${className}`}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
        >
            <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={4}
                centerZoomedOut={true}
                wheel={{ step: 0.1 }}
                pinch={{ step: 5 }}
            >
                {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                        <TransformComponent wrapperClass="!w-full !h-full cursor-grab active:cursor-grabbing" contentClass="!w-full !h-full">
                            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
                                <Image 
                                    src={src} 
                                    fill 
                                    alt={alt} 
                                    className="object-contain" 
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </TransformComponent>

                        {/* Subtle Premium UI Controls that appear on interaction */}
                        <div className={`absolute bottom-4 right-4 flex gap-2 transition-opacity duration-500 ${isInteracting ? 'opacity-100' : 'opacity-0'}`}>
                            <button 
                                onClick={() => zoomIn()} 
                                className="w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-md border border-[#C5A059]/30 text-[#1D4F9C] rounded-full hover:bg-white transition-all shadow-sm"
                                aria-label="Zoom In"
                            >
                                <ZoomIn size={14} />
                            </button>
                            <button 
                                onClick={() => zoomOut()} 
                                className="w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-md border border-[#C5A059]/30 text-[#1D4F9C] rounded-full hover:bg-white transition-all shadow-sm"
                                aria-label="Zoom Out"
                            >
                                <ZoomOut size={14} />
                            </button>
                            <button 
                                onClick={() => resetTransform()} 
                                className="w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-md border border-[#C5A059]/30 text-[#1D4F9C] rounded-full hover:bg-white transition-all shadow-sm"
                                aria-label="Reset Zoom"
                            >
                                <Maximize size={14} />
                            </button>
                        </div>
                    </>
                )}
            </TransformWrapper>

            {/* Invisible Hitbox/Hint before interaction */}
            <div className={`absolute top-4 left-4 pointer-events-none transition-opacity duration-700 ${isInteracting ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#C5A059]/20 shadow-sm">
                    <Search size={12} className="text-[#1D4F9C]" />
                    <span className="text-[9px] uppercase tracking-widest text-[#1D4F9C] font-semibold">Interactive</span>
                </div>
            </div>
        </div>
    );
}
