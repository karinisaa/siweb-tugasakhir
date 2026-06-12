"use client";

export default function SearchBar({ searchTerm, onSearch, resultCount }) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      {/* Search Input */}
      <div className="relative group">
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-cyan-500 rounded-xl opacity-0 group-focus-within:opacity-20 blur transition-opacity duration-300"></div>

        <div className="relative">
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search projects by title or description..."
            className="w-full bg-gray-900/80 border border-gray-700/50 focus:border-pink-500/50 text-white placeholder-gray-500 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all"
          />

          {/* Clear Button */}
          {searchTerm && (
            <button
              onClick={() => onSearch("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between px-1">
        <p className="text-gray-400 text-sm">
          Found{" "}
          <span className="text-pink-400 font-semibold">{resultCount}</span>{" "}
          {resultCount === 1 ? "Project" : "Projects"}
        </p>
        {searchTerm && (
          <p className="text-gray-500 text-xs">
            Searching for: &ldquo;
            <span className="text-gray-300">{searchTerm}</span>&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}
