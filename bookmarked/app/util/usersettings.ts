"use server"

import argon2 from "argon2";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { redirect } from "next/navigation";
import { systemPool } from "./connect";
import { getSession } from "./securepage";

export async function setProfileSettings(_: any, data: FormData) {

    // ensure user is authenticated before making changes
    const connection = await systemPool.getConnection();
    const session = await getSession()
    if (!session) {
        redirect('/login')

    };
    let favBook = data.get("favbook") as string | null;
    let favAuthor = data.get("favauthor") as string | null;
    let genres = data.get("genres") as string | null;
    let bio = data.get("bio") as string | null;

    await connection.execute<ResultSetHeader>(
        "UPDATE profiles SET fav_book = ?, fav_author = ?, genres = ?, bio = ? WHERE user_id = ?",
        [

            favBook,
            favAuthor,
            genres,
            bio,
            session.user_id,
        ]
    );

    connection.release();

    return {
        success: true,
        data,
    };

}


export async function setPassword(_: any, data: FormData) {
    // ensure user is authenticated before making changes
    const connection = await systemPool.getConnection();
    const session = await getSession()
    if (!session) {
        redirect('/login')

    };

    let password = data.get("password") as string | null;
    let newPassword = data.get("new_password") as string | null;
    let newPasswordConfirm = data.get("new_password_confirm") as string | null;

    if (
        !password ||
        !newPassword ||
        !newPasswordConfirm
    ) {
        return {
            error: "One or more fields are missing",
            data,
        };
    }

    // validate password to check if its < 8 chars
    if (newPassword.length < 8) {
        return {
            error: "For security reasons, passwords must consist of 8 or more characters.",
            data,
        };
    }


    // check if password confirm matches
    if (newPassword != newPasswordConfirm) {
        return {
            error: "New password does not match",
            data,
        };
    }

    const [userRes] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM users WHERE id = ?",
        [session.user_id]
    );

    // authenticate with old password before updating
    if (
        userRes.length == 0 ||
        !(await argon2.verify(userRes[0].password, password))
    ) {
        return {
            error: "Incorrect current passsword",
            data,
        };
    }


    // update with a hashed version of the new password
    await connection.execute<ResultSetHeader>(
        "UPDATE users SET password = ? WHERE id = ?",
        [

            await argon2.hash(password),
            session.user_id,
        ]
    );

    connection.release();

    return {
        success: true,
        data,
    };

}


export async function setUserSettings(_: any, data: FormData) {
    // ensure user is authenticated before making changes
    const connection = await systemPool.getConnection();
    const session = await getSession()
    if (!session) {
        redirect('/login')

    };
    let username = data.get("username") as string | null;
    let email = data.get("email") as string | null;
    let firstname = data.get("firstname") as string | null;
    let lastname = data.get("lastname") as string | null;


    if (
        !username ||
        !email ||
        !firstname ||
        !lastname
    ) {
        return {
            error: "One or more fields are missing",
            data,
        };
    }

    // validate username to be alphanumeric with max 22 chars

    const userCheck = /^[a-zA-Z0-9_]+$/;
    username = username.trim()
    if (!userCheck.test(username) || username.length > 22) {
        return {
            error: "Usernames can only consist of a maximum of 22 alphanumeric characters or underscores.",
            data,
        };
    }


    const [usernameCheck] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM users WHERE username = ? AND id != ?",
        [username, session.user_id]
    );

    if (usernameCheck.length > 0) {
        return {
            error: "The specified username is already taken. Please use another",
            data,
        };
    }




    await connection.execute<ResultSetHeader>(
        "UPDATE users SET username = ?, email = ?, firstname = ?, lastname = ? WHERE id = ?",
        [

            username,
            email.trim(),
            (firstname.charAt(0).toUpperCase() +
                firstname.slice(1).toLowerCase()).trim(),
            (lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase()).trim(),
            session.user_id,
        ]
    );

    connection.release();

    return {
        success: true,
        data,
    };

}
