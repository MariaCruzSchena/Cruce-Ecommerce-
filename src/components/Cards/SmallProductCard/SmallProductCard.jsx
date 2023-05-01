import React from "react";
import style from "./style.module.scss";

const SmallProductCard = ({ product }) => {
  return (
    <div className={style.mostSearchedWrapper}>
      <img
        className={style.mostSearchedImg}
        src={product.image}
        alt="product"
      />
      <div className={style.mostSearchedWrapperRight}>
        <p className={style.mostSearchedName}>{product.title}</p>
        <div className={style.mostSearchedPrices}>
          {product.discount ? (
            <>
              <span className={style.mostSearchedDiscount}>
                ${(product.price * product.discount) / 100}
              </span>
              <span className={style.mostSearchedTotal}>${product.price}</span>
            </>
          ) : (
            <span className={style.mostSearchedTotalDiff}>{product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallProductCard;
