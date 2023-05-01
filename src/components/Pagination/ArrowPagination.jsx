import React from "react";
import style from "./style.module.scss";
import Arrows from "../Arrows/Arrows";

const ArrowPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  reverse = false,
}) => {
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

export default ArrowPagination;
