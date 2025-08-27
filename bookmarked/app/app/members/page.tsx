import { faGavel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RowDataPacket } from "mysql2/promise";
import Navbar from "../../components/nav/nav";
import { systemPool } from "../../util/connect";

export default async function RegisterPage() {
    const connection = await systemPool.getConnection();

    const [userList] = await connection.execute<RowDataPacket[]>(
        //"SELECT * FROM users JOIN profiles ON users.id = profiles.id",
        `
        SELECT 
           users.id AS user_id,
           users.username,
           users.email,
           users.privilege,
           profiles.bio,
           profiles.xp,
           users.avatar
         FROM users
         LEFT JOIN profiles ON users.id = profiles.user_id`
    );
    connection.release();

    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center py-10"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="container bg-base-100 lg:w-5/6 w-full p-9 lg:h-fit drop-shadow-md mx-auto my-auto flex flex-col gap-y-4">
                    <h1 className="text-2xl font-semibold font-rubik">
                        Member List
                    </h1>
                    <div className="divider my-0"></div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 font-rubik">
                            {userList.map(function (user, i) {
                                return (
                                    <div
                                        className="container drop-shadow-md bg-base-200 p-4.5 flex flex-col gap-y-3"
                                        key={i}
                                    >
                                        <div className="flex gap-x-2">
                                            <img
                                                src={`data:image/png;base64,${user?.avatar.toString(
                                                    "base64"
                                                )}`}
                                                className="h-18 w-18 bg-gray-50 rounded-md"
                                            ></img>
                                            <div className="flex-grow flex flex-col">
                                                <div className="flex items-center">
                                                    <h1 className="text-lg font-medium font-rubik mr-2">
                                                        {user.username}
                                                    </h1>
                                                </div>
                                                <div className="flex items-center">
                                                    {user?.privilege ==
                                                        "admin" && (
                                                        <div className="flex gap-x-1">
                                                            <div className="badge badge-neutral badge-sm mr-1.5">
                                                                <FontAwesomeIcon
                                                                    icon={
                                                                        faGavel
                                                                    }
                                                                    className="h-3"
                                                                />
                                                                Admin
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="font-inter text-xs">
                                                        <p>
                                                            Lvl.
                                                            {Math.floor(
                                                                user.xp / 100
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            className="btn btn-sm btn-primary w-full rounded-sm mt-auto font-inter font-medium"
                                            href={
                                                "/app/members/" + user.user_id
                                            }
                                        >
                                            View Profile
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="join">
                        <input
                            className="join-item btn btn-square  btn-sm"
                            type="radio"
                            name="options"
                            aria-label="1"
                            defaultChecked={true}
                        />
                        <input
                            className="join-item btn btn-square btn-sm"
                            type="radio"
                            name="options"
                            aria-label="2"
                        />
                        <input
                            disabled
                            className="join-item btn btn-square btn-sm"
                            type="radio"
                            name="options"
                            aria-label="..."
                        />
                        <input
                            className="join-item btn btn-square btn-sm"
                            type="radio"
                            name="options"
                            aria-label="4"
                        />
                        <input
                            className="join-item btn btn-square btn-sm"
                            type="radio"
                            name="options"
                            aria-label="5"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
