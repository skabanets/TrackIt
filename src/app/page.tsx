import { Pagination, Table, ToolBar } from "@/components";

export default function Home() {
  const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <section className="container flex h-[screen-64] flex-col">
      <ToolBar />
      <Table />
      <Pagination items={items} itemsPerPage={1} />
    </section>
  );
}
