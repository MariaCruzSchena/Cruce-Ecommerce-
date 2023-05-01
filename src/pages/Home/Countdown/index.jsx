import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import SmallProductCard from "../../../components/Cards/SmallProductCard/SmallProductCard";

const Countdown = () => {
  const products = useSelector((state) => state.mostSearched);
  const [countDown, setCountDown] = useState("");
  const countDownDate = new Date("May 03, 2023 08:30:13").getTime();

  const x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(x);
      setCountDown(null);
      return;
    }

    let hours = Math.floor(distance / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountDown(`${hours}:${minutes}:${seconds}`);
  }, 1000);

  return (
    <>
      {countDown && (
        <div className={style.countContainer}>
          <div>
            <p className={style.countTitleText}>Termina en</p>
            <p className={style.countTitle}>{countDown}</p>
            <div className={style.countSpans}>
              <span>hs</span>
              <span>min</span>
              <span>seg</span>
            </div>
          </div>

          {products.map((product) => (
            <SmallProductCard product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Countdown;
