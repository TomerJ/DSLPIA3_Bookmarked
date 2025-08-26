"use client";

import { getUserInformation, setPasswordAdmin } from "@/app/util/admin";
import { faAsterisk, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState, useEffect, useState } from "react";

export default function EditPassword({ userId }: { userId: number }) {
    const [userInfo, setUserInfo] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [actionState, formAction] = useActionState(setPasswordAdmin, null);

    // Fetch username
    useEffect(() => {
        if (!userId) return;
        (async () => {
            setLoading(true);
            const data = await getUserInformation(userId);
            setUserInfo(data.user);
            setLoading(false);
        })();
    }, [userId]);

    useEffect(() => {
        if (actionState?.success) {
            const dialog = document.getElementById(
                "change_password_user"
            ) as HTMLDialogElement;
            if (dialog) setTimeout(() => dialog.close(), 1200);
        }
    }, [actionState]);

    return (
        <dialog id="change_password_user" className="modal">
            <div className="modal-box w-xl">
                {loading ? (
                    <p>Loading user info...</p>
                ) : (
                    <>
                        <h3 className="font-bold text-lg mb-2 my-0">
                            Changing password of: {userInfo?.username}
                        </h3>
                        <div className="divider my-0"></div>

                        {actionState?.success && (
                            <div className="alert alert-success mb-4 text-sm">
                                <FontAwesomeIcon icon={faCheck} /> Password
                                successfully updated.
                            </div>
                        )}
                        {actionState?.error && (
                            <div className="alert alert-error mb-4 text-sm">
                                <FontAwesomeIcon icon={faAsterisk} />{" "}
                                {actionState.error}
                            </div>
                        )}

                        <form action={formAction}>
                            <input
                                type="hidden"
                                name="user_id"
                                value={userId}
                            />

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    New Password
                                </legend>
                                <input
                                    type="password"
                                    name="new_password"
                                    className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                    placeholder="Type new password"
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Confirm New Password
                                </legend>
                                <input
                                    type="password"
                                    name="new_password_confirm"
                                    className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                    placeholder="Confirm new password"
                                />
                            </fieldset>

                            <div className="modal-action mt-2">
                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-sm btn-success rounded-sm"
                                    >
                                        Change Password
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm rounded-sm"
                                        onClick={() =>
                                            (
                                                document.getElementById(
                                                    "change_password_user"
                                                ) as HTMLDialogElement
                                            )?.close()
                                        }
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
