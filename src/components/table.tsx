import { SortButton } from "@/components";

export const Table = () => {
  return (
    <table>
      <thead>
        <tr className="h-49px imems-center flex gap-4 py-4">
          <th className="th-center">Tracking ID</th>
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
          <th className="th-center">Action</th>
        </tr>
      </thead>
      {/* <tbody></tbody> */}
    </table>
  );
};
