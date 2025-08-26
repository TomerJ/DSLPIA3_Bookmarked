import SettingsSidebar from "@/app/components/settingssidebar";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Genres from "../../../components/genres";
import MainContainer from "../../../components/main";
import Navbar from "../../../components/nav/nav";

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
                <SettingsSidebar />
                <>
                    <MainContainer>
                        <h1 className="text-xl font-bold">Profile Settings</h1>
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
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </MainContainer>

                    {/* Toast messages */}
                    <div className="toast toast-end fixed font-inter">
                        <div className="alert alert-error">
                            <span>
                                <FontAwesomeIcon
                                    icon={faX}
                                    className="mr-1 h-3.5 w-3.5"
                                />
                                You cannot delete your own account.
                            </span>
                        </div>
                        <div className="alert alert-error">
                            <div className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faX}
                                    className="mr-2 h-3.5"
                                />
                                <p>You cannot update your own permissions.</p>
                            </div>
                        </div>
                        <div className="alert alert-success">
                            <span>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-1 h-3.5 w-3.5"
                                />
                                User THING has been given administrator
                                privileges
                            </span>
                        </div>
                    </div>
                </>
            </div>
        </>
    );
}
