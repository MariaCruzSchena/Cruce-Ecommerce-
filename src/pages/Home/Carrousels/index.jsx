import React from "react";
import style from "./style.module.scss";
import BrandsCarrousel from "./BrandsCarrousel";
import ShippingCarrousel from "./ShippingCarrousel";

const Carrousels = () => {
  return (
    <div className={style.carrouselsContainer}>
      <p className={style.brandsTitle}>Nuestras marcas</p>
      <BrandsCarrousel />
      <div className={style.shippingDetailsCarrousel}>
        <ShippingCarrousel />
      </div>
    </div>
  );
};

export default Carrousels;
