import { faGavel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/nav";

export default function RegisterPage() {
    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center py-10"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-5/6 w-full p-9 lg:h-fit drop-shadow-md mx-auto my-auto flex flex-col gap-y-4">
                    <h1 className="text-2xl font-semibold font-rubik">
                        Member List
                    </h1>
                    <div className="divider my-0"></div>
                    <div>
                        <div className="grid grid-cols-3 gap-6 font-rubik">
                            <div className="container drop-shadow-md bg-base-200 p-5 flex flex-col gap-y-3">
                                <div className="flex gap-x-2">
                                    <img
                                        src="/untitled.png"
                                        className="h-18 w-18 bg-gray-50 rounded-md"
                                    ></img>
                                    <div className="flex-grow flex flex-col">
                                        <div className="flex items-center">
                                            <h1 className="text-lg font-medium font-rubik mr-2">
                                                TestyMcTestFace12345{" "}
                                            </h1>

                                            <div className="badge badge-neutral badge-sm">
                                                <FontAwesomeIcon
                                                    icon={faGavel}
                                                    className="h-3"
                                                />
                                                Admin
                                            </div>
                                        </div>
                                        <div className="font-inter text-xs">
                                            <p>Lvl. 40</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-sm btn-primary w-full rounded-sm mt-auto font-inter font-medium">
                                    View Profile
                                </a>
                            </div>
                            <div className="container drop-shadow-md bg-base-200 p-5 flex flex-col gap-y-3">
                                <div className="flex gap-x-2">
                                    <img
                                        src="/untitled.png"
                                        className="h-18 w-18 bg-gray-50 rounded-md"
                                    ></img>
                                    <div className="flex-grow flex flex-col">
                                        <div className="flex items-center">
                                            <h1 className="text-lg font-medium font-rubik mr-2">
                                                TestyMcTestFace12345{" "}
                                            </h1>

                                            <div className="badge badge-neutral badge-sm">
                                                <FontAwesomeIcon
                                                    icon={faGavel}
                                                    className="h-3"
                                                />
                                                Admin
                                            </div>
                                        </div>
                                        <div className="font-inter text-xs">
                                            <p>Lvl. 40</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-sm btn-primary w-full rounded-sm mt-auto font-inter font-medium">
                                    View Profile
                                </a>
                            </div>
                            <div className="container drop-shadow-md bg-base-200 p-5 flex flex-col gap-y-3">
                                <div className="flex gap-x-2">
                                    <img
                                        src="/untitled.png"
                                        className="h-18 w-18 bg-gray-50 rounded-md"
                                    ></img>
                                    <div className="flex-grow flex flex-col">
                                        <div className="flex items-center">
                                            <h1 className="text-lg font-medium font-rubik mr-2">
                                                TestyMcTestFace12345{" "}
                                            </h1>

                                            <div className="badge badge-neutral badge-sm">
                                                <FontAwesomeIcon
                                                    icon={faGavel}
                                                    className="h-3"
                                                />
                                                Admin
                                            </div>
                                        </div>
                                        <div className="font-inter text-xs">
                                            <p>Lvl. 40</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-sm btn-primary w-full rounded-sm mt-auto font-inter font-medium">
                                    View Profile
                                </a>
                            </div>
                            <div className="container drop-shadow-md bg-base-200 p-5 flex flex-col gap-y-3">
                                <div className="flex gap-x-2">
                                    <img
                                        src="/untitled.png"
                                        className="h-18 w-18 bg-gray-50 rounded-md"
                                    ></img>
                                    <div className="flex-grow flex flex-col">
                                        <div className="flex items-center">
                                            <h1 className="text-lg font-medium font-rubik mr-2">
                                                TestyMcTestFace12345{" "}
                                            </h1>

                                            <div className="badge badge-neutral badge-sm">
                                                <FontAwesomeIcon
                                                    icon={faGavel}
                                                    className="h-3"
                                                />
                                                Admin
                                            </div>
                                        </div>
                                        <div className="font-inter text-xs">
                                            <p>Lvl. 40</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-sm btn-primary w-full rounded-sm mt-auto font-inter font-medium">
                                    View Profile
                                </a>
                            </div>
                            <div className="container drop-shadow-md bg-base-200 p-5 flex flex-col gap-y-3">
                                <div className="flex gap-x-2">
                                    <img
                                        src="/untitled.png"
                                        className="h-18 w-18 bg-gray-50 rounded-md"
                                    ></img>
                                    <div className="flex-grow flex flex-col">
                                        <div className="flex items-center">
                                            <h1 className="text-lg font-medium font-rubik mr-2">
                                                TestyMcTestFace12345{" "}
                                            </h1>

                                            <div className="badge badge-neutral badge-sm">
                                                <FontAwesomeIcon
                                                    icon={faGavel}
                                                    className="h-3"
                                                />
                                                Admin
                                            </div>
                                        </div>
                                        <div className="font-inter text-xs">
                                            <p>Lvl. 40</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-sm btn-primary w-full rounded-sm mt-auto font-inter font-medium">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
