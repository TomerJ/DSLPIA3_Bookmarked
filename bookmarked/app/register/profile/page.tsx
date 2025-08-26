
import SettingsSidebar from "@/app/components/settingssidebar";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainContainer from "../../components/main";
import Navbar from "../../components/nav";
import Genres from "../../components/genres";
import ProfileForm from "./form";

export default function ProfileSettings({
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
            <Navbar showUser={false} />
            <div
                className="flex min-h-[calc(100vh-5rem)] w-full"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <MainContainer>
                        <h1 className="text-2xl font-bold">You're almost there!</h1>
                        <p className="italic text-sm">Please fill in your profile information to begin using Bookmark'd.</p>
                        <div className="divider my-0 mb-1"></div>
                        <div className="flex gap-x-8 flex-col lg:flex-row">
                            <div className="w-full">
                                <ProfileForm/>
                            </div>
                        </div>
                    </MainContainer>
            </div>
        </>
    );
}
