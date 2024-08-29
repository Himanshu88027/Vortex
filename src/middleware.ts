import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(
  [
    '/sign-in',
    '/sign-up',
  ]
)

export default clerkMiddleware((auth, req) => {
  const {userId} = auth();
  const currentUrl = new URL(req.url);
  const isAccessingHome = currentUrl.pathname === '/'

  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/sign-in", req.url))
  }

  if (userId && isPublicRoute(req)) {
    return NextResponse.redirect(new URL("/", req.url))
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};