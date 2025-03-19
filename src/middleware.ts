// import { authMiddleware } from '@clerk/nextjs/server';

// export default authMiddleware({
//   publicRoutes: [
//     '/',
//     '/api/clerk-webhook',
//     '/api/drive-activity/notification',
//     '/api/payment/success',
//   ],
//   afterAuth: (auth, req, evt) => {
//     if (!auth.userId && req.nextUrl.pathname === '/dashboard') {
//       // Redirect to sign-in page if not authenticated
//       return new Response('Please sign in to access the dashboard', { status: 401 });
//     }
//   },
// });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };



import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard', // Add any other protected routes here
]);

export default clerkMiddleware((auth, req) => {
  // Public routes
  const publicRoutes = [
    '/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
  ];

  // If the route is public, allow access
  if (publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // If the route is protected and the user is not authenticated, redirect to sign-in
  if (isProtectedRoute(req) && !auth().userId) {
    return new Response('Please sign in to access the dashboard', { status: 401 });
  }

  // Allow access to authenticated users
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};