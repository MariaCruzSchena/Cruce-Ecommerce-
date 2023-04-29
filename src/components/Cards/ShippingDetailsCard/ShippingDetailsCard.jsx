import React from "react";
import styles from "./style.module.scss";

const ShippingDetailsCard = ({ img, imgName, title, subtitle }) => {
  const className = imgName === "motorcycle" ? styles.detailCardSubtitleDiff : styles.detailCardSubtitle;
  return (
    <div className={styles.detailCardContainer}>
      <div className={styles.detailCardWrapper}>
        <img src={img} alt="details" />
      </div>
      <div className={styles.detailCardWrapper}>
        <p className={styles.detailCardTitle}>{title}</p>
        <p className={className}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ShippingDetailsCard;
