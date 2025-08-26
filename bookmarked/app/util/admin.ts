"use server";

import argon2 from "argon2";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { redirect } from "next/navigation";
import { adminPool } from "./connect";
import { getSession } from "./securepage";

export async function getUsers(): Promise<{ success: boolean; error?: string; users?: RowDataPacket[] }> {
    const session = await getSession(true);
    if (!session) {
        return {
            success: false,
            error: "Not authorised",
        };
    }

    const connection = await adminPool.getConnection();

    const [userList]: [RowDataPacket[], any] = await connection.execute(
        "SELECT users.id AS user_id, users.username, users.email, users.firstname, users.lastname, users.privilege, users.avatar, users.dob, profiles.xp FROM users LEFT JOIN profiles ON users.id = profiles.user_id"
    );

    connection.release();

    const users = userList.map(user => {
        if (user.avatar) {
            user.avatar = (user.avatar as Buffer).toString('base64');
        }


        if (user.dob) {
            const d = new Date(user.dob);
            const year = d.getFullYear();
            const month = (d.getMonth() + 1).toString().padStart(2, '0');
            const day = d.getDate().toString().padStart(2, '0');
            user.dob = `${day}/${month}/${year}`;
        }

        return user;
    });

    return {
        success: true,
        users,
    };
}

export async function getUserInformation(userId: number, noProfile?: boolean): Promise<{ success: boolean; error?: string; user?: RowDataPacket }> {
    const session = await getSession(true);
    if (!session) {
        return {
            success: false,
            error: "Not authorised",
        };
    }

    const connection = await adminPool.getConnection();


    let query: string;
    let params: any[] = [userId];

    if (noProfile) {
        // exclude profile
        query = `
        SELECT 
            users.id AS user_id,
            users.username,
            users.email,
            users.firstname,
            users.lastname,
            users.privilege,
            users.avatar,
            users.dob
        FROM users
        WHERE users.id = ?
    `;
    } else {
        // include profile
        query = `
        SELECT 
            users.id AS user_id,
            users.username,
            users.email,
            users.firstname,
            users.lastname,
            users.privilege,
            users.avatar,
            users.dob,
            profiles.xp
        FROM users
        LEFT JOIN profiles ON users.id = profiles.user_id
        WHERE users.id = ?
    `;
    }

    const [userList] = await connection.execute<RowDataPacket[]>(query, params);

    connection.release();

    if (userList.length < 1) {
        return {
            success: false,
            error: 'User does not have a profile'
        };
    }
    const users = userList.map(user => {
        if (user.avatar) {
            user.avatar = (user.avatar as Buffer).toString('base64');
        }


        if (user.dob) {
            const d = new Date(user.dob);
            const year = d.getFullYear();
            const month = (d.getMonth() + 1).toString().padStart(2, '0');
            const day = d.getDate().toString().padStart(2, '0');
            user.dob = `${day}/${month}/${year}`;
        }

        return user;
    });


    return {
        success: true,
        user: users[0],
    };
}

export async function setXP(_: any, data: FormData) {
    const session = await getSession(true);
    if (!session) {
        return {
            success: false,
            error: "Not authorised",
        };
    }
    let xp = data.get("xp") as string | null;

    const connection = await adminPool.getConnection();
    await connection.execute<ResultSetHeader>(
        "UPDATE profiles SET xp = ? WHERE user_id = ?",
        [
            xp, data.get("user_id")
        ]
    );
    connection.release();
    return {
        success: true,
    };

}


export async function setPrivilege(_: any, data: FormData) {
    const session = await getSession(true);
    if (!session) {
        return {
            success: false,
            error: "Not authorised",
        };
    }

    const privilege = data.get("privilege") as string | null;
    const userId = data.get("user_id") as string | null;

    if (!privilege || !userId) {
        return {
            success: false,
            error: "Missing privilege or user_id",
        };
    }

    const connection = await adminPool.getConnection();

    await connection.execute<ResultSetHeader>(
        "UPDATE users SET privilege = ? WHERE id = ?",
        [privilege, userId]
    );

    connection.release();


    return {
        success: true,
    };
}
export async function updateUser(_: any, data: FormData) {
    const connection = await adminPool.getConnection();

    const userId = (data.get("user_id") as string);
    let username = (data.get("username") as string | null)?.trim() || "";
    let firstname = (data.get("firstname") as string | null)?.trim() || "";
    let lastname = (data.get("lastname") as string | null)?.trim() || "";

    if (!userId || !username || !firstname || !lastname) {
        connection.release();
        return { error: "One or more fields are missing.", data };
    }

    const usernameRegex = /^[a-zA-Z0-9_]{1,22}$/;
    if (!usernameRegex.test(username)) {
        connection.release();
        return {
            error: "Usernames can only consist of a maximum of 22 alphanumeric characters or underscores.",
            data,
        };
    }

    const [usernameCheck] = await connection.execute<RowDataPacket[]>(
        "SELECT id FROM users WHERE username = ? AND id != ?",
        [username, userId]
    );
    if (usernameCheck.length > 0) {
        connection.release();
        return { error: "Username already taken.", data };
    }

    firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
    lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();

    await connection.execute<ResultSetHeader>(
        "UPDATE users SET username = ?, firstname = ?, lastname = ? WHERE id = ?",
        [username, firstname, lastname, userId]
    );

    connection.release();

    return { success: true, data };
}


