import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import FooterSocials from "./FooterSocials";
import FooterImages from "./FooterImages";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerContactWrapper}>
        <div className={style.footerContactLeft}>
          <p className={style.footerContactTitle}>Contacto</p>
          <p className={style.footerContactSubtitle}>Mayoristas</p>
        </div>
        <div className={style.footerContactRight}>
          <p className={style.footerInputTitle}>¿Buscas ofertas?</p>
          <input
            className={style.footerInput}
            type="email"
            placeholder="Email"
          />
          <button className={style.footerInputBtn}>Enviar</button>
        </div>
      </div>
      <div className={style.footerContentWrapper}>
        <div className={style.footerSocials}>
          <FooterSocials />
        </div>
        <div className={style.footerLinks}>
          <Link>
            <p>Preguntas frec.</p>
          </Link>
          <Link>
            <p>Térm y cond.</p>
          </Link>
          <Link>
            <p>Mis pedidos</p>
          </Link>
        </div>
      </div>
      <FooterImages />
    </div>
  );
};

export default Footer;
