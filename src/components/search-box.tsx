import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full max-w-md">
      <label
        htmlFor="invoice-search"
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        Search invoices
      </label>

      <div className="relative">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        {/* Input */}
        <input
          id="invoice-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by invoice number or customer..."
          className="block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
        />
      </div>
    </div>
  );
};

export default SearchBox;