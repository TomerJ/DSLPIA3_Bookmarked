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
    const [selectedUser, setSelectedUser] = useState<{
        id: number;
        action: string;
    } | null>(null);
    const [toastList, setToastList] = useState<
        { id: number; type: "error" | "success"; message: string }[]
    >([]);

    // show toast notification
    const showToast = (type: "error" | "success", message: string) => {
        const id = Date.now();
        setToastList((prev) => [...prev, { id, type, message }]);
        setTimeout(() => {
            setToastList((prev) => prev.filter((t) => t.id !== id));
        }, 3000);
    };

    // handle action selection
    const handleAction = (userId: number, action: string) => {
        if (
            (action === "edit_permissions" || action === "delete_user") &&
            userId === sessionUser
        ) {
            showToast(
                "error",
                `You cannot ${action.replace("_", " ")} your own account.`
            );
            return;
        }
        setSelectedUser({ id: userId, action });
    };

    // load users
    useEffect(() => {
        (async () => {
            try {
                const u = await getUsers();
                const loadedUsers =
                    u.users?.map((u: any) => ({
                        user_id: u.user_id,
                        firstname: u.firstname || "Unknown",
                        lastname: u.lastname || "",
                        username: u.username || "unknown",
                        email: u.email || "-",
                        dob: u.dob || "-",
                        avatar: u.avatar || null,
                        privilege: u.privilege || "user",
                        xp: u.xp ?? null,
                    })) || [];
                setUsers(loadedUsers);
            } catch {
                showToast("error", "Failed to load users.");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    // open dialog when selectedUser changes
    useEffect(() => {
        if (!selectedUser) return;

        const dialogIdMap: Record<string, string> = {
            manage_progress: "manage_progress",
            edit_permissions: "edit_perms",
            edit_user: "edit_user",
            edit_profile: "edit_profile",
            edit_birthday: "edit_birthday",
            delete_user: "delete_user",
        };

        const dialog = document.getElementById(
            dialogIdMap[selectedUser.action]
        ) as HTMLDialogElement;
        dialog?.showModal();
    }, [selectedUser]);

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
                        <FontAwesomeIcon
                            icon={t.type === "error" ? faX : faCheck}
                            className="mr-1 h-3.5 w-3.5"
                        />{" "}
                        {t.message}
                    </div>
                ))}
            </div>

            {selectedUser?.action === "manage_progress" && (
                <ManageProgress userId={selectedUser.id} />
            )}
            {selectedUser?.action === "edit_permissions" && (
                <EditPrivileges userId={selectedUser.id} />
            )}
            {selectedUser?.action === "edit_user" && (
                <EditUser userId={selectedUser.id} />
            )}
            {selectedUser?.action === "edit_profile" && (
                <EditProfile userId={selectedUser.id} />
            )}
            {selectedUser?.action === "edit_birthday" && (
                <EditBirthday userId={selectedUser.id} />
            )}
            {selectedUser?.action === "delete_user" && (
                <DeleteUser userId={selectedUser.id} />
            )}

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
                    {users.map((u) => (
                        <tr key={u.user_id}>
                            <td>
                                <img
                                    src={
                                        u.avatar
                                            ? `data:image/png;base64,${u.avatar}`
                                            : "/default-avatar.png"
                                    }
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
                                {u.xp != null ? (
                                    `${u.xp} (Lvl. ${Math.floor(u.xp / 100)})`
                                ) : (
                                    <span className="text-red-500">
                                        No Profile
                                    </span>
                                )}
                            </td>
                            <td>
                                <select
                                    className="select select-sm focus:outline-none join-item"
                                    defaultValue=""
                                    onChange={(e) => {
                                        if (e.target.value) {
                                            handleAction(
                                                u.user_id,
                                                e.target.value
                                            );
                                            e.target.value = "";
                                        }
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
                                    <option value="edit_user">Edit User</option>
                                    <option value="edit_profile">
                                        Edit Profile
                                    </option>
                                    <option value="edit_birthday">
                                        Edit Birthday
                                    </option>
                                    <option value="delete_user">
                                        Delete User
                                    </option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
