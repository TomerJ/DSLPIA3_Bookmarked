"use client";

import { getUserInformation, setXP } from "@/app/util/admin";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState, useEffect, useState } from "react";

export default function ManageProgress({ userId }: { userId: number }) {
    const [userInfo, setUserInfo] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    async function fetchUser() {
        setLoading(true);
        try {
            const data = await getUserInformation(userId);
            setUserInfo(data);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [userId]);

    const [actionState, formAction] = useActionState(
        async (prevState: any, formData: FormData) => {
            const result = await setXP(prevState, formData);
            if (result?.success) {
                await fetchUser();
            }
            return result;
        },
        null
    );

    return (
        <dialog id="manage_progress" className="modal">
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
                                <FontAwesomeIcon icon={faCheck} /> User
                                successfully updated
                            </div>
                        )}
                        <h3 className="font-bold text-lg mb-2 my-0">
                            Progress of {userInfo.user.username}
                        </h3>
                        <div className="divider my-0"></div>

                        <div className="grid grid-cols-1 gap-2">
                            <form action={formAction}>
                                <input
                                    type="hidden"
                                    name="user_id"
                                    value={userId}
                                />
                                <fieldset className="fieldset w-full">
                                    <legend className="fieldset-legend">
                                        XP
                                    </legend>
                                    <div className="flex gap-x-2 w-full items-center">
                                        <input
                                            type="number"
                                            name="xp"
                                            className="input focus:outline-none w-32 focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                            defaultValue={userInfo.user.xp || 0}
                                        />
                                        <div className="grow">
                                            <p>
                                                (Lvl.{" "}
                                                {Math.floor(
                                                    (userInfo.user.xp || 0) /
                                                        100
                                                )}
                                                )
                                            </p>
                                        </div>
                                    </div>
                                    <button className="btn btn-xs btn-success rounded-sm">
                                        Update XP
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </>
                )}

                <div className="modal-action">
                    <div className="flex gap-2">
                        <form method="dialog">
                            <button className="btn btn-sm rounded-sm">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
