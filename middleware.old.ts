import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/finance",
  "/goals",
  "/study",
  "/planner",
  "/journal",
  "/settings",
  "/australia",
];

export function middleware(
  request: NextRequest
) {

  const token =
    request.cookies.get(
      "sb-access-token"
    );

  const pathname =
    request.nextUrl.pathname;

  const isProtected =
    protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

  if (
    isProtected &&
    !token
  ) {

    return NextResponse.redirect(
      new URL(
        "/login",
        request.url
      )
    );

  }

  return NextResponse.next();

}

export const config = {

  matcher: [

    "/dashboard/:path*",

    "/finance/:path*",

    "/goals/:path*",

    "/study/:path*",

    "/planner/:path*",

    "/journal/:path*",

    "/settings/:path*",

    "/australia/:path*",

  ],

};