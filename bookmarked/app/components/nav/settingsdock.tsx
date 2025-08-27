"use client";

import { faGears, faHome, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dockItems = [
    { label: "User Settings", href: "/app/settings/user", icon: faGears },
    {
        label: "Profile Settings",
        href: "/app/settings/profile",
        icon: faUserGear,
    },
    { label: "Return Home", href: "/app", icon: faHome },
];

export default function SettingsDock() {
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
