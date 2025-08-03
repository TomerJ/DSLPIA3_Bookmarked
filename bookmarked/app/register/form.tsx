"use client";

import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import { Register } from "./register";

export default function RegisterForm() {
    const [actionState, formAction] = useActionState(Register, null);

    return (
        <div className="font-rubik">
            <div className="flex flex-col gap-y-2">
                {actionState && actionState.error && (
                    <div className="alert alert-error mb-4 text-sm">
                        <FontAwesomeIcon icon={faAsterisk} />{" "}
                        {actionState.error}
                    </div>
                )}
            </div>
            <h1 className="text-2xl font-black">Registration</h1>
            <p className="text-sm italic font-poppins">
                Welcome to Bookmark'd! You are registering for a{" "}
                <b>new account</b>.
                <br />
                Please enter your details below to get started:
            </p>

            <div className="divider"></div>

            <div className="font-inter">
                <form action={formAction}>
                    <div className="gap-y-1 flex flex-col">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Birthday
                            </legend>
                            <div className="flex join">
                                {" "}
                                <select
                                    name="dob-day"
                                    className="select focus:outline-none  focus:border-none  focus:ring-1 focus:ring-orange-700 join-item"
                                    defaultValue={
                                        (actionState?.data?.get("dob-day") ||
                                            "") as string
                                    }
                                >
                                    <option disabled value="">
                                        Day
                                    </option>
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    name="dob-month"
                                    className="select focus:outline-none  focus:border-none  focus:ring-1 focus:ring-orange-700 join-item"
                                    defaultValue={
                                        (actionState?.data?.get("dob-month") ||
                                            "") as string
                                    }
                                >
                                    <option disabled value="">
                                        Month
                                    </option>
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    name="dob-year"
                                    className="select focus:outline-none  focus:border-none  focus:ring-1 focus:ring-orange-700 join-item"
                                    defaultValue={
                                        (actionState?.data?.get("dob-year") ||
                                            "") as string
                                    }
                                >
                                    <option disabled value="">
                                        Year
                                    </option>
                                    {Array.from({ length: 120 }, (_, i) => {
                                        const year =
                                            new Date().getFullYear() - i;
                                        return (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email</legend>
                            <input
                                type="text"
                                name="email"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                                defaultValue={
                                    (actionState?.data?.get("email") ||
                                        "") as string
                                }
                            />
                        </fieldset>
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

                        <button className="btn btn-primary rounded-md mt-5 font-inter">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
