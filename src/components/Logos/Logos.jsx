import React from "react";
import style from "./style.module.scss";

const Logos = ({ brand }) => {
  return (
    <div className={style.brandsItemWrapper}>
      <img src={brand} alt={`${brand}logo`} className={style.brandsItem} />
    </div>
  );
};

export default Logos;
