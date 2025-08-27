"use client";
import Genres from "@/app/components/settings/genres";
import { setProfileSettings } from "@/app/util/usersettings";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RowDataPacket } from "mysql2/promise";
import { useActionState, useState } from "react";

export default function ProfileForm({ userData }: { userData: RowDataPacket }) {
    const [genres, setGenres] = useState("");

    const [actionState, formAction] = useActionState(setProfileSettings, null);

    return (
        <form action={formAction}>
            {actionState && actionState.success && (
                <div className="alert alert-success mb-4 text-sm">
                    <FontAwesomeIcon icon={faCheck} /> Profile settings have
                    been successfully updated
                </div>
            )}

            <div className="grid grid-cols-1 gap-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Favourite Book</legend>
                    <input
                        type="text"
                        name="favbook"
                        className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                        placeholder="Type here"
                        autoComplete="false"
                        defaultValue={
                            (actionState?.data?.get("favbook") ||
                                userData.fav_book ||
                                "") as string
                        }
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
                        placeholder="Type here"
                        autoComplete="false"
                        defaultValue={
                            (actionState?.data?.get("favauthor") ||
                                userData.fav_author ||
                                "") as string
                        }
                    />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                        Preferred Genres
                    </legend>
                    <Genres
                        onChange={setGenres}
                        defaultGenres={JSON.parse(userData.genres)}
                    />
                </fieldset>

                <input type="hidden" value={genres} name="genres"></input>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Bio</legend>
                    <textarea
                        className="textarea w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                        placeholder="Type here"
                        name="bio"
                        autoComplete="false"
                        defaultValue={
                            (actionState?.data?.get("bio") ||
                                userData.bio ||
                                "") as string
                        }
                    />
                </fieldset>

                <button className="btn btn-success w-1/4 rounded-md mt-3 font-inter">
                    Save
                </button>
            </div>
        </form>
    );
}
