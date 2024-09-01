"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import ArrowSvg from "public/arrow.svg";

import { itemsQuantityOptions } from "@/constants";

export const ItemsPerPageSelector = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [limit, setLimit] = useState<number | null>(null);
  const options = itemsQuantityOptions;

  useEffect(() => {
    const limitFromParams = searchParams.get("limit");
    if (limitFromParams) {
      setLimit(Number(limitFromParams));
    } else {
      setLimit(10);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleCloseList = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleCloseList);
    return () => {
      document.removeEventListener("click", handleCloseList);
    };
  }, []);

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleSelectOption = (option: number) => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("limit", option.toString());
      searchParams.set("page", "1");
      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.pushState({}, "", newUrl);

      setLimit(option);
      setIsOpen(false);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 text-xs">
      <p>Show</p>
      <div className="relative">
        <div
          ref={dropdownRef}
          defaultValue={options[0].id}
          className={`px-[9px]rounded-lg flex h-[31px] w-[43px] cursor-pointer items-center gap-1 rounded-lg border bg-paginationBgColor px-2 py-2 text-textColor ${isOpen ? "border-searchBarColor" : "border-paginationBgColor"}`}
          onClick={handleDropdownClick}
        >
          {limit}{" "}
          <ArrowSvg className={`h-2 w-2 shrink-0 fill-searchBarColor ${isOpen && "rotate-180"}`} />
        </div>
        {isOpen && (
          <ul className="absolute top-[36px] z-10 w-[43px] rounded-md border border-searchBarColor bg-paginationBgColor text-textColor">
            {options.map(option => (
              <li
                key={option.id}
                value={option.value}
                className={`cursor-pointer px-2 first:rounded-t-[4px] last:rounded-b-[4px] hover:bg-accentColor ${
                  limit === option.value && "bg-sortArrowColor"
                }`}
                onClick={() => handleSelectOption(option.value)}
              >
                {option.value}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p>entries</p>
    </div>
  );
};
