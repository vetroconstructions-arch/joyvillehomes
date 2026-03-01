"use client";

import { Star, ThumbsUp, MapPin } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';

export default function ReviewWidget() {
    return (
        <section className="py-24 bg-[#FFFFFF] border-y border-[#C5A059]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1D4F9C]/5 blur-[100px] pointer-events-none rounded-bl-full" />
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-3 text-[#1D4F9C] font-semibold text-[10px] tracking-[0.3em] uppercase mb-6">
                        <ThumbsUp size={14} /> Shapoorji Pallonji Legacy
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif text-[#323334] font-light mb-6">
                        Trusted by thousands of families across Pune.
                    </h2>
                    <p className="text-[#323334]/80 font-light leading-relaxed mb-8 max-w-lg">
                        Our commitment to engineering excellence and timely delivery has made Joyville Pune&apos;s most trusted residential brand. Are you a proud homeowner or did you recently visit our experiential center?
                    </p>

                    <div className="flex items-center gap-2 mb-8">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="text-[#1D4F9C] fill-[#1D4F9C]" size={20} />
                        ))}
                        <span className="ml-4 text-[#323334] font-medium text-sm">4.9/5 Average Rating</span>
                    </div>
                </div>

                <div className="md:w-1/2 w-full">
                    <div className="bg-[#EEF2F6] p-8 md:p-12 rounded-sm border border-[#C5A059]/30 shadow-2xl relative">
                        <div className="absolute -top-6 -right-6 bg-[#1D4F9C] text-[#FFFFFF] w-24 h-24 rounded-full flex items-center justify-center text-center p-2 shadow-lg transform rotate-12">
                            <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Leave a<br />Review</span>
                        </div>

                        <h3 className="text-2xl font-serif text-[#323334] mb-4">Share Your Experience</h3>
                        <p className="text-[#323334]/70 font-light text-sm mb-8">
                            Your feedback helps us continuously elevate the Shapoorji Pallonji living experience. Select your project to leave a review on Google.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="#"
                                onClick={() => sendGAEvent('event', 'leave_review_click', { project: 'Joyville Sensorium' })}
                                className="flex items-center justify-between bg-[#FFFFFF] p-4 rounded-sm border border-[#C5A059]/20 hover:border-[#C5A059] hover:shadow-md transition-all group"
                                aria-label="Leave a review for Joyville Sensorium on Google"
                            >
                                <span className="flex items-center gap-3 text-[#323334] font-medium text-sm">
                                    <MapPin size={16} className="text-[#1D4F9C]" /> Joyville Sensorium, Hinjewadi
                                </span>
                                <span className="text-[10px] tracking-widest uppercase font-bold text-[#1D4F9C] opacity-0 group-hover:opacity-100 transition-opacity">Review</span>
                            </a>
                            <a
                                href="#"
                                onClick={() => sendGAEvent('event', 'leave_review_click', { project: 'Joyville Hadapsar Annexe' })}
                                className="flex items-center justify-between bg-[#FFFFFF] p-4 rounded-sm border border-[#C5A059]/20 hover:border-[#C5A059] hover:shadow-md transition-all group"
                                aria-label="Leave a review for Joyville Hadapsar Annexe on Google"
                            >
                                <span className="flex items-center gap-3 text-[#323334] font-medium text-sm">
                                    <MapPin size={16} className="text-[#1D4F9C]" /> Joyville Hadapsar Annexe
                                </span>
                                <span className="text-[10px] tracking-widest uppercase font-bold text-[#1D4F9C] opacity-0 group-hover:opacity-100 transition-opacity">Review</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
