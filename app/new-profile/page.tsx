import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import { createProfile } from "./action";
import { SelectComponent } from "@/components/SelectComponent";

const NewProfile = async () => {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect("/login");
    }

    return (
        <div>
            <form action={createProfile}>
                <h1>Profile Information</h1>

                <label htmlFor="stud_number">Student Number</label>
                <input
                    type="text"
                    name="stud_number"
                    id="stud_number"
                    placeholder="Enter student number..."
                    required
                    className="px-2 text-black"
                />
                <br />

                <label htmlFor="fname">First Name</label>
                <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Enter first name..."
                    required
                    className="px-2 text-black"
                />
                <br />

                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Enter last name..."
                    required
                    className="px-2 text-black"
                />
                <br />

                <SelectComponent />

                <label htmlFor="stud_year">Select School Year: </label>
                <select
                    id="stud_year"
                    name="stud_year"
                    className="px-2 text-black"
                    required
                >
                    <option value="">-- Select a Year --</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                </select>
                <br />

                <button
                    type="submit"
                    className="rounded-lg p-1 bg-white text-black"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NewProfile;
