"use client";

import { itemsQuantityOptions } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import ArrowSvg from "public/arrow.svg";

export const ItemsPerPageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<number>(() => {
    const savedValue = localStorage.getItem("itemsPerPage");
    return savedValue ? parseInt(savedValue, 10) : itemsQuantityOptions[0].value;
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    localStorage.setItem("itemsPerPage", value.toString());
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
    <div className="flex items-center justify-center gap-2 text-xs">
      <p>Show</p>
      <div className="relative">
        <div
          ref={dropdownRef}
          defaultValue={options[0].id}
          className={`text-textColor bg-paginationBgColor px-[9px]rounded-lg flex h-[31px] w-[43px] cursor-pointer items-center gap-1 rounded-lg border px-2 py-2 ${isOpen && "border-searchBarColor"}`}
          onClick={handleDropdownClick}
        >
          {value} <ArrowSvg className="fill-searchBarColor h-2 w-2" />
        </div>
        {isOpen && (
          <ul className="bg-paginationBgColor text-textColor border-searchBarColor absolute top-[36px] z-10 w-[43px] rounded-md border">
            {options.map(option => (
              <li
                key={option.id}
                value={option.value}
                className={`hover:bg-accentColor cursor-pointer px-2 first:rounded-t-[4px] last:rounded-b-[4px] ${
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
