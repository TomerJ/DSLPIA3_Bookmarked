"use client";

import UserPassword from "@/app/components/modals/userpassword";
import { setUserSettings } from "@/app/util/usersettings";
import { faAsterisk, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RowDataPacket } from "mysql2";
import { useActionState, useState } from "react";

export default function UserSettingsForm({
    userData,
}: {
    userData: RowDataPacket;
}) {
    const [actionState, formAction] = useActionState(setUserSettings, null);
    const [genres, setGenres] = useState("");
    return (
        <div className="flex flex-col gap-y-2">
            <UserPassword />
            <form action={formAction}>
                {actionState && actionState.success && (
                    <div className="alert alert-success mb-4 text-sm">
                        <FontAwesomeIcon icon={faCheck} /> User settings have
                        been successfully updated
                    </div>
                )}
                {actionState && actionState.error && (
                    <div className="alert alert-error mb-4 text-sm">
                        <FontAwesomeIcon icon={faAsterisk} />{" "}
                        {actionState.error}
                    </div>
                )}
                <div className="grid grid-cols-1 gap-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Username</legend>
                        <input
                            type="text"
                            name="username"
                            className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                            placeholder="Type here"
                            defaultValue={
                                (actionState?.data?.get("username") ||
                                    userData.username ||
                                    "") as string
                            }
                        />
                    </fieldset>
                    <div className=""></div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            Email Address
                        </legend>
                        <input
                            type="text"
                            name="email"
                            className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                            placeholder="Type here"
                            defaultValue={
                                (actionState?.data?.get("email") ||
                                    userData.email ||
                                    "") as string
                            }
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Full Name</legend>
                        <div className="flex gap-x-2">
                            <input
                                type="text"
                                name="firstname"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="First Name"
                                defaultValue={
                                    (actionState?.data?.get("firstname") ||
                                        userData.firstname ||
                                        "") as string
                                }
                            />
                            <input
                                type="text"
                                name="lastname"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Last Name"
                                defaultValue={
                                    (actionState?.data?.get("lastname") ||
                                        userData.lastname ||
                                        "") as string
                                }
                            />
                        </div>
                    </fieldset>
                    <p className="text-yellow-600 text-xs mt-auto italic">
                        No user information except for your username and avatar
                        will be visible to the public. Please ask an
                        administrator to change your birthday or delete your
                        account.
                    </p>
                    <button className="btn btn-success w-1/4 rounded-md mt-3 font-inter">
                        Save
                    </button>
                </div>
            </form>
            <hr className="text-base-300"></hr>
            <div className="sm:flex  ">
                <button
                    className="btn btn-sm btn-secondary rounded-md font-inter sm:mb-1 sm:mt-0"
                    onClick={() => {
                        (
                            document.getElementById(
                                "change_password_user"
                            ) as HTMLDialogElement
                        )?.showModal();
                    }}
                >
                    Change Password
                </button>
            </div>
        </div>
    );
}
