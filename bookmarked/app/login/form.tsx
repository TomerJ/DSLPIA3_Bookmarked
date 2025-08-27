"use client";

import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import { Login } from "./login";

export default function LoginForm() {
    const [actionState, formAction] = useActionState(Login, null);

    return (
        <div className="font-rubik">
            <div className="">
                <div className="flex flex-col gap-y-2">
                    {actionState && actionState.error && (
                        <div className="alert alert-error mb-4 text-sm">
                            <FontAwesomeIcon icon={faBan} /> {actionState.error}
                        </div>
                    )}
                </div>
                <h1 className="text-2xl font-black">Login</h1>
                <p className="text-sm italic font-poppins">
                    Welcome back to Bookmark'd! Please enter your login details
                    below:
                </p>

                <div className="divider"></div>

                <div className="font-inter">
                    <form action={formAction}>
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
                                    defaultValue={
                                        (actionState?.data?.get("username") ||
                                            "") as string
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
                                        (actionState?.data?.get("password") ||
                                            "") as string
                                    }
                                />
                            </fieldset>

                            <button className="btn btn-primary rounded-md mt-5 font-inter">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <p className="italic text-xs mt-3">
                    Don't have an account? Register{" "}
                    <a href="/register" className="text-indigo-500">
                        here
                    </a>
                </p>
            </div>
        </div>
    );
}
