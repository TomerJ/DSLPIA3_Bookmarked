"use client";
import { faGavel, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Membercontrol from "./membercontrol";

export default function Memberlist() {
    return (
        <>
            <div className="flex justify-center items-center h-full hidden">
                <div className="text-center py-10 ">
                    <span className="loading loading-spinner loading-lg"></span>
                    <p className="mt-4 text-sm">Loading members...</p>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra table-xs">
                    {/* head */}
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
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>yourmother@hotmail.com</td>
                            <td>02/02/2009</td>
                            <td>
                                {" "}
                                <div className="flex gap-x-0.5">
                                    <div className="badge badge-neutral badge-xs">
                                        <FontAwesomeIcon
                                            icon={faGavel}
                                            className="h-1"
                                        />
                                        Admin
                                    </div>
                                    <div className="badge badge-accent badge-xs">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="h-1"
                                        />
                                        Regular
                                    </div>
                                </div>
                            </td>
                            <td>4 (Lvl. 200)</td>
                            <td>
                                <Membercontrol />
                            </td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>yourmother@hotmail.com</td>
                            <td>02/02/2009</td>
                            <td>
                                {" "}
                                <div className="flex gap-x-0.5">
                                    <div className="badge badge-neutral badge-xs">
                                        <FontAwesomeIcon
                                            icon={faGavel}
                                            className="h-1"
                                        />
                                        Admin
                                    </div>
                                    <div className="badge badge-accent badge-xs">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="h-1"
                                        />
                                        Regular
                                    </div>
                                </div>
                            </td>
                            <td>4 (Lvl. 200)</td>
                            <td>
                                <Membercontrol />
                            </td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>yourmother@hotmail.com</td>
                            <td>02/02/2009</td>
                            <td>
                                {" "}
                                <div className="flex gap-x-0.5">
                                    <div className="badge badge-neutral badge-xs">
                                        <FontAwesomeIcon
                                            icon={faGavel}
                                            className="h-1"
                                        />
                                        Admin
                                    </div>
                                    <div className="badge badge-accent badge-xs">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="h-1"
                                        />
                                        Regular
                                    </div>
                                </div>
                            </td>
                            <td>4 (Lvl. 200)</td>
                            <td>
                                <Membercontrol />
                            </td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>yourmother@hotmail.com</td>
                            <td>02/02/2009</td>
                            <td>
                                {" "}
                                <div className="flex gap-x-0.5">
                                    <div className="badge badge-neutral badge-xs">
                                        <FontAwesomeIcon
                                            icon={faGavel}
                                            className="h-1"
                                        />
                                        Admin
                                    </div>
                                    <div className="badge badge-accent badge-xs">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="h-1"
                                        />
                                        Regular
                                    </div>
                                </div>
                            </td>
                            <td>4 (Lvl. 200)</td>
                            <td>
                                <Membercontrol />
                            </td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>yourmother@hotmail.com</td>
                            <td>02/02/2009</td>
                            <td>
                                {" "}
                                <div className="flex gap-x-0.5">
                                    <div className="badge badge-neutral badge-xs">
                                        <FontAwesomeIcon
                                            icon={faGavel}
                                            className="h-1"
                                        />
                                        Admin
                                    </div>
                                    <div className="badge badge-accent badge-xs">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="h-1"
                                        />
                                        Regular
                                    </div>
                                </div>
                            </td>
                            <td>4 (Lvl. 200)</td>
                            <td>
                                <Membercontrol />
                            </td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>yourmother@hotmail.com</td>
                            <td>02/02/2009</td>
                            <td>
                                {" "}
                                <div className="flex gap-x-0.5">
                                    <div className="badge badge-neutral badge-xs">
                                        <FontAwesomeIcon
                                            icon={faGavel}
                                            className="h-1"
                                        />
                                        Admin
                                    </div>
                                    <div className="badge badge-accent badge-xs">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="h-1"
                                        />
                                        Regular
                                    </div>
                                </div>
                            </td>
                            <td>4 (Lvl. 200)</td>
                            <td>
                                <Membercontrol />
                            </td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>yourmother@hotmail.com</td>
                            <td>02/02/2009</td>
                            <td>
                                {" "}
                                <div className="flex gap-x-0.5">
                                    <div className="badge badge-neutral badge-xs">
                                        <FontAwesomeIcon
                                            icon={faGavel}
                                            className="h-1"
                                        />
                                        Admin
                                    </div>
                                    <div className="badge badge-accent badge-xs">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="h-1"
                                        />
                                        Regular
                                    </div>
                                </div>
                            </td>
                            <td>4 (Lvl. 200)</td>
                            <td>
                                <Membercontrol />
                            </td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>yourmother@hotmail.com</td>
                            <td>02/02/2009</td>
                            <td>
                                {" "}
                                <div className="flex gap-x-0.5">
                                    <div className="badge badge-neutral badge-xs">
                                        <FontAwesomeIcon
                                            icon={faGavel}
                                            className="h-1"
                                        />
                                        Admin
                                    </div>
                                    <div className="badge badge-accent badge-xs">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="h-1"
                                        />
                                        Regular
                                    </div>
                                </div>
                            </td>
                            <td>4 (Lvl. 200)</td>
                            <td>
                                <Membercontrol />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className=""></div>
            </div>
        </>
    );
}
