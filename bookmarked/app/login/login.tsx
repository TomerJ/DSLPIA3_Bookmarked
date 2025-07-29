"use server";

import { systemPool } from "@util/connect";
import argon2 from "argon2";
import * as crypto from "crypto";
import fs from "fs";
import type * as jdenticonTypes from "jdenticon";
import { RowDataPacket } from "mysql2/promise";
import { cookies } from "next/headers";
var jdenticon = require("jdenticon") as typeof jdenticonTypes;

export async function Login(_: any, data: FormData) {
    let username = data.get("username") as string | null;
    let password = data.get("password") as string | null;

    if (!username || !password) {
        return {
            error: "One or more fields are missing",
            data,
        };
    }
    username = username.trim();
    password = password.trim();
    const png = jdenticon.toPng(username, 512, {
        backColor: "#ffffff",
    });
    fs.writeFileSync("./testicon.png", png);

    const connection = await systemPool.getConnection();

    const [userRes] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM users WHERE username = ?",
        [username]
    );

    console.log(userRes);
    if (
        userRes.length == 0 ||
        !(await argon2.verify(userRes[0].password, password))
    ) {
        return {
            error: "Incorrect username or passsword",
            data,
        };
    }

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

    console.log(await argon2.verify(userRes[0].password, password));

    connection.release();
    return {
        error: "success",
        data,
    };
}
