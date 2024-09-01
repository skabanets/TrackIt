"use client";

import { Order } from "@/types";
import { Pagination, Table, ToolBar } from "@/components";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface ContentProps {
  defaultOrders: Order[];
  defaultTotalPages: number;
  baseUrl: string;
}
export const PageContent = ({ defaultOrders, defaultTotalPages, baseUrl }: ContentProps) => {
  const searchParams = useSearchParams();

  const [orders, setOrders] = useState<Order[]>([...defaultOrders]);
  const [totalPages, setTotalPages] = useState(defaultTotalPages);

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
      <Table orders={orders} />
      <Pagination totalPages={totalPages} />
    </>
  );
};
