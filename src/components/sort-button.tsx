"use client";

import SortSvg from "public/sort.svg";
import { Button } from "@/components";

export const SortButton = () => {
  return (
    <Button type="button">
      <SortSvg className="sort-icon" />
    </Button>
  );
};
