import { useState, useEffect } from "react";
import { debounce } from "lodash";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = ({ placeholder, onSearch }) => {
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const debouncedSearch = debounce((value) => {
        onSearch(value.trim());
    }, 600);

    useEffect(() => {
        if (query === "") {
        onSearch("");
        } else {
        debouncedSearch(query);
        }
        return () => debouncedSearch.cancel();
    }, [query]);

    const handleToggleSearch = () => setShowSearch(true);
    const handleCloseSearch = () => {
        setQuery("");
        setShowSearch(false);
    };

    return (
        <div className="absolute top-4 right-4 z-10">
        {!showSearch ? (
            <button
            onClick={handleToggleSearch}
            className="text-gray-700 hover:text-indigo-600 text-2xl p-2"
            aria-label="Open search"
            >
            <FiSearch />
            </button>
        ) : (
            <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-md w-[90vw] max-w-sm sm:max-w-md">
            <input
                type="text"
                placeholder={placeholder}
                value={query.toUpperCase()}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
                onClick={handleCloseSearch}
                className="text-gray-600 hover:text-red-500 text-xl"
                aria-label="Close search"
            >
                <FiX />
            </button>
            </div>
        )}
        </div>
    );
};

export default SearchBar;
