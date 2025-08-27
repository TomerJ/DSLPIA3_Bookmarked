import AdminSidebar from "@/app/components/admin/adminsidebar";
import { SecurePage } from "@/app/util/securepage";
import Navbar from "../../components/nav/nav";
import { Members } from "./members";

export default async function Admin() {
    SecurePage(true);
    return (
        <>
            <Navbar showElevated={true} />
            <div
                className="flex min-h-[calc(100vh-5rem)] w-full"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <AdminSidebar />
                <Members />
            </div>
        </>
    );
}
