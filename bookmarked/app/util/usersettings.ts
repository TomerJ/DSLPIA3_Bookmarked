"use server"

import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";
import { systemPool } from "./connect";
import { getSession } from "./securepage";

export async function setProfileSettings(_: any, data: FormData) {
    
    const connection = await systemPool.getConnection();
    const session = await getSession()
    if(!session) {
        redirect('/login')
    };
    console.log(session)
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
    redirect('/app') // TODO: say it was successful or smth
   
}
