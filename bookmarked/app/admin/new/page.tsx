"use client";

import { faArrowLeft, faArrowRight, faAsterisk, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import Navbar from "../../components/nav";
import { ProcessAdminRegister } from "../../register/admin/adminregister";

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
                <div className="container bg-base-100 lg:w-11/12 w-full h-full lg:h-auto drop-shadow-md">
                    <div className="mx-9 my-11 font-rubik">


                        <div className="flex justify-start mb-2">
                            <ul className="steps w-full">
                                <li className="step step-info">Basic Information</li>
                                <li className="step step-info">Configuration</li>
                                <li className="step step">Owner Profile</li>
                            </ul>
                        </div>
                        <h1 className="text-2xl font-black">
                            New Club
                        </h1>




                        <div className="divider"></div>

                        <div className="font-inter">
                            <form action={formAction}>
                                <div className="gap-y-1 flex flex-col">
                                    <fieldset className="fieldset">
                                        <legend className="fieldset-legend">
                                            Club Name
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <fieldset className="border border-base-300 p-2.5 rounded-lg">
                                            <legend className="text-xs text-base-content fieldset-legend">Club Logo</legend>
                                            <input type="file" className="file-input file-input-bordered w-full" />
                                            <label className="label text-xs text-base-content mt-2">1000x2000 | Max size 2MB</label>
                                        </fieldset>

                                        <fieldset className="border border-base-300 p-2.5 rounded-lg">
                                            <legend className="text-xs text-base-content fieldset-legend">Club Icon</legend>
                                            <input type="file" className="file-input file-input-bordered w-full" />
                                            <label className="label text-xs text-base-content mt-2">512x512 | Max size 2MB</label>
                                        </fieldset>
                                    </div>

                                    <div className="flex float-right gap-x-1.5 mt-5">                                     
                                    <button className="btn btn-accent rounded-md w-1/11">
                                       <FontAwesomeIcon
                                            icon={faArrowLeft}
                                            className="mr-1"
                                        /> Back 
                                    </button>
                                        <button className="btn btn-primary rounded-md w-1/11">
                                            Next <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="mr-1"
                                            />
                                        </button></div>


                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
