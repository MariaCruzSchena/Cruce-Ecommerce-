import React from "react";
import style from "./style.module.scss";
import ShippingDetailsCard from "../../../components/Cards/ShippingDetailsCard/ShippingDetailsCard";
import creditcard from "../../../assets/images/creditcard.svg";
import truck from "../../../assets/images/truck.svg";
import motorcycle from "../../../assets/images/motorcycle.svg";

const Details = () => {
  return (
    <div className={style.sidebarContainer}>
      <ShippingDetailsCard
        img={creditcard}
        title="12 y 18 Cuotas"
        subtitle="¡sin interés!"
      />
      <p className={style.divider}></p>
      <ShippingDetailsCard
        img={truck}
        title="Evío gratis"
        subtitle="En todas las compras"
      />
      <p className={style.divider}></p>
      <ShippingDetailsCard
        img={motorcycle}
        title="Te llega en 24hs"
        subtitle="Con costo adicional"
        imgName="motorcycle"
      />
    </div>
  );
};

export default Details;
