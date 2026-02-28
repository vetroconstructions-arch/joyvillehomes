export interface FloorPlan {
    type: string;
    carpetArea: string;
    image?: string;
}

export interface SpecificationCategory {
    category: string;
    items: string[];
}

export interface AmenityCategory {
    category: string;
    items: string[];
}

export interface LocationDetail {
    iframeSrc: string;
    landmarks: { name: string; distance: string }[];
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    location: string;
    price: string;
    type: string;
    status: string;
    image: string;
    highlights: string[];
    description: string;
    overview: string[];
    amenities: AmenityCategory[];
    specifications: SpecificationCategory[];
    floorPlans: FloorPlan[];
    masterLayout: string;
    gallery: string[];
    locationDetails: LocationDetail;
    seoKeywords: string[];
    faqs?: { question: string; answer: string }[];
}

export const projects: Project[] = [
    {
        id: "p1",
        slug: "joyville-sensorium-hinjewadi",
        title: "Joyville Sensorium",
        location: "Hinjewadi Phase 1, Pune",
        price: "₹1.10 Cr - ₹1.45 Cr",
        type: "2 & 3 BHK Luxury Apartments",
        status: "Under Construction",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/1.webp",
        highlights: [
            "10.5 Acres Development",
            "75% Open Green Spaces",
            "Infinity Edge Pool",
            "Smart Home Automation"
        ],
        description: "Experience the pinnacle of sky-luxe living at Joyville Sensorium. A premier Shapoorji Pallonji residential project in Hinjewadi offering sprawling green spaces and over 60 majestic amenities.",
        overview: [
            "Joyville Sensorium is a sprawling 10.5-acre township developed by Shapoorji Pallonji, perfectly encapsulating modern living within natural surroundings.",
            "The master layout includes nine residential towers, a monumental 2.8-acre multi-level sunken garden, a vehicle-free podium, and a 1.8 km walking boulevard.",
            "Designed with an EDGE Certified construction strategy, it ensures sustainability while providing 75% open spaces to breathe."
        ],
        amenities: [
            {
                category: "Leisure & Wellness",
                items: ["Infinity Edge Pool", "2.8-acre Sunken Garden", "1.8 km Walking Boulevard", "Herbal Garden", "Reflexology Path"]
            },
            {
                category: "Sports & Fitness",
                items: ["Fully Equipped Gymnasium", "Yoga & Meditation Zone", "Futsal Court", "Tennis Court", "Jogging Track"]
            },
            {
                category: "Convenience & Security",
                items: ["Electric Vehicle Charging Stations", "Biometric Home Security", "5-Tier Security System", "Smart Home Automation"]
            }
        ],
        specifications: [
            {
                category: "Flooring",
                items: ["600 mm x 600 mm vitrified tiles in living, dining, and bedrooms", "Rough-textured ceramic tiles in bathrooms"]
            },
            {
                category: "Windows & Doors",
                items: ["Water-tight noise-reducing anodized Aluminum Sliding Windows (Tostem or equivalent)", "Pre-engineered/wooden flush doors with double-side laminates"]
            },
            {
                category: "Structure & Safety",
                items: ["Earthquake-resistant framed RCC structure", "EDGE Certified construction methodology", "100% DG Power backup for common areas"]
            }
        ],
        floorPlans: [
            { type: "2 BHK Luxury", carpetArea: "711 sq. ft." },
            { type: "2 BHK Royale", carpetArea: "792 sq. ft." },
            { type: "3 BHK Suite", carpetArea: "979 sq. ft." }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/2.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/3.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/4.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/5.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.980646012613!2d73.7330548151978!3d18.574676187376046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc6da6fcb2b%3A0xcdaaaadd11c2e47c!2sHinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622616213032!5m2!1sen!2sin",
            landmarks: [
                { name: "Rajiv Gandhi Infotech Park", distance: "2.5 km" },
                { name: "Ruby Hall Clinic", distance: "3.2 km" },
                { name: "Xion Mall", distance: "4.0 km" },
                { name: "Mumbai-Bengaluru Highway", distance: "3.5 km" }
            ]
        },
        seoKeywords: [
            "Joyville Sensorium Hinjewadi",
            "Shapoorji Pallonji Hinjewadi Phase 1",
            "Flats for sale Hinjewadi",
            "IT Park Hinjewadi flats",
            "2 BHK Hinjewadi Phase 1",
            "3 BHK luxury flats Hinjewadi",
            "Investment Hinjewadi property",
            "Pune IT Park residential projects"
        ],
        faqs: [
            {
                question: "Where exactly is Joyville Sensorium located in Hinjewadi?",
                answer: "Joyville Sensorium is strategically located in Hinjewadi Phase 1, offering seamless connectivity to the Rajiv Gandhi Infotech Park and major IT hubs in Pune West."
            },
            {
                question: "What is the starting price for flats in Joyville Sensorium?",
                answer: "Premium 2 BHK and 3 BHK luxury residences at Joyville Sensorium start from ₹1.10 Cr onwards, varying by configuration and floor band."
            },
            {
                question: "Is Joyville Sensorium a RERA registered project?",
                answer: "Yes, Joyville Sensorium is fully RERA compliant, offering clear title properties backed by the 150-year legacy of Shapoorji Pallonji Real Estate."
            }
        ]
    },
    {
        id: "p2",
        slug: "joyville-hadapsar-annexe-pune",
        title: "Joyville Hadapsar Annexe",
        location: "Shewalewadi, Pune East",
        price: "₹65 L - ₹95 L",
        type: "1, 2 & 3 BHK Premium Flats",
        status: "Ready to Move Options",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/1.webp",
        highlights: [
            "21 Acres Township",
            "8.8 Acres of Open Space",
            "60+ Premium Amenities",
            "Excellent connectivity to Magarpatta IT Park"
        ],
        description: "Joyville Hadapsar Annexe by Shapoorji Pallonji offers thoughtfully designed homes in East Pune. An oasis of calm with seamless connectivity to major IT hubs and retail destinations.",
        overview: [
            "Joyville Hadapsar Annexe is a mammoth 21-acre residential township engineered to maximize community living and green breathing space.",
            "Featuring an expansive 8.8+ acres of central amenity space and a standalone 35,000 sq. ft. clubhouse.",
            "Strategically positioned in Shewalewadi to offer unmatched connectivity to Magarpatta, SP Infocity, and Amanora Park Town."
        ],
        amenities: [
            {
                category: "Club & Social",
                items: ["35,000 sq. ft. Grand Clubhouse", "4 Mini Clubs", "Open Amphitheater", "Multipurpose Hall", "Shopping Galleria"]
            },
            {
                category: "Recreation",
                items: ["Large Swimming Pool", "Kids' Pool", "2.7 km Walking Boulevard", "Open Cricket Pavilion", "Lawn Mound"]
            },
            {
                category: "Infrastructure",
                items: ["24m Wide Main Access Road", "Sewage Treatment Plant", "Storm Water Drains", "Solid Waste Management", "Grand Welcome Plaza"]
            }
        ],
        specifications: [
            {
                category: "Flooring",
                items: ["600 mm x 600 mm Vitrified tiles with spacers (Living/Dining)", "300 mm x 300 mm rough textured tiles for bathrooms and balconies"]
            },
            {
                category: "Plumbing & Sanitary",
                items: ["Branded sanitary fittings from CERA (or equivalent)", "Premium CP fittings from Jaquar (or equivalent)", "Rainwater harvesting drains"]
            },
            {
                category: "Structure",
                items: ["RCC framed structure", "Concrete solid block masonry", "Video door phone for main entrance"]
            }
        ],
        floorPlans: [
            { type: "1 BHK", carpetArea: "371 sq. ft." },
            { type: "2 BHK Smart", carpetArea: "589 sq. ft." },
            { type: "2 BHK Luxury", carpetArea: "669 sq. ft." },
            { type: "3 BHK Smart", carpetArea: "815 sq. ft." }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/2.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/3.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/4.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/5.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.33748259646!2d73.95752181519692!3d18.471905087437344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9d2b291a271%3A0x6bba41a5d2cf5913!2sShewalewadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622616281896!5m2!1sen!2sin",
            landmarks: [
                { name: "Magarpatta IT Park", distance: "5.0 km" },
                { name: "SP Infocity", distance: "4.5 km" },
                { name: "Amanora Mall", distance: "5.5 km" },
                { name: "Noble Hospital", distance: "6.0 km" }
            ]
        },
        seoKeywords: [
            "Joyville Hadapsar Annexe",
            "Shapoorji Pallonji Shewalewadi",
            "Flats near Magarpatta City",
            "Flats for sale Hadapsar",
            "Hadapsar real estate trends",
            "Hadapsar residential projects",
            "Ready to move flats Hadapsar Annexe",
            "Properties near Pune IT Hub"
        ],
        faqs: [
            {
                question: "How far is Joyville Hadapsar Annexe from Magarpatta City?",
                answer: "Joyville Hadapsar Annexe offers excellent connectivity and is located just a short 10-15 minute drive from Magarpatta City and SP Infocity IT hubs."
            },
            {
                question: "What amenities are available at the Hadapsar Annexe project?",
                answer: "The project features over 60+ world-class amenities including a massive 35,000 sq.ft. clubhouse, extensive biophilic gardens, multiple swimming pools, and dedicated sports zones."
            }
        ]
    },
    {
        id: "p3",
        slug: "joyville-celestia-hinjewadi",
        title: "Joyville Celestia",
        location: "Hinjewadi, Pune",
        price: "₹85 L - ₹1.25 Cr",
        type: "2 & 3 BHK Apartments",
        status: "New Launch",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/5.webp",
        highlights: [
            "Premium Club Life",
            "Vastu Compliant Homes",
            "Advanced Security Systems",
            "Lush Landscaping"
        ],
        description: "The newest landmark in Hinjewadi. Joyville Celestia redefines modern urban living with celestial designs, high-end finishing, and standard-setting Shapoorji Pallonji construction quality.",
        overview: [
            "Joyville Celestia offers an unparalleled blend of celestial-inspired architecture and practical urban living.",
            "Part of a grander vision, it dedicates 75% to open realms, fostering a sense of unbounded freedom.",
            "Each home is a masterpiece of Vastu compliance, ensuring positive energy and optimal cross-ventilation."
        ],
        amenities: [
            {
                category: "Signature",
                items: ["Aqua Gym", "Naturopathy Center", "Brain Gym for Kids", "Lavish Clubhouse"]
            },
            {
                category: "Active Life",
                items: ["Multi-purpose Sports Court", "Skating Rink", "Acupressure Pathway", "Outdoor Fitness Station"]
            },
            {
                category: "Community",
                items: ["Senior Citizens' Plaza", "Barbeque Pavilion", "Pet Park", "Hammock Garden"]
            }
        ],
        specifications: [
            {
                category: "Interiors",
                items: ["Premium vitrified flooring throughout", "Gypsum-finished internal walls with luxury emulsion paint"]
            },
            {
                category: "Kitchen & Bath",
                items: ["Granite kitchen platform with stainless steel sink", "Exhaust fan provision", "Concealed plumbing with premium CP fittings"]
            },
            {
                category: "Safety",
                items: ["Video Door Phone", "Gas Leak Detector", "CCTV surveillance in public areas"]
            }
        ],
        floorPlans: [
            { type: "2 BHK Smart", carpetArea: "650 sq. ft." },
            { type: "2 BHK Luxury", carpetArea: "750 sq. ft." },
            { type: "3 BHK Grand", carpetArea: "950 sq. ft." }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/4.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/1.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/2.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/3.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.980646012613!2d73.7330548151978!3d18.574676187376046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc6da6fcb2b%3A0xcdaaaadd11c2e47c!2sHinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622616213032!5m2!1sen!2sin",
            landmarks: [
                { name: "Wipro Technologies", distance: "2.0 km" },
                { name: "Infosys Phase 1", distance: "2.5 km" },
                { name: "Symbiosis Institute", distance: "4.2 km" },
                { name: "Blue Ridge Public School", distance: "3.8 km" }
            ]
        },
        seoKeywords: [
            "Joyville Celestia Pune",
            "Joyville Celestia Hinjewadi",
            "Shapoorji Pallonji Hinjewadi Phase 1",
            "New launch Hinjewadi",
            "Flats in Hinjewadi Pune",
            "2 BHK Hinjewadi Phase 1",
            "Under construction projects Hinjewadi",
            "Hinjewadi property rates"
        ]
    },
    {
        id: "p4",
        slug: "joyville-skyluxe-hinjewadi",
        title: "Joyville Skyluxe Edition",
        location: "Hinjewadi Phase 1, Pune",
        price: "₹1.40 Cr Onwards",
        type: "3 BHK Ultra-Luxury",
        status: "Pre-Launch",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/4.webp",
        highlights: [
            "Private Terrace Options",
            "Concierge Services",
            "Italian Marble Flooring",
            "Unobstructed Skyline Views"
        ],
        description: "Limited edition residences for the discerning few. The Skyluxe Edition at Joyville Hinjewadi offers an incredibly rare combination of vast spaces, elite privacy, and panoramic views of Pune.",
        overview: [
            "Skyluxe Edition represents the apex of luxury living within the Joyville portfolio, offering exclusive low-density high-rise living.",
            "Crafted for the elite, every residence guarantees unobstructed panoramic views of the Pune skyline and surrounding hills.",
            "Features bespoke architectural elements, private elevator lobbies, and personal terrace options."
        ],
        amenities: [
            {
                category: "Bespoke Services",
                items: ["24/7 Elite Concierge", "Valet Parking", "Chauffeur Lounge", "Private Dining Room"]
            },
            {
                category: "Wellness & Spa",
                items: ["Temperature Controlled Pool", "Turkish Hammam", "Private Spa Suites", "State-of-the-art Health Club"]
            },
            {
                category: "Entertainment",
                items: ["Private Mini-Theatre", "Cigar Lounge", "Library & Reading Room", "Sky Lounge Observatory"]
            }
        ],
        specifications: [
            {
                category: "Ultra-Premium Finishes",
                items: ["Imported Italian Marble in living and dining areas", "Engineered wooden flooring in master bedrooms", "Floor-to-ceiling soundproof glass facades"]
            },
            {
                category: "Smart & Secure",
                items: ["Fully integrated home automation hub", "Keyless biometric entry", "Advanced HVAC systems provisions"]
            },
            {
                category: "Designer Kitchens",
                items: ["Modular kitchen with premium German appliances", "Quartz countertops", "Separate utility and servant's quarters"]
            }
        ],
        floorPlans: [
            { type: "3 BHK Skyluxe", carpetArea: "1,250 sq. ft." },
            { type: "3 BHK Penthouse", carpetArea: "1,850 sq. ft." }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/1.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/2.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/3.webp",
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/5.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.980646012613!2d73.7330548151978!3d18.574676187376046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc6da6fcb2b%3A0xcdaaaadd11c2e47c!2sHinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1622616213032!5m2!1sen!2sin",
            landmarks: [
                { name: "Hinjewadi Heliport", distance: "1.5 km" },
                { name: "Taj Vivanta", distance: "2.8 km" },
                { name: "Pune-Mumbai Expressway", distance: "4.5 km" },
                { name: "Aditya Birla Hospital", distance: "6.0 km" }
            ]
        },
        seoKeywords: [
            "Joyville Skyluxe Edition",
            "Premium flats near Mumbai-Pune Expressway",
            "Luxury apartments Hinjewadi Phase 1",
            "3 BHK luxury flats Hinjewadi",
            "Sky-luxe apartments Pune",
            "Hinjewadi luxury real estate"
        ]
    },
    {
        id: "p5",
        slug: "wildernest-sp-kingstown-pune",
        title: "Wildernest at SP Kingstown",
        location: "Pune",
        price: "Price on Request",
        type: "Residential Apartments",
        status: "Ongoing",
        image: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/sp-kingstown.jpg",
        highlights: [
            "Part of SP Kingstown",
            "Lush Green Surroundings",
            "Premium Amenities",
            "Strategic Location"
        ],
        description: "Discover a life of elegance at Wildernest at SP Kingstown. Offering a serene lifestyle with state-of-the-art facilities and natural beauty in Pune.",
        overview: [
            "Wildernest at SP Kingstown is a premium residential development by Shapoorji Pallonji in Pune.",
            "The community is designed with extensive open spaces, modern amenities, and sustainable features.",
            "Residents can enjoy a balanced lifestyle with dedicated zones for wellness, sports, and recreation."
        ],
        amenities: [
            {
                category: "Lifestyle",
                items: ["Grand Clubhouse", "Swimming Pool", "Landscaped Gardens", "Children's Play Area"]
            },
            {
                category: "Fitness & Sports",
                items: ["Fully Equipped Gymnasium", "Jogging Track", "Multipurpose Court"]
            }
        ],
        specifications: [
            {
                category: "Finishes",
                items: ["Premium flooring in all rooms", "High-quality fixtures and fittings", "Modern kitchen layout"]
            },
            {
                category: "Safety",
                items: ["24/7 Security", "CCTV Surveillance", "Fire safety systems"]
            }
        ],
        floorPlans: [
            { type: "Premium Residences", carpetArea: "Available on request" }
        ],
        masterLayout: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/sp-kingstown.jpg",
        gallery: [
            "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/sp-kingstown.jpg"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.8118063!3d18.5680199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM0JzA0LjkiTiA3M8KwNDgnNDIuNSJF!5e0!3m2!1sen!2sin!4v1622616213032!5m2!1sen!2sin",
            landmarks: [
                { name: "Prominent Schools", distance: "2 km" },
                { name: "Hospitals", distance: "3 km" },
                { name: "Shopping Centers", distance: "4 km" }
            ]
        },
        seoKeywords: [
            "Wildernest at SP Kingstown",
            "SP Kingstown Pune luxury flats",
            "Premium apartments near prominent schools Pune",
            "High-end real estate in Pune",
            "Serene residential projects Pune",
            "Elegant lifestyle homes Pune"
        ]
    },
    {
        id: "p6",
        slug: "vanaha-golfland-pune",
        title: "Vanaha Golfland",
        location: "Bavdhan, Pune",
        price: "Price on Request",
        type: "Luxury Residences",
        status: "Ongoing",
        image: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-golfland.jpg",
        highlights: [
            "Golf Course Views",
            "Expansive Township",
            "Exclusive Amenities",
            "Excellent Connectivity"
        ],
        description: "Vanaha Golfland offers an extraordinary lifestyle in Pune, featuring spectacular views of a lush golf course and premium living spaces.",
        overview: [
            "Vanaha Golfland is an exclusive residential enclave within the massive Vanaha township by Shapoorji Pallonji.",
            "It provides residents with unhindered views of the beautiful golf course and surrounding undulating greens.",
            "Designed to offer a resort-like everyday experience right in the heart of Pune."
        ],
        amenities: [
            {
                category: "Exclusive",
                items: ["Golf Course Access", "Boutique Clubhouse", "Infinity Pool", "Spa & Wellness Center"]
            },
            {
                category: "Community",
                items: ["Cafes and Lounges", "Outdoor Amphitheater", "Walking Trails"]
            }
        ],
        specifications: [
            {
                category: "Luxury Finishes",
                items: ["Imported marble flooring", "Modular kitchen with premium appliances", "Designer bathroom fittings"]
            },
            {
                category: "Smart Home",
                items: ["Home automation ready", "Video door phone", "Keyless entry"]
            }
        ],
        floorPlans: [
            { type: "Luxury Suites", carpetArea: "Available on request" }
        ],
        masterLayout: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-golfland.jpg",
        gallery: [
            "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-golfland.jpg"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.8118063!3d18.5680199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM0JzA0LjkiTiA3M8KwNDgnNDIuNSJF!5e0!3m2!1sen!2sin!4v1622616213032!5m2!1sen!2sin",
            landmarks: [
                { name: "Mumbai-Bengaluru Highway", distance: "2.5 km" },
                { name: "Hinjewadi IT Park", distance: "12 km" },
                { name: "Kothrud", distance: "6 km" }
            ]
        },
        seoKeywords: [
            "Vanaha Golfland Bavdhan",
            "Vanaha Pune by Shapoorji",
            "Flats for sale Bavdhan",
            "Luxury flats in Bavdhan Pune",
            "Golf course view apartments Pune",
            "Bavdhan real estate investment",
            "Living in Bavdhan"
        ]
    },
    {
        id: "p7",
        slug: "vanaha-springs-pune",
        title: "Vanaha Springs",
        location: "Bavdhan, Pune",
        price: "Price on Request",
        type: "Premium Residences",
        status: "Available",
        image: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha_spring.jpg",
        highlights: [
            "Part of 1000-Acre Township",
            "Abundant Open Spaces",
            "Modern Architecture",
            "Valley Views"
        ],
        description: "Embrace nature at Vanaha Springs, offering breathtaking valley views and a pristine environment away from the city's hustle.",
        overview: [
            "Vanaha Springs is a part of the vibrant Vanaha township, presenting homes that are deeply connected with nature.",
            "Surrounded by natural hills and scenic landscapes, it is a haven for peace and tranquility.",
            "Equipped with world-class amenities ensuring a modern yet comfortable lifestyle."
        ],
        amenities: [
            {
                category: "Recreation",
                items: ["Nature Trails", "Meditation Pavilion", "Multi-sports Courts", "Kids Play Area"]
            },
            {
                category: "Convenience",
                items: ["Retail Outlets", "Pharmacy", "ATM within compound"]
            }
        ],
        specifications: [
            {
                category: "Structure & Core",
                items: ["Earthquake resistant RCC structure", "Premium vitrified tiles", "Concealed copper wiring"]
            }
        ],
        floorPlans: [
            { type: "Premium Apartments", carpetArea: "Available on request" }
        ],
        masterLayout: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha_spring.jpg",
        gallery: [
            "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha_spring.jpg"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.8118063!3d18.5680199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM0JzA0LjkiTiA3M8KwNDgnNDIuNSJF!5e0!3m2!1sen!2sin!4v1622616213032!5m2!1sen!2sin",
            landmarks: [
                { name: "Chandni Chowk", distance: "4 km" },
                { name: "Pune Railway Station", distance: "16 km" }
            ]
        },
        seoKeywords: [
            "Vanaha Springs premium residences",
            "Apartments near Chandni Chowk",
            "Properties West Pune",
            "Flats surrounded by hills Pune",
            "Eco-friendly homes Pune",
            "Townships in Bavdhan"
        ]
    },
    {
        id: "p8",
        slug: "vanaha-pune",
        title: "Vanaha",
        location: "Bavdhan, Pune",
        price: "Price on Request",
        type: "Residential Township",
        status: "Available",
        image: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-pune.jpg",
        highlights: [
            "Massive Integrated Township",
            "Surrounded by Hills",
            "Urban Conveniences",
            "Sustainable Living"
        ],
        description: "Vanaha is not just a residence; it's an entire ecosystem thoughtfully poised in the magnificent valleys of Bavdhan, Pune.",
        overview: [
            "One of the largest townships in Pune, Vanaha blends sophisticated living with vast open expanses and rich biodiversity.",
            "It is meticulously designed to create a self-sustaining environment offering everything from healthcare to entertainment.",
            "A true representation of Shapoorji Pallonji's commitment to creating impactful communities."
        ],
        amenities: [
            {
                category: "Township Features",
                items: ["Schools & Education", "Healthcare Facilities", "Commercial Hubs", "Entertainment Zones"]
            },
            {
                category: "Lifestyle Elements",
                items: ["Grand Clubhouses", "Parks and Orchards", "Sports Complexes"]
            }
        ],
        specifications: [
            {
                category: "Premium Features",
                items: ["Vitrified flooring", "Premium wall finishes", "Energy-efficient lighting in common areas"]
            }
        ],
        floorPlans: [
            { type: "Standard Layouts", carpetArea: "Available on request" }
        ],
        masterLayout: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-pune.jpg",
        gallery: [
            "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-pune.jpg"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.8118063!3d18.5680199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM0JzA0LjkiTiA3M8KwNDgnNDIuNSJF!5e0!3m2!1sen!2sin!4v1622616213032!5m2!1sen!2sin",
            landmarks: [
                { name: "Oxford Golf Resort", distance: "2 km" },
                { name: "Symbiosis International University", distance: "8 km" }
            ]
        },
        seoKeywords: [
            "Vanaha Pune by Shapoorji",
            "Vanaha Bavdhan 3 BHK prices",
            "Townships in Bavdhan",
            "Flats surrounded by hills Pune",
            "1000 acre township Pune",
            "Flats for sale Bavdhan"
        ]
    },
    {
        id: "p9",
        slug: "shapoorji-treetopia-pune",
        title: "Shapoorji Pallonji Treetopia",
        location: "Jadhavwadi, Pune Growth Corridor",
        price: "Starting ₹84 Lakhs",
        type: "NA Bungalow Plots",
        status: "Under Construction",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/4.webp",
        highlights: [
            "Exotic Villa Plots",
            "Biophilic Landscapes",
            "Close to Purandar Airport",
            "RERA Compliant"
        ],
        description: "Premium NA plotted development in the Pune Growth Corridor near Jadhavwadi by Shapoorji Pallonji Real Estate. Plots ranging from 1800 to 5000+ sq. ft. surrounded by hills and nature.",
        overview: [
            "Shapoorji Pallonji Treetopia is a premium plotted development offering Regal and Grand villa plots for those looking for elite living and architectural liberty.",
            "Featuring Biophilic Landscapes, the project integrates nature into everyday living with a focus on sustainability and sprawling greenery.",
            "Strategically located in Jadhavwadi, just 10 minutes from the proposed Purandar Airport and Saswad, offering excellent investment advantages."
        ],
        amenities: [
            {
                category: "Lifestyle",
                items: ["Wellness & Recreation Hub", "Community & Social Interaction Zones", "Biophilic Gardens"]
            },
            {
                category: "Active Living",
                items: ["Sports & Active Living Zones"]
            }
        ],
        specifications: [
            {
                category: "Development",
                items: ["Clear Title Properties", "MahaRERA: PP1261012501803", "Sustainable & Essential Infrastructure", "Secured Gated Community"]
            }
        ],
        floorPlans: [
            { type: "Regal Plots", carpetArea: "1800 - 2000 Sq.Ft." },
            { type: "Grand Plots", carpetArea: "3000 - 5000+ Sq.Ft." }
        ],
        masterLayout: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/1.webp",
        gallery: [
            "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/3.webp"
        ],
        locationDetails: {
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.8118063!3d18.5680199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM0JzA0LjkiTiA3M8KwNDgnNDIuNSJF!5e0!3m2!1sen!2sin!4v1622616213032!5m2!1sen!2sin",
            landmarks: [
                { name: "Proposed Purandar Airport", distance: "10 mins" },
                { name: "Saswad Town", distance: "10 mins" },
                { name: "Pune Ring Road", distance: "Nearby" }
            ]
        },
        seoKeywords: [
            "Shapoorji Treetopia Pune",
            "Exotic Villa Plots Pune",
            "NA Bungalow Plots Pune",
            "Shapoorji Pallonji Treetopia Pune",
            "Plot Investment Pune",
            "Plots near Purandar Airport"
        ]
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
