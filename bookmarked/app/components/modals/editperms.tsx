"use client";

import { useState } from "react";

export default function EditPermissions({
    adminDefault = false,
    user = {
        id: 1,
        name: "YOOOO",
    },
}: {
    user?: {
        id: number;
        name: string;
    };
    status?: (message: string, type: "success" | "danger" | "warning") => void;
    adminDefault?: boolean;
}) {
    const [enableAdmin, setEnableAdmin] = useState(false);
    const [confirmInput, setConfirmInput] = useState("");

    return (
        <dialog id="edit_perms" className="modal">
            <div className="modal-box w-xl">
                <h3 className="font-bold text-lg mb-2 my-0">
                    Editing Permissions for {user.name}
                </h3>
                <div className="divider my-0"></div>
                <div className="grid grid-cols-1 gap-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend"></legend>
                        <label className="label">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="toggle toggle-sm mr-0.5"
                                onChange={(event) => {
                                    setEnableAdmin(event.target.checked);
                                    console.log(event.target.checked);
                                }}
                            />
                            Grant Administrator Privileges
                        </label>
                    </fieldset>
                </div>
                {enableAdmin && !adminDefault && (
                    <div
                        role="alert"
                        className="alert alert-warning alert-soft mt-2"
                    >
                        <div>
                            <h6 className="font-bold">Warning</h6>
                            <div className="flex flex-col gap-y-1.5">
                                <p>
                                    You are about to grant{" "}
                                    <span className="underline">
                                        administrator privileges
                                    </span>{" "}
                                    to {user.name}.
                                </p>
                                <hr></hr>
                                <p className="text-xs">
                                    To continue, please type their username
                                    (case sensitive) in the box below:
                                </p>
                                <form>
                                    <input
                                        type="text"
                                        name="perms_conf"
                                        autoComplete="off"
                                        className="input w-full focus:outline-none h-9 mt-2 focus:border-none focus:ring-1 transition-all focus:ring-orange-500 bg-orange-50"
                                        placeholder="Type here"
                                        onChange={(event) => {
                                            setConfirmInput(event.target.value);
                                        }}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                <div className="modal-action flex">
                    <div className="flex gap-2">
                        <form>
                            <button
                                className="btn btn-sm btn-success rounded-sm"
                                disabled={
                                    enableAdmin &&
                                    !adminDefault &&
                                    confirmInput != user.name
                                }
                            >
                                Update Permissions
                            </button>
                        </form>
                        <form method="dialog">
                            <button className="btn btn-sm rounded-sm">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
