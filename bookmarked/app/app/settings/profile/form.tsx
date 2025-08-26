"use client";

import { getUserInformation, updateProfile } from "@/app/util/admin";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState, useEffect, useState } from "react";
import Genres from "../../../components/settings/genres"; // Make sure the path is correct

export default function EditProfile({ userId }: { userId: number }) {
    const [userInfo, setUserInfo] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [genres, setGenres] = useState<string>("");

    async function fetchUser() {
        setLoading(true);
        try {
            const data = await getUserInformation(userId);
            setUserInfo(data);

            // Initialize genres state from profile
            if (data?.user?.genres) {
                setGenres(data.user.genres); // Keep it as JSON string
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [userId]);

    const [actionState, formAction] = useActionState(
        async (_: any, formData: FormData) => {
            // Ensure genres are included
            formData.set("genres", genres);
            const result = await updateProfile(_, formData);
            if (result?.success) {
                await fetchUser();
            }
            return result;
        },
        null
    );

    return (
        <dialog id="edit_profile" className="modal">
            <div className="modal-box w-xl">
                {loading ? (
                    <div className="flex flex-col justify-center items-center h-full py-10">
                        <span className="loading loading-spinner loading-lg"></span>
                        <p className="mt-4 text-sm">
                            Loading user information...
                        </p>
                    </div>
                ) : !userInfo || userInfo.error || !userInfo.user.xp ? (
                    <div className="alert alert-error mb-4 text-sm">
                        <FontAwesomeIcon icon={faX} />{" "}
                        {userInfo?.error || "User does not have a profile."}
                    </div>
                ) : (
                    <>
                        {actionState?.success && (
                            <div className="alert alert-success mb-4 text-sm">
                                <FontAwesomeIcon icon={faCheck} /> Profile
                                successfully updated
                            </div>
                        )}

                        <h3 className="font-bold text-lg mb-2 my-0">
                            Edit Profile: {userInfo.user.username}
                        </h3>
                        <div className="divider my-0"></div>

                        <form
                            action={formAction}
                            className="grid grid-cols-1 gap-2"
                        >
                            <input
                                type="hidden"
                                name="user_id"
                                value={userId}
                            />

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Favourite Book
                                </legend>
                                <input
                                    type="text"
                                    name="favbook"
                                    className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                    defaultValue={userInfo.user.fav_book || ""}
                                    placeholder="Type here"
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Favourite Author
                                </legend>
                                <input
                                    type="text"
                                    name="favauthor"
                                    className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                    defaultValue={
                                        userInfo.user.fav_author || ""
                                    }
                                    placeholder="Type here"
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">
                                    Preferred Genres
                                </legend>

                                <Genres
                                    defaultGenres={
                                        userInfo.user.genres
                                            ? JSON.parse(userInfo.user.genres)
                                            : []
                                    }
                                    onChange={setGenres}
                                />
                                <input
                                    type="hidden"
                                    name="genres"
                                    value={genres}
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Bio</legend>
                                <textarea
                                    name="bio"
                                    className="textarea w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                    placeholder="Type here"
                                    defaultValue={userInfo.user.bio || ""}
                                />
                            </fieldset>

                            <div className="modal-action flex gap-2 mt-2">
                                <button
                                    className="btn btn-sm btn-success rounded-sm"
                                    type="submit"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm rounded-sm"
                                    onClick={() => {
                                        const dialog = document.getElementById(
                                            "edit_profile"
                                        ) as HTMLDialogElement;
                                        dialog?.close();
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </dialog>
    );
}
