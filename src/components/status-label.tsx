"use client";

import type { PurchaseStatus } from "@/types";

interface StatusLabelProps {
  status: PurchaseStatus;
}
export const StatusLabel = ({ status }: StatusLabelProps) => {
  const getStatusColor = (status: PurchaseStatus): string => {
    switch (status) {
      case "Process":
        return "bg-processBgColor text-processTextColor";
      case "Delivered":
        return "bg-deliveredBgColor text-deliveredTextColor";
      case "Cancelled":
        return "bg-canceledBgColor text-canceledTextColor";
      default:
        return "";
    }
  };

  return (
    <div
      className={`flex h-[31px] w-fit items-center justify-center rounded-[22px] px-3 py-2 text-xs leading-[12px] shadow-sm ${getStatusColor(status)}`}
    >
      {status}
    </div>
  );
};
