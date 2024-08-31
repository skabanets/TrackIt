import { Table, ToolBar } from "@/components";

export default function Home() {
  return (
    <section className="container flex h-[screen-64] flex-col">
      <ToolBar />
      <Table />
    </section>
  );
}
