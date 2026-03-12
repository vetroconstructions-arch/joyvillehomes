/**
 * Entity Intelligence Library
 * Centralizes Knowledge Graph identifiers for semantic SEO across the platform.
 */

export const ENTITIES = {
    DEVELOPER: {
        name: "Shapoorji Pallonji Real Estate",
        legalName: "Shapoorji Pallonji & Company Pvt. Ltd.",
        url: "https://www.shapoorjipallonji.com",
        sameAs: [
            "https://en.wikipedia.org/wiki/Shapoorji_Pallonji_Group",
            "https://www.linkedin.com/company/shapoorji-pallonji-real-estate",
            "https://twitter.com/SPRealEstate_In",
            "https://www.facebook.com/ShapoorjiPallonjiRealEstate/"
        ],
        legacy: "Since 1865 (150+ Years)",
        foundingDate: "1865",
        founder: "Pallonji Mistry",
        hq: "Mumbai, India",
        iconicStructures: [
            "Reserve Bank of India (Mumbai)",
            "The Imperial (Mumbai)",
            "Palace of the Sultan of Oman",
            "Indian Parliament (New Delhi - Central Vista)"
        ],
        story: "Shapoorji Pallonji is a global diversified institution with a legacy spanning over 150 years. From crafting the face of modern India with the RBI building to the historic Central Vista, SP represents the highest tier of engineering excellence."
    },
    BRAND: {
        name: "Joyville Homes",
        concept: "Premium Lifestyle by Shapoorji Pallonji",
        target: "Mid-to-Premium Market",
        pillars: ["Transparency", "Reliability", "Trust", "Quality"]
    },
    TECHNOLOGIES: {
        ALUFORM: {
            name: "Advanced Aluform Construction Technology",
            description: "Monolithic concrete structure for superior strength, earthquake resistance, and leak-proof finishes.",
            benefits: ["Speed of construction", "Uniformity", "Durability"]
        }
    },
    CORE_LANDMARKS: {
        PUNE_METRO: {
            name: "Pune Metro Line 3",
            synonyms: ["Hinjewadi-Shivajinagar Metro", "IT Metro Line"],
            url: "https://www.punemetroline3.org"
        },
        WIPRO_CIRCLE: {
            name: "Wipro Circle Hinjewadi",
            type: "IT Landmark"
        },
        SP_INFOCITY: {
            name: "SP Infocity Phursungi",
            type: "IT SEZ"
        },
        MAGARPATTA: {
            name: "Magarpatta City",
            type: "Integrated Township"
        }
    }
};
