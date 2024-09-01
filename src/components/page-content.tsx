"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Order } from "@/types";
import { EmptyListMessage, Pagination, Table, ToolBar } from "@/components";
import { id } from "date-fns/locale";
import { ordersEventEmitter } from "@/utils/ordersEventEmitter";

interface ContentProps {
  defaultOrders: Order[];
  defaultTotalPages: number;
  baseUrl: string;
}
export const PageContent = ({ defaultOrders, defaultTotalPages, baseUrl }: ContentProps) => {
  const searchParams = useSearchParams();
  const [orders, setOrders] = useState<Order[]>(defaultOrders);
  const [totalPages, setTotalPages] = useState(defaultTotalPages);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${baseUrl}/orders?${new URLSearchParams(searchParams)}`);

        if (!res.ok) {
          throw new Error("Failed to fetch orders data");
        }

        const { orders, totalPages } = await res.json();

        if (orders.length === 0 && totalPages >= 1) {
          const currentPage = Number(searchParams.get("page")) || 1;
          if (currentPage > 1) {
            const newPage = (currentPage - 1).toString();
            const newParams = new URLSearchParams(searchParams);
            newParams.set("page", newPage);
            window.history.pushState({}, "", `${window.location.pathname}?${newParams.toString()}`);
          }
        }

        setOrders(orders);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();

    const handleOrderDeleted = () => fetchOrders();
    ordersEventEmitter.on("orderDeleted", handleOrderDeleted);

    return () => {
      ordersEventEmitter.off("orderDeleted", handleOrderDeleted);
    };
  }, [searchParams]);

  const hasQuery = searchParams.get("search");
  const isActiveTools = (!orders.length && hasQuery) || orders.length ? true : false;

  return (
    <>
      <ToolBar isActiveTools={isActiveTools} />
      {orders.length > 0 && (
        <>
          <Table orders={orders} />
          <Pagination totalPages={totalPages} />
        </>
      )}
      {!orders.length && hasQuery && <EmptyListMessage message="No orders found" />}
      {!orders.length && !hasQuery && (
        <EmptyListMessage message="The list is empty, please add a new order" />
      )}
    </>
  );
};
