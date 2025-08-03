"use client";

import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState, useEffect, useState } from "react";
import { Login } from "./elevate";

export default function LoginForm({
    username = "NO USER",
}: {
    username?: string;
}) {
    const [actionState, formAction] = useActionState(Login, null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted && actionState && actionState.error) {
            setSubmitted(false);
        }
    }, [actionState, submitted]);
    return (
        <div className="font-rubik">
            {submitted ? (
                <div className="text-center py-10">
                    <span className="loading loading-spinner loading-lg"></span>
                    <p className="mt-4 text-sm">Logging in...</p>
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
                    <h1 className="text-2xl font-black">Elevation Required</h1>
                    <p className="text-sm italic font-poppins">
                        The page you are attempting to access requires
                        elevation. Please re-enter your login details below:
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
                                        disabled
                                        className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                        placeholder="Type here"
                                        defaultValue={username}
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

                                <button className="btn btn-primary rounded-md mt-5 font-inter">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
