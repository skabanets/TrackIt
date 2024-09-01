"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Order } from "@/types";
import { EmptyListMessage, Pagination, Table, ToolBar } from "@/components";

interface ContentProps {
  defaultOrders: Order[];
  defaultTotalPages: number;
  baseUrl: string;
}
export const PageContent = ({ defaultOrders, defaultTotalPages, baseUrl }: ContentProps) => {
  const searchParams = useSearchParams();

  const [orders, setOrders] = useState<Order[]>([...defaultOrders]);
  const [totalPages, setTotalPages] = useState(defaultTotalPages);

  const query = searchParams.get("limit");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${baseUrl}/orders?${new URLSearchParams(searchParams)}`);

      if (!res.ok) {
        throw new Error("Failed to fetch orders data");
      }

      const { orders, totalPages } = await res.json();

      setOrders(orders);
      setTotalPages(totalPages);
    };

    fetchData();
  }, [searchParams]);

  return (
    <>
      <ToolBar />
      {orders.length === 0 && query !== "" ? (
        <EmptyListMessage message="No orders found" />
      ) : (
        <>
          <Table orders={orders} />
          <Pagination totalPages={totalPages} />
        </>
      )}
    </>
  );
};
