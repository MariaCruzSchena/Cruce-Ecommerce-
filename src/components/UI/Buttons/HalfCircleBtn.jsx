import React from "react";
import style from "./style.module.scss";
import arrowTop from "../../../assets/images/arrows/arrowTop.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const HalfCircleBtn = () => {
  return (
    <AnchorLink href="#up">
      {" "}
      <div className={style.divBtn}>
        <img src={arrowTop} />
        <button>Subir</button>
      </div>
    </AnchorLink>
  );
};

export default HalfCircleBtn;
