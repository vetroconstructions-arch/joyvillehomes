import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import MobileStickyCTA from "@/components/MobileStickyCTA";
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
  title: "Joyville Homes Pune | Shapoorji Pallonji Real Estate | 2 & 3 BHK Flats",
  description: "Discover Joyville Pune by Shapoorji Pallonji – Spacious 2 & 3 BHK apartments near Hinjewadi. Check Price List, Floor Plans & Book Now!",
  keywords: [
    // Primary
    "Shapoorji Pallonji Pune",
    "Joyville Homes Pune",
    "Shapoorji Pallonji Real Estate Pune",
    "Joyville 2/3 BHK Pune",
    "Joyville Pune New Projects",
    // Secondary 
    "Joyville Pune Phase 1",
    "Shapoorji Pallonji Joyville apartments Pune",
    "2 BHK flats in Joyville Pune",
    "3 BHK apartments in Pune",
    "Affordable homes in Pune by Shapoorji Pallonji",
    "Joyville Pune Hinjewadi",
    "Flats near Pune IT Parks",
    // Hyper-Local Long-Tail
    "Affordable 2 BHK in Pune near IT hubs",
    "Best residential projects near Hinjewadi IT Park",
    "Shapoorji Pallonji Joyville Pune prices",
    "Joyville Pune project review",
    "Joyville Pune possession date 2027",
    "Shapoorji Pallonji Joyville floor plans",
    "Joyville Pune amenities & features",
    "Shapoorji Pallonji Pune price list 2026",
    // Conversion Intent
    "Buy 2 BHK in Pune Shapoorji Pallonji Joyville",
    "Booking Joyville Pune",
    "Joyville Pune price list download",
    "Contact real estate Joyville Pune",
    "Shapoorji Pallonji Pune sales office number",
    // Supporting Clusters
    "Best residential amenities in Pune projects",
    "Gated community flats Pune",
    "Pune property loans for Joyville"
  ],
  openGraph: {
    title: "Joyville Homes Pune | Shapoorji Pallonji Real Estate",
    description: "Discover Joyville Pune by Shapoorji Pallonji – Spacious 2 & 3 BHK apartments near Hinjewadi. Check Price List, Floor Plans & Book Now!",
    url: "https://joyville-hinjewadi.example.com",
    siteName: "Joyville Homes Pune",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "joyville-pune-master-plan.jpg",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyville Homes Pune | 2 & 3 BHK Flats",
    description: "Discover Joyville Pune by Shapoorji Pallonji – Spacious 2 & 3 BHK apartments near Hinjewadi. Check Price List, Floor Plans & Book Now!",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://joyville-hinjewadi.example.com",
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
        <div className="min-h-screen flex flex-col relative text-foreground">
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
          <MobileStickyCTA />
        </div>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      </body>
    </html>
  );
}
