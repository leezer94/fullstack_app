import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authorization')?.value;

  if (request.url.includes('/login') && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // if (request.url.includes('/todos') && !token) {
  //   return NextResponse.rewrite(new URL('/login', request.url));
  // }
}
