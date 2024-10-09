import {
    createRouteHandlerClient,
    createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");

    if (code) {
        const supabase = createRouteHandlerClient({ cookies });
        await supabase.auth.exchangeCodeForSession(code);
    }

    const supabase = createServerComponentClient({ cookies });
    const { data: user } = await supabase.auth.getUser();
    const id = user?.user?.id;

    const { data } = await supabase
        .from("tbl_student")
        .select("stud_number")
        .eq("id", id)
        .single();

    if (data?.stud_number != null) {
        return NextResponse.redirect("http://localhost:3000/home");
    } else {
        return NextResponse.redirect("http://localhost:3000/new-profile");
    }
}
