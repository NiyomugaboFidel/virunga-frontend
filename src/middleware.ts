// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { parse } from 'cookie';
// import jwt from 'jsonwebtoken'; // Ensure this library is installed
// import createMiddleware from 'next-intl/middleware';
// import { routing } from './i18n/routing';

// // JWT Authentication Middleware
// export const middleware = (request: NextRequest) => {
//   // Parse the cookies to get the token
//   const cookieHeader = request.headers.get('cookie') || '';
//   const cookies = parse(cookieHeader);
//   const token = cookies.token;

//   // If no token, redirect to login
//   if (!token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // Decode the token
//   try {
//     const decodedToken = jwt.decode(token) as { exp: number };
//     const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

//     // Check if the token is expired
//     if (decodedToken.exp < currentTime) {
//       // If expired, redirect to login
//       return NextResponse.redirect(new URL('/login', request.url));
//     }
//   } catch (error) {
//     // If the token is invalid or can't be decoded, redirect to login
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // If token is valid and not expired, allow the request
//   return NextResponse.next();
// };

// // i18n Middleware
// const intlMiddleware = createMiddleware(routing);

// // Merge the two middlewares into a single function
// export async function combinedMiddleware(request: NextRequest) {
//   // Apply the JWT middleware first
//   const jwtResponse = middleware(request);
//   if (jwtResponse) {
//     return jwtResponse;
//   }

//   // Apply the i18n middleware after JWT is verified
//   return intlMiddleware(request);
// }

// // Export matcher config for both middlewares
// export const config = {
//   matcher: [
//     '/',                // Home route
//     '/dashboard',       // Dashboard route (secured)
//     '/(id|rw|fr|en)/:path*',  // i18n routes for internationalized pathnames
//   ],
// };
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|static|.*\\..*|_next).*)']
};