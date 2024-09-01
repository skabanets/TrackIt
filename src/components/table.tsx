"use client";

import { SortButton, TableItem } from "@/components";
import { Order } from "@/types";

interface TableProps {
  orders: Order[];
}

export const Table = ({ orders }: TableProps) => {
  return (
    <table>
      <thead>
        <tr className="tr-style h-[49px] font-bold">
          <th className="unit-center">Tracking ID</th>
          <th>
            Product <SortButton />
          </th>
          <th>
            Customer <SortButton />
          </th>
          <th>
            Date <SortButton />
          </th>
          <th>Amount</th>
          <th>Payment Mode</th>
          <th>
            Status <SortButton />
          </th>
          <th className="unit-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(item => (
          <TableItem key={item.trackingID} item={item} />
        ))}
      </tbody>
    </table>
  );
};
