"use client";

import Image from "next/image";
import { format } from "date-fns";

import { ActionButtons, StatusLabel } from "@/components";
import type { Order, PurchaseStatus } from "@/types";

interface TableItemProps {
  item: Order;
}

export const TableItem = ({ item }: TableItemProps) => {
  return (
    <tr className="tr-style even: h-[64px] font-medium odd:bg-secondaryBgColor">
      <td className="unit-center">&#35;{item.trackingID}</td>
      <td className="flex items-center justify-start gap-2">
        <Image
          src={item.productImage}
          width={32}
          height={32}
          style={{ objectFit: "cover" }}
          alt="product image"
          className="rounded-md bg-white shadow-sm"
        />
        <p className="line-clamp-1">{item.productName}</p>
      </td>
      <td>{item.customer}</td>
      <td>{format(new Date(item.date), "dd/MM/yyyy")}</td>
      <td>&#36;{item.amount}</td>
      <td>{item.paymentMode}</td>
      <td>
        <StatusLabel status={item.status as PurchaseStatus} />
      </td>
      <td className="unit-center">
        <ActionButtons id={item.trackingID} />
      </td>
    </tr>
  );
};
