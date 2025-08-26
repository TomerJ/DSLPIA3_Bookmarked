"use client";

import { getUserInformation, setPrivilege } from "@/app/util/admin";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState, useEffect, useState } from "react";

export default function EditPrivileges({ userId }: { userId: number }) {
    const [userInfo, setUserInfo] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState("member");
    const [confirmInput, setConfirmInput] = useState("");
    const [originalRole, setOriginalRole] = useState("member");

    async function fetchUser() {
        setLoading(true);
        try {
            const data = await getUserInformation(userId, true);
            setUserInfo(data);
            const currentRole =
                data?.user?.privilege?.toLowerCase() || "member";
            setRole(currentRole);
            setOriginalRole(currentRole);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [userId]);

    const [actionState, formAction] = useActionState(
        async (_: any, formData: FormData) => {
            const result = await setPrivilege(_, formData);
            if (result?.success) {
                await fetchUser();
            }
            return result;
        },
        null
    );

    // only show admin safety thingy if changing to admin and user was not admin before
    const isGrantingAdmin = role === "admin" && originalRole !== "admin";

    return (
        <dialog id="edit_perms" className="modal">
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
                                <FontAwesomeIcon icon={faCheck} /> Privileges
                                updated successfully
                            </div>
                        )}
                        {actionState?.error && (
                            <div className="alert alert-error mb-4 text-sm">
                                <FontAwesomeIcon icon={faX} />{" "}
                                {actionState.error}
                            </div>
                        )}

                        <h3 className="font-bold text-lg mb-2 my-0">
                            Editing Privileges for {userInfo.user.username}
                        </h3>
                        <div className="divider my-0"></div>

                        <form action={formAction}>
                            <input
                                type="hidden"
                                name="user_id"
                                value={userId}
                            />

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Privilege Level
                                </legend>
                                <select
                                    className="select select-sm w-full focus:outline-none focus:border-none focus:ring-1 transition-all"
                                    name="privilege"
                                    value={role}
                                    onChange={(e) =>
                                        setRole(e.target.value.toLowerCase())
                                    }
                                >
                                    <option value="admin">Admin</option>
                                    <option value="member">Member</option>
                                </select>
                            </fieldset>

                            {isGrantingAdmin && (
                                <div
                                    role="alert"
                                    className="alert alert-warning alert-soft mt-2"
                                >
                                    <div>
                                        <h6 className="font-bold">Warning</h6>
                                        <div className="flex flex-col gap-y-1.5">
                                            <p>
                                                You are about to grant{" "}
                                                <span className="underline">
                                                    administrator privileges
                                                </span>{" "}
                                                to {userInfo.user.username}.
                                            </p>
                                            <hr />
                                            <p className="text-xs">
                                                To continue, please type their
                                                username (case sensitive) in the
                                                box below:
                                            </p>
                                            <input
                                                type="text"
                                                name="perms_conf"
                                                autoComplete="off"
                                                className="input w-full focus:outline-none h-9 mt-2 focus:border-none focus:ring-1 transition-all focus:ring-orange-500 bg-orange-50"
                                                placeholder="Type here"
                                                onChange={(event) =>
                                                    setConfirmInput(
                                                        event.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="modal-action flex">
                                <div className="flex gap-2">
                                    <button
                                        className="btn btn-sm btn-success rounded-sm"
                                        disabled={
                                            isGrantingAdmin &&
                                            confirmInput !==
                                                userInfo.user.username
                                        }
                                    >
                                        Update Permissions
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm rounded-sm"
                                        onClick={() => {
                                            const dialog =
                                                document.getElementById(
                                                    "edit_perms"
                                                ) as HTMLDialogElement;
                                            dialog?.close();
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </dialog>
    );
}
