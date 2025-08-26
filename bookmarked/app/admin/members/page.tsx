import AdminSidebar from "@/app/components/adminsidebar";
import Navbar from "../../components/nav/nav";
import { Members } from "./members";

export default function Admin() {
    return (
        <>
            <Navbar showUser={false} />
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
