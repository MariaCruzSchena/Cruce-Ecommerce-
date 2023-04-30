import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";

const MostSearched = () => {
  const products = useSelector((state) => state.mostSearched);

  return (
    <div className={style.mostSearchedContainer}>
      <p className={style.mostSearchedTitle}>
        Lo más <br /> buscado
      </p>
      {products.map((product, i) => (
        <div className={style.mostSearchedWrapper} key={i}>
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
                  <span className={style.mostSearchedTotal}>
                    ${product.price}
                  </span>
                </>
              ) : (
                <span className={style.mostSearchedTotalDiff}>
                  {product.price}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostSearched;
