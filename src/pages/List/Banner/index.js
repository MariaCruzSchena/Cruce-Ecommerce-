import React from "react";
import style from "./style.module.scss";
import banner from "../../../assets/images/ui/banner_listado.jpg";

const Banner = () => {
  return (
    <div className={style.bannerContainer}>
      {" "}
      <img src={banner} />
    </div>
  );
};

export default Banner;
