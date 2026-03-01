import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import SEOFooter from "@/components/SEOFooter";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.joyville-homes.com'),
  title: "Joyville Homes Pune | Shapoorji Pallonji | 2 & 3 BHK Flats in Hinjewadi, Hadapsar, Bavdhan",
  description: "Official Joyville Pune by Shapoorji Pallonji Real Estate. Explore 9 premium projects across Hinjewadi, Hadapsar & Bavdhan. 2 & 3 BHK flats starting ₹65 Lakhs. RERA approved. Check price list, floor plans & book a site visit today.",
  keywords: [
    // Brand Core
    "Joyville Homes Pune",
    "Shapoorji Pallonji Pune",
    "Shapoorji Pallonji Real Estate Pune",
    "Joyville Pune projects",
    // Hinjewadi Micro-Market
    "flats in Hinjewadi",
    "2 BHK flats in Hinjewadi",
    "3 BHK apartments Hinjewadi",
    "luxury apartments Hinjewadi Phase 1",
    "Joyville Sensorium Hinjewadi",
    "Joyville Celestia Hinjewadi",
    "new launch Hinjewadi 2025",
    "property rates Hinjewadi 2025",
    "flats near Rajiv Gandhi Infotech Park",
    "walk to work apartments Hinjewadi",
    // Hadapsar Micro-Market
    "flats in Hadapsar Pune",
    "Joyville Hadapsar Annexe",
    "ready to move flats Hadapsar",
    "flats near Magarpatta City",
    "1 BHK flats Hadapsar",
    "affordable flats Pune East",
    "township projects Hadapsar",
    // Bavdhan Micro-Market
    "flats in Bavdhan Pune",
    "Vanaha Bavdhan",
    "Vanaha Golfland",
    "golf course view apartments Pune",
    "1000 acre township Pune",
    // Growth Corridor
    "Shapoorji Treetopia Pune",
    "NA bungalow plots Pune",
    "plots near Purandar Airport",
    // Transactional Intent
    "Shapoorji Pallonji Pune price list 2025",
    "Joyville Pune floor plans",
    "RERA approved projects Pune",
    "NRI investment flats Pune",
    "buy 2 BHK flat Hinjewadi under 1 crore",
    // Competitor Gap
    "Joyville vs Kolte Patil Life Republic",
    "best residential projects Hinjewadi 2025",
    "integrated township Pune"
  ],
  openGraph: {
    title: "Joyville Homes Pune | Shapoorji Pallonji Real Estate | 9 Premium Projects",
    description: "Explore Joyville Pune by Shapoorji Pallonji – 9 premium projects across Hinjewadi, Hadapsar & Bavdhan. 2 & 3 BHK flats starting ₹65L. RERA approved.",
    url: "https://www.joyville-homes.com",
    siteName: "Joyville Homes Pune",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joyville Homes Pune by Shapoorji Pallonji — Premium 2 & 3 BHK Residences",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyville Homes Pune | Shapoorji Pallonji | 2 & 3 BHK from ₹65L",
    description: "9 premium projects across Hinjewadi, Hadapsar & Bavdhan. RERA approved. Check price list & floor plans.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.joyville-homes.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-white`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Joyville Homes by Shapoorji Pallonji",
            "alternateName": "Shapoorji Pallonji Real Estate",
            "url": "https://www.joyville-homes.com",
            "logo": "https://www.joyville-homes.com/logo.png",
            "description": "Official Joyville Pune — 9 premium residential projects across Hinjewadi, Hadapsar & Bavdhan. 150+ years of Shapoorji Pallonji engineering legacy.",
            "foundingDate": "1865",
            "sameAs": ["https://www.joyvillehomes.com", "https://www.shapoorji.in"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rajiv Gandhi Infotech Park, Hinjewadi Phase 1",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "postalCode": "411057",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-20-67210000",
              "contactType": "sales",
              "areaServed": "Pune",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 18.5913, "longitude": 73.7389 },
              "geoRadius": "50000"
            }
          })
        }} />
        <div className="min-h-screen flex flex-col relative text-foreground">
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
          <MobileStickyCTA />
        </div>
        <SEOFooter />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      </body>
    </html>
  );
}
