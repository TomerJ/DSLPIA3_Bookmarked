import {
    faFlag,
    faMagnifyingGlass,
    faNewspaper,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/nav";

export default function Admin() {
    return (
        <>
            <Navbar />
            <div
                className="flex min-h-[calc(100vh-5rem)]"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <aside className="w-80 py-4 px-2 bg-base-100">
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
                                Review Approval
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

                <main className="flex-grow p-6 bg-base-200">
                    <h1 className="text-2xl font-bold mb-4">weee</h1>
                </main>
            </div>
        </>
    );
}
