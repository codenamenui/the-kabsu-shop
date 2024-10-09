import SignOutButton from "@/components/SignoutComponent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const Home = async () => {
    const supabase = createServerComponentClient({ cookies });
    const user = await supabase.from("tbl_student").select();
    const profile = user?.data?.[0];
    return (
        <div>
            {profile && (
                <div>
                    {profile.stud_fname} {profile.stud_lname} <br />
                    {profile.stud_college} <br />
                    {profile.stud_program} <br />
                    {profile.stud_year}
                </div>
            )}
            <br />
            <SignOutButton />
        </div>
    );
};

export default Home;
