import { redirect } from "next/navigation";
import Navbar from "./components/nav/nav";
import { getSession } from "./util/securepage";

export default async function LoginPage() {
    const session = await getSession();

    if (session) {
        redirect("/app");
    }
    return (
        <>
            <Navbar showUser={false} />
            <div
                className="dots flex items-center justify-center py-10"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-2/7 w-full p-9 lg:h-fit drop-shadow-md mx-auto my-auto flex flex-col justify-center">
                    <img src="bookmarked.png" className="w-72 mx-auto"></img>
                    <main className="mx-auto text-center mt-3">
                        <h1 className="mb-4">
                            Welcome to Bookmark'd! Here you can access your book
                            club. Please select an option to continue:
                        </h1>
                        <div className="flex flex-col gap-y-1">
                            <a
                                className="btn btn-primary rounded-md"
                                href="/login"
                            >
                                Login to an existing account
                            </a>
                            <a
                                className="btn btn-secondary rounded-md"
                                href="/register"
                            >
                                Register for a new account
                            </a>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
