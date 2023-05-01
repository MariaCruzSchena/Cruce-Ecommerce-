import React from "react";
import banner from "../../../assets/images/ui/banner_listado.jpg";
import style from "./style.module.scss"

const Banner = () => {
  return (
    <div className={style.bannerContainer}>
      {" "}
      <img src={banner} />
    </div>
  );
};

export default Banner;
