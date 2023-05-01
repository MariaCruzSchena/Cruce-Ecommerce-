import React from "react";
import style from "./style.module.scss";
import cross from "../../../assets/images/ui/cross.svg";

const Popup = ({ anchorEl, setAnchorEl }) => {
  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <div className={style.popupWrapper}>
      <div className={style.popupInnerWrapper}>
        <p className={style.popupMsgMobile}>
          Mantené pulsado cualquier artículo para agregarlo al carrito
        </p>
        <p className={style.popupMsgDesktop}>
          Sólo por hoy: evío gratis en todos los productos!
        </p>
      </div>
      <button className={style.popupBtn} onClick={closeHandler}>
        <img className={style.cross} src={cross} alt="cross" />
      </button>
    </div>
  );
};

export default Popup;
