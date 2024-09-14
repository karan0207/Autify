'use server'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define public routes that do not require authentication
const isPublicRoute = createRouteMatcher([
  '/', // Home page
  '/api/clerk-webhook', // Clerk webhook endpoint
  '/api/drive-activity/notification', // Drive activity notification endpoint
  '/api/payment/success', // Payment success endpoint
])

// Middleware to protect routes based on the route matcher
export default clerkMiddleware((auth, request) => {
  // Apply protection to routes that are not public
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

// Configuration for the middleware matcher
export const config = {
  matcher: [
    // Apply middleware to all routes except for static files and Next.js internal paths
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/', // Home page
    '/(api|trpc)(.*)', // API and tRPC routes
  ],
}
