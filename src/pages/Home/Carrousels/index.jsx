import React from "react";
import style from "./style.module.scss";
import disney from "../../../assets/images/disney.svg";
import funko from "../../../assets/images/funko.svg";
import lol from "../../../assets/images/LOL.svg";
import marvel from "../../../assets/images/marvel.svg";
import Arrows from "../../../components/Arrows/Arrows";
import Logos from "../../../components/Logos/Logos";
import creditcard from "../../../assets/images/creditcard.svg";
import truck from "../../../assets/images/truck.svg";
import motorcycle from "../../../assets/images/motorcycle.svg";
import ShippingDetailsCard from "../../../components/Cards/ShippingDetailsCard/ShippingDetailsCard";

const Carrousels = () => {
  return (
    <div className={style.carrouselsContainer}>
      <p className={style.brandsTitle}>Nuestras marcas</p>
      <div className={style.brandsCarrousel}>
        <div className={style.brandsScroll}>
          <Arrows />
        </div>
        <Logos brand={disney} />
        <Logos brand={funko} />
        <Logos brand={lol} />
        <Logos brand={marvel} />
      </div>
      <div className={style.shippingDetailsCarrousel}>
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
    </div>
  );
};

export default Carrousels;
