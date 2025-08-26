import SettingsSidebar from "@/app/components/settings/settingssidebar";
import { systemPool } from "@/app/util/connect";
import { getSession } from "@/app/util/securepage";
import { RowDataPacket } from "mysql2/promise";
import { redirect } from "next/navigation";
import MainContainer from "../../../components/main";
import Navbar from "../../../components/nav/nav";
import UserSettingsForm from "./form";

export default async function Admin() {
    const connection = await systemPool.getConnection();
    const session = await getSession();
    if (!session) {
        redirect("/login");
    }

    const [user] = await connection.execute<RowDataPacket[]>(
        "SELECT * FROM users WHERE id = ?",
        [session.user_id]
    );

    connection.release();

    const { avatar, ...userInfo } = user[0];
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
                        <h1 className="text-xl font-bold">User Settings</h1>
                        <div className="divider my-0 mb-1"></div>
                        <div className="flex gap-x-8 flex-col lg:flex-row">
                            <div className="lg:w-3/5 w-full">
                                <UserSettingsForm userData={userInfo} />
                            </div>
                            <div className="lg:flex-grow block  border-2 border-dashed border-base-300 rounded-md p-5.5 text-sm mt-4 lg:mt-0">
                                <div className="flex flex-wrap items-center justify-center gap-x-1 mt-3">
                                    <div className="block border-2 border-dashed border-base-300 rounded-md p-5.5">
                                        <img
                                            src={`data:image/png;base64,${avatar.toString(
                                                "base64"
                                            )}`}
                                            className="max-w-full max-h-44 mx-auto border border-zinc-400 object-contain"
                                        ></img>{" "}
                                        <div className="sm:flex justify-center gap-x-2 mt-3">
                                            <button className="btn btn-sm btn-primary rounded-sm mb-1 sm:mb-0">
                                                Change Avatar
                                            </button>
                                            <button className="btn btn-sm btn-secondary rounded-sm">
                                                Reset Avatar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MainContainer>
                </>
            </div>
        </>
    );
}
