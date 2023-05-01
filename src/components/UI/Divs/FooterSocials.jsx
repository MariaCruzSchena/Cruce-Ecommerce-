import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import facebook from "../../../assets/images/footer/instagram.svg";
import instagram from "../../../assets/images/footer/youtube.svg";
import youtube from "../../../assets/images/footer/facebook.svg";

const FooterSocials = () => {
  return (
    <>
      <div className={style.socials}>
        <p>Instagram</p>
        <Link>
          <img src={instagram} alt="instagram"/>
        </Link>
      </div>
      <div className={style.socials}>
        <p>Youtube</p>
        <Link>
          <img src={youtube} alt="youtube"/>
        </Link>
      </div>
      <div className={style.socials}>
        <p>Facebook</p>
        <Link>
          <img src={facebook} alt="facebook"/>
        </Link>
      </div>
    </>
  );
};

export default FooterSocials;
