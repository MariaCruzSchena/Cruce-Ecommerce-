import React from "react";
import greenCart from "../../assets/images/greenCart.svg";
import discount from "../../assets/images/discount.svg";
import style from "./style.module.scss";

const ProductCard = ({ product }) => {
  console.log("soy el producto", product);
  return (
    product?.brand && (
      <div className={style.cardContainer}>
        <div className={style.cardWrapperTop}>
          <img
            className={style.productImg}
            src={product?.image}
            alt="product"
          />
          {product.discount && (
            <>
              <img
                className={style.productDiscountIcon}
                src={discount}
                alt="product"
              />{" "}
              <span  className={style.productDiscount}>{product.discount}%</span>
            </>
          )}
        </div>
        <div className={style.cardWrapperBottom}>
          <p className={style.cardBrand}>{product.brand}</p>
          <p className={style.cardTitle}>{product.title}</p>
          <p className={style.cardInfo}>6 Cuotas s/interés de</p>
          <p className={style.cardDues}>${(product.price / 6).toFixed(2)}</p>
          <p className={style.cardPrice}>
            Final:{" "}
            {product.stock ? (
              product.discount ? (
                <>
                  <span className={style.cardTotal}>${product.price}</span>
                  <span className={style.cardDiscount}>
                    ${(product.price * product.discount) / 100}
                  </span>
                </>
              ) : (
                <span className={style.cardTotal}>{product.price}</span>
              )
            ) : (
              "Artículo sin stock"
            )}
          </p>
          {product.stock ? (
            <button className={style.cardBuyButton}>
              <img src={greenCart} alt="cart" />
            </button>
          ) : (
            <button className={style.cardNoStockButton}>Ver artículo</button>
          )}
        </div>
      </div>
    )
  );
};

export default ProductCard;
