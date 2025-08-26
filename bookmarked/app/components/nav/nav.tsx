import { faGavel, faGears, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetUserInfo } from "../../util/securepage";
import Logout from "../logout";
import Links from "./links";

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
            <div className="navbar-start h-full flex items-center">
                <img src="/bookmarked.svg" className="h-1/2" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <Links />
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
                                    />
                                    {userinfo?.username}
                                    {userinfo?.privilege == "admin" && (
                                        <div className="badge badge-neutral badge-sm">
                                            <FontAwesomeIcon icon={faGavel} />{" "}
                                            Admin
                                        </div>
                                    )}
                                    {userinfo?.privilege == "regular" && (
                                        <div className="badge badge-accent badge-sm">
                                            <FontAwesomeIcon icon={faStar} />{" "}
                                            Regular
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
                                    {userinfo?.privilege == "admin" && (
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
