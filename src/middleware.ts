import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import NextAuth from 'next-auth'
import authConfig from './next-auth.config'


const {auth: middleware} = NextAuth(authConfig)

const isPublicRoutes = [
  "/",
  "/sign-in",
  "/sign-up"
]

const authPaths = [
  "/sign-in",
  "/sign-up",
]

export default middleware((req) => {
  if (authPaths.includes(req.nextUrl.pathname)) {
    if (req.auth) {
      return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
  }

  if (!req.auth) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }
  return NextResponse.next()
})


export const config = {
  matcher: ["/sign-in", "/sign-up","/u/:usermane"]
}