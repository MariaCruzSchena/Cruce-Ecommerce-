import React, { useState } from "react";
import style from "./style.module.scss";
import arrowLeft2 from "../../assets/images/arrows/arrowLeft2.svg";
import arrowRight2 from "../../assets/images/arrows/arrowRight2.svg";

const ArrowPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  reverse = false,
}) => {
  const pageNumbers = [];
  const [selectedPage, setSelectedPage] = useState(1);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const nextPageHandler = () => {
    if (currentPage + 1 > totalPages) {
      onPageChange(currentPage);
      setSelectedPage(currentPage);
    } else {
      onPageChange(currentPage + 1);
      setSelectedPage(currentPage + 1);
    }
  };

  const previousPageHandler = () => {
    if (currentPage - 1 < 1) {
      onPageChange(currentPage);
      setSelectedPage(currentPage);
    } else {
      onPageChange(currentPage - 1);
      setSelectedPage(currentPage - 1);
    }
  };

  return (
    <div className={style.nPaginationContainer}>
      <button
        className={style.nPaginationWrapper}
        onClick={previousPageHandler}
      >
        <img src={arrowLeft2} alt="left" />
      </button>
      <>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={
              selectedPage === pageNumber
                ? style.nPaginationNumberDiff
                : style.nPaginationNumber
            }
            onClick={() => {
              onPageChange(pageNumber);
              setSelectedPage(pageNumber);
            }}
          >
            {pageNumber}
          </button>
        ))}
      </>
      <button className={style.nPaginationWrapper} onClick={nextPageHandler}>
        <img src={arrowRight2} alt="right" />
      </button>
    </div>
  );
};

export default ArrowPagination;
