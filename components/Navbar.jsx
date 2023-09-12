"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
//import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
   // const { status } = useSession();
    return (
        <div>
            <Link href={"/"}>
                Home
            </Link>
            <button onClick={() => signOut()}>Sign Out</button>

        </div>
    );
}