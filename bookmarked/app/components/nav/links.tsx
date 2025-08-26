"use client";

import {
    faBookBookmark,
    faHome,
    faNewspaper,
    faPencil,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Home", href: "/app", icon: faHome },
    { label: "Announcements", href: "/app/announcements", icon: faNewspaper },
    { label: "Reviews", href: "/app/reviews", icon: faPencil },
    { label: "My Reading", href: "/app/reading", icon: faBookBookmark },
    { label: "Members", href: "/app/members", icon: faUser },
];

export default function Links() {
    const pathname = usePathname();

    return (
        <ul className="menu menu-horizontal px-1 font-rubik gap-x-1">
            {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className={`flex items-center ${
                                isActive ? "menu-active" : ""
                            }`}
                        >
                            <FontAwesomeIcon
                                className="h-3.5 w-4"
                                icon={item.icon}
                            />
                            {item.label}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
