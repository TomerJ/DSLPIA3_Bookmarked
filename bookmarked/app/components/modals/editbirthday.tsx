"use client";

import { getUserInformation, updateUserBirthday } from "@/app/util/admin";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState, useEffect, useState } from "react";

export default function EditBirthday({ userId }: { userId: number }) {
    const [userInfo, setUserInfo] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [actionState, formAction] = useActionState(updateUserBirthday, null);

    async function fetchUser() {
        setLoading(true);
        try {
            const data = await getUserInformation(userId);
            setUserInfo(data.user);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [userId]);

    useEffect(() => {
        if (actionState?.success) {
            const dialog = document.getElementById(
                "edit_birthday"
            ) as HTMLDialogElement;
            if (dialog) setTimeout(() => dialog.close(), 1200);
        }
    }, [actionState]);

    const dob = userInfo?.dob ? new Date(userInfo.dob) : null;

    return (
        <dialog id="edit_birthday" className="modal">
            <div className="modal-box w-xl">
                {loading ? (
                    <div className="flex flex-col justify-center items-center py-10">
                        <span className="loading loading-spinner loading-lg"></span>
                        <p className="mt-4 text-sm">Loading user info...</p>
                    </div>
                ) : (
                    <>
                        <h3 className="font-bold text-lg mb-2">
                            Editing birthday of: {userInfo.username}
                        </h3>
                        <div className="divider my-0"></div>

                        {actionState?.success && (
                            <div className="alert alert-success mb-4 text-sm">
                                <FontAwesomeIcon icon={faCheck} /> Birthday
                                successfully updated.
                            </div>
                        )}
                        {actionState?.error && (
                            <div className="alert alert-error mb-4 text-sm">
                                <FontAwesomeIcon icon={faX} />{" "}
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
                                    Birthday
                                </legend>
                                <div className="flex join">
                                    <select
                                        name="dob-day"
                                        className="select join-item focus:outline-none focus:border-none focus:ring-1 focus:ring-orange-700"
                                        defaultValue={
                                            dob ? dob.getDate().toString() : ""
                                        }
                                    >
                                        <option disabled value="">
                                            Day
                                        </option>
                                        {Array.from({ length: 31 }, (_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        name="dob-month"
                                        className="select join-item focus:outline-none focus:border-none focus:ring-1 focus:ring-orange-700"
                                        defaultValue={
                                            dob
                                                ? (
                                                      dob.getMonth() + 1
                                                  ).toString()
                                                : ""
                                        }
                                    >
                                        <option disabled value="">
                                            Month
                                        </option>
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        name="dob-year"
                                        className="select join-item focus:outline-none focus:border-none focus:ring-1 focus:ring-orange-700"
                                        defaultValue={
                                            dob
                                                ? dob.getFullYear().toString()
                                                : ""
                                        }
                                    >
                                        <option disabled value="">
                                            Year
                                        </option>
                                        {Array.from({ length: 120 }, (_, i) => {
                                            const year =
                                                new Date().getFullYear() - i;
                                            return (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </fieldset>

                            <div className="modal-action mt-2">
                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-sm btn-success rounded-sm"
                                    >
                                        Save Birthday
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm rounded-sm"
                                        onClick={() =>
                                            (
                                                document.getElementById(
                                                    "edit_birthday"
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
