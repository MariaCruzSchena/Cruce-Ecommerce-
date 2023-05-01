import React from "react";
import arrowLeft from "../../../assets/images/arrows/arrowLeft.svg";
import arrowRight from "../../../assets/images/arrows/arrowRight.svg";
import ShippingDetailsCard from "../ShippingDetailsCard/ShippingDetailsCard";
import Logos from "../../Logos/Logos";
import style from "./style.module.scss"

const CarrouselCard = ({ array, kind, currentPage, setCurrentPage, totalPages }) => {
console.log("arrrr", array)
  const nextPageHandler = () => {
    currentPage + 1 > totalPages
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage + 1);
  };

  const previousPageHandler = () => {
    currentPage - 1 < 1
      ? setCurrentPage(currentPage)
      : setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <button className={style.scrollWrapper} onClick={previousPageHandler}>
        <img src={arrowLeft} alt="scroll left" />
      </button>
      {array.map((product, i) =>
        kind === "logos" ? (
          <Logos brand={product} key={i} />
        ) : (
          <ShippingDetailsCard
            key={i}
            img={product.img}
            title={product.title}
            subtitle={product.subtitle}
            imgName={product.imgName || null}
          />
        )
      )}
      <button className={style.scrollWrapper} onClick={nextPageHandler}>
        <img src={arrowRight} alt="scroll right" />
      </button>
    </>
  );
};

export default CarrouselCard;
