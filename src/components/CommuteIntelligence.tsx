'use client';

import React from 'react';
import { Car, Bike, Footprints, Building2, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Hub {
    name: string;
    distance: string;
    timeCar: string;
    timeBike: string;
    timeWalk?: string;
    type: 'IT Park' | 'Metro' | 'Mall' | 'School';
}

interface CommuteIntelligenceProps {
    projectName: string;
    hubs: Hub[];
}

export default function CommuteIntelligence({ projectName, hubs }: CommuteIntelligenceProps) {
    return (
        <section className="py-20 bg-white" id="commute-intelligence">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D4F9C]/10 border border-[#1D4F9C]/20 mb-6">
                            <Clock size={14} className="text-[#1D4F9C]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1D4F9C]">Commute Intelligence Matrix</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#323334] mb-6">
                            Unmatched Connectivity to <span className="text-[#1D4F9C]">Pune's Tech Core</span>
                        </h2>
                        <p className="text-[#323334]/60 text-lg leading-relaxed">
                            {projectName} is strategically positioned to minimize your daily commute. Experience the "Walk-to-Work" lifestyle with zero-latency access to major IT campuses and upcoming infrastructure.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-4 p-4 bg-[#EEF2F6] rounded-2xl border border-[#C5A059]/10">
                            <MapPin size={24} className="text-[#C5A059]" />
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-[#323334]/40 font-bold">Transit Context</p>
                                <p className="text-sm font-bold text-[#323334]">Walking Distance to Metro Line 3</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hubs.map((hub, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-6 rounded-3xl border border-[#EEF2F6] hover:border-[#C5A059]/30 hover:shadow-xl hover:shadow-[#C5A059]/5 transition-all duration-500 bg-white"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 rounded-2xl bg-[#EEF2F6] group-hover:bg-[#1D4F9C] group-hover:text-white transition-colors">
                                    <Building2 size={24} />
                                </div>
                                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">{hub.type}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-[#323334] mb-2">{hub.name}</h3>
                            <div className="flex items-center gap-2 text-[#323334]/40 text-sm mb-6">
                                <MapPin size={14} />
                                <span>{hub.distance} from Project Gate</span>
                            </div>

                            <div className="space-y-4 pt-6 border-t border-[#EEF2F6]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-[#323334]/60">
                                        <Car size={18} />
                                        <span className="text-xs">By Car</span>
                                    </div>
                                    <span className="text-sm font-bold text-[#323334]">{hub.timeCar}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-[#323334]/60">
                                        <Bike size={18} />
                                        <span className="text-xs">By Bike</span>
                                    </div>
                                    <span className="text-sm font-bold text-[#323334]">{hub.timeBike}</span>
                                </div>
                                {hub.timeWalk && (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-[#1D4F9C]">
                                            <Footprints size={18} />
                                            <span className="text-xs">Walking</span>
                                        </div>
                                        <span className="text-sm font-bold text-[#1D4F9C]">{hub.timeWalk}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#1D4F9C] to-[#0A2A5E] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h4 className="text-2xl font-serif mb-2">Transit Oriented Development (TOD) Impact</h4>
                            <p className="text-white/60 max-w-xl">
                                Properties within 1km of Metro stations in Pune IT corridors are projected to see a 15-20% capital appreciation premium over landlocked projects by 2027.
                            </p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-[#C5A059]">15%+</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/40">Appreciation</p>
                            </div>
                            <div className="h-10 w-px bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-[#C5A059]">07m</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/40">to Metro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
