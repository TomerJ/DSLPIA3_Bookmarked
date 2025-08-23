"use server"

import { RowDataPacket } from "mysql2/promise";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";
import { systemPool } from "./connect";
import { getSession } from "./securepage";

export async function updateProfile(): Promise<{success: boolean, error?: string, users?: any[]}> {
    const session = await getSession(true)
    if (!session) {
       /*return {
        success: false,
        error: "Not authorised",
       }*/
    }

    const connection = await systemPool.getConnection();

    const [userList] = await connection.execute<RowDataPacket[]>(
        //"SELECT * FROM users JOIN profiles ON users.id = profiles.id",
        "SELECT * FROM users"
    );

    console.log(userList)
    console.log("PLS WORK")
    connection.release();

    let users: Member[] = []

    userList.forEach((user) => {
        users.push({
            id: user.id,
            username: user.username,
            avatar: (user.avatar as Buffer).toString('base64')
        })
    })

    return {
        success: true,
        users
    }

}
