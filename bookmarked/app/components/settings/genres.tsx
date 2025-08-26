"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import { useEffect, useState } from "react";

import { genreList } from "../../util/genrelist";

interface GenresProps {
    defaultGenres?: string[];
    onChange?: (genresJson: string) => void;
}

export default function Genres({ defaultGenres = [], onChange }: GenresProps) {
    const [selectedGenres, setSelectedGenres] =
        useState<string[]>(defaultGenres);
    const [query, setQuery] = useState("");

    // 🔥 Whenever selectedGenres changes, sync with parent
    useEffect(() => {
        onChange?.(JSON.stringify(selectedGenres));
    }, [selectedGenres, onChange]);

    const handleSelect = (genre: string) => {
        if (!selectedGenres.includes(genre)) {
            setSelectedGenres([...selectedGenres, genre]);
        }
        setQuery("");
    };

    const removeGenre = (genre: string) => {
        setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    };

    const filteredGenres = genreList.filter((genre) =>
        genre.label.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <div className="mb-2 flex flex-wrap gap-2">
                {selectedGenres.map((genre, key) => (
                    <span
                        key={key}
                        className="flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                    >
                        {genre}
                        <button
                            onClick={() => removeGenre(genre)}
                            className="text-xs hover:text-red-600 cursor-pointer"
                        >
                            <FontAwesomeIcon
                                icon={faClose}
                                className="w-4 h-4"
                            />
                        </button>
                    </span>
                ))}
            </div>
            <Combobox value={""} onChange={handleSelect}>
                <div className="relative">
                    <ComboboxInput
                        className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                        placeholder="Type to select a genre"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                    <ComboboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-sm overflow-auto border border-gray-200">
                        {filteredGenres.map((genre, id) => (
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
        </div>
    );
}
