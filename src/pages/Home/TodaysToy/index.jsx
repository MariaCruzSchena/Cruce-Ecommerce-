import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import ProductCard from "../../../components/Cards/ProductCard/ProductCard";

const TodaysToy = () => {
  const toy = useSelector((state) => state.favorite);
  return (
    <div className={style.todaysToyContainer}>
      <div className={style.todaysToyTitleWrapper}>
        {" "}
        <p className={style.todaysToyTitle}>Juguete del día</p>
      </div>
      <div className={style.todaysToyInfo}>
        <iframe
          className={style.todaysToyIframe}
          width="651"
          height="366"
          src="https://www.youtube.com/embed/9GJZZNM1eF4"
          title="Game of Thrones | The Great Funko Pop! War Is Here"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <div className={style.todaysToyMobile}>
          <ProductCard product={toy} column={false} />
        </div>
        <div className={style.todaysToyDesktop}>
          <ProductCard product={toy} column={true} />
        </div>
      </div>
    </div>
  );
};

export default TodaysToy;
