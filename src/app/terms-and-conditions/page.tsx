import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms & Conditions | Joyville Homes Pune",
    description: "Read the terms and conditions for using the Joyville Homes Pune platform by Shapoorji Pallonji.",
    robots: { index: false, follow: true }
};

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 text-[#323334] font-sans">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-serif mb-12">Terms & Conditions</h1>
                <div className="prose prose-slate max-w-none space-y-8 text-sm font-light leading-relaxed text-[#323334]/80">
                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessessing or using the Joyville Homes website (joyville-homes.com), you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please refrain from using the platform.
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">2. Accuracy of Information</h2>
                        <p>
                            While we strive for 100% accuracy, real estate market data, pricing, and availability change rapidly. The content on this site is provided for general informational purposes and does not constitute a formal offer for sale. All transactions are subject to RERA guidelines and signed agreements between the parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">3. Intellectual Property</h2>
                        <p>
                            All branding, logos, project renderings, master plans, and textual content are the intellectual property of Shapoorji Pallonji Real Estate or its respective licensors. Unauthorized reproduction or distribution is strictly prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">4. Limitation of Liability</h2>
                        <p>
                            Joyville Homes and its affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the platform. Investment in real estate involves risks, and users are encouraged to perform their own due diligence.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">5. External Links</h2>
                        <p>
                            Our platform may contain links to external sites (e.g., MahaRERA portals). We are not responsible for the content, privacy policies, or practices of any third-party websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">6. Jurisdiction</h2>
                        <p>
                            These terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Pune/Mumbai, Maharashtra.
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
