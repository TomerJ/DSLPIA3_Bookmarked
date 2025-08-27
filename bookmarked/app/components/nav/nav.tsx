import { faGavel, faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetUserInfo, getSession } from "../../util/securepage";
import Logout from "../logout";
import Dock from "./dock";
import Elevated from "./elevated"; // client component
import Links from "./links";
import SettingsDock from "./settingsdock";

export default async function Navbar({
    showUser = true,
    showElevated = false,
    showSettingsDock = false,
}: {
    showUser?: boolean;
    showElevated?: boolean;
    showSettingsDock?: boolean;
}) {
    let userinfo: any = null;
    let session: any = null;

    if (showUser) {
        userinfo = await GetUserInfo();
        session = await getSession();
    }

    return (
        <div className="navbar bg-base-100 shadow-sm h-20 px-4 z-100">
            <div className="navbar-start h-full flex items-center">
                <img
                    src="/bookmarked.png"
                    className="h-1/2"
                    alt="Bookmarked Logo"
                />
            </div>

            <div className="navbar-center hidden lg:flex">
                <Links />
            </div>

            <div className="navbar-end">
                {showUser && userinfo && (
                    <>
                        {showSettingsDock ? <SettingsDock /> : <Dock />}
                        {session?.elevated_at && showElevated && (
                            <div className="font-mono text-red-500 text-sm">
                                <Elevated elevatedAt={session.elevated_at} />
                            </div>
                        )}

                        <ul className="menu menu-horizontal px-1 z-100">
                            <li>
                                <details>
                                    <summary className="font-rubik flex items-center justify-center min-w-32">
                                        <img
                                            src={`data:image/png;base64,${userinfo.avatar.toString(
                                                "base64"
                                            )}`}
                                            className="h-6 bg-base-200 rounded-sm p-1"
                                        />
                                        {userinfo.username}
                                        {userinfo.privilege === "admin" && (
                                            <div className="badge badge-neutral badge-sm">
                                                <FontAwesomeIcon
                                                    icon={faGavel}
                                                />{" "}
                                                Admin
                                            </div>
                                        )}
                                    </summary>
                                    <ul className="bg-base-100 rounded-t-none p-2 font-rubik">
                                        <li>
                                            <a
                                                className="flex items-center"
                                                href="/app/settings/user"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faGears}
                                                />{" "}
                                                Settings
                                            </a>
                                        </li>
                                        {userinfo.privilege === "admin" && (
                                            <li>
                                                <a
                                                    className="flex items-center"
                                                    href="/admin/members"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faGavel}
                                                    />{" "}
                                                    Admin Dashboard
                                                </a>
                                            </li>
                                        )}
                                        <li>
                                            <Logout />
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}
