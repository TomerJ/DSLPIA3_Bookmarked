"use server";

import { systemPool } from "@util/connect";
import argon2 from "argon2";
import * as crypto from "crypto";
import fs from "fs";
import type * as jdenticonTypes from "jdenticon";
import { RowDataPacket } from "mysql2/promise";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSession } from "../util/securepage";
var jdenticon = require("jdenticon") as typeof jdenticonTypes;

export async function Elevate(_: any, data: FormData) {
    let password = data.get("password") as string | null;


    const connection = await systemPool.getConnection();

    const session = await getSession();

    if(!session) {
        redirect('/elevate')
    }
    
    const [userRes] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM users WHERE id = ?",
        [session.user_id]
    );

    
    const cookieStore = await cookies()

    const sessionToken = cookieStore.get('session')?.value
    if (!sessionToken) {
        return null
    }
    console.log(userRes);
    if (!password ||
        userRes.length == 0 ||
        !(await argon2.verify(userRes[0].password, password))
    ) {
        return {
            error: "Incorrect passsword",
            data,
        };
    }

    const key = crypto.randomBytes(96).toString("base64");
    await connection.execute(
        "UPDATE sessions SET elevatedAt = ? WHERE session_token = ?"
        [new Date(), sessionToken]
    );

    console.log(await argon2.verify(userRes[0].password, password));

    connection.release();
    redirect("/admin/members");
}
