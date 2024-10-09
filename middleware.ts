import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { adminMiddleware } from "./middleware/config";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    let {
        data: { session },
    } = await supabase.auth.getSession();

    if (req.nextUrl.pathname.startsWith("/auth")) {
        return res;
    }

    if (
        !session &&
        req.nextUrl.pathname != "/" &&
        !req.nextUrl.pathname.startsWith("/login")
    ) {
        return NextResponse.redirect("http://localhost:3000");
    }

    if (req.nextUrl.pathname.startsWith("/admin")) {
        return adminMiddleware(req);
    }
    return res;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
