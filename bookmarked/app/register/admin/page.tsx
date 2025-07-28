"use client";

import { faAsterisk, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import Navbar from "../../components/nav";
import { ProcessAdminRegister } from "./adminregister";

export default function AdminRegister() {
    const [actionState, formAction] = useActionState(
        ProcessAdminRegister,
        null
    );

    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center"
                style={{ height: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-2/5 w-full h-full lg:h-auto drop-shadow-md">
                    <div className="mx-9 my-11 font-rubik">
                        <div className="flex flex-col gap-y-2  mb-4">
                            <div className="alert alert-warning text-sm">
                                <FontAwesomeIcon icon={faWarning} /> You are
                                registering for an ADMINISTRATOR ACCOUNT. If you
                                are trying to access your club's page, please
                                click here.
                            </div>
                            {actionState && actionState.error && (
                                <div className="alert alert-error mb-4 text-sm">
                                    <FontAwesomeIcon icon={faAsterisk} />{" "}
                                    {actionState.error}
                                </div>
                            )}
                        </div>

                        <h1 className="text-2xl font-black">
                            Administrator Registration
                        </h1>
                        <p className="text-sm italic font-poppins">
                            Welcome to Bookmark'd! You are registering a{" "}
                            <b>club administrator account</b>.
                            <br />
                            Please enter your details below to get started:
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
                                            name="email"
                                            className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                            placeholder="Type here"
                                            defaultValue={
                                                (actionState?.data?.get(
                                                    "email"
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
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">
                                            Confirm Password
                                        </legend>
                                        <input
                                            type="password"
                                            name="confirmpassword"
                                            className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                            placeholder="Type here"
                                            defaultValue={
                                                (actionState?.data?.get(
                                                    "confirmpassword"
                                                ) || "") as string
                                            }
                                        />
                                    </fieldset>
                                    <button className="btn btn-primary rounded-md mt-5">
                                        Create Account
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
