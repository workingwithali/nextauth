import authConfig from "./auth.config"
import NextAuth from "next-auth"
import {
    apiAuthPrefix,
    DEFAULT_LOGIN_REDIRECT,
    authRoute,
    publicRoute
} from "./route"



const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthPrefix = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoute.includes(nextUrl.pathname)
    const isAuthRoute = authRoute.includes(nextUrl.pathname)

    if (isApiAuthPrefix) {
        return ;
    }
    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return ;
    }
    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }
        const encodedCallbackUrl = encodeURIComponent(callbackUrl); 
        return Response.redirect(new URL(
            `/auth/login?callbackUrl=${encodedCallbackUrl}`,
            nextUrl
        ));
    }
    return ;

})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!api|_next/static|_next/image|favicon.ico).*)"

        , '/',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}