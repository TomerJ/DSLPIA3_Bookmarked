import { redirect } from "next/navigation";
import Navbar from "../components/nav/nav";
import { getSession } from "../util/securepage";
import LoginForm from "./form";

export default async function LoginPage() {
    const session = await getSession();

    if (!session) {
        redirect("/login");
    }
    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center py-10"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-2/5 w-full p-9 lg:h-fit drop-shadow-md mx-auto my-auto">
                    <LoginForm username={session.username} />
                </div>
            </div>
        </>
    );
}
