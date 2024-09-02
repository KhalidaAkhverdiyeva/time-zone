import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { initFirebaseAdmin } from '../timeoclock/firebaseAdminConfig';

initFirebaseAdmin();

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return NextResponse.next();
  }

  const tokenCookie = request.cookies.get('authToken');
  const token = tokenCookie ? tokenCookie.value : null;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    await getAuth().verifyIdToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
