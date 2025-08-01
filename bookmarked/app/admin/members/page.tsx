import {
    faCheck,
    faClipboardCheck,
    faEnvelope,
    faFilePen,
    faFlag,
    faGear,
    faHome,
    faMagnifyingGlass,
    faNewspaper,
    faShield,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/nav";
import Memberlist from "../../components/memberlist"
import AdminSidebar from "@/app/components/adminsidebar";

export default function Admin() {
    return (
        <>
            <Navbar showUser={false} />
            <div
                className="flex min-h-[calc(100vh-5rem)]"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <AdminSidebar/>
                <main className="flex-grow p-7 bg-base-200 font-rubik">

                    <div className="container bg-base-100 w-full drop-shadow-md h-full p-7">
                        <h1 className="text-xl font-bold">Manage Members</h1>
                         <div className="divider my-0 mb-2"></div>
                        <Memberlist/>
                        
                    </div>
                </main>

            </div>

        </>
    );
}
