import {
    faEnvelope,
    faFlag,
    faMagnifyingGlass,
    faNewspaper,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function AdminSidebar() {
    return (
        <>
            <aside className="w-80 py-4 px-2 bg-base-100 hidden lg:block">
                <ul
                    className="menu text-base-content min-h-full font-rubik
                            flex flex-col w-full gap-y-4"
                >
                    <li className="h-7">
                        <a href="#" className="py-3">
                            <FontAwesomeIcon
                                icon={faFlag}
                                className="mr-1 h-3.5 w-3.5"
                            />{" "}
                            Moderation
                        </a>
                    </li>
                    <li className="h-7">
                        <a href="#" className="py-3">
                            <FontAwesomeIcon
                                icon={faUser}
                                className="mr-1 h-3.5 w-3.5"
                            />{" "}
                            Members
                        </a>
                    </li>
                    <li className="h-7">
                        <a href="#" className="py-3">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="mr-1 h-3.5 w-3.5"
                            />{" "}
                            Invites
                        </a>
                    </li>
                    <li className="h-7">
                        <a href="#" className="py-3">
                            <FontAwesomeIcon
                                icon={faNewspaper}
                                className="mr-1 h-3.5 w-3.5"
                            />{" "}
                            Announcements
                        </a>
                    </li>

                    <li className="h-7">
                        <a href="#" className="py-3">
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="mr-1 h-3.5 w-3.5"
                            />{" "}
                            Audit Log
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    );
}
