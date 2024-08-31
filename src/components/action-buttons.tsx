"use client";

import { Button } from "@/components";
import EditSvg from "public/edit.svg";
import TrashSvg from "public/trash.svg";

export const ActionButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <Button className="secondary-btn" type="button">
        <EditSvg className="h-6 w-6 stroke-editIconColor" />
      </Button>
      <Button className="secondary-btn" type="button">
        <TrashSvg className="h-6 w-6 stroke-deleteIconColor" />
      </Button>
    </div>
  );
};
