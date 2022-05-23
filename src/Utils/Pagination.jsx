import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, changePage }) {
  return (
    <>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}
