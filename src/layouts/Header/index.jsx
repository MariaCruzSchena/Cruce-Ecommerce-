import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import cruceLogo from "../../assets/images/cruceLogo.jpg";
import magnifyingGlass from "../../assets/images/magnifyingGlass.svg";
import cart from "../../assets/images/cart.svg";
import user from "../../assets/images/user.svg";
import bars from "../../assets/images/bars.svg";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainerLeft}>
        <img className={styles.barsIcon} src={bars} alt="menu" />
        <Link className={styles.headerItemBlack}>Categorías</Link>
        <Link className={styles.headerItem}>LOL</Link>
        <Link className={styles.headerItem}>CryBabies</Link>
        <Link className={styles.headerItem}>Funko</Link>
        <Link className={styles.headerItemRed}>Hot sale!</Link>
      </div>
      <div className={styles.headerContainerMiddle}>
        <Link><img className={styles.logo} src={cruceLogo} alt="cruce logo" /></Link>
      </div>
      <div className={styles.headerContainerRight}>
        <div className={styles.iconWrapper}>
        <Link><img
            className={styles.glassIcon}
            src={magnifyingGlass}
            alt="magnifying glass"
          /></Link>
        </div>
        <Link><img className={styles.userIcon} src={user} alt="user" /></Link>
        <Link><img className={styles.cartIcon} src={cart} alt="cart" /></Link>
        <span>3</span>
      </div>
    </div>
  );
};

export default Header;
