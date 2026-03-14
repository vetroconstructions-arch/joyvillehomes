import React from 'react';
import { LucideIcon, TrendingUp, Shield, MapPin, Activity, Zap } from 'lucide-react';

interface MatrixMetric {
    label: string;
    projectValue: string | number;
    marketAverage: string | number;
    icon: LucideIcon;
    better: boolean;
}

interface EntityAuthorityMatrixProps {
    projectName: string;
    localityName: string;
    metrics: MatrixMetric[];
    topicID?: string[];
}

const EntityAuthorityMatrix: React.FC<EntityAuthorityMatrixProps> = ({
    projectName,
    localityName,
    metrics,
    topicID
}) => {
    return (
        <section className="my-16 p-1 bg-gradient-to-r from-amber-500/20 via-indigo-500/20 to-emerald-500/20 rounded-[2.5rem] shadow-xl">
            <div className="bg-white/90 backdrop-blur-3xl rounded-[2.4rem] p-8 md:p-12 border border-white/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
                            Professional Micro-Market Comparison
                        </div>
                        <h3 className="text-3xl font-serif text-slate-900 leading-tight">
                            {projectName} <span className="text-slate-400 font-sans font-light">vs</span> {localityName} Market
                        </h3>
                    </div>
                    {topicID && topicID.length > 0 && (
                        <div className="px-4 py-2 bg-slate-900 rounded-2xl shadow-lg border border-slate-700">
                            <span className="text-slate-400 text-[10px] block uppercase font-mono mb-0.5">Knowledge Topic:</span>
                            <div className="flex flex-wrap gap-2">
                                {topicID.map(id => (
                                    <span key={id} className="text-indigo-400 font-mono text-xs font-bold tracking-tighter">#{id}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="group p-6 bg-slate-50/50 hover:bg-white transition-all duration-300 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                                    <metric.icon size={20} />
                                </div>
                                <span className="font-bold text-slate-700 tracking-tight">{metric.label}</span>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">{projectName}</div>
                                    <div className={`text-xl font-serif font-bold ${metric.better ? 'text-emerald-600' : 'text-slate-800'}`}>
                                        {metric.projectValue}
                                    </div>
                                </div>
                                
                                <div className="h-[2px] w-full bg-slate-200 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full ${metric.better ? 'bg-emerald-500' : 'bg-indigo-500'}`} 
                                        style={{ width: '100%' }}
                                    ></div>
                                </div>

                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-slate-500 font-medium">Market Average ({localityName})</span>
                                    <span className="text-slate-400 font-mono italic">{metric.marketAverage}</span>
                                </div>
                            </div>
                            
                            {metric.better && (
                                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] text-emerald-600 font-bold uppercase tracking-tighter">
                                    <Zap size={10} className="fill-emerald-600" /> Statistical Advantage Detected
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-indigo-50/30 rounded-3xl border border-indigo-100/50">
                    <p className="text-sm text-slate-600 font-medium italic">
                        Data verified through Institutional Research (Standardized for SGE Conclusions).
                    </p>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter mb-1">Entity Rank</span>
                            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-lg leading-none">Tier 1 Alpha</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter mb-1">Index Cycle</span>
                            <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-lg leading-none">V25 Stable</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EntityAuthorityMatrix;
