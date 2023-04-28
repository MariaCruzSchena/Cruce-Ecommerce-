import React from "react";
import styles from "./style.module.scss";
import cross from "../../../assets/images/cross.svg";

const Popup = ({ anchorEl, setAnchorEl }) => {
  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.popupInnerWrapper}>
        <p className={styles.popupMsgMobile}>
          Mantené pulsado cualquier artículo para agregarlo al carrito
        </p>
        <p className={styles.popupMsgDesktop}>
          Sólo por hoy: evío gratis en todos los productos!
        </p>
      </div>

      <button onClick={closeHandler}>
        <img src={cross} alt="cross" />
      </button>
    </div>
  );
};

export default Popup;
