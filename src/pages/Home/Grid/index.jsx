import React from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import ProductCard from "../../../components/Cards/ProductCard/ProductCard"

const Grid = () => {
  const products = useSelector((state) => state.products);  
  return (
    <div className={style.divMain}>
      <div className={style.div1}>
        <h1 className={style.div1Title}>
          Llegó el invierno, encontralo antes que nadie
        </h1>
        <p className={style.div1Subtitle}>
          La colección más completa de Game of Thrones esta en X
        </p>
        <button className={style.div1Button}>Ver colección</button>
      </div>
      <div className={style.div2}>
        <ProductCard product={products[0]} />
      </div>
      <div className={style.div3}>
        <ProductCard product={products[1]} />
      </div>
      <div className={style.div4}>
        <ProductCard product={products[2]} />
      </div>
      <div className={style.div5}>
        <ProductCard product={products[3]} />
      </div>
      <div className={style.div6}>
        <ProductCard product={products[4]} />
      </div>
      <div className={style.div7}>
        <ProductCard product={products[5]} />
      </div>

      <div className={style.div8}>
        <button className={style.div8Button}>Ver colección</button>
      </div>
    </div>
  );
};

export default Grid;
