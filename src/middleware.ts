import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  /* 
  // Redirect www to non-www
  // Temporarily disabled to prevent redirect loop with Vercel settings.
  // Set joyville-homes.com as Primary Domain in Vercel to handle this correctly.
  if (host && host.startsWith('www.')) {
    const nextHost = host.replace(/^www\./, '');
    url.host = nextHost;
    return NextResponse.redirect(url, 301);
  }
  */

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
