"use client";

import { Button, ItemsPerPageSelector, SearchBar } from "@/components";
import PlusSvg from "public/plus.svg";

export const ToolBar = () => {
  return (
    <div className="flex flex-row items-center justify-between pb-4 pt-[32px]">
      <div className="flex items-center gap-6">
        <ItemsPerPageSelector />
        <SearchBar />
      </div>
      <Button
        className="primary-btn flex w-[139px] items-center gap-2 px-3 py-2 font-bold"
        type="button"
      >
        <PlusSvg className="h-4 w-4 fill-white" />
        Add Customer
      </Button>
    </div>
  );
};
