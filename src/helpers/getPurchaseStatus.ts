import { PurchaseStatus } from "@/constants";

export const getPurchaseStatus = (status: string): PurchaseStatus => {
  return (PurchaseStatus as any)[status] || PurchaseStatus.Cancelled;
};
