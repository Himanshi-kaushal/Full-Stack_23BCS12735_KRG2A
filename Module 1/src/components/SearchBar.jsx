import React from "react";

export default function SearchBar({ placeholder = "Search for flats, tiffin, rentals..." , onSearch }) {
  const [q, setQ] = React.useState("");
  return (
    <div className="bg-white rounded shadow-sm p-3 mb-6">
      <div className="flex gap-2 items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch?.(q)}
          placeholder={placeholder}
          className="flex-1 outline-none px-3 py-2"
        />
        <button
          onClick={() => onSearch?.(q)}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
}
