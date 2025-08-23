"use client";

import { faGavel, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Membercontrol from "./membercontrol";
import { useEffect, useState } from "react";
import { getUsers } from "../util/admin";

export default function Memberlist() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

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
        <div className="overflow-x-auto">
            <table className="table table-zebra table-xs">
                <thead>
                    <tr className="text-sm">
                        <th></th>
                        <th className="font-inter text-xs">Name</th>
                        <th className="font-inter text-xs">Username</th>
                        <th className="font-inter text-xs">Email</th>
                        <th className="font-inter text-xs">DOB</th>
                        <th className="font-inter text-xs">Role</th>
                        <th className="font-inter text-xs">XP</th>
                        <th className="font-inter text-xs"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, k) => (
                        <tr key={k}>
                            <td>
                                <img
                                    src={`data:image/png;base64,${u?.avatar}`}
                                    className="h-6 bg-base-200 rounded-sm p-1"
                                    alt="avatar"
                                />
                            </td>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>{u.dob}</td>
                            <td>
                                <div className="flex gap-x-0.5">
                                    {u.role === "admin" && (
                                        <div className="badge badge-neutral badge-xs">
                                            <FontAwesomeIcon icon={faGavel} className="h-1" />
                                            Admin
                                        </div>
                                    )}
                                    {u.role === "regular" && (
                                        <div className="badge badge-accent badge-xs">
                                            <FontAwesomeIcon icon={faStar} className="h-1" />
                                            Regular
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td>{u.xp} (Lvl. {u.level})</td>
                            <td>
                                <Membercontrol />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
