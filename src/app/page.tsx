"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, MapPin, PhoneCall, CheckCircle2, Building2, Trees, ShieldCheck, Landmark } from "lucide-react";
import ReviewWidget from "@/components/ReviewWidget";
import BrochureButton from "@/components/BrochureButton";

// --- Framer Motion Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [activeFloorPlan, setActiveFloorPlan] = useState<"2BHK" | "3BHK">("2BHK");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Joyville Homes Pune | Shapoorji Pallonji Real Estate",
    "image": "https://joyville-hinjewadi.example.com/hero-bg-dark.jpg",
    "description": "Premium 2 BHK and 3 BHK luxury flats in Hinjewadi by Shapoorji Pallonji. Discover the legacy of Pune&apos;s most trusted real estate projects.",
    "priceRange": "₹1.10 Cr - ₹1.45 Cr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hinjewadi",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "url": "https://joyville-hinjewadi.example.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "215"
    },
    "sameAs": [
      "https://www.facebook.com/ShapoorjiPallonjiRealEstate/",
      "https://twitter.com/SPRealEstate",
      "https://www.linkedin.com/company/shapoorji-pallonji-real-estate/",
      "https://www.google.com/maps?cid=YOUR_GBP_CID_HERE_SENSORIUM",
      "https://www.google.com/maps?cid=YOUR_GBP_CID_HERE_HADAPSAR"
    ]
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#323334] selection:bg-[#1D4F9C] selection:text-[#FFFFFF] overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Navigation header injected globally via layout.tsx */}

      {/* --- Ultra-Modern Hero Layout (Phase 3) --- */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#EEF2F6]">
        {/* Animated Background Parallax */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
              fill
              alt="Joyville Homes Hinjewadi Pune"
              className="object-cover opacity-60 mix-blend-luminosity"
              priority
              sizes="(max-width: 1200px) 100vw, 100vw"
            />
          </motion.div>

          {/* Advanced Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/90 via-[#FFFFFF]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-[#FFFFFF]/40 z-10" />

          {/* Subtle grain/noise texture overlay for premium feel */}
          <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }} />
        </div>

        {/* Floating Interactive Structure */}
        <div className="relative z-20 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-20">

          {/* Left Hero Content - Magnetic Typography */}
          <div className="flex-1 md:pr-10 lg:pr-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-4 text-[#1D4F9C] font-light text-[10px] tracking-[0.4em] uppercase mb-10"
            >
              <span className="w-12 h-[1px] bg-[#1D4F9C]" /> Pune&apos;s Finest Address
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#323334] font-light leading-[1.05] tracking-tight mb-8"
            >
              <span className="text-[#1D4F9C] italic text-gradient">Joyville Pune</span> <br />
              by Shapoorji Pallonji.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl text-[#323334] max-w-lg font-light tracking-wide leading-relaxed border-l-2 border-[#C5A059]/60 pl-6">
                Discover the finest 2 & 3 BHK Flats in Hinjewadi. Elevate your lifestyle with sprawling green spaces, 60+ majestic amenities, and ultra-luxury residences by Shapoorji Pallonji Real Estate Pune.
              </p>

              <div className="pt-4 flex items-center gap-8">
                <Link href="/projects" className="relative group overflow-hidden px-10 py-5 bg-[#1D4F9C] text-[#FFFFFF] text-[10px] uppercase tracking-[0.3em] font-bold shadow-[0_10px_40px_rgba(197,160,89,0.2)] hover:shadow-[0_15px_50px_rgba(197,160,89,0.4)] transition-all duration-500 block w-max">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Explore Portfolios <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-[#323334] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Stat Cards (Data micro-interactions) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-6"
          >
            <div className="bg-[#EEF2F6]/60 backdrop-blur-xl border border-[#C5A059]/60 p-8 rounded-sm shrink-0 w-[280px] hover:-translate-y-2 transition-transform duration-500">
              <div className="text-[#1D4F9C] mb-4"><Landmark size={24} strokeWidth={1} /></div>
              <h3 className="text-4xl font-serif text-[#323334] font-light mb-1">150+</h3>
              <p className="text-[#323334] text-[10px] uppercase tracking-[0.2em] font-medium">Years of Legacy</p>
            </div>
            <div className="bg-[#FFFFFF]/80 backdrop-blur-xl border border-[#C5A059]/60 p-8 rounded-sm shrink-0 w-[280px] -ml-12 hover:-translate-y-2 transition-transform duration-500">
              <div className="text-[#1D4F9C] mb-4"><Trees size={24} strokeWidth={1} /></div>
              <h3 className="text-4xl font-serif text-[#323334] font-light mb-1">10.5</h3>
              <p className="text-[#323334] text-[10px] uppercase tracking-[0.2em] font-medium">Acres of Greens</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Shapoorji Pallonji Legacy (Trust Factor) --- */}
      <section id="legacy" className="py-32 px-6 bg-[#EEF2F6] border-b border-[#C5A059]/60 relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1D4F9C]/5 blur-[120px] pointer-events-none rounded-bl-full" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 lg:order-1 relative p-4">
              {/* Elegant image collage representing legacy */}
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto z-10 shadow-2xl rounded-sm overflow-hidden border border-[#C5A059]/60">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity"
                  alt="Shapoorji Pallonji Real Estate Building Legacy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4F6F9] via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 -left-4 lg:-left-12 w-64 h-64 bg-[#FFFFFF]/90 backdrop-blur-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#C5A059]/60 z-20 flex flex-col justify-center items-center text-center">
                <Landmark size={40} className="text-[#1D4F9C] mb-4 stroke-1" />
                <div className="text-5xl font-serif text-[#323334] mb-2">150+</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#1D4F9C] font-medium">Years of Trust</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="order-1 lg:order-2">
              <h4 className="text-[#1D4F9C] font-light text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                <span className="w-16 h-[1px] bg-[#1D4F9C]" /> Shapoorji Pallonji Real Estate
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-[#323334] leading-[1.15] font-light">
                Shapoorji Pallonji: Building India&apos;s <br />
                <span className="italic text-[#1D4F9C]">Iconic Landmarks.</span>
              </h2>
              <p className="text-[#323334] text-lg leading-relaxed mb-10 font-light">
                With a legacy spanning over a century and a half, Shapoorji Pallonji is the name behind some of the most prestigious architectural marvels. Joyville Homes Pune is our commitment to bringing this unparalleled standard of construction, engineering, and trust to the premium residential properties of Hinjewadi.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-8 pt-10 border-t border-[#C5A059]/60">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <CheckCircle2 className="text-[#1D4F9C] mt-1 flex-shrink-0 stroke-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="font-medium text-[#323334] mb-2 tracking-wide">Global Footprint</h5>
                    <p className="text-sm text-[#323334] font-light">Presence in over 50 countries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <CheckCircle2 className="text-[#1D4F9C] mt-1 flex-shrink-0 stroke-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="font-medium text-[#323334] mb-2 tracking-wide">Award-Winning</h5>
                    <p className="text-sm text-[#323334] font-light">Recognized construction excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- Master Layout (Midnight Premium Visual) --- */}
      <section id="master-layout" className="py-32 bg-[#FFFFFF] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center mb-24"
          >
            <h4 className="text-[#1D4F9C] font-light text-xs tracking-[0.3em] uppercase mb-6 flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-[#1D4F9C]" /> A Planned Ecosystem <span className="w-8 h-[1px] bg-[#1D4F9C]" />
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-[#323334] font-light">Joyville Premium Master Layout</h2>
            <p className="text-[#323334] max-w-2xl mx-auto lg:text-lg font-light leading-relaxed">Explore 10.5 acres of thoughtfully integrated nature, wellness, and cutting-edge amenities—setting a new benchmark for premium flats in Hinjewadi.</p>
          </motion.div>

          <div className="relative aspect-[21/9] w-full bg-[#EEF2F6] border border-[#C5A059]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group overflow-hidden rounded-sm">
            {/* Dark, sophisticated master layout blueprint visualization */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-color-dodge group-hover:scale-105 transition-all duration-[2000ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent" />

            <div className="absolute top-[30%] left-[40%] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer">
              <span className="absolute w-16 h-16 rounded-full bg-[#1D4F9C]/20 animate-ping" />
              <div className="relative w-3 h-3 rounded-full bg-[#1D4F9C] shadow-[0_0_20px_#1D4F9C]" />
              <div className="absolute top-6 w-max px-5 py-3 bg-[#EEF2F6]/90 backdrop-blur-md border border-[#C5A059]/60 shadow-2xl text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-medium">Premium Clubhouse</div>
            </div>

            <div className="absolute top-[60%] left-[25%] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer">
              <span className="absolute w-16 h-16 rounded-full bg-[#1D4F9C]/20 animate-ping" />
              <div className="relative w-3 h-3 rounded-full bg-[#1D4F9C] shadow-[0_0_20px_#1D4F9C]" />
              <div className="absolute top-6 w-max px-5 py-3 bg-[#EEF2F6]/90 backdrop-blur-md border border-[#C5A059]/60 shadow-2xl text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-medium">Central Green Oasis</div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Trees, label: "60+ Luxury Amenities" },
              { icon: ShieldCheck, label: "Multi-tier Security" },
              { icon: Building2, label: "Vastu Compliant Homes" },
              { icon: MapPin, label: "Hinjewadi Phase 1" },
            ].map((feature, idx) => (
              <div key={idx} className="p-10 bg-[#EEF2F6] border border-[#C5A059]/60 shadow-2xl hover:border-[#C5A059]/40 hover:bg-[#EEF2F6]/80 transition-all duration-500 flex flex-col items-center justify-center gap-6 group">
                <feature.icon className="text-[#1D4F9C] group-hover:scale-110 transition-transform duration-500 stroke-1" size={40} />
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#323334]">{feature.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="/amenities" className="inline-flex items-center gap-3 text-[#1D4F9C] font-medium uppercase tracking-[0.2em] text-xs hover:text-[#323334] transition-colors group">
              View All Premium Amenities <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Detailed Floor Plans (Dark Theme) --- */}
      <section id="floor-plans" className="py-32 px-6 bg-[#EEF2F6] border-y border-[#C5A059]/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-20 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h4 className="text-[#1D4F9C] font-light text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#1D4F9C]" /> Space Optimized Living
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#323334] font-light">Pune&apos;s Premium Residences</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="flex border border-[#C5A059]/60 p-1 bg-[#FFFFFF] rounded-sm"
            >
              <button
                aria-label="View 2 BHK Premium Floor Plans"
                onClick={() => setActiveFloorPlan("2BHK")}
                className={`px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${activeFloorPlan === "2BHK" ? "bg-[#1D4F9C] text-[#FFFFFF] font-semibold" : "text-[#323334] hover:text-[#1D4F9C] font-light"}`}
              >
                2 BHK Premium
              </button>
              <button
                aria-label="View 3 BHK Luxury Floor Plans"
                onClick={() => setActiveFloorPlan("3BHK")}
                className={`px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${activeFloorPlan === "3BHK" ? "bg-[#1D4F9C] text-[#FFFFFF] font-semibold" : "text-[#323334] hover:text-[#1D4F9C] font-light"}`}
              >
                3 BHK Luxury
              </button>
            </motion.div>
          </div>

          <div className="bg-[#FFFFFF] border border-[#C5A059]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 lg:p-16 rounded-sm">
            <AnimatePresence mode="wait">
              {activeFloorPlan === "2BHK" && (
                <motion.div
                  key="2bhk"
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-12 gap-16 items-center"
                >
                  <div className="lg:col-span-7 order-2 lg:order-1 aspect-[4/3] bg-[#EEF2F6] border border-[#C5A059]/60 p-8 relative group overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="relative z-10 w-full h-full border border-[#C5A059]/60 flex items-center justify-center bg-[#FFFFFF]/50 backdrop-blur-sm">
                      <span className="text-[#1D4F9C] text-xs tracking-[0.3em] uppercase border border-[#C5A059]/60 px-6 py-2">Floor Plan View</span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 order-1 lg:order-2">
                    <h3 className="text-3xl lg:text-4xl font-serif mb-4 text-[#323334] font-light">2 BHK Joyville Flats</h3>
                    <p className="text-2xl text-[#1D4F9C] mb-10 font-serif italic text-gradient">Starting ₹1.10 Cr*</p>

                    <div className="space-y-8 mb-12">
                      <div className="flex justify-between border-b border-[#C5A059]/60 pb-4">
                        <span className="text-[#323334] font-light uppercase tracking-[0.2em] text-[10px]">Carpet Area</span>
                        <span className="text-[#323334] font-medium tracking-wide text-sm">750 - 850 Sq.Ft.</span>
                      </div>
                      <div className="flex justify-between border-b border-[#C5A059]/60 pb-4">
                        <span className="text-[#323334] font-light uppercase tracking-[0.2em] text-[10px]">Configuration</span>
                        <span className="text-[#323334] font-medium tracking-wide text-sm">2 Beds • 2 Baths</span>
                      </div>
                      <div className="flex justify-between border-b border-[#C5A059]/60 pb-4">
                        <span className="text-[#323334] font-light uppercase tracking-[0.2em] text-[10px]">Status</span>
                        <span className="text-[#1D4F9C] font-medium tracking-wide text-sm">Ready to Move Options</span>
                      </div>
                    </div>

                    <BrochureButton
                      projectName="2BHK Hinjewadi"
                      label="Download 2BHK Brochure"
                      className="w-full py-5 border border-[#C5A059] text-[#1D4F9C] uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#1D4F9C] hover:text-[#FFFFFF] transition-all duration-500 rounded-sm block"
                    />
                  </div>
                </motion.div>
              )}

              {activeFloorPlan === "3BHK" && (
                <motion.div
                  key="3bhk"
                  initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-12 gap-16 items-center"
                >
                  <div className="lg:col-span-7 order-2 lg:order-1 aspect-[4/3] bg-[#EEF2F6] border border-[#C5A059]/60 p-8 relative group overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="relative z-10 w-full h-full border border-[#C5A059]/60 flex items-center justify-center bg-[#FFFFFF]/50 backdrop-blur-sm">
                      <span className="text-[#1D4F9C] text-xs tracking-[0.3em] uppercase border border-[#C5A059]/60 px-6 py-2">Floor Plan View</span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 order-1 lg:order-2">
                    <h3 className="text-3xl lg:text-4xl font-serif mb-4 text-[#323334] font-light">3 BHK Luxury Apartments</h3>
                    <p className="text-2xl text-[#1D4F9C] mb-10 font-serif italic text-gradient">Starting ₹1.45 Cr*</p>

                    <div className="space-y-8 mb-12">
                      <div className="flex justify-between border-b border-[#C5A059]/60 pb-4">
                        <span className="text-[#323334] font-light uppercase tracking-[0.2em] text-[10px]">Carpet Area</span>
                        <span className="text-[#323334] font-medium tracking-wide text-sm">1050 - 1200 Sq.Ft.</span>
                      </div>
                      <div className="flex justify-between border-b border-[#C5A059]/60 pb-4">
                        <span className="text-[#323334] font-light uppercase tracking-[0.2em] text-[10px]">Configuration</span>
                        <span className="text-[#323334] font-medium tracking-wide text-sm">3 Beds • 3 Baths</span>
                      </div>
                      <div className="flex justify-between border-b border-[#C5A059]/60 pb-4">
                        <span className="text-[#323334] font-light uppercase tracking-[0.2em] text-[10px]">Status</span>
                        <span className="text-[#323334] font-medium tracking-wide text-sm">Under Construction</span>
                      </div>
                    </div>

                    <BrochureButton
                      projectName="3BHK Pune West"
                      label="Download 3BHK Brochure"
                      className="w-full py-5 border border-[#C5A059] text-[#1D4F9C] uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#1D4F9C] hover:text-[#FFFFFF] transition-all duration-500 rounded-sm block"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- Review Harvesting Component (Local SEO) --- */}
      <ReviewWidget />

      {/* --- Footer & Final CTA (Dark Premium) --- */}
      <footer className="py-32 bg-[#FFFFFF] border-t border-[#C5A059]/60 text-center relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1D4F9C]/5 blur-[120px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-10 text-[#323334] font-light leading-[1.1]">
            Own a piece of the <br /> <span className="text-[#1D4F9C] italic text-gradient">Shapoorji Legacy.</span>
          </h2>
          <p className="text-[#323334] text-lg mx-auto mb-16 font-light">
            The defining face of premium residential projects in Pune. Contact our concierge to schedule a private viewing at Joyville Hinjewadi.
          </p>

          <div className="flex max-w-lg mx-auto relative bg-[#EEF2F6] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-[#C5A059]/60 overflow-hidden rounded-sm">
            <input
              type="text"
              aria-label="Phone Number for Enquiry"
              placeholder="Enter your phone number"
              className="w-full bg-transparent px-8 py-5 text-[#323334] placeholder-[#323334]/30 focus:outline-none focus:bg-[#FFFFFF]/50 transition-colors font-light text-sm tracking-wide"
            />
            <button aria-label="Submit Quick Enquiry" className="bg-[#1D4F9C] px-10 text-[#FFFFFF] uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-[#323334] transition-colors duration-300">
              Enquire
            </button>
          </div>

          <div className="mt-20 pt-10 border-t border-[#C5A059]/60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div>
              <div className="text-3xl font-serif text-[#1D4F9C] font-light tracking-widest mb-4">JOYVILLE <span className="text-[10px] font-sans tracking-[0.4em] text-[#323334] uppercase ml-2">Pune</span></div>
              <p className="text-[#323334]/70 text-sm font-light leading-relaxed mb-6">
                Premium residences and townships crafted with Shapoorji Pallonji&apos;s 150-year legacy of engineering excellence.
              </p>
              <p className="text-[#323334]/40 text-[9px] tracking-[0.3em] uppercase font-medium">MahaRERA: P52100000000</p>
            </div>

            <div className="lg:col-start-4">
              <h4 className="text-[#1D4F9C] font-semibold text-xs tracking-widest uppercase mb-6">Popular Searches</h4>
              <ul className="space-y-4">
                <li><Link href="/insights" className="text-[#323334]/80 text-sm font-light hover:text-[#1D4F9C] transition-colors">Market Insights Blog</Link></li>
                <li><Link href="/properties/2-bhk-flats-in-hinjewadi" className="text-[#323334]/80 text-sm font-light hover:text-[#1D4F9C] transition-colors">2 BHK Flats in Hinjewadi</Link></li>
                <li><Link href="/properties/3-bhk-luxury-apartments-pune-west" className="text-[#323334]/80 text-sm font-light hover:text-[#1D4F9C] transition-colors">3 BHK Luxury Pune West</Link></li>
                <li><Link href="/properties/townships-near-magarpatta-city" className="text-[#323334]/80 text-sm font-light hover:text-[#1D4F9C] transition-colors">Townships near Magarpatta</Link></li>
                <li><Link href="/properties/na-bungalow-plots-near-purandar-airport" className="text-[#323334]/80 text-sm font-light hover:text-[#1D4F9C] transition-colors">Plots near Purandar Airport</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-10 right-10 z-50">
        <button aria-label="Call Sales Office" className="w-16 h-16 bg-[#1D4F9C] text-[#FFFFFF] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(197,160,89,0.3)] hover:scale-110 transition-transform duration-500 hover:bg-[#323334] border border-[#C5A059]/50">
          <PhoneCall size={20} />
        </button>
      </div>
    </div>
  );
}
