"use client";

import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import Navbar from "../../components/nav";
import { ProcessAdminLogin } from "../admin/adminregister";

export default function AdminLogin() {
    const [message, formAction] = useActionState(ProcessAdminLogin, null);

    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-2/5 w-full h-full lg:h-auto drop-shadow-md">
                    <div className="mx-9 my-11 font-rubik">
                        {message && (
                            <div className="alert alert-error mb-4 text-sm">
                                <FontAwesomeIcon icon={faBan} /> {message}
                            </div>
                        )}
                        <h1 className="text-2xl font-black">
                            Administratorsssssss Login
                        </h1>
                        <p className="text-sm italic font-poppins">
                            You are logging in as a <b>club administrator</b>.
                            <br />
                            Please enter your Bookmark'd login details...
                        </p>

                        <div className="divider"></div>

                        <div className="font-inter">
                            <form action={formAction}>
                                <div className="gap-y-1 flex flex-col">
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">
                                            Email
                                        </legend>
                                        <input
                                            type="text"
                                            name="username"
                                            className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                            placeholder="Type here"
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
                                        />
                                    </fieldset>
                                    <button className="btn btn-primary rounded-md mt-5">
                                        Sign In
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
