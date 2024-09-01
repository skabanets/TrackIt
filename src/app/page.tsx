import { PageContent } from "@/components";

export default async function Home({ searchParams }: { searchParams: any }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/orders?${new URLSearchParams(searchParams)}`);

  if (!res.ok) {
    throw new Error("Failed to fetch orders data");
  }

  const { orders, totalPages } = await res.json();
  const defaultOrders = orders;
  const defaultTotalPages = totalPages;

  return (
    <section className="container flex h-[screen-64] flex-col">
      <PageContent
        defaultOrders={defaultOrders}
        defaultTotalPages={defaultTotalPages}
        baseUrl={baseUrl}
      />
    </section>
  );
}
