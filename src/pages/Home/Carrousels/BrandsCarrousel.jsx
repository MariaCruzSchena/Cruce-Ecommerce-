import React, { useState } from "react";
import { carrouselPagination } from "../../../utils/pagnationHandler";
import style from "./style.module.scss";
import disney from "../../../assets/images/brands/disney.svg";
import funko from "../../../assets/images/brands/funko.svg";
import lol from "../../../assets/images/brands/LOL.svg";
import marvel from "../../../assets/images/brands/marvel.svg";
import Arrows from "../../../components/Arrows/Arrows";
import Logos from "../../../components/Logos/Logos";
import CarrouselCard from "../../../components/Cards/CarrouselCard/CarrouselCard";

const BrandsCarrousel = () => {
  const products = [disney, funko, lol, marvel];
  const repeatedProducts = products
    .concat(products.map((el) => el))
    .concat(products.map((el) => el));

  const [currentPage, setCurrentPage] = useState(1);

  const mobileData = carrouselPagination(
    repeatedProducts,
    "mobile",
    currentPage
  );
  const desktopData = carrouselPagination(
    repeatedProducts,
    "desktop",
    currentPage
  );

  return (
    <>
      <div className={style.brandsCarrouselMobile}>
        <CarrouselCard
          array={mobileData.currentProducts}
          kind="logos"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={mobileData.totalPages}
        />
      </div>
      <div className={style.brandsCarrouselDesktop}>
        <div className={style.brandsScrollDesktop}>
          <Arrows
            onPageChange={(page) => setCurrentPage(page)}
            currentPage={currentPage}
            totalPages={desktopData.totalPages}
          />
        </div>
        <div className={style.sliderDesktop}>
          {desktopData.currentProducts.map((element, i) => (
            <Logos brand={element} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandsCarrousel;
