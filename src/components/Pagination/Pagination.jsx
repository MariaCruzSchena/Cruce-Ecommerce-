import React from "react";
import Arrows from "../Arrows/Arrows";
import style from "./style.module.scss";
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  reverse = false,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={!reverse ? style.pagContainerRow : style.pagContainerReverse}
    >
      <div className={style.newArrowContainer}>
        <Arrows
          onPageChange={onPageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
      <p>
        {currentPage} de {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
