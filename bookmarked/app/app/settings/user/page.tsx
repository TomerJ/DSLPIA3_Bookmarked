import SettingsSidebar from "@/app/components/settingssidebar";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainContainer from "../../../components/main";
import Navbar from "../../../components/nav/nav";

export default function Admin({
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
                        <h1 className="text-xl font-bold">User Settings</h1>
                        <div className="divider my-0 mb-1"></div>
                        <div className="flex gap-x-8 flex-col lg:flex-row">
                            <div className="lg:w-3/5 w-full">
                                <form>
                                    <div className="grid grid-cols-1 gap-2">
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">
                                                Username
                                            </legend>
                                            <input
                                                type="text"
                                                name="username"
                                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                                placeholder="Type here"
                                            />
                                        </fieldset>
                                        <div className=""></div>
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">
                                                Email Address
                                            </legend>
                                            <input
                                                type="text"
                                                name="username"
                                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                                placeholder="Type here"
                                            />
                                            <p className="text-yellow-600 text-xs mt-auto italic">
                                                Not visible to public
                                            </p>
                                        </fieldset>
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">
                                                Full Name
                                            </legend>
                                            <div className="flex gap-x-2">
                                                <input
                                                    type="text"
                                                    name="firstname"
                                                    className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                                    placeholder="First Name"
                                                />
                                                <input
                                                    type="text"
                                                    name="lastname"
                                                    className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                            <p className="text-yellow-600 text-xs mt-auto italic">
                                                Not visible to public
                                            </p>
                                        </fieldset>
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">
                                                Birthday
                                            </legend>
                                            <div className="flex join">
                                                {" "}
                                                <select
                                                    name="dob-day"
                                                    className="select focus:outline-none  focus:border-none  focus:ring-1 focus:ring-orange-700 join-item"
                                                >
                                                    <option disabled value="">
                                                        Day
                                                    </option>
                                                    {Array.from(
                                                        { length: 31 },
                                                        (_, i) => (
                                                            <option
                                                                key={i + 1}
                                                                value={i + 1}
                                                            >
                                                                {i + 1}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                                <select
                                                    name="dob-month"
                                                    className="select focus:outline-none  focus:border-none  focus:ring-1 focus:ring-orange-700 join-item"
                                                >
                                                    <option disabled value="">
                                                        Month
                                                    </option>
                                                    {Array.from(
                                                        { length: 31 },
                                                        (_, i) => (
                                                            <option
                                                                key={i + 1}
                                                                value={i + 1}
                                                            >
                                                                {i + 1}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                                <select
                                                    name="dob-year"
                                                    className="select focus:outline-none  focus:border-none  focus:ring-1 focus:ring-orange-700 join-item"
                                                >
                                                    <option disabled value="">
                                                        Year
                                                    </option>
                                                    {Array.from(
                                                        { length: 120 },
                                                        (_, i) => {
                                                            const year =
                                                                new Date().getFullYear() -
                                                                i;
                                                            return (
                                                                <option
                                                                    key={year}
                                                                    value={year}
                                                                >
                                                                    {year}
                                                                </option>
                                                            );
                                                        }
                                                    )}
                                                </select>
                                            </div>
                                            <p className="text-yellow-600 text-xs mt-auto italic">
                                                Not visible to public
                                            </p>
                                        </fieldset>

                                        <button className="btn btn-success w-1/4 rounded-md mt-3 font-inter">
                                            Save
                                        </button>
                                        {/* <p className="text-yellow-600 text-xs mt-auto italic">Should you need to delete your account, please ask an administrator.</p> */}
                                    </div>
                                </form>
                            </div>
                            <div className="lg:flex-grow block  border-2 border-dashed border-base-300 rounded-md p-5.5 text-sm mt-4 lg:mt-0">
                                <div className="flex flex-wrap items-center justify-center gap-x-1 mt-3">
                                    <div className="block border-2 border-dashed border-base-300 rounded-md p-5.5">
                                        <img
                                            src="/Untitled.png"
                                            className="max-w-full max-h-44 mx-auto border border-zinc-400 object-contain"
                                        ></img>

                                        <div className="flex justify-center gap-x-2 mt-3">
                                            <button className="btn btn-sm btn-primary rounded-sm">
                                                Change Avatar
                                            </button>
                                            <button className="btn btn-sm btn-secondary rounded-sm">
                                                Reset Avatar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MainContainer>

                    <div className="toast toast-end fixed font-inter">
                        <div className="alert alert-error">
                            <span>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faX}
                                    className="mr-1 h-3.5 w-3.5"
                                />{" "}
                                You cannot delete your own account.
                            </span>
                        </div>
                        <div className="alert alert-error">
                            <div className="flex items-center">
                                {" "}
                                <FontAwesomeIcon
                                    icon={faX}
                                    className="mr-2 h-3.5"
                                />{" "}
                                <p>You cannot update your own permissions.</p>
                            </div>
                        </div>
                        <div className="alert alert-success">
                            <span>
                                {" "}
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-1 h-3.5 w-3.5"
                                />{" "}
                                User THING has been given administrator
                                privilges
                            </span>
                        </div>
                    </div>
                </>
            </div>
        </>
    );
}
