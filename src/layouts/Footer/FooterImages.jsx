import React from "react";
import style from "./style.module.scss";
import cruceLogo from "../../assets/images/cruceLogo.jpg";
import ahora18 from "../../assets/images/footer/ahora18.svg";
import hotweek from "../../assets/images/footer/hotweek.svg";
import afip from "../../assets/images/footer/afip.svg";
import vtex from "../../assets/images/footer/vtex.svg";
import border from "../../assets/images/footer/border.svg";
import cc from "../../assets/images/footer/cc.svg";

const FooterImages = () => {
  return (
    <div className={style.contentContainer}>
      <div className={style.contentWrapper}>
        <img src={cc} alt="cc" className={style.cc} />
        <img src={border} alt="border" />
        <img src={ahora18} alt="ahora 18" className={style.ahora18} />
        <img src={border} alt="border" />
        <img src={hotweek} alt="hotweek" className={style.hotweek} />
      </div>
      <div className={style.contentWrapper}>
        <img src={afip} alt="afip" className={style.afip} />
        <img src={vtex} alt="avtex" className={style.vtex} />
        <img src={cruceLogo} alt="cruceLogo" className={style.cruceLogo} />
      </div>
    </div>
  );
};

export default FooterImages;
