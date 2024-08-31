"use client";

import { useState } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  itemsPerPage: number;
  items: number[];
}

export const Pagination = ({ itemsPerPage, items }: PaginationProps) => {
  const [itemOffset, setItemOffset] = useState<number>(0);

  const endOffset: number = itemOffset + itemsPerPage;
  const currentItems: number[] = items.slice(itemOffset, endOffset);
  const pageCount: number = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }): void => {
    const newOffset: number = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems &&
        currentItems.map(item => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        containerClassName="w-full flex justify-center items-center py-4 gap-3 text-xs"
        pageClassName="w-[31px] h-[31px] rounded-md cursor-pointer bg-paginationBgColor"
        activeClassName="active-page"
        previousClassName="h-[31px] flex items-center cursor-pointer text-paginationTextColor hover:text-accentHoverColor"
        nextClassName="h-[31px] flex items-center cursor-pointer text-paginationTextColor hover:text-accentHoverColor"
        breakClassName="w-[12px] h-[31px] flex justify-center items-center rounded-md cursor-pointer bg-transporent text-paginationTextColor"
        disabledClassName="opacity-50 cursor-not-allowed"
        pageLinkClassName="w-full h-full flex justify-center items-center"
      />
    </>
  );
};
