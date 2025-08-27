import { RowDataPacket } from "mysql2/promise";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";
import { systemPool } from "./connect";

export async function getSession(elevated: boolean | null = false): Promise<RowDataPacket | null> {
    const connection = await systemPool.getConnection();
    const cookieStore = await cookies()

    const sessionToken = cookieStore.get('session')?.value
    if (!sessionToken) {
        return null
    }

    // get session information
    const [sessionRes] = await connection.execute<RowDataPacket[]>(
        "SELECT users.id AS user_id, users.username, users.email, users.firstname, users.lastname, users.privilege, users.avatar, users.dob, sessions.started_at, sessions.elevated_at, profiles.fav_book, profiles.fav_author, profiles.genres, profiles.xp, profiles.bio FROM sessions JOIN users ON sessions.user = users.id LEFT JOIN profiles ON users.id = profiles.user_id WHERE sessions.session_token = ? AND sessions.started_at < ?",
        [sessionToken, new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)]
    );
    connection.release();
    // for elevated sessions only
    if (elevated) {
        if (sessionRes[0].privilege != 'admin') {
            redirect('/elevate')
        }
        // check if session is elevated and if it had expired (expire after 20 mins)
        if (sessionRes[0].elevated_at && sessionRes[0].elevated_at < new Date(Date.now() + 20 * 60 * 1000)) {
            return sessionRes[0];
        } else {
            redirect('/elevate')
        }
    }

    return sessionRes[0];

}

// secures a page form unauthorised access
export async function SecurePage(elevated: boolean = false) {


    const session = await getSession()


    // check if user is missing a profile - redirect them to create one if so
    if (!session) {
        redirect('/login')
    }
    if (session.xp == null) {

        redirect('/register/profile')
    }

}

// restrict the create profile page for users who already have profiles
export async function SecureProfileCreatePage() {


    const session = await getSession()


    if (!session) {
        redirect('/login')
    }
    if (session.xp != null) {

        redirect('/')
    }

    return session

}



export async function GetUserInfo() {


    const session = await getSession()
    if (!session) {
        redirect('/login')
    }
    return session
}