"use client";

import {
    faBookOpen,
    faGhost,
    faHatWizard,
    faHeart,
    faMagnifyingGlass,
    faMasksTheater,
    faRobot,
    faScroll,
    faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";

export default function Genres({
    adminDefault = false,
    user = {
        id: 1,
        name: "YOOOO",
    },
}: {
    user?: {
        id: number;
        name: string;
    };
    status?: (message: string, type: "success" | "danger" | "warning") => void;
    adminDefault?: boolean;
}) {
    const sampleGenres = [
        { label: "Science Fiction", icon: faRobot },
        { label: "Fantasy", icon: faHatWizard },
        { label: "Mystery", icon: faMagnifyingGlass },
        { label: "Romance", icon: faHeart },
        { label: "Comedy", icon: faMasksTheater },
        { label: "Children's", icon: faSmileBeam },
        { label: "Poetry", icon: faScroll },
        { label: "Horror", icon: faGhost },
        { label: "Non-fiction", icon: faBookOpen },
    ];

    return (
        <Combobox value="" immediate={true} onChange={() => {}}>
            <div className="relative">
                <ComboboxInput
                    className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                    placeholder="Type or select a genre"
                />
                <ComboboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-sm overflow-auto border border-gray-200">
                    {sampleGenres.map((genre, id) => (
                        <ComboboxOption
                            key={id}
                            value={genre.label}
                            className={({ active }) =>
                                `cursor-pointer select-none px-4 py-2 flex items-center gap-2 ${
                                    active
                                        ? "bg-orange-700 text-white"
                                        : "text-gray-900"
                                }`
                            }
                        >
                            <FontAwesomeIcon
                                icon={genre.icon}
                                className="w-4 h-4"
                            />
                            {genre.label}
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </div>
        </Combobox>
    );
}
