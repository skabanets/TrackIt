export type PurchaseStatus = "Cancelled" | "Delivered" | "Process";

export interface Order {
  trackingID: number;
  productImage: string;
  productName: string;
  customer: string;
  date: Date;
  amount: number;
  paymentMode: string;
  status: string;
}
