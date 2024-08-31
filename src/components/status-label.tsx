"use client";

import { getStatusColor } from "@/helpers";
import { PurchaseStatus } from "@/types";

interface StatusLabelProps {
  status: PurchaseStatus;
}
export const StatusLabel = ({ status }: StatusLabelProps) => {
  return (
    <div
      className={`w-fit rounded-[22px] px-3 py-2 text-xs leading-[12px] ${getStatusColor(status)}`}
    >
      {status}
    </div>
  );
};
