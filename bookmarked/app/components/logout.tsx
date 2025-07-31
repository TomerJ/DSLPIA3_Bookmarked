"use client";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logout() {
    return (
        <a
            className="flex items-center"
            onClick={(e) => {
                e.preventDefault();
                document.cookie =
                    "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                window.location.href = "/";
            }}
        >
            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
        </a>
    );
}
