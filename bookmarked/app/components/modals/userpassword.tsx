"use client";

import { setPassword } from "@/app/util/usersettings";
import { faAsterisk, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState, useEffect } from "react";

export default function UserPassword() {
    const [actionState, formAction] = useActionState(setPassword, null);
    useEffect(() => {
        if (actionState && actionState.success) {
            const dialog = document.getElementById(
                "change_password_user"
            ) as HTMLDialogElement;
            if (dialog) {
                setTimeout(() => dialog.close(), 1200);
            }
        }
    }, [actionState]);
    return (
        <dialog id="change_password_user" className="modal">
            <div className="modal-box w-xl">
                <h3 className="font-bold text-lg mb-2 my-0">Change Password</h3>
                <div className="divider my-0"></div>
                {actionState && actionState.success && (
                    <div className="alert alert-success mb-4 text-sm">
                        <FontAwesomeIcon icon={faCheck} /> Password has been
                        successfully updated.
                    </div>
                )}
                {actionState && actionState.error && (
                    <div className="alert alert-error mb-4 text-sm">
                        <FontAwesomeIcon icon={faAsterisk} />{" "}
                        {actionState.error}
                    </div>
                )}
                <form action={formAction}>
                    <div className="grid grid-cols-1 gap-2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Current Password
                            </legend>
                            <input
                                type="password"
                                name="password"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                            />
                        </fieldset>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                New Password
                            </legend>
                            <input
                                type="password"
                                name="new_password"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                            />
                        </fieldset>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Confirm New Password
                            </legend>
                            <input
                                type="password"
                                name="new_password_confirm"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                            />
                        </fieldset>
                    </div>

                    <div className="modal-action">
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
            </div>
        </dialog>
    );
}
