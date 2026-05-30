import { NextResponse } from 'next/server';
import { SEO_ROUTES } from '@/data/seo-routes';
import { projects } from '@/data/projects';

const INDEXNOW_KEY = '582cfba9a2c34255959929007f3bc6cf';
const HOST = 'joyville-homes.com';

/**
 * Automates IndexNow pings for Bing, Yandex, and Seznam.
 * Endpoint: /api/indexnow
 */
export async function POST(req: Request) {
    try {
        // Authenticate request (simple static bearer token or internal cron check in production)
        const authHeader = req.headers.get('authorization');
        if (authHeader !== `Bearer ${process.env.INDEXNOW_SECRET || 'dev_secret'}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Generate URL list
        const urlList = [
            `https://${HOST}/`,
            `https://${HOST}/projects`,
            `https://${HOST}/properties`,
            ...projects.map(p => `https://${HOST}/projects/${p.slug}`),
            ...SEO_ROUTES.map(r => `https://${HOST}/properties/${r.slug}`)
        ];

        // Format IndexNow Payload
        const payload = {
            host: HOST,
            key: INDEXNOW_KEY,
            keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
            urlList: urlList
        };

        // Ping Bing
        const bingRes = await fetch('https://www.bing.com/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        // Ping Yandex
        const yandexRes = await fetch('https://yandex.com/indexnow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        return NextResponse.json({
            success: true,
            urlsSubmitted: urlList.length,
            bingStatus: bingRes.status,
            yandexStatus: yandexRes.status
        });

    } catch (error) {
        console.error('IndexNow submission failed:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
