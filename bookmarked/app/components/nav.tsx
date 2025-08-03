import {
    faGavel,
    faGears,
    faHome,
    faNewspaper,
    faPencil,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetUserInfo } from "../util/securepage";
import Logout from "./logout";

export default async function Navbar({
    showUser = true,
}: {
    showUser?: boolean;
}) {
    let userinfo;
    if (showUser) {
        userinfo = await GetUserInfo();
    }

    return (
        <div className="navbar bg-base-100 shadow-sm h-20 px-4 z-100">
            <div className="navbar-start h-full flex items-center  ">
                <img src="/bookmarked.svg" className="h-1/2" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-rubik gap-x-1">
                    <li>
                        <a className="flex items-center menu-active">
                            <FontAwesomeIcon className="h-3.5" icon={faHome} />{" "}
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center">
                            <FontAwesomeIcon
                                className="h-3.5"
                                icon={faNewspaper}
                            />{" "}
                            Announcements
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center">
                            <FontAwesomeIcon
                                className="h-3.5 w-4"
                                icon={faPencil}
                            />{" "}
                            Reviews
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center">
                            <FontAwesomeIcon className="h-3.5" icon={faUser} />{" "}
                            Members
                        </a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {showUser && (
                    <ul className="menu menu-horizontal px-1 z-100">
                        <li>
                            <details>
                                <summary className="font-rubik flex items-center justify-center min-w-32">
                                    <img
                                        src={`data:image/png;base64,${userinfo?.avatar.toString(
                                            "base64"
                                        )}`}
                                        className="h-6 bg-base-200 rounded-sm p-1"
                                    ></img>{" "}
                                    {userinfo?.username}
                                    {Boolean(userinfo?.admin) && (
                                        <div className="badge badge-neutral badge-sm">
                                            <FontAwesomeIcon icon={faGavel} />
                                            Admin
                                        </div>
                                    )}
                                </summary>
                                <ul className="bg-base-100 rounded-t-none p-2 font-rubik">
                                    <li>
                                        <a className="flex items-center">
                                            <FontAwesomeIcon icon={faGears} />{" "}
                                            Settings
                                        </a>
                                    </li>
                                    {Boolean(userinfo?.admin) && (
                                        <li>
                                            <a className="flex items-center">
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
                )}
            </div>
        </div>
    );
}
