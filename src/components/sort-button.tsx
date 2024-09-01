"use client";

import SortSvg from "public/icons/sort.svg";
import { Button } from "@/components";

export const SortButton = () => {
  return (
    <Button type="button">
      <SortSvg className="sort-icon" />
    </Button>
  );
};
