"use client";

import { toast } from "react-toastify";

import { Button } from "@/components";
import EditSvg from "public/edit.svg";
import TrashSvg from "public/trash.svg";

import { ordersEventEmitter } from "@/utils/ordersEventEmitter";

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
        toast.error("Failed to delete the order");
      } else {
        toast.success("Order deleted successfully");
        ordersEventEmitter.emit("orderDeleted");
      }
    } catch (error) {
      toast.error("Error during fetch");
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
