import { faBan, faGavel, faGear, faGears, faHome, faNewspaper, faPencil, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm h-20 px-4 z-100">
            <div className="navbar-start h-full flex items-center  ">
                <img src="/bookmarked.svg" className="h-1/2" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-rubik gap-x-1">
                    <li><a className="flex items-center menu-active"><FontAwesomeIcon icon={faHome} />{" "}Home</a></li>
                    <li><a className="flex items-center"><FontAwesomeIcon icon={faNewspaper} />{" "}Announcements</a></li>
                    <li><a className="flex items-center"><FontAwesomeIcon icon={faPencil} />{" "}Reviews</a></li>
                    <li><a className="flex items-center"><FontAwesomeIcon icon={faUser} />{" "}Profiles</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 z-100">
                    <li>
                        <details>
                            
                            <summary className="font-rubik flex items-center"><img src="/Untitled.png" className="h-6 bg-base-200 rounded-sm p-1"></img> TestyMcTestFace12345 <div className="badge badge-neutral badge-sm"><FontAwesomeIcon icon={faGavel} />Admin</div></summary>
                            <ul className="bg-base-100 rounded-t-none p-2 font-rubik">
                                <li>
                                    <a className="flex items-center"><FontAwesomeIcon icon={faGears} />{" "}Settings</a>
                                </li>
                                <li>
                                    <a className="flex items-center"><FontAwesomeIcon icon={faGavel} />{" "}Admin Dashboard</a>
                                </li>
                                                                <li>
                                    <a className="flex items-center"><FontAwesomeIcon icon={faRightFromBracket} />{" "}Logout</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}
