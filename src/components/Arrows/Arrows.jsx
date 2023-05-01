import React from "react";
import style from "./stye.module.scss";
import arrowLeft from "../../assets/images/arrows/arrowLeft.svg";
import arrowRight from "../../assets/images/arrows/arrowRight.svg";

const Arrows = ({ onPageChange, currentPage, totalPages }) => {
  const nextPageHandler = () => {
    currentPage + 1 > totalPages
      ? onPageChange(currentPage)
      : onPageChange(currentPage + 1);
  };

  const previousPageHandler = () => {
    currentPage - 1 < 1
      ? onPageChange(currentPage)
      : onPageChange(currentPage - 1);
  };
  return (
    <>
      <button className={style.scrollWrapper} onClick={previousPageHandler}>
        <img src={arrowLeft} alt="scroll left" />
      </button>
      <button className={style.scrollWrapper} onClick={nextPageHandler}>
        <img src={arrowRight} alt="scroll right" />
      </button>
    </>
  );
};

export default Arrows;
