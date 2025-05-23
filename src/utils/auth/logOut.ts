'use client'

import { redirect } from "next/navigation";
import { clearAccessToken } from "./cookies"
import AuthToken from "../AuthToken";

export default async function logOut() {

    // clearAccessToken();
    await AuthToken().clearToken();
    // return redirect("/auth/login");
}