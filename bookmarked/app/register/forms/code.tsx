"use client";

import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import { Register } from "../register";

export default function RegisterAccessCodeForm() {
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
                Please an access code given by an administrator to continue:
            </p>

            <div className="divider my-0"></div>

            <div className="font-inter">
                <form action={formAction}>
                    <div className="gap-y-1 flex flex-col">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Access Code 
                            </legend>
                            <input
                                type="text"
                                name="accesscode"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="XXXXX-XXXXX"
                            />
                        </fieldset>

                        <button className="btn btn-primary rounded-md mt-5 font-inter">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
             <p className="italic text-xs mt-3">Already have an account? Login <a href="/login" className="text-indigo-500">here</a></p>
        </div>
    );
}
