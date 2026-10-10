"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
  className?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * (pageSize ?? 0) + 1;
  const endItem = Math.min(currentPage * (pageSize ?? 0), totalItems ?? 0);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      if (!pages.includes(totalPages)) pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div
      className={`flex flex-col items-center justify-between gap-4 sm:flex-row ${className}`}
    >
      {totalItems !== undefined && pageSize !== undefined && (
        <p className="font-body text-[13px] text-muted-foreground">
          Showing <span className="font-semibold text-secondary-900">{startItem}</span> to{" "}
          <span className="font-semibold text-secondary-900">{endItem}</span> of{" "}
          <span className="font-semibold text-secondary-900">{totalItems}</span> items
        </p>
      )}

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Previous page"
          className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-black/[0.08] bg-white px-2.5 font-body text-[13px] font-medium text-secondary-700 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-black/[0.08] disabled:hover:bg-white disabled:hover:text-secondary-700"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="ml-1 hidden sm:inline">Prev</span>
        </button>

        {getPageNumbers().map((p, idx) =>
          typeof p === "number" ? (
            <button
              key={idx}
              type="button"
              onClick={() => onPageChange(p)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg font-body text-[13px] font-semibold transition-all ${
                currentPage === p
                  ? "bg-primary-600 text-white shadow-sm shadow-primary-600/30"
                  : "border border-black/[0.08] bg-white text-secondary-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600"
              }`}
            >
              {p}
            </button>
          ) : (
            <span
              key={idx}
              className="flex h-9 w-6 items-center justify-center font-body text-[13px] text-secondary-400"
            >
              ...
            </span>
          ),
        )}

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
          className="flex h-9 min-w-9 items-center justify-center rounded-lg border border-black/[0.08] bg-white px-2.5 font-body text-[13px] font-medium text-secondary-700 transition-colors hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-black/[0.08] disabled:hover:bg-white disabled:hover:text-secondary-700"
        >
          <span className="mr-1 hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
