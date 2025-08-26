"use client";

import { deleteUser, getUserInformation } from "@/app/util/admin";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState, useEffect, useState } from "react";

export default function DeleteUser({ userId }: { userId: number }) {
    const [userInfo, setUserInfo] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [confirmInput, setConfirmInput] = useState("");

    async function fetchUser() {
        setLoading(true);
        try {
            const data = await getUserInformation(userId, true);
            setUserInfo(data);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [userId]);

    const [actionState, formAction] = useActionState(
        async (_: any, formData: FormData) => {
            const result = await deleteUser(_, formData);
            return result;
        },
        null
    );

    return (
        <dialog id="delete_user" className="modal">
            <div className="modal-box w-xl">
                {loading ? (
                    <div className="flex flex-col justify-center items-center h-full py-10">
                        <span className="loading loading-spinner loading-lg"></span>
                        <p className="mt-4 text-sm">
                            Loading user information...
                        </p>
                    </div>
                ) : !userInfo || userInfo.error ? (
                    <div className="alert alert-error mb-4 text-sm">
                        <FontAwesomeIcon icon={faX} />{" "}
                        {userInfo?.error || "Failed to load user data."}
                    </div>
                ) : (
                    <>
                        {actionState?.success && (
                            <div className="alert alert-success mb-4 text-sm">
                                <FontAwesomeIcon icon={faCheck} /> User deleted
                                successfully
                            </div>
                        )}
                        {actionState?.error && (
                            <div className="alert alert-error mb-4 text-sm">
                                <FontAwesomeIcon icon={faX} />{" "}
                                {actionState.error}
                            </div>
                        )}

                        <h3 className="font-bold text-lg mb-2">
                            Deleting user: {userInfo.user.username}
                        </h3>
                        <div className="divider my-0"></div>

                        <div
                            role="alert"
                            className="alert alert-warning alert-soft mt-2"
                        >
                            <div>
                                <h6 className="font-bold">Warning</h6>
                                <div className="flex flex-col gap-y-1.5">
                                    <p>
                                        You are about to{" "}
                                        <span className="underline">
                                            permanently delete
                                        </span>{" "}
                                        the user {userInfo.user.username} and
                                        their profile information.
                                    </p>
                                    <hr />
                                    <p className="text-xs">
                                        To continue, please type their username
                                        (case sensitive) in the box below:
                                    </p>
                                    <input
                                        type="text"
                                        name="delete_conf"
                                        autoComplete="off"
                                        className="input w-full focus:outline-none h-9 mt-2 focus:border-none focus:ring-1 transition-all focus:ring-orange-500 bg-orange-50"
                                        placeholder="Type username to confirm"
                                        value={confirmInput}
                                        onChange={(event) =>
                                            setConfirmInput(event.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="modal-action flex mt-2">
                            <div className="flex gap-2">
                                <form action={formAction}>
                                    <input
                                        type="hidden"
                                        name="user_id"
                                        value={userId}
                                    />
                                    <button
                                        className="btn btn-sm btn-error rounded-sm"
                                        disabled={
                                            confirmInput !==
                                            userInfo.user.username
                                        }
                                    >
                                        Delete User
                                    </button>
                                </form>
                                <button
                                    type="button"
                                    className="btn btn-sm rounded-sm"
                                    onClick={() => {
                                        const dialog = document.getElementById(
                                            "delete_user"
                                        ) as HTMLDialogElement;
                                        dialog?.close();
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </dialog>
    );
}
