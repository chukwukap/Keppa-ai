import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: [
    "/",
    "/auth(.*)",
    "/portal(.*)",
    "/portal/login(.*)",
    "/portal/signup(.*)",
    "/images(.*)",
  ],
  ignoredRoutes: [
    "chatbot",
    "/api(.*)",
    "/_next(.*)",
    "/favicon.ico(.*)",
    "/portal(.*)",
    "/portal/login(.*)",
    "/portal/signup(.*)",
  ],
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/",
    "/portal(.*)",
    "/portal/login(.*)",
    "/portal/signup(.*)",
  ],
};
