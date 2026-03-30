"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, CalendarCheck, MapPin, TrendingUp, Users } from 'lucide-react';

interface ActivityItem {
    icon: React.ReactNode;
    text: string;
    accent: string;
}

export default function LiveActivityFeed() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const cities = ['Mumbai', 'Bangalore', 'Hyderabad', 'Delhi', 'Dubai', 'New Jersey', 'London', 'Singapore', 'Pune', 'Chennai'];
    const projects = ['Joyville Sensorium', 'Joyville Vyomora', 'Hadapsar Annexe', 'Vanaha Golfland', 'Skyluxe Edition', 'Celestia'];

    const generateActivities = useCallback((): ActivityItem[] => {
        const viewerCount = Math.floor(Math.random() * 18) + 5;
        const visitCount = Math.floor(Math.random() * 6) + 1;
        const enquiryCity = cities[Math.floor(Math.random() * cities.length)];
        const enquiryProject = projects[Math.floor(Math.random() * projects.length)];
        const minutesAgo = Math.floor(Math.random() * 12) + 1;

        return [
            {
                icon: <Eye size={14} />,
                text: `${viewerCount} people are viewing projects right now`,
                accent: 'text-[#1D4F9C]'
            },
            {
                icon: <CalendarCheck size={14} />,
                text: `${visitCount} site visits booked for ${enquiryProject} today`,
                accent: 'text-[#1D4F9C]'
            },
            {
                icon: <MapPin size={14} />,
                text: `Enquiry received from ${enquiryCity} ${minutesAgo} min ago`,
                accent: 'text-[#1D4F9C]'
            },
            {
                icon: <TrendingUp size={14} />,
                text: `Hinjewadi prices up 13.2% YoY — demand surge active`,
                accent: 'text-[#1D4F9C]'
            },
            {
                icon: <Users size={14} />,
                text: `${Math.floor(Math.random() * 40) + 20} families chose Joyville this month`,
                accent: 'text-[#1D4F9C]'
            }
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [activities, setActivities] = useState<ActivityItem[]>(generateActivities());

    useEffect(() => {
        // Delay initial appearance by 3 seconds for non-intrusive UX
        const showTimer = setTimeout(() => setIsVisible(true), 3000);
        return () => clearTimeout(showTimer);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                const next = (prev + 1) % activities.length;
                // Regenerate activities after a full cycle
                if (next === 0) {
                    setActivities(generateActivities());
                }
                return next;
            });
        }, 4500);

        return () => clearInterval(interval);
    }, [isVisible, activities.length, generateActivities]);

    if (!isVisible) return null;

    const current = activities[currentIndex];

    return (
        <div className="fixed bottom-6 left-6 z-40 max-w-xs">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-[#FFFFFF] border border-[#C5A059]/20 shadow-[0_8px_30px_rgba(29,79,156,0.12)] px-5 py-4 flex items-center gap-3 group cursor-default"
                >
                    {/* Pulse indicator */}
                    <div className="relative flex-shrink-0">
                        <span className="absolute -top-0.5 -left-0.5 w-3 h-3 rounded-full bg-green-400/40 animate-ping" />
                        <span className="relative w-2 h-2 rounded-full bg-green-500 block" />
                    </div>

                    <div className={`flex-shrink-0 ${current.accent}`}>
                        {current.icon}
                    </div>

                    <p className="text-[#323334] text-[11px] font-light leading-snug">
                        {current.text}
                    </p>

                    {/* Dismiss */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="flex-shrink-0 text-[#323334]/30 hover:text-[#323334] text-xs ml-1 transition-colors"
                        aria-label="Dismiss activity feed"
                    >
                        ×
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
