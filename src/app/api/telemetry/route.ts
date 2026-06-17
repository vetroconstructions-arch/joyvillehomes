import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();
        
        // In a production environment, this would hit Datadog, Sentry, or Logflare
        // Here we silently log it to the secure server console (stdout) for zero-overhead tracking
        console.error("🚨 [TELEMETRY_ALERT] Client-Side Crash Detected:", JSON.stringify(payload, null, 2));

        return NextResponse.json({ status: "logged" }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
}
