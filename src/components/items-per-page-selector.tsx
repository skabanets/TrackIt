"use client";

import { itemsQuantityOptions } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import ArrowSvg from "public/arrow.svg";

export const ItemsPerPageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedValue = localStorage.getItem("itemsPerPage");
    if (savedValue) {
      setValue(parseInt(savedValue, 10));
    }
  }, []);

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

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem("itemsPerPage", value.toString());
    }
  }, [value]);

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: number) => {
    setValue(option);
    setIsOpen(false);
  };

  const options = itemsQuantityOptions;

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
          {value}{" "}
          <ArrowSvg className={`h-2 w-2 shrink-0 fill-searchBarColor ${isOpen && "rotate-180"}`} />
        </div>
        {isOpen && (
          <ul className="absolute top-[36px] z-10 w-[43px] rounded-md border border-searchBarColor bg-paginationBgColor text-textColor">
            {options.map(option => (
              <li
                key={option.id}
                value={option.value}
                className={`cursor-pointer px-2 first:rounded-t-[4px] last:rounded-b-[4px] hover:bg-accentColor ${
                  value === option.value && "bg-sortArrowColor"
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
