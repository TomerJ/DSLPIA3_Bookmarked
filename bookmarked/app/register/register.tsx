"use server";

import argon2 from "argon2";
import type * as jdenticonTypes from "jdenticon";
var jdenticon = require("jdenticon") as typeof jdenticonTypes;

import { systemPool } from "@util/connect";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { redirect } from "next/navigation";
import { getSession } from "../util/securepage";

export async function ValidateCode(_: any, data: FormData) {
    const connection = await systemPool.getConnection();
    let code = data.get("accesscode") as string | null;
    // check if access code is present within database
    const [accessCodeCheck] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM access_codes WHERE code = ?",
        [code]
    );
    connection.release();
    if (accessCodeCheck.length > 0) {
        return {
            success: true,
        };
    } else {
        return {
            success: false,
            error: "Invalid access code.",
        };
    }
}

export async function CreateProfile(_: any, data: FormData) {
    const connection = await systemPool.getConnection();
    const session = await getSession();
    if (!session) {
        redirect("/login");
    }
    let favBook = data.get("favbook") as string | null;
    let favAuthor = data.get("favauthor") as string | null;
    let genres = data.get("genres") as string | null;
    let bio = data.get("bio") as string | null;
    await connection.execute<ResultSetHeader>(
        "INSERT INTO profiles (user_id, fav_book, fav_author, genres, bio) VALUES (?, ?, ?, ?, ?)",
        [session.user_id, favBook, favAuthor, genres, bio]
    );

    connection.release();
    redirect("/app");
}
export async function Register(_: any, data: FormData) {
    // check access code before account is actually created
    if (!(await ValidateCode(null, data)).success) {
        return {
            error: "Invalid access code",
            data,
        };
    }

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

    let accessCode = data.get("accesscode") as string | null;

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
    // restrict usernames / passwords
    email = email.trim();
    const userCheck = /^[a-zA-Z0-9_]+$/;

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

    // check password against confirmation to verify accuracy of data
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
            error: "The specified username is already taken. Please use another",
            data,
        };
    }
    dob.month = dob.month.padStart(2, "0");
    dob.day = dob.day.padStart(2, "0");

    // birthday validation
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
        "INSERT INTO users (username, firstname, lastname, email, avatar, password, dob) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
            username,
            firstname.charAt(0).toUpperCase() +
                firstname.slice(1).toLowerCase(),
            lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase(), // make the first letter capital but the rest lowercase
            email,
            png,
            await argon2.hash(password), // hash the password
            date,
        ]
    );

    connection.release();
    redirect("/app");
}
