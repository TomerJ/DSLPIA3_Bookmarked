import SettingsSidebar from "@/app/components/settingssidebar";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainContainer from "../../components/main";
import Navbar from "../../components/nav";
import Genres from "../../app/settings/genres";

export default function ProfileSettings({
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
    const sampleGenres = [
        "Science Fiction",
        "Fantasy",
        "Mystery",
        "Romance",
        "Horror",
        "Non-fiction",
    ];

    return (
        <>
            <Navbar showUser={false} />
            <div
                className="flex min-h-[calc(100vh-5rem)] w-full"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <MainContainer>
                        <h1 className="text-2xl font-bold">You're almost there!</h1>
                        <p className="italic text-sm">Please fill in your profile information to begin using Bookmark'd.</p>
                        <div className="divider my-0 mb-1"></div>
                        <div className="flex gap-x-8 flex-col lg:flex-row">
                            <div className="w-full">
                                <form>
                                    <div className="grid grid-cols-1 gap-2">
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">
                                                Favourite Book
                                            </legend>
                                            <input
                                                type="text"
                                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                                placeholder="Type here"
                                            />
                                        </fieldset>

                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">
                                                Favourite Author
                                            </legend>
                                            <input
                                                type="text"
                                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                                placeholder="Type here"
                                            />
                                        </fieldset>

                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">
                                                Preferred Genres
                                            </legend>
                                            <Genres />
                                        </fieldset>

                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">
                                                Bio
                                            </legend>
                                            <textarea
                                                className="textarea w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                                placeholder="Type here"
                                            />
                                        </fieldset>

                                        <button className="btn btn-success w-1/4 rounded-md mt-3 font-inter">
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </MainContainer>
            </div>
        </>
    );
}
