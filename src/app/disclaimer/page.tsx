import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Disclaimer | Joyville Homes Pune",
    description: "Official legal disclaimer for real estate information and project details on the Joyville Homes Pune platform.",
    robots: { index: false, follow: true }
};

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 text-[#323334] font-sans">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-serif mb-12">Disclaimer</h1>
                <div className="prose prose-slate max-w-none space-y-8 text-sm font-light leading-relaxed text-[#323334]/80">
                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">Real Estate Informational Notice</h2>
                        <p>
                            The information, images, and project details provided on this website are for representational and informational purposes only. While every care has been taken to ensure the data is accurate at the time of publication, it is not a legal offering and does not constitute a part of any contract.
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">RERA Compliance</h2>
                        <p>
                            All projects listed are registered with MahaRERA. Registration numbers are displayed on individual project pages. Intending buyers are advised to verify all project details, including title, floor plans, and stage-wise progress, on the official MahaRERA website (<a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#1D4F9C] underline">maharerait.mahaonline.gov.in</a>) before making a purchase decision.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">ROI &amp; Projections</h2>
                        <p>
                            Financial projections, ROI calculators, and capital appreciation trends displayed on this platform are based on historical market data and predictive algorithms. These are estimates only and do not guarantee future performance. Real estate investments are subject to market risks.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">Marketing Materials</h2>
                        <p>
                            Renderings, walk-through videos, and artist impressions are intended to provide a creative vision for the project and may not represent the final delivered product. Specifications, amenities, and landscaping are subject to change as per the developer&apos;s discretion and regulatory approvals.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">Official Channels</h2>
                        <p>
                            This website may be managed by an authorized channel partner. For the most current official information, please contact the developer&apos;s sales team directly or visit the official site office.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-[#C5A059]/20 font-serif italic">
                        <p>Last Updated: March 2026</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
