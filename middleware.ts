import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { initFirebaseAdmin } from '../timeoclock/firebaseAdminConfig';

initFirebaseAdmin();

export async function middleware(request: NextRequest) {
  
  console.log('Middleware is running');
  
  const { pathname } = request.nextUrl;
  console.log('Middleware executed for:', pathname);

  const protectedRoutes = ['/timezone/home', '/timezone/shop', '/profile'];

  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return NextResponse.next();
  }

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const tokenCookie = request.cookies.get('authToken');
    const token = tokenCookie ? tokenCookie.value : null;

    if (!token) {
      console.log('No token found, redirecting to /login');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      await getAuth().verifyIdToken(token);
      console.log('Token verification successful');
      return NextResponse.next();
    } catch (error) {
      console.error('Token verification failed:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}
