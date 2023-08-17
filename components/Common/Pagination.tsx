import React from "react";

export interface PaginationProps {
  currentPage?: number;
  totalPage: number;
  onPageChagnge?: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPage,
  onPageChagnge,
}: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChagnge && onPageChagnge(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
