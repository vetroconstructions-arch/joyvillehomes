import { getSemanticContentForSlug } from '@/data/semantic-content';

export default function SemanticSynthesizer({ slug }: { slug: string }) {
    const blocks = getSemanticContentForSlug(slug);

    if (!blocks || blocks.length === 0) return null;

    return (
        <section className="max-w-4xl mx-auto px-6 mb-16 semantic-content-synthesizer">
            <div className="bg-[#FFFFFF] border border-[#C5A059]/20 p-8 md:p-12 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-bl-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1D4F9C]/5 rounded-tr-full -z-10"></div>
                
                <div className="flex items-center gap-3 mb-8 border-b border-[#E5E7EB] pb-4">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1D4F9C]">Market Intelligence Briefing</span>
                </div>

                <article className="prose prose-sm md:prose-base prose-headings:font-serif prose-headings:text-[#1D4F9C] prose-headings:font-light prose-p:text-[#4B5563] prose-p:leading-relaxed prose-p:text-justify max-w-none">
                    {blocks.map((block, index) => (
                        <div key={index} className="mb-10 last:mb-0">
                            <h2 className="text-2xl mb-4">{block.title}</h2>
                            {block.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className="mb-4 text-[#4B5563]/90">{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </article>
            </div>
        </section>
    );
}
