// 'use server'
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// // Define public routes that do not require authentication
// const isPublicRoute = createRouteMatcher([
//   '/', // Home page
//   '/api/clerk-webhook', // Clerk webhook endpoint
//   '/api/drive-activity/notification', // Drive activity notification endpoint
//   '/api/payment/success', // Payment success endpoint
// ])

// // Middleware to protect routes based on the route matcher
// export default clerkMiddleware((auth, request) => {
//   // Apply protection to routes that are not public
//   if (!isPublicRoute(request)) {
//     auth().protect()
//   }
// })

// // Configuration for the middleware matcher
// export const config = {
//   matcher: [
//     // Apply middleware to all routes except for static files and Next.js internal paths
//     '/((?!.+\\.[\\w]+$|_next).*)',
//     '/', // Home page
//     '/(api|trpc)(.*)', // API and tRPC routes
//   ],
// }



import { authMiddleware } from '@clerk/nextjs/server'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
  ],
  ignoredRoutes: [
    '/api/auth/callback/discord',
    '/api/auth/callback/notion',
    '/api/auth/callback/slack',
    '/api/flow',
    '/api/cron/wait',
  ],
 
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

// https://www.googleapis.com/auth/userinfo.email
// https://www.googleapis.com/auth/userinfo.profile
// https://www.googleapis.com/auth/drive.activity.readonly
// https://www.googleapis.com/auth/drive.metadata
// https://www.googleapis.com/auth/drive.readonly