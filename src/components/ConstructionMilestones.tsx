import React from 'react';
import { Calendar, CheckCircle2, PlayCircle, Loader2 } from 'lucide-react';

interface Milestone {
    date: string;
    status: string;
    percentage: number;
    title: string;
    image?: string;
    videoUrl?: string;
}

interface ConstructionMilestonesProps {
    projectName: string;
    milestones: Milestone[];
}

const ConstructionMilestones: React.FC<ConstructionMilestonesProps> = ({ projectName, milestones }) => {
    if (!milestones || milestones.length === 0) return null;

    const milestonesJsonLd = milestones.map((m, idx) => ({
        "@context": "https://schema.org",
        "@type": "UpdateAction",
        "name": `${projectName} Construction Milestone: ${m.title}`,
        "description": `${m.status} | Verified construction progress for ${projectName}.`,
        "startTime": m.date,
        "actionStatus": m.percentage === 100 ? "CompletedActionStatus" : "ActiveActionStatus",
        "agent": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate",
            "url": "https://joyville-homes.com"
        },
        "location": {
            "@type": "Place",
            "name": projectName
        },
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": m.videoUrl || "#",
            "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
        },
        "result": {
            "@type": "PropertyValue",
            "name": "Audit Verified Progress",
            "value": `${m.percentage}%`
        },
        "participant": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Engineering & Construction"
        }
    }));

    return (
        <section className="my-16 bg-[#F8FAFC] rounded-sm p-8 border border-neutral-100 relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(milestonesJsonLd) }} />
            
            <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-[#1D4F9C] rounded-sm flex items-center justify-center text-white">
                    <Loader2 className="animate-spin-slow" size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-serif text-[#1A1A1A]">Construction Intelligence</h2>
                    <p className="text-xs text-neutral-500 tracking-widest uppercase font-light">Real-Time Operational Transparency</p>
                </div>
            </div>

            <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-200">
                {milestones.map((milestone, idx) => (
                    <div key={idx} className="relative pl-12 group">
                        {/* Milestone Indicator */}
                        <div className={`absolute left-0 top-1 w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 transition-colors duration-300 ${
                            milestone.percentage === 100 ? 'bg-[#1D4F9C] text-white' : 'bg-white text-[#C5A059] border-[#C5A059]/20'
                        }`}>
                            {milestone.percentage === 100 ? <CheckCircle2 size={20} /> : <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />}
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] font-mono text-[#1D4F9C] bg-[#1D4F9C]/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                                        {milestone.date}
                                    </span>
                                    {milestone.percentage === 100 && (
                                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-tighter">Verified Progress</span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{milestone.title}</h3>
                                <p className="text-sm text-[#323334] font-light leading-relaxed mb-4">{milestone.status}</p>
                                
                                {/* Progress Bar */}
                                <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden mb-4">
                                    <div 
                                        className={`h-full transition-all duration-1000 ${milestone.percentage === 100 ? 'bg-[#1D4F9C]' : 'bg-[#C5A059]'}`}
                                        style={{ width: `${milestone.percentage}%` }}
                                    />
                                </div>
                                <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                                    <span>PHASE COMPLETION</span>
                                    <span>{milestone.percentage}%</span>
                                </div>
                            </div>

                            {milestone.videoUrl && (
                                <a 
                                    href={milestone.videoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="md:w-48 aspect-video rounded-sm overflow-hidden relative group/video border border-neutral-100 shadow-sm block"
                                >
                                    <div className="absolute inset-0 bg-neutral-900/40 group-hover/video:bg-neutral-900/20 transition-colors flex items-center justify-center z-20">
                                        <PlayCircle className="text-white opacity-80 group-hover/video:scale-110 transition-transform" size={40} />
                                    </div>
                                    <div className="absolute bottom-2 left-2 z-30">
                                        <span className="text-[8px] bg-[#1D4F9C] text-white px-2 py-0.5 rounded-full">WATCH UPDATE</span>
                                    </div>
                                    <div className="w-full h-full bg-neutral-200 animate-pulse" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-6 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-400 italic">
                <p>Data direct from Shapoorji Pallonji Engineering ERP Cluster</p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>LIVE PROGRESS TRACKING ENABLED</span>
                </div>
            </div>
        </section>
    );
};

export default ConstructionMilestones;
