import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authorization')?.value;

  if (request.nextUrl.pathname.includes('/mypage') && !token) {
    return NextResponse.rewrite(new URL('/login', request.nextUrl));
  }
}
