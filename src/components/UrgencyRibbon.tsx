"use client";

import { Clock, AlertTriangle, Home, Train } from 'lucide-react';
import { motion } from 'framer-motion';

interface UrgencyRibbonProps {
    projectName: string;
    status: string;
    constructionUpdate?: {
        percentage: number;
        statusText: string;
        lastUpdated: string;
    };
    priceTrend?: {
        yoyGrowth: string;
        currentAvgPrice: string;
    };
    infrastructureScores?: {
        metro: number;
        ringRoad: number;
        itHub: number;
    };
}

export default function UrgencyRibbon({ projectName, status, constructionUpdate, priceTrend, infrastructureScores }: UrgencyRibbonProps) {
    const signals: { icon: React.ReactNode; text: string; type: 'urgent' | 'info' | 'catalyst' }[] = [];

    // Inventory scarcity signal
    if (status.toLowerCase().includes('ready') || status.toLowerCase().includes('possession')) {
        signals.push({
            icon: <Home size={14} />,
            text: `Limited ready-to-move units available at ${projectName}. Immediate possession.`,
            type: 'urgent'
        });
    } else if (constructionUpdate && constructionUpdate.percentage >= 70) {
        signals.push({
            icon: <Home size={14} />,
            text: `${constructionUpdate.percentage}% construction complete — final units releasing soon.`,
            type: 'urgent'
        });
    }

    // Price revision signal
    if (priceTrend) {
        const growth = parseFloat(priceTrend.yoyGrowth.replace(/[^0-9.-]/g, ''));
        if (growth >= 10) {
            signals.push({
                icon: <AlertTriangle size={14} />,
                text: `${priceTrend.yoyGrowth} annual appreciation. Next price revision expected Q2 2026.`,
                type: 'urgent'
            });
        }
    }

    // Infrastructure catalyst signal
    if (infrastructureScores) {
        if (infrastructureScores.metro >= 8) {
            signals.push({
                icon: <Train size={14} />,
                text: `Metro Line 3 terminus near ${projectName} — projected 14% post-completion appreciation.`,
                type: 'catalyst'
            });
        }
        if (infrastructureScores.ringRoad >= 9) {
            signals.push({
                icon: <Train size={14} />,
                text: `Pune Ring Road access within 2 km — infrastructure-led growth corridor.`,
                type: 'catalyst'
            });
        }
    }

    // Construction milestone signal
    if (constructionUpdate) {
        signals.push({
            icon: <Clock size={14} />,
            text: `Construction Status: ${constructionUpdate.statusText} (Updated ${constructionUpdate.lastUpdated})`,
            type: 'info'
        });
    }

    if (signals.length === 0) return null;

    const typeStyles = {
        urgent: 'bg-red-50 border-red-200 text-red-700',
        info: 'bg-[#EEF2F6] border-[#1D4F9C]/20 text-[#1D4F9C]',
        catalyst: 'bg-amber-50 border-amber-200 text-amber-700'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3 mb-8"
        >
            {signals.slice(0, 2).map((signal, idx) => (
                <div
                    key={idx}
                    className={`flex items-center gap-3 px-5 py-3 border text-[11px] font-medium tracking-wide ${typeStyles[signal.type]}`}
                >
                    <span className="flex-shrink-0">{signal.icon}</span>
                    <span>{signal.text}</span>
                    {signal.type === 'urgent' && (
                        <span className="ml-auto flex-shrink-0 w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    )}
                </div>
            ))}
        </motion.div>
    );
}
