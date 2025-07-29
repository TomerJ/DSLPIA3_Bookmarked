"use client";

import {
    faBookBookmark,
    faPencil,
    faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import Navbar from "../components/nav";
import { Register } from "../register/register";

export default function AdminRegister() {
    const [actionState, formAction] = useActionState(Register, null);

    return (
        <>
            <Navbar />
            <div
                className="dots flex items-center justify-center w-full  overflow-y-auto"
                style={{ minHeight: "calc(100vh - 5rem)" }}
            >
                <div className="w-full mx-auto px-4 flex flex-col">
                    <div className="bg-base-100 container w-full my-2 mx-auto h-full lg:h-auto drop-shadow-md">
                        <div className="mx-9 my-11 font-rubik">
                            <h1 className="text-xl font-medium">
                                Good Evening,
                            </h1>
                            <h1 className="text-3xl font-black">
                                TestyMcTestFace12345
                            </h1>

                            <div className="stats shadow mt-4 w-full stats-vertical lg:stats-horizontal">
                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <FontAwesomeIcon
                                            icon={faTrophy}
                                            className="text-4xl"
                                        />
                                    </div>
                                    <div className="stat-title">
                                        Current Level
                                    </div>
                                    <div className="stat-value text-primary">
                                        42
                                    </div>
                                    <div className="stat-desc">
                                        21% more than last month
                                    </div>
                                </div>

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
                                    <div className="stat-desc">
                                        21% more than last month
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
                                    <div className="stat-desc">
                                        21% more than last month
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-1">
                                <button className="btn btn-accent btn-sm rounded-md mt-5">
                                    New Review
                                </button>
                                <button className="btn btn-secondary btn-sm rounded-md mt-5">
                                    Log Book
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-base-100 container w-full mx-auto py-2 my-2 h-full lg:h-auto drop-shadow-md">
                        <div className="mx-9 my-11 font-rubik">
                            <h2 className="text-xl font-normal mb-2">
                                Newest Reviews
                            </h2>
                            <div className="divider"></div>
                            <ul className="list bg-base-100 rounded-box shadow-md">
                                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                                    Most played songs this week
                                </li>

                                <li className="list-row">
                                    <div>
                                        <img
                                            className="size-10 rounded-box"
                                            src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            George Orwell's
                                            Nineteen-Eighty-Four: How blah blah
                                            blah
                                        </div>
                                        <div className="text-xs uppercase font-semibold opacity-60">
                                            Remaining Reason
                                        </div>
                                    </div>
                                    <p className="list-col-wrap text-xs">
                                        "Remaining Reason" became an instant
                                        hit, praised for its haunting sound and
                                        emotional depth. A viral performance
                                        brought it widespread recognition,
                                        making it one of Dio Lupa’s most iconic
                                        tracks.
                                    </p>
                                    <button className="btn btn-square btn-ghost">
                                        <svg
                                            className="size-[1.2em]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M6 3L20 12 6 21 6 3z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="btn btn-square btn-ghost">
                                        <svg
                                            className="size-[1.2em]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </li>

                                <li className="list-row">
                                    <div>
                                        <img
                                            className="size-10 rounded-box"
                                            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                                        />
                                    </div>
                                    <div>
                                        <div>Ellie Beilish</div>
                                        <div className="text-xs uppercase font-semibold opacity-60">
                                            Bears of a fever
                                        </div>
                                    </div>
                                    <p className="list-col-wrap text-xs">
                                        "Bears of a Fever" captivated audiences
                                        with its intense energy and mysterious
                                        lyrics. Its popularity skyrocketed after
                                        fans shared it widely online, earning
                                        Ellie critical acclaim.
                                    </p>
                                    <button className="btn btn-square btn-ghost">
                                        <svg
                                            className="size-[1.2em]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M6 3L20 12 6 21 6 3z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="btn btn-square btn-ghost">
                                        <svg
                                            className="size-[1.2em]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </li>

                                <li className="list-row">
                                    <div>
                                        <img
                                            className="size-10 rounded-box"
                                            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                        />
                                    </div>
                                    <div>
                                        <div>Sabrino Gardener</div>
                                        <div className="text-xs uppercase font-semibold opacity-60">
                                            Cappuccino
                                        </div>
                                    </div>
                                    <p className="list-col-wrap text-xs">
                                        "Cappuccino" quickly gained attention
                                        for its smooth melody and relatable
                                        themes. The song’s success propelled
                                        Sabrino into the spotlight, solidifying
                                        their status as a rising star.
                                    </p>
                                    <button className="btn btn-square btn-ghost">
                                        <svg
                                            className="size-[1.2em]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M6 3L20 12 6 21 6 3z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                    <button className="btn btn-square btn-ghost">
                                        <svg
                                            className="size-[1.2em]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="dock md:invisible">
                        <button>
                            <svg
                                className="size-[1.2em]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="currentColor"
                                    strokeLinejoin="miter"
                                    strokeLinecap="butt"
                                >
                                    <polyline
                                        points="1 11 12 2 23 11"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></polyline>
                                    <path
                                        d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></path>
                                    <line
                                        x1="12"
                                        y1="22"
                                        x2="12"
                                        y2="18"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></line>
                                </g>
                            </svg>
                            <span className="dock-label">Home</span>
                        </button>

                        <button className="dock-active">
                            <svg
                                className="size-[1.2em]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="currentColor"
                                    strokeLinejoin="miter"
                                    strokeLinecap="butt"
                                >
                                    <polyline
                                        points="3 14 9 14 9 17 15 17 15 14 21 14"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></polyline>
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="2"
                                        ry="2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></rect>
                                </g>
                            </svg>
                            <span className="dock-label">Inbox</span>
                        </button>

                        <button>
                            <svg
                                className="size-[1.2em]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="currentColor"
                                    strokeLinejoin="miter"
                                    strokeLinecap="butt"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="3"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></circle>
                                    <path
                                        d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></path>
                                </g>
                            </svg>
                            <span className="dock-label">Settings</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
