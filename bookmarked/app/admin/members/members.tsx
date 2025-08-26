import Memberlist from "@/app/components/memberlist";
import { getSession } from "@/app/util/securepage";
import { redirect } from "next/navigation";

export async function Members() {
    const session = await getSession(true);
    if (!session) {
        redirect("/elevate");
    }
    return (
        <>
            <main className="flex-grow p-7 bg-base-200 font-rubik w-full">
                <div className="container bg-base-100 w-full drop-shadow-md h-full p-7">
                    <h1 className="text-xl font-bold">Manage Members</h1>
                    <div className="divider my-0 mb-2"></div>
                    <Memberlist sessionUser={session.user_id} />
                </div>
            </main>
        </>
    );
}
