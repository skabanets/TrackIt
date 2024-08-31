import { PurchaseStatus } from "@/constants";

export const getStatusColor = (status: PurchaseStatus) => {
  switch (status) {
    case PurchaseStatus.Process:
      return "bg-processBgColor text-processTextColor";
    case PurchaseStatus.Delivered:
      return "bg-deliveredBgColor text-deliveredTextColor";
    case PurchaseStatus.Cancelled:
      return "bg-canceledBgColor text-canceledTextColor";
    default:
      return "";
  }
};
