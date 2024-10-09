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
                    {profile.fname} {profile.lname} <br />
                    {profile.college} <br />
                    {profile.program} <br />
                    {profile.year}
                </div>
            )}
            <br />
            <SignOutButton />
        </div>
    );
};

export default Home;
