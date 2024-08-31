import React from "react";

export const Table = () => {
  return (
    <table>
      <thead>
        <tr className="h-49px imems-center flex gap-4 py-4">
          <th className="th-center">Tracking ID</th>
          <th>Product</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Mode</th>
          <th>Status</th>
          <th className="th-center">Action</th>
        </tr>
      </thead>
      {/* <tbody></tbody> */}
    </table>
  );
};
