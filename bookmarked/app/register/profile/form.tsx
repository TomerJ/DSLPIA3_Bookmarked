"use client";

import { useActionState, useState } from "react";
import Genres from "../../components/settings/genres";
import { CreateProfile } from "../register";

export default function ProfileForm({
    adminDefault = false,
    user = {
        id: 1,
        name: "YOOOO",
    },
}: {
    user?: {
        id: number;
        name: string;
    };
    status?: (message: string, type: "success" | "danger" | "warning") => void;
    adminDefault?: boolean;
}) {
    const [genres, setGenres] = useState("");

    const [actionState, formAction] = useActionState(CreateProfile, null);

    return (
        <form action={formAction}>
            <div className="grid grid-cols-1 gap-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Favourite Book</legend>
                    <input
                        type="text"
                        name="favbook"
                        className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                        placeholder="Type here"
                        autoComplete="false"
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
                    />
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                        Preferred Genres
                    </legend>
                    <Genres onChange={setGenres} />
                </fieldset>

                <input type="hidden" value={genres} name="genres"></input>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Bio</legend>
                    <textarea
                        className="textarea w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                        placeholder="Type here"
                        name="bio"
                        autoComplete="false"
                    />
                </fieldset>

                <button className="btn btn-success w-1/4 rounded-md mt-3 font-inter">
                    Continue
                </button>
            </div>
        </form>
    );
}
