"use client";

import { Button, ItemsPerPageSelector, SearchBar } from "@/components";
import PlusSvg from "public/plus.svg";

interface ToolBarProps {
  isActiveTools: boolean;
}

export const ToolBar = ({ isActiveTools }: ToolBarProps) => {
  return (
    <div className="flex flex-row items-center justify-between pb-4 pt-[32px]">
      {isActiveTools && (
        <div className="flex items-center gap-6">
          <ItemsPerPageSelector />
          <SearchBar />
        </div>
      )}
      <Button
        className="primary-btn ml-auto flex w-[139px] items-center gap-2 px-3 py-2 font-bold"
        type="button"
      >
        <PlusSvg className="h-4 w-4 fill-white" />
        Add Order
      </Button>
    </div>
  );
};
