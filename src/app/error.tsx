'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Silently log the error to our telemetry endpoint
    fetch('/api/telemetry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message: error.message,
            digest: error.digest,
            stack: error.stack,
            url: window.location.href,
            timestamp: new Date().toISOString()
        })
    }).catch(() => {
        // Fail silently if telemetry is unreachable
    });
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#EEF2F6] px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#323334] mb-4">We encountered an unexpected interruption.</h2>
        <p className="text-sm text-[#323334]/70 max-w-md mx-auto mb-8">
            Our engineering team has been automatically notified. You can safely return to the homepage or try reloading this view.
        </p>
        <div className="flex gap-4">
            <button
                onClick={() => reset()}
                className="px-8 py-3 bg-[#1D4F9C] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#323334] transition-colors"
            >
                Reload Component
            </button>
            <Link 
                href="/"
                className="px-8 py-3 bg-transparent border border-[#C5A059] text-[#1D4F9C] text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#C5A059] hover:text-[#FFFFFF] transition-colors"
            >
                Return Home
            </Link>
        </div>
    </div>
  );
}
