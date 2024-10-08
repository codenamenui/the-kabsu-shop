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
    let { data, error } = await supabase.auth.getUser();

    const fetchUsers = async () => {
        const res = await fetch(
            `http://localhost:3000/api/check/${data?.user?.id}`,
            {
                next: { revalidate: 10 },
            }
        );
        return res.json();
    };

    if ((await fetchUsers()) == true) {
        return NextResponse.redirect("http://localhost:3000/home");
    } else {
        return NextResponse.redirect("http://localhost:3000/login");
    }
}
