import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | Joyville Homes Pune",
    description: "Our privacy policy details how we collect, use, and protect your information at Joyville Homes by Shapoorji Pallonji.",
    robots: { index: false, follow: true }
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 text-[#323334] font-sans">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-serif mb-12">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none space-y-8 text-sm font-light leading-relaxed text-[#323334]/80">
                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">1. Data Collection</h2>
                        <p>
                            At Joyville Homes, we collect personal information provided by you through our enquiry forms, brochure downloads, and interactive calculators. This includes your name, email address, phone number, and project preferences. We also collect non-personal data through cookies, Google Analytics, and Meta Pixel to improve your experience on our platform.
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">2. Purpose of Collection</h2>
                        <p>
                            The information collected is used primarily to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Provide detailed project information, brochures, and cost sheets as requested.</li>
                            <li>Enable our sales consultants to contact you regarding your real estate interests.</li>
                            <li>Send periodic updates on project construction milestones and new launches.</li>
                            <li>Analyze site traffic and user behavior to optimize our digital presence.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">3. Data Security & Storage</h2>
                        <p>
                            We implement industry-standard security protocols to protect your personal data from unauthorized access or disclosure. Information is stored on secure cloud servers and is accessible only to authorized personnel at Shapoorji Pallonji Real Estate and its certified channel partners.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">4. Sharing with Third Parties</h2>
                        <p>
                            We do not sell or rent your personal information to third parties. However, we may share your data with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Authorized channel partners and service providers involved in project marketing and sales.</li>
                            <li>Affiliated group companies of Shapoorji Pallonji.</li>
                            <li>Governmental authorities when required by law or to ensure compliance with real estate regulations (RERA).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">5. Cookies & Tracking</h2>
                        <p>
                            Our platform uses cookies and tracking pixels to personalize content and advertisements. You can modify your browser settings to disable cookies, though this may impact certain site functionalities. For more information, please see our Cookie Consent banner on the homepage.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif text-[#1D4F9C] mb-4">6. Your Rights</h2>
                        <p>
                            You have the right to request access to your data, correction of inaccuracies, or deletion of your information from our active databases. To exercise these rights, please contact our data privacy desk at <span className="font-medium">propsmartrealty@gmail.com</span>.
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
