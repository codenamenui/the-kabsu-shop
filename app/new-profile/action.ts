import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { colleges } from "@/data/profiledata";
import { redirect, RedirectType } from "next/navigation";

export const createProfile = async (formData: FormData) => {
    "use server";
    const supabase = createServerComponentClient({ cookies });

    const stud_number = formData.get("stud_number");
    const stud_fname = formData.get("fname");
    const stud_lname = formData.get("lname");
    const stud_college = formData.get("college");
    const stud_program = formData.get("program");
    const stud_year = formData.get("stud_year");

    let { data, error } = await supabase.auth.getUser();
    if (!error) {
        let { error } = await supabase
            .from("tbl_student")
            .update({
                stud_number: stud_number,
                stud_fname: stud_fname,
                stud_lname: stud_lname,
                stud_college: colleges.at(parseInt(stud_college as string) - 1)
                    ?.name,
                stud_program: stud_program,
                stud_year: stud_year,
            })
            .eq("stud_id", data?.user?.id)
            .select();
        if (error) {
            console.error("Error updating profile:", error.message);
        } else {
            redirect("/home");
        }
    }
};