export async function updateProfile(_: any, data: FormData) {
    const connection = await adminPool.getConnection();

    const userId = data.get("user_id") as string;
    let favBook = (data.get("favbook") as string | null)?.trim() || "";
    let favAuthor = (data.get("favauthor") as string | null)?.trim() || "";
    let genres = (data.get("genres") as string | null)?.trim() || "";
    let bio = (data.get("bio") as string | null)?.trim() || "";

    if (!userId) {
        connection.release();
        return { error: "User ID is required.", data };
    }

    await connection.execute<ResultSetHeader>(
        "UPDATE profiles SET fav_book = ?, fav_author = ?, genres = ?, bio = ? WHERE user_id = ?",
        [favBook, favAuthor, genres, bio, userId]
    );

    connection.release();

    return { success: true, data };
}

export async function setPasswordAdmin(_: any, data: FormData) {
    const session = await getSession(true);
    if (!session) {
        redirect("/login");
    }

    const connection = await adminPool.getConnection();

    const userId = data.get("user_id") as string | null;
    const newPassword = data.get("new_password") as string | null;
    const newPasswordConfirm = data.get("new_password_confirm") as string | null;

    if (!userId || !newPassword || !newPasswordConfirm) {
        connection.release();
        return { error: "One or more fields are missing", data };
    }

    if (newPassword.length < 8) {
        connection.release();
        return {
            error: "For security reasons, passwords must consist of 8 or more characters.",
            data,
        };
    }

    if (newPassword !== newPasswordConfirm) {
        connection.release();
        return { error: "New password does not match confirmation", data };
    }



    const hashedPassword = await argon2.hash(newPassword);
    await connection.execute<ResultSetHeader>(
        "UPDATE users SET password = ? WHERE id = ?",
        [hashedPassword, userId]
    );

    connection.release();

    return { success: true, data };
}

export async function updateUserBirthday(_: any, data: FormData) {
    const session = await getSession(true);
    if (!session) {
        redirect("/login");
    }

    const userId = data.get("user_id") as string | null;
    const day = data.get("dob-day") as string | null;
    const month = data.get("dob-month") as string | null;
    const year = data.get("dob-year") as string | null;

    if (!userId || !day || !month || !year) {
        return { error: "Missing required fields", data };
    }


    const dayPadded = day.padStart(2, "0");
    const monthPadded = month.padStart(2, "0");


    if (
        year.length !== 4 || !/^\d{4}$/.test(year) ||
        monthPadded.length !== 2 || !/^\d{2}$/.test(monthPadded) ||
        dayPadded.length !== 2 || !/^\d{2}$/.test(dayPadded)
    ) {
        return { error: "Invalid birthday specified", data };
    }

    const dob = `${year}-${monthPadded}-${dayPadded}`;

    const connection = await adminPool.getConnection();
    try {
        const [result] = await connection.execute<ResultSetHeader>(
            "UPDATE users SET dob = ? WHERE id = ?",
            [dob, userId]
        );

        if (result.affectedRows === 0) {
            return { error: "User not found", data };
        }

        return { success: true, data };
    } finally {
        connection.release();
    }
}

export async function deleteUser(_: any, formData: FormData) {
    // Validate session
    const session = await getSession(true);
    if (!session) {
        return {
            success: false,
            error: "Not authorised",
        };
    }

    const userId = formData.get("user_id");
    if (!userId) {
        return { success: false, error: "No user ID provided." };
    }

    const connection = await adminPool.getConnection();
    try {
        // Delete profile first (in case of foreign key)
        await connection.query("DELETE FROM profiles WHERE user_id = ?", [userId]);

        // Delete user
        await connection.query("DELETE FROM users WHERE id = ?", [userId]);

        return { success: true };
    } catch (err: any) {
        console.error("Error deleting user:", err);
        return { success: false, error: "Failed to delete user." };
    } finally {
        connection.release();
    }
}