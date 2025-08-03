"use client";
import {
    faPencil,
    faShield,
    faTrash,
    faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditPermissions from "./modals/editperms";
import EditUser from "./modals/edituser";

export default function Membercontrol({
    status,
}: {
    status?: (message: string, type: "success" | "danger" | "warning") => void;
}) {
    return (
        <div className="flex gap-x-1">
            <div className="tooltip tooltip-bottom" data-tip="Edit Profile">
                <button className="btn btn-secondary rounded-sm btn-xs">
                    {" "}
                    <FontAwesomeIcon
                        icon={faUserEdit}
                        className="h-3.5 w-3.5"
                    />
                </button>
            </div>
            <div
                className="tooltip tooltip-bottom"
                data-tip="Edit User Information"
            >
                <button
                    className="btn btn-warning rounded-sm btn-xs"
                    onClick={() => {
                        (
                            document.getElementById(
                                "edit_user"
                            ) as HTMLDialogElement
                        )?.showModal();
                    }}
                >
                    {" "}
                    <FontAwesomeIcon icon={faPencil} className="h-2.5 w-2.5" />
                </button>
                <EditUser />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Edit Permissions">
                <button
                    className="btn btn-accent rounded-sm btn-xs"
                    onClick={() => {
                        (
                            document.getElementById(
                                "edit_perms"
                            ) as HTMLDialogElement
                        )?.showModal();
                    }}
                >
                    {" "}
                    <FontAwesomeIcon icon={faShield} className="h-2.5 w-2.5" />
                </button>
                <EditPermissions status={status} />
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Delete User">
                <button className="btn btn-error rounded-sm btn-xs">
                    {" "}
                    <FontAwesomeIcon icon={faTrash} className="h-3.5 w-3.5" />
                </button>
            </div>
        </div>
    );
}
