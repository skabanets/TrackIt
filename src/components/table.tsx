import { format } from "date-fns";
import Image from "next/image";

import { ActionButtons, SortButton, StatusLabel } from "@/components";

import { getPurchaseStatus } from "@/helpers";

export const Table = () => {
  const currentData = [
    {
      "Tracking ID": 52849,
      "Product Image": "https://hotline.ua/img/tx/343/3437076345.jpg",
      "Product Name": "Phone lsdldsllsdl",
      Customer: "Martha Hammond",
      Date: "2023-09-21",
      Amount: 883.42,
      "Payment Mode": "Debit Card",
      Status: "Cancelled",
    },
    {
      "Tracking ID": 16771,
      "Product Image": "https://hotline.ua/img/tx/343/3437076345.jpg",
      "Product Name": "Phone",
      Customer: "Douglas Hernandez",
      Date: "2024-03-19",
      Amount: 384.97,
      "Payment Mode": "Cash on Delivery",

      Status: "Delivered",
    },
    {
      "Tracking ID": 81774,
      "Product Image": "https://hotline.ua/img/tx/343/3437076345.jpg",
      "Product Name": "Phone",
      Customer: "Lisa Jordan",
      Date: "2023-11-26",
      Amount: 261.75,
      "Payment Mode": "Debit Card",
      Status: "Process",
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
          <tr
            key={item["Tracking ID"]}
            className="tr-style even: h-[64px] font-medium odd:bg-secondaryBgColor"
          >
            <td className="unit-center">&#35;{item["Tracking ID"]}</td>
            <td className="flex items-center justify-start gap-2">
              <Image
                src={item["Product Image"]}
                width={32}
                height={32}
                alt="product image"
                className="rounded-md"
              />{" "}
              <p className="line-clamp-1">{item["Product Name"]}</p>
            </td>
            <td>{item["Customer"]}</td>
            <td>{format(item["Date"], "dd/MM/yyyy")}</td>
            <td>&#36;{item["Amount"]}</td>
            <td>{item["Payment Mode"]}</td>
            <td>
              <StatusLabel status={getPurchaseStatus(item["Status"])} />
            </td>
            <td className="unit-center">
              <ActionButtons />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
