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
    reraNumber: string | string[];
}

export const projects: Project[] = [
    {
        id: "p1",
        slug: "joyville-sensorium-hinjewadi",
        title: "Joyville Sensorium",
        location: "Off Maan Village Road, Hinjewadi Phase 1, Pune",
        price: "₹1.10 Cr - ₹1.45 Cr",
        type: "2 & 3 BHK Luxury Apartments",
        status: "Under Construction",
        reraNumber: ["P52100027234", "P52100024965", "P52100024963", "P52100027244", "P52100024964", "P52100045257", "P52100049547"],
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/1.webp",
        highlights: [
            "10.5 Acres Development",
            "75% Open Green Spaces",
            "Infinity Edge Pool",
            "Smart Home Automation"
        ],
        description: "Experience the pinnacle of sky-luxe living at Joyville Sensorium. A premier Shapoorji Pallonji residential project in Hinjewadi offering sprawling green spaces and over 60 majestic amenities.",
        overview: [
            "Joyville Sensorium Hinjewadi is a sprawling 10.5-acre township by Shapoorji Pallonji, offering premium walk to work apartments in Hinjewadi perfectly suited for IT professionals.",
            "Strategically positioned near Rajiv Gandhi Infotech Park, Infosys Pune, and Wipro, these smart home apartments in Hinjewadi Pune provide unmatched convenience and promise excellent rental yield in Hinjewadi for 2025.",
            "Whether you are looking to buy a 2 BHK flat in Hinjewadi Phase 1 under 1 crore or seeking 3 BHK luxury apartments, this RERA approved gated community offers comprehensive floor plans, EDGE certified sustainability, and a monumental 2.8-acre sunken garden."
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
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.980646012613!2d73.723826!3d18.559385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc6da6fcb2b%3A0xcdaaaadd11c2e47c!2sJoyville%20Sensorium!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Infosys Circle Phase 1", distance: "1.5 km" },
                { name: "Maan Road", distance: "0.5 km" },
                { name: "Wipro Circle", distance: "3.0 km" },
                { name: "Mumbai-Bangalore Highway", distance: "4.5 km" }
            ]
        },
        seoKeywords: [
            "Joyville Sensorium Hinjewadi",
            "Joyville Sensorium price",
            "Joyville Sensorium floor plan",
            "Joyville Sensorium reviews",
            "Joyville Sensorium possession date",
            "Shapoorji Pallonji Hinjewadi Phase 1",
            "Shapoorji Pallonji Pune projects",
            "flats in Hinjewadi",
            "2 BHK flats in Hinjewadi Phase 1",
            "3 BHK luxury apartments Hinjewadi",
            "luxury apartments Hinjewadi Phase 1",
            "new launch Hinjewadi 2025",
            "flats near Rajiv Gandhi Infotech Park",
            "under construction projects Hinjewadi",
            "flats near Wipro Hinjewadi",
            "flats near Infosys Pune",
            "residential projects near IT Park Pune",
            "RERA approved flats Hinjewadi Phase 1",
            "smart home apartments Hinjewadi Pune",
            "walk to work apartments Hinjewadi",
            "NRI investment flats Hinjewadi Pune",
            "rental yield Hinjewadi 2025",
            "buy 2 BHK flat Hinjewadi Phase 1 under 1 crore",
            "Joyville vs Kolte Patil Life Republic",
            "Joyville vs Godrej Hinjewadi",
            "property rates Hinjewadi 2025",
            "Pune IT Park residential projects",
            "gated community flats Hinjewadi",
            "10 acre township Hinjewadi"
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
        location: "Shewalewadi, Hadapsar, Pune",
        price: "₹65 L - ₹95 L",
        type: "1, 2 & 3 BHK Premium Flats",
        status: "Ready to Move Options",
        reraNumber: ["P52100026451", "P52100026479", "P52100026480", "P52100026478", "P52100026452", "P52100026800", "P52100026785", "P52100026797", "P52100026795", "P52100028311", "P52100028308", "P52100031391", "P52100031515", "P52100034911"],
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/1.webp",
        highlights: [
            "21 Acres Township",
            "8.8 Acres of Open Space",
            "60+ Premium Amenities",
            "Excellent connectivity to Magarpatta IT Park"
        ],
        description: "Joyville Hadapsar Annexe by Shapoorji Pallonji offers thoughtfully designed homes in East Pune. An oasis of calm with seamless connectivity to major IT hubs and retail destinations.",
        overview: [
            "Joyville Hadapsar Annexe by Shapoorji Pallonji is a mammoth 21-acre township in Hadapsar Pune, engineered to maximize community living with sprawling green spaces.",
            "Positioned in Shewalewadi on the Pune Solapur Highway, these affordable flats in Pune East offer unmatched connectivity, making them the ideal family apartments near SP Infocity Pune and Amanora Mall.",
            "With ready to move flats in Hadapsar and options ranging from the best 1 BHK flat in Hadapsar under 70 lakhs to spacious 3 BHK flats, residents enjoy 60+ premium amenities including a 35,000 sq. ft. clubhouse."
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
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.33748259646!2d73.967471!3d18.494437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9d2b291a271%3A0x6bba41a5d2cf5913!2sJoyville%20Hadapsar%20Annexe!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "SP Infocity", distance: "4.0 km" },
                { name: "Magarpatta IT Park", distance: "6.0 km" },
                { name: "Lexicon International School", distance: "3.2 km" },
                { name: "Amanora Mall", distance: "5.5 km" }
            ]
        },
        seoKeywords: [
            "Joyville Hadapsar Annexe",
            "Joyville Hadapsar Annexe price",
            "Joyville Hadapsar Annexe floor plan",
            "Joyville Hadapsar Annexe reviews",
            "Shapoorji Pallonji Hadapsar",
            "Shapoorji Pallonji Shewalewadi",
            "flats in Hadapsar Pune",
            "1 BHK flats Hadapsar",
            "2 BHK flats Hadapsar",
            "3 BHK flats Hadapsar",
            "flats near Magarpatta City",
            "flats near SP Infocity Pune",
            "ready to move flats Hadapsar",
            "affordable flats Pune East",
            "flats on Pune Solapur Highway",
            "township projects Hadapsar",
            "flats near Amanora Mall",
            "Shewalewadi property rates",
            "21 acre township Hadapsar Pune",
            "family apartments near SP Infocity Pune",
            "Joyville Hadapsar vs Amanora Trendsetter",
            "ready possession flats near Magarpatta IT Park",
            "Hadapsar real estate trends 2025",
            "best 1 BHK flat Hadapsar under 70 lakhs"
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
        slug: "joyville-celestia-hadapsar",
        title: "Joyville Celestia",
        location: "Shewalewadi, Off Pune-Solapur Highway, Pune",
        price: "₹85 L - ₹1.25 Cr",
        type: "2 & 3 BHK Apartments",
        status: "New Launch",
        reraNumber: "P52100048338",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/5.webp",
        highlights: [
            "Premium Club Life",
            "Vastu Compliant Homes",
            "Advanced Security Systems",
            "Lush Landscaping"
        ],
        description: "The newest landmark in East Pune. Joyville Celestia redefines modern urban living with celestial designs, high-end finishing, and standard-setting Shapoorji Pallonji construction quality in Hadapsar.",
        overview: [
            "Joyville Celestia in Hadapsar represents the pinnacle of Shapoorji Pallonji's new launch residential projects in East Pune for 2025, offering an unparalleled blend of celestial-inspired architecture.",
            "These premium 2 BHK and 3 BHK Vastu compliant homes in Hadapsar dedicate 75% of the project to open realms, ensuring a harmonious living environment with positive energy flow near Magarpatta City.",
            "Discover exclusive amenities rarely found in Flats in Hadapsar Pune, including an aqua gym, brain gym for kids, and pet-friendly spaces, solidifying its status as the most sought-after premium apartments in the Hadapsar growth corridor."
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
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.33748259646!2d73.967471!3d18.494437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9d2b291a271%3A0x6bba41a5d2cf5913!2sJoyville%20Hadapsar%20Annexe!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "SP Infocity", distance: "2.5 km" },
                { name: "Magarpatta City", distance: "4.5 km" },
                { name: "Lexicon International School", distance: "3.2 km" },
                { name: "Noble Hospital", distance: "5.0 km" }
            ]
        },
        seoKeywords: [
            "Joyville Celestia Pune",
            "Joyville Celestia Hadapsar",
            "Joyville Celestia price",
            "Joyville Celestia floor plan",
            "Shapoorji Pallonji Hadapsar",
            "new launch Hadapsar 2025",
            "flats in Hadapsar Pune",
            "2 BHK Hadapsar",
            "3 BHK Hadapsar",
            "Vastu compliant homes Hadapsar",
            "Hadapsar property rates 2025",
            "premium apartments Hadapsar",
            "under construction projects Hadapsar",
            "aqua gym apartments Pune",
            "pet friendly apartments Hadapsar",
            "brain gym kids Pune"
        ],
        faqs: [
            {
                question: "What is the starting price for Joyville Celestia in Hadapsar?",
                answer: "Joyville Celestia offers premium 2 BHK and 3 BHK Vastu-compliant apartments in Hadapsar starting from ₹85 Lakhs onwards, with 3 BHK configurations going up to ₹1.25 Cr."
            },
            {
                question: "Is Joyville Celestia Vastu compliant?",
                answer: "Yes, all residences at Joyville Celestia are designed with strict Vastu compliance, ensuring positive energy flow and optimal cross-ventilation in every home."
            },
            {
                question: "What unique amenities does Joyville Celestia offer?",
                answer: "Joyville Celestia features signature amenities including an Aqua Gym, Naturopathy Center, Brain Gym for Kids, Skating Rink, Pet Park, and a Hammock Garden — designed for holistic lifestyle living."
            }
        ]
    },
    {
        id: "p4",
        slug: "joyville-skyluxe-hadapsar",
        title: "Joyville Skyluxe Edition",
        location: "Shewalewadi, Off Pune-Solapur Highway, Pune",
        price: "₹1.40 Cr Onwards",
        type: "3 BHK Ultra-Luxury",
        status: "Pre-Launch",
        reraNumber: "P52100048338",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hinjewadi/gallery/4.webp",
        highlights: [
            "Private Terrace Options",
            "Concierge Services",
            "Italian Marble Flooring",
            "Unobstructed Skyline Views"
        ],
        description: "Limited edition residences for the discerning few. The Skyluxe Edition at Joyville Hadapsar offers an incredibly rare combination of vast spaces, elite privacy, and panoramic views of East Pune.",
        overview: [
            "The Joyville Skyluxe Edition introduces ultra luxury apartments in Hadapsar Pune, offering exclusive low-density high-rise living for the discerning elite near Magarpatta City.",
            "Every 3 BHK luxury flat and penthouse in Hadapsar guarantees unobstructed panoramic views of the skyline, complemented by Italian marble flooring and private terrace options.",
            "These sky luxe apartments feature bespoke architectural elements and 24/7 concierge services, setting a new benchmark for Shapoorji Pallonji luxury homes near the Pune-Solapur Highway."
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
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.33748259646!2d73.967471!3d18.494437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9d2b291a271%3A0x6bba41a5d2cf5913!2sJoyville%20Hadapsar%20Annexe!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "SP Infocity", distance: "2.5 km" },
                { name: "Magarpatta City", distance: "4.5 km" },
                { name: "Lexicon International School", distance: "3.2 km" },
                { name: "Amanora Mall", distance: "5.0 km" }
            ]
        },
        seoKeywords: [
            "Joyville Skyluxe Edition",
            "Joyville Skyluxe Hadapsar",
            "Joyville Skyluxe price",
            "ultra luxury apartments Hadapsar",
            "3 BHK luxury flats Hadapsar",
            "penthouse Hadapsar Pune",
            "sky luxe apartments Pune",
            "Hadapsar luxury real estate",
            "private terrace apartments Pune",
            "concierge services apartments Pune",
            "Italian marble flooring flats Pune",
            "premium flats near Pune Solapur Highway",
            "Shapoorji Pallonji luxury homes",
            "high rise apartments Hadapsar panoramic view",
            "pre launch luxury projects Hadapsar 2025"
        ],
        faqs: [
            {
                question: "What makes Joyville Skyluxe Edition different from other Hadapsar projects?",
                answer: "Skyluxe Edition is the ultra-luxury pinnacle of the Joyville portfolio in Hadapsar. It features imported Italian marble flooring, private terrace options, concierge services, Turkish Hammam spa, and panoramic views — amenities typically found in 5-star hotels, not residential projects."
            },
            {
                question: "What is the starting price for Joyville Skyluxe Edition?",
                answer: "Joyville Skyluxe Edition starts from ₹1.40 Cr onwards for exclusive 3 BHK Skyluxe configurations. The penthouse collection starts at higher price points with carpet areas up to 1,850 sq. ft."
            },
            {
                question: "Does Joyville Skyluxe offer smart home features?",
                answer: "Yes, every Skyluxe residence comes with a fully integrated home automation hub, keyless biometric entry, advanced HVAC provisions, and video door phone systems as standard."
            }
        ]
    },
    {
        id: "p5",
        slug: "wildernest-sp-kingstown-pune",
        title: "Wildernest at SP Kingstown",
        location: "SP Kingstown, Shewalewadi Road, Pune",
        price: "Price on Request",
        type: "Residential Apartments",
        status: "Ongoing",
        reraNumber: ["P52100052683", "P52100053177", "P52100053966", "P52100054077"],
        image: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/sp-kingstown.jpg",
        highlights: [
            "Part of SP Kingstown",
            "Lush Green Surroundings",
            "Premium Amenities",
            "Strategic Location"
        ],
        description: "Discover a life of elegance at Wildernest at SP Kingstown. Offering a serene lifestyle with state-of-the-art facilities and natural beauty in Pune.",
        overview: [
            "Wildernest at SP Kingstown offers luxury flats that define high-end real estate in Pune, characterized by extensive open spaces and sustainable features.",
            "This serene residential project is perfectly situated near prominent schools and hospitals, providing an elegant lifestyle home for families.",
            "Residents of these premium apartments enjoy a balanced lifestyle with dedicated wellness zones, grand clubhouses, and beautifully landscaped gardens."
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
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.33748259646!2d73.971248!3d18.502989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1df15d55555%3A0x5555555555555555!2sSP%20Kingstown!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Manjri Stud Farm", distance: "Nearby" },
                { name: "SP Infocity", distance: "4.0 km" },
                { name: "Lexicon International School", distance: "3.2 km" },
                { name: "Pune-Solapur Highway", distance: "0.5 km" }
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
        location: "Bavdhan, Pune (Near Oxford Golf Resort)",
        price: "Price on Request",
        type: "Luxury Residences",
        status: "Ongoing",
        reraNumber: "P52100052531",
        image: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-golfland.jpg",
        highlights: [
            "Golf Course Views",
            "Expansive Township",
            "Exclusive Amenities",
            "Excellent Connectivity"
        ],
        description: "Vanaha Golfland offers an extraordinary lifestyle in Pune, featuring spectacular views of a lush golf course and premium living spaces.",
        overview: [
            "Vanaha Golfland in Bavdhan is an exclusive residential enclave by Shapoorji Pallonji offering spectacular golf course view apartments in Pune.",
            "These luxury flats in Bavdhan Pune provide a true resort-style living experience with unhindered views of undulating greens, a boutique clubhouse, and infinity pool apartments.",
            "Located near the Mumbai Pune Expressway and Chandni Chowk, this township represents an exceptional Bavdhan real estate investment opportunity."
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
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.782777!3d18.535277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf383063510f%3A0xc3cf7b25752a229!2sOxford%20Golf%20Resort!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "FLAME University", distance: "Nearby" },
                { name: "Ryan International School", distance: "Nearby" },
                { name: "Chandni Chowk", distance: "4.0 km" },
                { name: "Sahyadri Hospital", distance: "6.0 km" }
            ]
        },
        seoKeywords: [
            "Vanaha Golfland Bavdhan",
            "Vanaha Golfland price",
            "Vanaha Pune by Shapoorji",
            "flats in Bavdhan Pune",
            "2 BHK Bavdhan",
            "3 BHK Bavdhan",
            "luxury flats in Bavdhan Pune",
            "golf course view apartments Pune",
            "Bavdhan real estate investment",
            "flats near Mumbai Pune Expressway",
            "township Bavdhan Pune",
            "flats near Chandni Chowk Pune",
            "resort style living Pune",
            "infinity pool apartments Bavdhan",
            "Shapoorji Pallonji Bavdhan"
        ],
        faqs: [
            {
                question: "Does Vanaha Golfland offer actual golf course views?",
                answer: "Yes, Vanaha Golfland is designed within the Vanaha township to provide residents with unhindered views of the beautiful golf course and surrounding undulating greens, offering a resort-like everyday experience."
            },
            {
                question: "How far is Vanaha Golfland from Hinjewadi IT Park?",
                answer: "Vanaha Golfland in Bavdhan is approximately 12 km from Hinjewadi IT Park, with excellent connectivity via the Mumbai-Bengaluru Highway and the Chandni Chowk junction."
            }
        ]
    },
    {
        id: "p7",
        slug: "vanaha-springs-pune",
        title: "Vanaha Springs",
        location: "Bavdhan, Pune (Near Oxford Golf Resort)",
        price: "Price on Request",
        type: "Premium Residences",
        status: "Available",
        reraNumber: ["P52100028031", "P52100028082", "P52100028033"],
        image: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha_spring.jpg",
        highlights: [
            "Part of 1000-Acre Township",
            "Abundant Open Spaces",
            "Modern Architecture",
            "Valley Views"
        ],
        description: "Embrace nature at Vanaha Springs, offering breathtaking valley views and a pristine environment away from the city's hustle.",
        overview: [
            "Vanaha Springs is a premium enclave within the 1000-acre township in Pune, presenting nature-centric valley view apartments deeply connected with their surroundings.",
            "These eco-friendly homes in Pune are surrounded by natural hills and scenic landscapes, offering a haven of peace just minutes from Chandni Chowk.",
            "Residents can enjoy unique amenities like a meditation pavilion and nature trails, making these some of the most sought-after flats surrounded by hills in West Pune."
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
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.782777!3d18.535277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf383063510f%3A0xc3cf7b25752a229!2sOxford%20Golf%20Resort!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Oxford Golf Course", distance: "Nearby" },
                { name: "Chandni Chowk", distance: "4.0 km" },
                { name: "Sahyadri Hospital", distance: "6.0 km" },
                { name: "Kothrud", distance: "6.0 km" }
            ]
        },
        seoKeywords: [
            "Vanaha Springs Bavdhan",
            "Vanaha Springs premium residences",
            "Vanaha Springs price",
            "apartments near Chandni Chowk Pune",
            "properties West Pune",
            "flats surrounded by hills Pune",
            "eco friendly homes Pune",
            "townships in Bavdhan",
            "valley view apartments Pune",
            "1000 acre township Pune",
            "nature centric apartments Pune",
            "meditation pavilion apartments Pune",
            "Shapoorji Pallonji Bavdhan township"
        ],
        faqs: [
            {
                question: "What makes Vanaha Springs different from other Bavdhan projects?",
                answer: "Vanaha Springs is part of the massive 1,000-acre Vanaha township by Shapoorji Pallonji, offering breathtaking valley views, nature trails, meditation pavilions, and homes deeply connected with nature — surrounded by natural hills and scenic landscapes."
            },
            {
                question: "Is Vanaha Springs an eco-friendly development?",
                answer: "Yes, Vanaha Springs prioritizes sustainable and eco-friendly living with earthquake-resistant RCC structures, rainwater harvesting, extensive green spaces, and energy-efficient common area lighting."
            }
        ]
    },
    {
        id: "p8",
        slug: "vanaha-pune",
        title: "Vanaha",
        location: "Bavdhan, Pune (Near Oxford Golf Resort)",
        price: "Price on Request",
        type: "Residential Township",
        status: "Available",
        reraNumber: ["P52100028031", "P52100028082", "P52100028033"],
        image: "https://www.shapoorjipallonji.com/assets/Desktop/Projects/640x640/vanaha-pune.jpg",
        highlights: [
            "Massive Integrated Township",
            "Surrounded by Hills",
            "Urban Conveniences",
            "Sustainable Living"
        ],
        description: "Vanaha is not just a residence; it's an entire ecosystem thoughtfully poised in the magnificent valleys of Bavdhan, Pune.",
        overview: [
            "Vanaha by Shapoorji Pallonji is one of the largest integrated townships in Pune, spanning an impressive 1000 acres in the magnificent valleys of Bavdhan.",
            "Designed as a completely self-sustaining township in Pune, it offers exceptional community living with onsite schools, healthcare facilities, commercial hubs, and entertainment zones.",
            "These flats in Bavdhan perfectly blend sophisticated urban conveniences with vast open expanses, rich biodiversity, and sustainable living practices."
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
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d73.782777!3d18.535277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf383063510f%3A0xc3cf7b25752a229!2sOxford%20Golf%20Resort!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Oxford Golf Resort", distance: "Nearby" },
                { name: "Symbiosis International University", distance: "8.0 km" },
                { name: "Chandni Chowk", distance: "4.0 km" },
                { name: "Mumbai-Pune Expressway", distance: "Nearby" }
            ]
        },
        seoKeywords: [
            "Vanaha Pune by Shapoorji",
            "Vanaha Bavdhan",
            "Vanaha Bavdhan 3 BHK prices",
            "townships in Bavdhan",
            "1000 acre township Pune",
            "flats for sale Bavdhan",
            "largest township Pune",
            "integrated township Bavdhan",
            "Shapoorji Pallonji Bavdhan",
            "self sustaining township Pune",
            "sustainable living Pune",
            "flats surrounded by hills Pune",
            "community living Pune"
        ],
        faqs: [
            {
                question: "How large is the Vanaha township in Bavdhan?",
                answer: "Vanaha is one of the largest integrated townships in Pune, spanning approximately 1,000 acres. It includes schools, healthcare facilities, commercial hubs, entertainment zones, grand clubhouses, parks, orchards, and sports complexes."
            },
            {
                question: "Is Vanaha a self-sustaining township?",
                answer: "Yes, Vanaha is meticulously designed to create a self-sustaining environment offering everything from healthcare and education to retail and entertainment within the township premises."
            }
        ]
    },
    {
        id: "p9",
        slug: "shapoorji-treetopia-pune",
        title: "Shapoorji Pallonji Treetopia",
        location: "Jadhavwadi, Purandhar, Pune Growth Corridor",
        price: "Starting ₹84 Lakhs",
        type: "NA Bungalow Plots",
        status: "Under Construction",
        reraNumber: "PP1261012501803",
        image: "https://www.joyvillehomes.com/files/assets/jpegs/all_projects/hadapsar-pune/gallery/4.webp",
        highlights: [
            "Exotic Villa Plots",
            "Biophilic Landscapes",
            "Close to Purandar Airport",
            "RERA Compliant"
        ],
        description: "Premium NA plotted development in the Pune Growth Corridor near Jadhavwadi by Shapoorji Pallonji Real Estate. Plots ranging from 1800 to 5000+ sq. ft. surrounded by hills and nature.",
        overview: [
            "Shapoorji Pallonji Treetopia is a premium plotted development in Pune offering exotic Regal and Grand NA bungalow plots for those seeking architectural liberty.",
            "Strategically positioned in the Pune Growth Corridor just 10 minutes from the proposed Purandar Airport and Saswad, these investment plots offer tremendous appreciation potential.",
            "Featuring Biophilic Landscapes, this RERA compliant project integrates nature into everyday living with extensive wellness hubs and sports zones."
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
            iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.530664989065!2d74.533145!3d18.447577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9d2b291a271%3A0x6bba41a5d2cf5913!2sJadhavwadi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            landmarks: [
                { name: "Proposed Purandar Airport", distance: "20 mins" },
                { name: "Saswad Town", distance: "10 mins" },
                { name: "Hadapsar", distance: "25 mins" },
                { name: "Pune Ring Road", distance: "Nearby" }
            ]
        },
        seoKeywords: [
            "Shapoorji Treetopia Pune",
            "Shapoorji Pallonji Treetopia price",
            "exotic villa plots Pune",
            "NA bungalow plots Pune",
            "plots near Purandar Airport",
            "villa plots Pune",
            "plotted development near Pune Ring Road",
            "Jadhavwadi property investment",
            "land investment near Pune airport",
            "biophilic landscapes plots Pune",
            "RERA approved plots Pune",
            "Shapoorji Pallonji plots offering",
            "Pune growth corridor real estate",
            "plot investment Pune 2025",
            "gated community plots Pune"
        ]
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
