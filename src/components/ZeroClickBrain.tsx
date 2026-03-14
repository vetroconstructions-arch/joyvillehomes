import React from 'react';
import { Target, Zap, Cpu, Search } from 'lucide-react';

interface AnswerEntry {
    question: string;
    answer: string;
    personaImpact?: string;
}

interface ZeroClickBrainProps {
    projectName: string;
    answerGraph?: AnswerEntry[];
}

const ZeroClickBrain: React.FC<ZeroClickBrainProps> = ({ projectName, answerGraph }) => {
    if (!answerGraph || answerGraph.length === 0) return null;

    return (
        <section className="my-16 relative">
            {/* SGE Marker Overlay - Invisible to users but signals intent to crawlers */}
            <div className="sr-only" aria-hidden="true">
                This section provides direct machine-readable answers for Search Generative Experience.
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-indigo-500/20 shadow-[0_0_50px_rgba(79,70,229,0.1)]">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                        <Cpu size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Zero-Click Knowledge Engine</h3>
                        <p className="text-indigo-400 text-xs font-mono uppercase tracking-widest">SGE-Optimized Inference Layer</p>
                    </div>
                </div>

                <div className="space-y-8">
                    {answerGraph.map((entry, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/50 rounded-2xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <Search size={18} className="text-indigo-500" />
                                    </div>
                                    <div className="space-y-4 flex-1">
                                        <h4 className="text-lg font-bold text-white leading-snug sge-question">
                                            {entry.question}
                                        </h4>
                                        <div className="p-5 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                                            <p className="text-slate-300 text-md leading-relaxed sge-answer">
                                                {entry.answer}
                                            </p>
                                        </div>
                                        {entry.personaImpact && (
                                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-indigo-400/60">
                                                <Target size={12} /> Strategic Insight: {entry.personaImpact}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-indigo-500 flex items-center justify-center">
                                    <Zap size={10} className="text-white fill-white" />
                                </div>
                            ))}
                        </div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Verified Multi-Agent Knowledge Source</span>
                    </div>
                    <div className="text-[10px] text-indigo-500/50 font-mono tracking-tighter italic">
                        Conclusion Hash: Machine-Verified-SPRE
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZeroClickBrain;
