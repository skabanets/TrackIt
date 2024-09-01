"use client";

import { Button } from "@/components";
import { ordersEventEmitter } from "@/utils/ordersEventEmitter";
import EditSvg from "public/edit.svg";
import TrashSvg from "public/trash.svg";

type ActionButtonsProps = {
  id: number;
};

export const ActionButtons = ({ id }: ActionButtonsProps) => {
  const handlDeleteItem = async () => {
    try {
      const response = await fetch("/api/orders", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
      } else {
        ordersEventEmitter.emit("orderDeleted");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button className="secondary-btn" type="button">
        <EditSvg className="h-6 w-6 stroke-editIconColor" />
      </Button>
      <Button className="secondary-btn" type="button" onClick={handlDeleteItem}>
        <TrashSvg className="h-6 w-6 stroke-deleteIconColor" />
      </Button>
    </div>
  );
};
