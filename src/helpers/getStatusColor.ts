import type { PurchaseStatus } from "@/types";

export const getStatusColor = (status: PurchaseStatus) => {
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
