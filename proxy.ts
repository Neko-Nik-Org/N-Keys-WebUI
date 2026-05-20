import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Check for auth-token cookie set on login
  const hasToken = request.cookies.has('auth-token')
  
  // Protect all /dashboard routes — redirect to login if not authenticated
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!hasToken) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('next', request.nextUrl.pathname + request.nextUrl.search)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Prevent logged-in users from seeing the login page again
  if (request.nextUrl.pathname === '/login' && hasToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Apply middleware to these routes
  matcher: ['/dashboard/:path*', '/login'],
}
