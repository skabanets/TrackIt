"use client";

import SearchSvg from "public/search.svg";

export const SearchBar = () => {
  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="h-[32px] w-[218px] rounded-md border border-searchBarColor bg-transparent py-2 pl-[33px] pr-[9px] text-xs outline-none focus-visible:border-accentColor"
        type="text"
      />
      <SearchSvg className="absolute left-[9px] top-[8px] h-4 w-4 stroke-searchBarColor" />
    </div>
  );
};
