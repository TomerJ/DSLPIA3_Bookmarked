import SettingsSidebar from "@/app/components/settings/settingssidebar";

import { systemPool } from "@/app/util/connect";
import { getSession } from "@/app/util/securepage";
import { RowDataPacket } from "mysql2/promise";
import { redirect } from "next/navigation";
import MainContainer from "../../../components/main";
import Navbar from "../../../components/nav/nav";
import ProfileSettingsForm from "./form";

export default async function ProfileSettings() {
    const connection = await systemPool.getConnection();
    const session = await getSession();
    if (!session) {
        redirect("/login");
    }

    const [profile] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM profiles WHERE user_id = ?",
        [session.user_id]
    );

    connection.release();
    return (
        <>
            <Navbar />
            <div
                className="flex min-h-[calc(100vh-5rem)] w-full"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <SettingsSidebar />
                <>
                    <MainContainer>
                        <h1 className="text-xl font-bold">Profile Settings</h1>
                        <div className="divider my-0 mb-1"></div>
                        <div className="flex gap-x-8 flex-col lg:flex-row">
                            <div className="w-full">
                                <ProfileSettingsForm userId={session.user_id} />
                            </div>
                        </div>
                    </MainContainer>
                </>
            </div>
        </>
    );
}
