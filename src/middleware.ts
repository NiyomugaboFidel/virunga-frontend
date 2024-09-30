import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parse } from 'cookie';
import jwt from 'jsonwebtoken'; // Install this library for decoding JWT

export const middleware = (request: NextRequest) => {
  // Parse the cookies to get the token
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = parse(cookieHeader);
  const token = cookies.token;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Decode the token
  try {
    const decodedToken = jwt.decode(token) as { exp: number };
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    // Check if the token is expired
    if (decodedToken.exp < currentTime) {
      // If expired, redirect to login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } catch (error) {
    // If the token is invalid or can't be decoded, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If token is valid and not expired, allow the request
  return NextResponse.next();
};

export const config = {
  matcher: ['/dashboard'], // Apply to the dashboard route
};
