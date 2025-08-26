import {
    faEnvelope,
    faFlag,
    faHome,
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

            <div className="dock lg:hidden font-inter">
                <button className="dock-active">
                    <FontAwesomeIcon icon={faFlag} className="h-3.5 w-3.5" />

                    <span className="dock-label">Moderation</span>
                </button>

                <button>
                    <FontAwesomeIcon icon={faUser} className="h-3.5 w-3.5" />

                    <span className="dock-label">Members</span>
                </button>
                <button>
                    <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5" />

                    <span className="dock-label">Invites</span>
                </button>
                <button>
                    <FontAwesomeIcon
                        icon={faNewspaper}
                        className="h-3.5 w-3.5"
                    />

                    <span className="dock-label">Announcements</span>
                </button>

                <button>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="h-3.5 w-3.5"
                    />

                    <span className="dock-label">Audit Log</span>
                </button>
                <button>
                    <FontAwesomeIcon icon={faHome} className="h-3.5 w-3.5" />

                    <span className="dock-label">Return to club</span>
                </button>
            </div>
        </>
    );
}
