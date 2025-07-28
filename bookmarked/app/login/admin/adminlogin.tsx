"use server";

import argon2 from "argon2";

export async function ProcessAdminLogin(_: any, data: FormData) {
    const username = data.get("username");
    const password = data.get("password");

    if (!username || !password) {
        return "Missing credentials.";
    }

    const hash = await argon2.hash(password as string);
    console.log("Hashed:", hash);

    const isValid = false;

    if (!isValid) {
        return "Invalid username or password.";
    }

    return "Login successful!";
}
