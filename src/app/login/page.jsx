"use client"
import React, { useState } from "react";
import {signIn} from "next-auth/react";

function Login(){
    return(
        <div>
            <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
    )
}
export default Login