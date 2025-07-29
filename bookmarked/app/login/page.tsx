"use client";

import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import Navbar from "../components/nav";
import { Login } from "./login";

export default function LoginPage() {
    const [actionState, formAction] = useActionState(Login, null);

    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-2/5 w-full h-full lg:h-fit drop-shadow-md">
                    <div className="mx-9 my-11 font-rubik">
                        <div className="flex flex-col gap-y-2">
                            {actionState && actionState.error && (
                                <div className="alert alert-error mb-4 text-sm">
                                    <FontAwesomeIcon icon={faBan} />{" "}
                                    {actionState.error}
                                </div>
                            )}
                        </div>
                        <h1 className="text-2xl font-black">Login</h1>
                        <p className="text-sm italic font-poppins">
                            Welcome back to Bookmark'd! Please enter your login
                            details below:
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
                                                (actionState?.data?.get(
                                                    "username"
                                                ) || "") as string
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
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
