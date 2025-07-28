"use server";

import argon2 from "argon2";

import { systemPool } from "@util/connect";
import { RowDataPacket } from "mysql2/promise";
export async function ProcessAdminRegister(_: any, data: FormData) {
    let email = data.get("email") as string | null;
    let password = data.get("password") as string | null;
    let confirmpassword = data.get("confirmpassword") as string | null;
    // const userCheck = /^[a-zA-Z0-9_]+$/;

    if (!email || !password || !confirmpassword) {
        return {
            error: "One or more fields are missing",
            data,
        };
    }

    email = email.trim();
    password = password.trim();
    /*if (!userCheck.test(email)) {
        return "Usernames can only consist of alphanumeric characters or underscores.";
    }*/

    if (password.length < 8) {
        return {
            error: "For security reasons, passwords must consist of 8 or more characters.",
            data,
        };
    }

    if (password != confirmpassword.trim()) {
        return {
            error: "The specified passwords do not match.",
            data,
        };
    }

    const connection = await systemPool.getConnection();

    const [selectres] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM admin_users WHERE email = ?",
        [email]
    );

    if (selectres.length > 0) {
        return {
            error: "An administrator account with the same email address already exists.",
            data,
        };
    }

    const [res] = await connection.execute(
        "INSERT INTO admin_users (email, password) VALUES (?, ?)",
        [email, await argon2.hash(password)]
    );

    connection.release();
    return {
        error: "success",
        data,
    };
}
