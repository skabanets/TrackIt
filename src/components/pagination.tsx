"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  totalPages: number;
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState<number | null>(null);

  useEffect(() => {
    const pageFromParams = searchParams.get("page");
    if (pageFromParams) {
      setPage(Number(pageFromParams));
    } else {
      setPage(1);
    }
  }, [searchParams]);

  const handlePageClick = (event: { selected: number }): void => {
    if (typeof window !== "undefined") {
      const selectedPage = event.selected + 1;
      const currentSearchParams = new URLSearchParams(window.location.search);

      currentSearchParams.set("page", selectedPage.toString());
      const newUrl = `${window.location.pathname}?${currentSearchParams.toString()}`;
      window.history.pushState({}, "", newUrl);

      const newSearchParams = new URLSearchParams(window.location.search);
      setPage(Number(newSearchParams.get("page")));
    }
  };

  if (page === 1 && totalPages === 1) return;

  return (
    <ReactPaginate
      forcePage={page ? page - 1 : 0}
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalPages}
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
  );
};
