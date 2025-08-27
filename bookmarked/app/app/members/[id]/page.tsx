import {
    faBook,
    faBookBookmark,
    faGavel,
    faPencil,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../../components/nav/nav";
import Activity from "./activity";

import type * as jdenticonTypes from "jdenticon";
var jdenticon = require("jdenticon") as typeof jdenticonTypes;

import Level from "@/app/components/level";
import { genreList } from "@/app/util/genrelist";
import { systemPool } from "@util/connect";
import { RowDataPacket } from "mysql2/promise";
import { redirect } from "next/navigation";

export default async function App({ params }: { params: { id: string } }) {
    const { id } = await params;

    const connection = await systemPool.getConnection();
    const [userInfo] = await connection.execute<RowDataPacket[]>(
        `SELECT 
           users.id AS user_id,
           users.username,
           users.email,
           profiles.bio,
           profiles.xp,
           profiles.genres,
           profiles.fav_book,
           profiles.fav_author,
           users.avatar
         FROM users
         LEFT JOIN profiles ON users.id = profiles.user_id
         WHERE users.id = ?`,
        [id]
    );

    if (userInfo.length < 1) {
        redirect("/app/members/");
    }

    connection.release();

    const prefGenres: string[] = JSON.parse(userInfo[0].genres || "[]");
    const filteredGenres = genreList.filter((genre) =>
        prefGenres.includes(genre.label)
    );

    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center py-10"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="lg:w-5/6 w-full p-2 lg:h-fit mx-auto my-auto flex flex-col gap-y-4">
                    <div className="w-full mx-auto sm:flex-row flex flex-col gap-x-4 items-stretch">
                        <div className="w-full sm:w-1/3 bg-base-100 p-6 drop-shadow-md flex flex-col items-center justify-start">
                            <div className="font-rubik flex flex-col items-center mt-3 h-full">
                                <img
                                    src={`data:image/png;base64,${userInfo[0].avatar.toString(
                                        "base64"
                                    )}`}
                                    className="h-80 w-80  rounded-sm p-1  object-contain"
                                />
                                <h1 className="text-2xl font-bold mt-4">
                                    {userInfo[0].username}
                                </h1>
                                <div className="flex gap-x-1 mt-2">
                                    {userInfo[0].privilege == "admin" && (
                                        <div className="badge badge-neutral badge-sm">
                                            <FontAwesomeIcon
                                                icon={faGavel}
                                                className="w-3"
                                            />{" "}
                                            Admin
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-2/3  mt-3 sm:mt-0 bg-base-100 p-6 drop-shadow-md flex flex-col justify-between">
                            <div className="font-rubik">
                                <Activity />
                                <div className="stats shadow mt-4 w-full stats-vertical md:stats-horizontal">
                                    <Level xp={userInfo[0].xp} />
                                    <div className="stat">
                                        <div className="stat-figure text-accent">
                                            <FontAwesomeIcon
                                                icon={faPencil}
                                                className="text-4xl"
                                            />
                                        </div>
                                        <div className="stat-title">
                                            Reviews Written
                                        </div>
                                        <div className="stat-value text-accent">
                                            3
                                        </div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-figure text-secondary">
                                            <FontAwesomeIcon
                                                icon={faBookBookmark}
                                                className="text-4xl"
                                            />
                                        </div>
                                        <div className="stat-title">
                                            Books Logged
                                        </div>
                                        <div className="stat-value text-secondary">
                                            42
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-4 h-full">
                                <div className="shadow rounded-lg text-zinc-700 flex-1">
                                    <div className="p-5 h-full">
                                        <h3>Favourites</h3>
                                        <hr className="text-base-300 my-2" />
                                        <div className="flex items-center text-xs">
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className="w-3 mr-0.5"
                                            />
                                            <p>
                                                <span className="font-bold">
                                                    Author:{" "}
                                                </span>
                                                {userInfo[0].fav_author ||
                                                    "N/A"}
                                            </p>
                                        </div>
                                        <div className="flex items-center text-xs">
                                            <FontAwesomeIcon
                                                icon={faBook}
                                                className="w-3 mr-0.5"
                                            />
                                            <p>
                                                <span className="font-bold">
                                                    Book:{" "}
                                                </span>
                                                {userInfo[0].fav_book || "N/A"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="shadow rounded-lg text-zinc-700 flex-1">
                                    <div className="p-5 h-full">
                                        <h3>About</h3>
                                        <hr className="text-base-300 my-2" />
                                        <p className="text-xs">
                                            {userInfo[0].bio ||
                                                "User doesn't have a bio"}
                                        </p>
                                    </div>
                                </div>

                                <div className="shadow rounded-lg text-zinc-700 flex-1">
                                    <div className="p-5 h-full">
                                        <h3>Preferred Genres</h3>
                                        <hr className="text-base-300 my-2" />
                                        <div className="flex flex-wrap gap-2">
                                            {filteredGenres.map((genre, id) => (
                                                <div
                                                    className="badge badge-primary badge-sm w-fit px-3 py-1 flex items-center gap-1"
                                                    key={id}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={genre.icon}
                                                        className="w-3"
                                                    />
                                                    {genre.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mx-auto p-9 bg-base-100 drop-shadow-md">
                        <div className="font-rubik">
                            <h2 className="text-xl font-normal mb-2">
                                {userInfo[0].username}'s reviews:
                            </h2>
                            <div className="divider"></div>
                            <ul className="list bg-base-100 rounded-box shadow-md">
                                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                                    Recent reviews
                                </li>

                                <li className="list-row">
                                    <div>
                                        <img
                                            className="h-15 rounded-box"
                                            src="https://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            George Orwell's
                                            Nineteen-Eighty-Four: How blah blah
                                            blah
                                        </div>
                                        <div className="text-xs uppercase font-semibold opacity-60 mb-1.5">
                                            Jason Respons
                                        </div>
                                        <p className="list-col-wrap text-xs">
                                            Mudfish gopher rockfish barramundi,
                                            yellow weaver Australian herring
                                            weatherfish gulper eel candlefish
                                            tiger shovelnose catfish pearl
                                            danio. Demoiselle southern hake dab:
                                            pilchard snubnose parasitic eel.
                                            Bobtail snipe eel, bigeye squaretail
                                            sand dab European perch...
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
