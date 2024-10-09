"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";

const SignOutButton = () => {
    const supabase = createClientComponentClient();

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error.message);
        } else {
            // Redirect to login or homepage after sign-out
            window.location.href = "/login";
        }
    };

    return (
        <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;
