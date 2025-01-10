import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const getPageRange = () => {
    const pages = [];
    const pageLimit = 5;
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, currentPage + 1);

    if (totalPages <= pageLimit) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push("...");
          pages.push(totalPages);
        }
      }
    }

    return pages;
  };

  const pages = getPageRange();

  return (
    <div className="pagination">
      <button
        className="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        &lt; Prev
      </button>
      <div className="page-container display-large">
        {pages.map((page, i) =>
          page === "..." ? (
            <div key={i} className="ellipsis">
              ...
            </div>
          ) : (
            <button
              key={i}
              onClick={() => handlePageChange(page)}
              className={`button ${currentPage === page ? "active" : ""}`}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </button>
          )
        )}
      </div>
      <div className="display-small">Page: {currentPage}</div>

      <button
        className="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next &gt;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
