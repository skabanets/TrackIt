"use client";

import { Button, ItemsPerPageSelector } from "@/components";
import PlusSvg from "public/plus.svg";

export const ToolBar = () => {
  return (
    <div className="flex items-center justify-between pt-4">
      <ItemsPerPageSelector />
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
