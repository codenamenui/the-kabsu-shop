import { createClient } from "@supabase/supabase-js";
import { NextApiRequest } from "next";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    process.env.SUPABASE_SERVICE_KEY!
);

export async function GET(req: NextApiRequest, { params }: { params: any }) {
    const slug = params.slug;
    const { data, error } = await supabase.from("Students").select();
    if (data) {
        for (let i = 0; i < data.length; i++) {
            if (data.at(i).stud_id == slug) {
                return Response.json(true);
            }
        }
        return Response.json(false);
    }
    return Response.json(error);
}
