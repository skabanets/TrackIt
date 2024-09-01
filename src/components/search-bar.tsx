"use client";

import { debounce } from "lodash";
import SearchSvg from "public/search.svg";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [initialSearch, setInitialSearch] = useState<string>("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialSearchValue = searchParams.get("search") || "";
    setSearch(initialSearchValue);
    setInitialSearch(initialSearchValue);
  }, []);

  const updateUrl = useCallback(
    debounce((searchValue: string) => {
      if (typeof window !== "undefined") {
        const searchParams = new URLSearchParams(window.location.search);
        const currentPage = searchParams.get("page");

        if (searchValue.trim() === "") {
          searchParams.delete("search");
          if (initialSearch.trim() !== "") {
            searchParams.set("page", "1");
          } else if (!currentPage) {
            searchParams.delete("page");
          }
        } else {
          const previousSearch = searchParams.get("search");
          searchParams.set("search", searchValue);

          if (previousSearch !== searchValue) {
            searchParams.set("page", "1");
          } else if (currentPage) {
            searchParams.set("page", currentPage);
          }
        }

        const newUrl = searchParams.toString()
          ? `${window.location.pathname}?${searchParams.toString()}`
          : window.location.pathname;

        window.history.pushState({}, "", newUrl);
      }
    }, 500),
    [initialSearch]
  );

  useEffect(() => {
    updateUrl(search);
    return () => {
      updateUrl.cancel();
    };
  }, [search, updateUrl]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="h-[32px] w-[218px] rounded-md border border-searchBarColor bg-transparent py-2 pl-[33px] pr-[9px] text-xs outline-none focus-visible:border-accentColor"
        type="text"
        value={search}
        onChange={handleSearchChange}
      />
      <SearchSvg className="absolute left-[9px] top-[8px] h-4 w-4 stroke-searchBarColor" />
    </div>
  );
};
