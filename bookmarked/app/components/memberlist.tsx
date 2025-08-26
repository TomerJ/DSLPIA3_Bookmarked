"use client";

import {
    faCheck,
    faGavel,
    faUser,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getUsers } from "../util/admin";
import DeleteUser from "./modals/delete";
import EditBirthday from "./modals/editbirthday";
import EditPrivileges from "./modals/editprivileges";
import EditProfile from "./modals/editprofile";
import EditUser from "./modals/edituser";
import ManageProgress from "./modals/progress";

export default function Memberlist({ sessionUser }: { sessionUser: number }) {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedUserId, setSelectedUserId] = useState<number>(1);
    const [toastList, setToastList] = useState<
        { id: number; type: "error" | "success"; message: string }[]
    >([]);

    const showToast = (type: "error" | "success", message: string) => {
        const id = Date.now();
        setToastList((prev) => [...prev, { id, type, message }]);
        setTimeout(() => {
            setToastList((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    const openManageProgress = (userId: number) => {
        setSelectedUserId(userId);
        const dialog = document.getElementById(
            "manage_progress"
        ) as HTMLDialogElement;
        dialog?.showModal();
    };

    const openEditPermissions = (userId: number) => {
        if (userId === sessionUser) {
            showToast("error", "You cannot edit your own privileges.");
            return;
        }
        setSelectedUserId(userId);
        const dialog = document.getElementById(
            "edit_perms"
        ) as HTMLDialogElement;
        dialog?.showModal();
    };

    const openEditUser = (userId: number) => {
        setSelectedUserId(userId);
        const dialog = document.getElementById(
            "edit_user"
        ) as HTMLDialogElement;
        dialog?.showModal();
    };

    const openEditProfile = (userId: number) => {
        setSelectedUserId(userId);
        const dialog = document.getElementById(
            "edit_profile"
        ) as HTMLDialogElement;
        dialog?.showModal();
    };

    const openEditBirthday = (userId: number) => {
        setSelectedUserId(userId);
        const dialog = document.getElementById(
            "edit_birthday"
        ) as HTMLDialogElement;
        dialog?.showModal();
    };

    const openDeleteUser = (userId: number) => {
        if (userId === sessionUser) {
            showToast("error", "You cannot delete your own account.");
            return;
        }
        setSelectedUserId(userId);
        const dialog = document.getElementById(
            "delete_user"
        ) as HTMLDialogElement;
        dialog?.showModal();
    };

    useEffect(() => {
        (async () => {
            const res = await getUsers();
            setUsers(res.users as any[]);
            setLoading(false);
        })();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <div className="text-center py-10">
                    <span className="loading loading-spinner loading-lg"></span>
                    <p className="mt-4 text-sm">Loading members...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto relative">
            <div className="toast toast-end fixed top-5 right-5 space-y-2 z-50">
                {toastList.map((t) => (
                    <div
                        key={t.id}
                        className={`alert ${
                            t.type === "error" ? "alert-error" : "alert-success"
                        }`}
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={t.type === "error" ? faX : faCheck}
                                className="mr-1 h-3.5 w-3.5"
                            />{" "}
                            {t.message}
                        </span>
                    </div>
                ))}
            </div>
            <ManageProgress userId={selectedUserId} />
            <EditPrivileges userId={selectedUserId} />
            <EditUser userId={selectedUserId} />
            <EditProfile userId={selectedUserId} />
            <EditBirthday userId={selectedUserId} />
            <DeleteUser userId={selectedUserId} /> {/* Added modal */}
            <table className="table table-zebra table-xs w-full min-w-[700px]">
                <thead>
                    <tr className="font-inter text-xs">
                        <th></th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Privilege</th>
                        <th>XP</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, k) => (
                        <tr key={k}>
                            <td>
                                <img
                                    src={`data:image/png;base64,${u?.avatar}`}
                                    className="h-6 w-6 bg-base-200 rounded-sm p-1"
                                    alt="avatar"
                                />
                            </td>
                            <td>
                                {u.firstname} {u.lastname}
                            </td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>{u.dob}</td>
                            <td>
                                <div
                                    className={`badge badge-xs ${
                                        u.privilege === "admin"
                                            ? "badge-neutral"
                                            : "badge-primary"
                                    }`}
                                >
                                    {u.privilege === "admin" ? (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faGavel}
                                                className="h-3 mr-1"
                                            />
                                            Admin
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className="h-3 mr-1"
                                            />
                                            User
                                        </>
                                    )}
                                </div>
                            </td>
                            <td>
                                {u.xp && u.xp > 0 ? (
                                    <span>
                                        {u.xp} (Lvl. {Math.floor(u.xp / 100)})
                                    </span>
                                ) : (
                                    <span className="text-red-500">
                                        No Profile
                                    </span>
                                )}
                            </td>
                            <td>
                                <div className="w-full">
                                    <select
                                        className="select select-sm focus:outline-none join-item"
                                        defaultValue=""
                                        onChange={(e) => {
                                            const action = e.target.value;
                                            if (!action) return;

                                            switch (action) {
                                                case "view_profile":
                                                    window.open(
                                                        `/app/members/${u.user_id}`,
                                                        "_blank",
                                                        "width=800,height=600,menubar=no,toolbar=no,location=yes,resizable=yes"
                                                    );
                                                    break;
                                                case "manage_progress":
                                                    openManageProgress(
                                                        u.user_id
                                                    );
                                                    break;
                                                case "edit_permissions":
                                                    openEditPermissions(
                                                        u.user_id
                                                    );
                                                    break;
                                                case "edit_user":
                                                    openEditUser(u.user_id);
                                                    break;
                                                case "edit_profile":
                                                    openEditProfile(u.user_id);
                                                    break;
                                                case "edit_birthday":
                                                    openEditBirthday(u.user_id);
                                                    break;
                                                case "delete_user": // Added delete case
                                                    openDeleteUser(u.user_id);
                                                    break;
                                            }

                                            e.target.value = "";
                                        }}
                                    >
                                        <option value="" disabled>
                                            Select an action...
                                        </option>
                                        <option value="view_profile">
                                            View Profile
                                        </option>
                                        <option value="manage_progress">
                                            Manage Progress
                                        </option>
                                        <option value="edit_permissions">
                                            Edit Privileges
                                        </option>
                                        <option value="edit_user">
                                            Edit User
                                        </option>
                                        <option value="edit_profile">
                                            Edit Profile
                                        </option>
                                        <option value="edit_birthday">
                                            Edit Birthday
                                        </option>
                                        <option value="delete_user">
                                            Delete User
                                        </option>{" "}
                                    </select>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
