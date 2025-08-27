import { faGears, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function SettingsSidebar() {
    return (
        <>
            <aside className="w-80 py-4 px-2 bg-base-100 hidden lg:block">
                <ul
                    className="menu text-base-content min-h-full font-rubik
                            flex flex-col w-full gap-y-4"
                >
                    <li className="h-7">
                        <a href="/app/settings/user" className="py-3">
                            <FontAwesomeIcon
                                icon={faGears}
                                className="mr-1 h-3.5 w-3.5"
                            />{" "}
                            User Settings
                        </a>
                    </li>
                    <li className="h-7">
                        <a href="/app/settings/profile" className="py-3">
                            <FontAwesomeIcon
                                icon={faUserGear}
                                className="mr-1 h-3.5 w-3.5"
                            />{" "}
                            Profile Settings
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}
