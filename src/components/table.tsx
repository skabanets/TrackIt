import { SortButton, TableItem } from "@/components";

export const Table = () => {
  const currentData = [
    {
      trackingID: 52849,
      productImage: "https://hotline.ua/img/tx/343/3437076345.jpg",
      productName: "Phone lsdldsllsdl",
      customer: "Martha Hammond",
      date: "2023-09-21",
      amount: 883.42,
      paymentMode: "Debit Card",
      status: "Cancelled",
    },
    {
      trackingID: 16771,
      productImage: "https://hotline.ua/img/tx/343/3437076345.jpg",
      productName: "Phone",
      customer: "Douglas Hernandez",
      date: "2024-03-19",
      amount: 384.97,
      paymentMode: "Cash on Delivery",
      status: "Delivered",
    },
    {
      trackingID: 81774,
      productImage: "https://hotline.ua/img/tx/343/3437076345.jpg",
      productName: "Phone",
      customer: "Lisa Jordan",
      date: "2023-11-26",
      amount: 261.75,
      paymentMode: "Debit Card",
      status: "Process",
    },
  ];

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
        {currentData.map(item => (
          <TableItem key={item.trackingID} item={{ ...item, date: new Date(item.date) }} />
        ))}
      </tbody>
    </table>
  );
};
