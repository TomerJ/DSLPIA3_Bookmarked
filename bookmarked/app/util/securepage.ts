import { RowDataPacket } from "mysql2/promise";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";
import { systemPool } from "./connect";

export async function getSession(elevated: boolean|null = true): Promise<RowDataPacket | null> {
    const connection = await systemPool.getConnection();
    const cookieStore = await cookies()

    const sessionToken = cookieStore.get('session')?.value
    if (!sessionToken) {
        return null
    }
    console.log(sessionToken)
    const [sessionRes] = await connection.execute<RowDataPacket[]>(
        "SELECT users.*, sessions.started_at, sessions.elevated_at FROM sessions JOIN users ON sessions.user = users.id WHERE sessions.session_token = ? AND sessions.started_at < ?",
        [sessionToken, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)]
    );
    connection.release();
    if(elevated) {
        if(sessionRes[0].elevated_at < new Date(Date.now() + 10 * 60 * 1000)) {
            return sessionRes[0];
        } else {
            return null
        }
    }
    return sessionRes[0];
    
}
export async function SecurePage(elevated: boolean = false) {


    const session = await getSession()
    if (!session) {
        redirect('/login')
    }
    console.log();
    //redirect("/app");
}



export async function GetUserInfo() {


    const session = await getSession()
    if (!session) {
        redirect('/login')
    }
    return session
    //redirect("/app");
}