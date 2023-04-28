import React from "react";
import DetailCard from "./DetailCard";
import creditcard from "../../../assets/images/creditcard.svg";
import truck from "../../../assets/images/truck.svg";
import motorcycle from "../../../assets/images/motorcycle.svg";
import styles from "./style.module.scss";

const Details = () => {
  return (
    <div className={styles.sidebarContainer}>
      <DetailCard
        img={creditcard}
        title="12 y 18 Cuotas"
        subtitle="¡sin interés!"
      />
      <p className={styles.divider}></p>
      <DetailCard
        img={truck}
        title="Evío gratis"
        subtitle="En todas las compras"
      />
      <p className={styles.divider}></p>
      <DetailCard
        img={motorcycle}
        title="Te llega en 24hs"
        subtitle="Con costo adicional"
        imgName="motorcycle"
      />
    </div>
  );
};

export default Details;
