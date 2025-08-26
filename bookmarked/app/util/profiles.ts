"use server"

import { RowDataPacket } from "mysql2/promise";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";
import { systemPool } from "./connect";
import { getSession } from "./securepage";

export async function updateProfile(userIds?: number[]): Promise<{success: boolean, error?: string, users?: any[]}> {
    const session = await getSession(true)
    if (!session) {
       return {
        success: false,
        error: "Not authorised",
       }
    }

    const connection = await systemPool.getConnection();

    let query = `
        SELECT * FROM users 
        JOIN profiles ON users.id = profiles.user_id
    `;
    let params: any[] = [];

    if (userIds && userIds.length > 0) {
        query += " WHERE users.id IN (?)";
        params.push(userIds);
    }

    const [userList] = await connection.execute<RowDataPacket[]>(query, params);

    connection.release();

    let users: Member[] = [];

    userList.forEach((user) => {
        users.push({
            id: user.id,
            username: user.username,
            avatar: (user.avatar as Buffer).toString('base64')
        });
    });

    return {
        success: true,
        users
    }
}
