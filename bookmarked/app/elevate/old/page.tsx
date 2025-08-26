"use client";

import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState, useEffect, useState } from "react";
import Navbar from "../../components/nav/nav";
import { Login } from "./login";

export default function LoginPage() {
    const [actionState, formAction] = useActionState(Login, null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted && actionState && actionState.data != null) {
            setSubmitted(false);
        }
    }, [actionState, submitted]);
    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center py-10"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-2/5 w-full p-9 lg:h-fit drop-shadow-md mx-auto my-auto">
                    <div className="font-rubik">
                        <div className="font-inter">
                            {submitted ? (
                                <div className="text-center py-10">
                                    <span className="loading loading-spinner loading-lg"></span>
                                    <p className="mt-4 text-sm">
                                        Logging in...
                                    </p>
                                </div>
                            ) : (
                                <div className="">
                                    <div className="flex flex-col gap-y-2">
                                        {actionState && actionState.error && (
                                            <div className="alert alert-error mb-4 text-sm">
                                                <FontAwesomeIcon icon={faBan} />{" "}
                                                {actionState.error}
                                            </div>
                                        )}
                                    </div>
                                    <h1 className="text-2xl font-black">
                                        Elevation Required
                                    </h1>
                                    <p className="text-sm italic font-poppins">
                                        The page you are attempting to access
                                        requires elevation. Please re-enter your
                                        login details below:
                                    </p>

                                    <div className="divider"></div>

                                    <div className="font-inter">
                                        <form
                                            action={async (formData) => {
                                                setSubmitted(true);
                                                formAction(formData);
                                            }}
                                        >
                                            <div className="gap-y-1 flex flex-col">
                                                <fieldset className="fieldset">
                                                    <legend className="fieldset-legend">
                                                        Username
                                                    </legend>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                                        placeholder="Type here"
                                                        disabled
                                                        defaultValue={
                                                            /*(actionState?.data?.get(
                                                                "username"
                                                            ) || "") as string*/ "TestyMcTestFace12345"
                                                        }
                                                    />
                                                </fieldset>
                                                <fieldset className="fieldset">
                                                    <legend className="fieldset-legend">
                                                        Password
                                                    </legend>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                                        placeholder="Type here"
                                                        defaultValue={
                                                            (actionState?.data?.get(
                                                                "password"
                                                            ) || "") as string
                                                        }
                                                    />
                                                </fieldset>

                                                <button className="btn btn-primary rounded-md mt-5">
                                                    Continue
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
