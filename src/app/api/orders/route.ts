import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

import type { Order } from "@/types/order";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "10";
  const search = searchParams.get("search") || "";

  const filePath = path.join(process.cwd(), "src", "app", "api", "orders", "orders.json");

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const orders: Order[] = JSON.parse(fileContents);

    const filteredOrders = orders.filter(order => {
      for (const value of Object.values(order)) {
        if (typeof value === "string" && value.toLowerCase().includes(search.toLowerCase())) {
          return true;
        }

        if (typeof value === "number" && value.toString().includes(search)) {
          return true;
        }
      }
      return false;
    });

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const startIndex = (pageNumber - 1) * limitNumber;
    const paginatedOrders = filteredOrders.slice(startIndex, startIndex + limitNumber);

    const totalPages = Math.ceil(filteredOrders.length / limitNumber);

    return NextResponse.json({ orders: paginatedOrders, totalPages });
  } catch (error) {
    return NextResponse.json(
      { message: "Error reading or processing the JSON file" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "src", "app", "api", "orders", "orders.json");

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const orders: Order[] = JSON.parse(fileContents);

    const updatedOrders = orders.filter(order => order.trackingID !== id);

    await fs.writeFile(filePath, JSON.stringify(updatedOrders, null, 2), "utf8");

    return NextResponse.json({ message: "Order deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Error reading or writing the JSON file" },
      { status: 500 }
    );
  }
}
