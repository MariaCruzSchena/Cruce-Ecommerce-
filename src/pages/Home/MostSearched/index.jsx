import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import SmallProductCard from "../../../components/Cards/SmallProductCard/SmallProductCard";

const MostSearched = () => {
  const products = useSelector((state) => state.mostSearched);

  return (
    <div className={style.mostSearchedContainer}>
      <p className={style.mostSearchedTitle}>
        Lo más <br /> buscado
      </p>
      {products.map((product, i) => (
        <SmallProductCard product={product} key={i}/>
      ))}
    </div>
  );
};

export default MostSearched;
