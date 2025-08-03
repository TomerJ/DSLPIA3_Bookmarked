"use client";
import Memberlist from "@/app/components/memberlist";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Members() {
    return (
        <>
            <main className="flex-grow p-7 bg-base-200 font-rubik w-full">
                <div className="container bg-base-100 w-full drop-shadow-md h-full p-7">
                    <h1 className="text-xl font-bold">Manage Members</h1>
                    <div className="divider my-0 mb-2"></div>
                    <Memberlist />
                </div>
            </main>

            <div className="toast toast-end fixed">
                <div className="alert alert-error">
                    <span>
                        {" "}
                        <FontAwesomeIcon
                            icon={faX}
                            className="mr-1 h-3.5 w-3.5"
                        />{" "}
                        You cannot delete your own account.
                    </span>
                </div>
                <div className="alert alert-error">
                    <span>
                        {" "}
                        <FontAwesomeIcon
                            icon={faX}
                            className="mr-1 h-3.5 w-3.5"
                        />{" "}
                        You cannot update your own permissions.
                    </span>
                </div>
                <div className="alert alert-success">
                    <span>
                        {" "}
                        <FontAwesomeIcon
                            icon={faCheck}
                            className="mr-1 h-3.5 w-3.5"
                        />{" "}
                        User THING has been given administrator privilges
                    </span>
                </div>
            </div>
        </>
    );
}
