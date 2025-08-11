"use server";

import argon2 from "argon2";
import fs from "fs";
import type * as jdenticonTypes from "jdenticon";
var jdenticon = require("jdenticon") as typeof jdenticonTypes;

import { systemPool } from "@util/connect";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { redirect } from "next/navigation";

export async function ValidateCode(_: any, data: FormData) {
    let code = data.get("accesscode") as string | null;
    return {
        success: true,
        error: "YOUR MOTHER",
    };
}

export async function Register(_: any, data: FormData) {
    let dob = {
        day: data.get("dob-day") as string | null,
        month: data.get("dob-month") as string | null,
        year: data.get("dob-year") as string | null,
    };
    let email = data.get("email") as string | null;
    let username = data.get("username") as string | null;
    let firstname = data.get("firstname") as string | null;
    let lastname = data.get("lastname") as string | null;
    let password = data.get("password") as string | null;
    let confirmpassword = data.get("confirmpassword") as string | null;
    const userCheck = /^[a-zA-Z0-9_]+$/;

    if (
        !username ||
        !email ||
        !password ||
        !confirmpassword ||
        !firstname ||
        !lastname ||
        !dob.day ||
        !dob.month ||
        !dob.year
    ) {
        return {
            error: "One or more fields are missing",
            data,
        };
    }

    email = email.trim();
    password = password.trim();
    if (!userCheck.test(username) || username.length > 22) {
        return {
            error: "Usernames can only consist of a maximum of 22 alphanumeric characters or underscores.",
            data,
        };
    }

    if (password.length < 8) {
        return {
            error: "For security reasons, passwords must consist of 8 or more characters.",
            data,
        };
    }

    const png = jdenticon.toPng(username, 512, {
        backColor: "#ffffff",
    });
    fs.writeFileSync("./testicon.png", png);

    if (password != confirmpassword.trim()) {
        return {
            error: "The specified passwords do not match.",
            data,
        };
    }

    const connection = await systemPool.getConnection();

    const [usernameCheck] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM users WHERE username = ?",
        [username]
    );

    if (usernameCheck.length > 0) {
        return {
            error: "An account with the same username already exists.",
            data,
        };
    }
    dob.month = dob.month.padStart(2, "0");
    dob.day = dob.day.padStart(2, "0");

    if (
        dob.year.length !== 4 ||
        !/^\d{4}$/.test(dob.year) ||
        dob.month.length !== 2 ||
        !/^\d{2}$/.test(dob.month) ||
        dob.day.length !== 2 ||
        !/^\d{2}$/.test(dob.day)
    ) {
        return {
            error: "An invalid birthday was specified.",
            data,
        };
    }

    const date = `${dob.year}-${dob.month}-${dob.day}`;
    const [userResult] = await connection.execute<ResultSetHeader>(
        "INSERT INTO users (username, firstname, lastname, email, avatar, password, dob) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
            username,
            firstname,
            lastname,
            email,
            png,
            await argon2.hash(password),
            date,
        ]
    );

    const userId = userResult.insertId;

    await connection.execute("INSERT INTO profiles (user_id) VALUES (?)", [
        userId,
    ]);

    connection.release();
    redirect("/login");
}
