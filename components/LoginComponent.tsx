"use client";

import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const LoginComponent = () => {
    const logInGoogle = async () => {
        const supabase = createClientComponentClient();
        let { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `http://localhost:3000/auth/callback`,
            },
        });
    };

    return (
        <div>
            <button onClick={logInGoogle}>Login with Google</button>
        </div>
    );
};

export default LoginComponent;
