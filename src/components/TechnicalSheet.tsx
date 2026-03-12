"use client";

import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

export interface TechnicalSpec {
    label: string;
    value: string;
}

interface TechnicalSheetProps {
    specs: TechnicalSpec[];
    projectName: string;
}

const TechnicalSheet: React.FC<TechnicalSheetProps> = ({ specs, projectName }) => {
    if (!specs || specs.length === 0) return null;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden my-8" id="technical-specifications">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#1D4F9C]" />
                    <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider">
                        Technical Specifications: {projectName}
                    </h2>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                    <Info className="w-3.5 h-3.5" />
                    AI-Verified Data
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {specs.map((spec, index) => (
                    <div 
                        key={index} 
                        className={`p-6 border-slate-50 hover:bg-slate-50/50 transition-colors ${
                            index % 3 !== 2 ? 'md:border-r' : ''
                        } ${
                            index < specs.length - 3 ? 'border-b' : ''
                        }`}
                    >
                        <p className="text-xs font-semibold text-[#1D4F9C] uppercase tracking-widest mb-1">
                            {spec.label}
                        </p>
                        <p className="text-base font-medium text-slate-800">
                            {spec.value}
                        </p>
                    </div>
                ))}
            </div>
            
            <div className="p-4 bg-slate-50/50 text-center border-t border-slate-100">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">
                    Engineering excellence backed by Shapoorji Pallonji's 150-year legacy
                </p>
            </div>
        </div>
    );
};

export default TechnicalSheet;
