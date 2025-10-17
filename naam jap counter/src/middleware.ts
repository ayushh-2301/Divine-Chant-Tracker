import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple middleware to log requests
export function middleware(request: NextRequest) {
  console.log('Request:', request.nextUrl.pathname);
  return NextResponse.next();
}

// Configure which paths the middleware should run on
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