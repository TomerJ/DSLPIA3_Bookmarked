"use client";

import {
    faBookBookmark,
    faHome,
    faNewspaper,
    faPencil,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dockItems = [
    { label: "Home", href: "/app", icon: faHome },
    { label: "Announcements", href: "/app/announcements", icon: faNewspaper },
    { label: "Reviews", href: "/app/reviews", icon: faPencil },
    { label: "My Reading", href: "/app/reading", icon: faBookBookmark },
    { label: "Members", href: "/app/members", icon: faUser },
];

export default function Dock() {
    return (
        <div className="dock lg:hidden font-inter">
            {dockItems.map((item, index) => (
                <a
                    key={item.href}
                    className={index === 0 ? "dock-active" : ""}
                    href={item.href}
                >
                    <FontAwesomeIcon icon={item.icon} className="h-3.5 w-3.5" />
                    <span className="dock-label">{item.label}</span>
                </a>
            ))}
        </div>
    );
}
