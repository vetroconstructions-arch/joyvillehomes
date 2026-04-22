import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';

// Import data registries directly for 100% URL discovery
import { projects } from '../src/data/projects';
import { blogs } from '../src/data/blogs';
import { TOPIC_HUBS } from '../src/data/TopicIntelligence';
import { localities } from '../src/data/localities';
import { SEO_ROUTES } from '../src/data/seo-routes';
import { NRI_REGIONS } from '../src/data/GlobalNRI';
import { generateUnitSlug } from '../src/utils/seo-utils';

/**
 * Sovereign Google Indexing API Bridge - Professional Edition
 * Dynamically aggregates 180+ URLs across all programmatic clusters.
 */

const SITE_URL = "https://joyville-homes.com";

async function main() {
    console.log("🚀 Initializing Sovereign Google Indexing API Bridge...");

    const keyPath = path.join(process.cwd(), 'service_account.json');
    if (!fs.existsSync(keyPath)) {
        console.error('❌ Error: service_account.json not found in the root directory.');
        console.warn('⚠️  Skipping indexing sweep. Please add service_account.json to enable automation.');
        return;
    }

    // 1. URL Discovery Engine
    const urls: string[] = [
        `${SITE_URL}`,
        `${SITE_URL}/projects`,
        `${SITE_URL}/flats-in-pune`,
        `${SITE_URL}/insights`,
        `${SITE_URL}/pune-real-estate-market`,
        `${SITE_URL}/locality/compare`,
        `${SITE_URL}/insights/nri-investment-guide`,
        
        // Dynamic Project Routes
        ...projects.map(p => `${SITE_URL}/projects/${p.slug}`),
        
        // Dynamic Unit Routes
        ...projects.flatMap(p => p.floorPlans.map(fp => 
            `${SITE_URL}/properties/unit/${generateUnitSlug(p.title, fp.type, p.location)}`
        )),
        
        // Dynamic Locality Routes
        ...localities.map(l => `${SITE_URL}/locality/${l.slug}`),
        
        // Dynamic PSEO Routes
        ...SEO_ROUTES.map(r => `${SITE_URL}/properties/${r.slug}`),
        
        // Dynamic Blog Routes
        ...blogs.map(b => `${SITE_URL}/insights/${b.slug}`),
        
        // Dynamic Topic Hub Routes
        ...TOPIC_HUBS.map(t => `${SITE_URL}/insights/topic/${t.id}`),
        
        // Dynamic Author Routes
        ...blogs.map(b => b.expertAuthor?.name).filter(Boolean).map(name => 
            `${SITE_URL}/insights/author/${name?.toLowerCase().replace(/\s+/g, '-')}`
        ),
        
        // Dynamic NRI Region Routes
        ...NRI_REGIONS.map(r => `${SITE_URL}/insights/nri/region/${r.id}`)
    ];

    // Deduplicate URLs
    const UNIQUE_URLS = [...new Set(urls)];

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: keyPath,
            scopes: ['https://www.googleapis.com/auth/indexing'],
        });

        const authClient = await auth.getClient();
        const indexing = google.indexing({
            version: 'v3',
            auth: authClient as any,
        });

        console.log(`📤 Pushing ${UNIQUE_URLS.length} Sovereign URLs to Google Indexing API...`);

        // Google Indexing API Quota is typically 200 URLs per day per project.
        // We will slice if needed, but for now, we process all in one run.
        const results = {
            lastRun: new Date().toISOString(),
            totalUrls: UNIQUE_URLS.length,
            successCount: 0,
            failCount: 0,
            details: [] as any[]
        };

        for (const url of UNIQUE_URLS) {
            try {
                const res = await indexing.urlNotifications.publish({
                    requestBody: {
                        url: url,
                        type: 'URL_UPDATED',
                    },
                });
                console.log(`✅ [INDEXED] ${url} | Status: ${res.status}`);
                results.successCount++;
                results.details.push({ url, status: res.status, error: null });
            } catch (error: any) {
                results.failCount++;
                results.details.push({ url, status: error.code || 500, error: error.message });
                if (error.code === 429) {
                    console.error(`🛑 [QUOTA EXCEEDED] Stopping sweep. ${error.message}`);
                    break;
                }
                console.error(`❌ [ERROR] ${url} | ${error.message}`);
            }
        }

        // Persist results for UI status component
        fs.writeFileSync(path.join(process.cwd(), 'last-indexing.json'), JSON.stringify(results, null, 2));
        console.log("🎉 Sovereign Indexing sweep complete! Results saved to last-indexing.json");

    } catch (err: any) {
        console.error('💥 Critical Indexing Error:', err.message);
    }
}

main();
