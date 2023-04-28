import React, { useState } from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import ProductCard from "../../../components/cards/productCard";

const Grid = () => {
  const products = useSelector((state) => state.products);
  console.log("PRODUCTS", products);
  return (
    <div className={style.divMain}>
      <div className={style.div1}>
        <ProductCard product={products[0]} />
      </div>
      <div className={style.div2}>
        <ProductCard product={products[1]} />
      </div>
      <div className={style.div3}>
        <ProductCard product={products[2]} />
      </div>
      <div className={style.div4}>
        <ProductCard product={products[3]} />
      </div>
      <div className={style.div5}>
        <ProductCard product={products[4]} />
      </div>
      <div className={style.div6}>
        <ProductCard product={products[5]} />
      </div>
      <div className={style.div7}>
        <h1 className={style.div7Title}>
          Llegó el invierno, encontralo antes que nadie
        </h1>
        <p className={style.div7Subtitle}>
          La colección más completa de Game of Thrones esta en X
        </p>
        <button className={style.div7Button}>Ver colección</button>
      </div>
      <div className={style.div8}>
        <button className={style.gridButton}>Ver colección</button>
      </div>
    </div>
  );
};

export default Grid;
