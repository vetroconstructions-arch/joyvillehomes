import { ENTITIES } from '@/data/entities';

export const dynamic = 'force-static';

export async function GET() {
    const siteUrl = 'https://joyville-homes.com';
    const timestamp = new Date().toISOString();

    // Generate a strictly formatted NAP JSON for Local Directory APIs (Yext, BrightLocal, etc.)
    const localDirectoryPayload = {
        "meta": {
            "last_updated": timestamp,
            "source": "Joyville Homes Central Architecture",
            "schema_version": "1.1.0"
        },
        "business_entities": [
            {
                "id": "joyville-homes-pune-hq",
                "name": "Shapoorji Pallonji Real Estate Pune",
                "legal_name": ENTITIES.DEVELOPER.legalName,
                "categories": ["Real Estate Developer", "Home Builder", "Real Estate Agency"],
                "description": "Official Shapoorji Pallonji Joyville Homes Pune platform. Providing premium 1, 2 & 3 BHK residences across Hinjewadi, Hadapsar, and Bavdhan.",
                "url": siteUrl,
                "phone": "+912067210000",
                "address": {
                    "street": "SP Infocity, Phursungi IT Park",
                    "city": "Pune",
                    "region": "Maharashtra",
                    "postal_code": "412308",
                    "country": "IN"
                },
                "coordinates": {
                    "lat": 18.4900,
                    "lng": 73.9700
                },
                "hours": {
                    "monday": "09:30-18:30",
                    "tuesday": "09:30-18:30",
                    "wednesday": "09:30-18:30",
                    "thursday": "09:30-18:30",
                    "friday": "09:30-18:30",
                    "saturday": "09:30-18:30",
                    "sunday": "Closed"
                },
                "social_profiles": ENTITIES.DEVELOPER.sameAs
            }
        ]
    };

    return new Response(JSON.stringify(localDirectoryPayload, null, 2), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
        },
    });
}
