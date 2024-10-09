import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest } from "next/server";

export async function adminMiddleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    const { data: user } = await supabase
        .from("tbl_accessrole")
        .select()
        .eq("id", session.user.id)
        .single();

    if (user == null) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return res; // Return the NextResponse object to allow the request to proceed
}
