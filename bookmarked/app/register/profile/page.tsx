import { SecureProfileCreatePage } from "@/app/util/securepage";
import MainContainer from "../../components/main";
import Navbar from "../../components/nav/nav";
import ProfileForm from "./form";

export default async function ProfileSettings() {
    await SecureProfileCreatePage();
    return (
        <>
            <Navbar showUser={false} />

            <div
                className="flex min-h-[calc(100vh-5rem)] w-full"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <MainContainer>
                    <h1 className="text-2xl font-bold">You're almost there!</h1>
                    <p className="italic text-sm">
                        Please fill in your profile information to begin using
                        Bookmark'd.
                    </p>
                    <div className="divider my-0 mb-1"></div>
                    <div className="flex gap-x-8 flex-col lg:flex-row">
                        <div className="w-full">
                            <ProfileForm />
                        </div>
                    </div>
                </MainContainer>
            </div>
        </>
    );
}
