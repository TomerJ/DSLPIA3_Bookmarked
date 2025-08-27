"use server";
// snappy
import { systemPool } from "@util/connect";
import argon2 from "argon2";
import * as crypto from "crypto";
import { RowDataPacket } from "mysql2/promise";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function Login(_: any, data: FormData) {
    let username = data.get("username") as string | null;
    let password = data.get("password") as string | null;

    if (!username || !password) {
        return {
            error: "One or more fields are missing",
            data,
        };
    }

    // trim to remove trailing spaces
    username = username.trim();

    const connection = await systemPool.getConnection();

    // get user record from username
    const [userRes] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM users WHERE username = ?",
        [username]
    );

    // check if no users were returned or if password hash does not match
    if (
        userRes.length == 0 ||
        !(await argon2.verify(userRes[0].password, password))
    ) {
        return {
            error: "Incorrect username or passsword",
            data,
        };
    }

    // create a new session and reference it as a cookie
    const key = crypto.randomBytes(96).toString("base64");
    await connection.execute(
        "INSERT INTO sessions (user, session_token) VALUES (?, ?)",
        [userRes[0].id, key]
    );

    const cookieStore = await cookies();

    cookieStore.set({
        name: "session",
        value: key,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 28,
    });

    connection.release();
    redirect("/app");
}
