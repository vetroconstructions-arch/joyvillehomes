'use client';

import React from 'react';
import { Activity, CheckCircle2, AlertCircle, Clock, Zap } from 'lucide-react';

interface IndexingStatusProps {
    lastRun: string;
    totalUrls: number;
    successCount: number;
    failCount: number;
}

export default function IndexingStatus({ lastRun, totalUrls, successCount, failCount }: IndexingStatusProps) {
    const successRate = totalUrls > 0 ? (successCount / totalUrls) * 100 : 0;
    
    return (
        <div className="bg-[#EEF2F6] border border-[#1D4F9C]/10 rounded-2xl p-6 shadow-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <Zap size={120} className="text-[#1D4F9C]" />
            </div>
            
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#1D4F9C] flex items-center justify-center text-white">
                        <Activity size={20} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-[#323334]">Google Indexing Automation</h3>
                        <p className="text-[10px] text-[#323334]/60 uppercase tracking-widest">Sovereign Bridge v3.0</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 border border-green-500/20">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">System Active</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl border border-[#1D4F9C]/5">
                    <p className="text-[10px] text-[#323334]/40 uppercase tracking-wider mb-1">Total URLs</p>
                    <p className="text-2xl font-serif text-[#1D4F9C]">{totalUrls}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#1D4F9C]/5">
                    <p className="text-[10px] text-green-600/60 uppercase tracking-wider mb-1">Success</p>
                    <p className="text-2xl font-serif text-green-600">{successCount}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#1D4F9C]/5">
                    <p className="text-[10px] text-red-600/60 uppercase tracking-wider mb-1">Errors</p>
                    <p className="text-2xl font-serif text-red-600">{failCount}</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="w-full bg-white rounded-full h-1.5 overflow-hidden border border-[#1D4F9C]/5">
                    <div 
                        className="bg-gradient-to-r from-[#1D4F9C] to-[#C5A059] h-full transition-all duration-1000" 
                        style={{ width: `${successRate}%` }}
                    ></div>
                </div>
                
                <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2 text-[#323334]/60">
                        <Clock size={12} />
                        <span>Last Sweep: {new Date(lastRun).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-[#1D4F9C]">
                        <span>{successRate.toFixed(1)}% Health</span>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1D4F9C]/5 flex items-center gap-2">
                <AlertCircle size={12} className="text-[#1D4F9C]/40" />
                <p className="text-[9px] text-[#323334]/40 leading-tight">
                    Programmatic indexing triggers are automated for all project, blog, and locality clusters. Quota rotation is active via Sovereign Service Accounts.
                </p>
            </div>
        </div>
    );
}
