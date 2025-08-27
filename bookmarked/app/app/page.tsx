import { redirect } from "next/navigation";
import Level from "../components/level";
import Navbar from "../components/nav/nav";
import { systemPool } from "../util/connect";
import { getSession } from "../util/securepage";

export default async function App() {
    const connection = await systemPool.getConnection();
    const session = await getSession();
    if (!session) {
        redirect("/login");
    }

    connection.release();
    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center py-10"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="lg:w-5/6 w-full p-2 lg:h-fit drop-shadow-md mx-auto my-auto flex flex-col gap-y-4">
                    <div className="p-9 bg-base-100 w-full min-h-[300px] drop-shadow-md">
                        <div className="font-rubik">
                            <h1 className="text-xl font-medium">
                                Good Evening,
                            </h1>
                            <h1 className="text-3xl font-black">
                                {session.firstname} {session.lastname}
                            </h1>

                            <div className="stats shadow mt-4 w-full stats-vertical md:stats-horizontal">
                                <Level xp={session.xp} />

                                <div className="stat flex-1">
                                    <div className="stat-title">
                                        Reviews Written
                                    </div>
                                    <div className="stat-value text-accent">
                                        3
                                    </div>
                                </div>

                                <div className="stat flex-1">
                                    <div className="stat-title">
                                        Books Logged
                                    </div>
                                    <div className="stat-value text-secondary">
                                        42
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-x-1">
                                <button className="btn btn-accent btn-sm rounded-md mt-5">
                                    New Review
                                </button>
                                <button className="btn btn-secondary btn-sm rounded-md mt-5">
                                    Log Book
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-9 bg-base-100 w-full min-h-[300px] drop-shadow-md">
                        <div className="font-rubik">
                            <h2 className="text-xl font-normal mb-2">
                                Newest Reviews
                            </h2>
                            <div className="divider"></div>
                            <ul className="list bg-base-100 rounded-box shadow-md">
                                <li className="list-row">
                                    <div>
                                        <img
                                            className="h-15 rounded-box"
                                            src="https://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            Curious George's
                                            Eighty-Four-Nineteen blah
                                        </div>
                                        <div className="text-xs uppercase font-semibold opacity-60 mb-1.5">
                                            Jason Respons
                                        </div>
                                        <p className="list-col-wrap text-xs">
                                            Mudfish gopher rockfish barramundi,
                                            yellow weaver Australian herring
                                            weatherfish gulper eel candlefish
                                            tiger shovelnose catfish pearl
                                            danio. Demoiselle southern hake dab:
                                            pilchard snubnose parasitic eel.
                                            Bobtail snipe eel, bigeye squaretail
                                            sand dab European perch...
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
