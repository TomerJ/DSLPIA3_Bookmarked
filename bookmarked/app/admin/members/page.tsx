import AdminSidebar from "@/app/components/adminsidebar";
import Navbar from "../../components/nav";
import { Members } from "./members";

export default function Admin({
    adminDefault = false,
    user = {
        id: 1,
        name: "YOOOO",
    },
}: {
    user?: {
        id: number;
        name: string;
    };
    status?: (message: string, type: "success" | "danger" | "warning") => void;
    adminDefault?: boolean;
}) {
    return (
        <>
            <Navbar showUser={false}/>
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
