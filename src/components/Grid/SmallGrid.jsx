import React from "react";
import { newPagination } from "../../utils/pagnationHandler";
import style from "./style.module.scss";
import ProductCard from "../Cards/ProductCard/ProductCard";
import ArrowPagination from "../Pagination/ArrowPagination";

const SmallGrid = ({ products, currentPage, setCurrentPage, title }) => {
  const mobileData = newPagination(products, "mobile", currentPage);
  const desktopData = newPagination(products, "desktop", currentPage);

  return (
    <div className={style.newContainer}>
      <div className={style.newTopWrapper}>
        <p className={style.newTitle}>{title}</p>
        <p className={style.newSubtitle}>Ver todo</p>
      </div>
      <div className={style.newBottomWrapperMobile}>
        <div className={style.newInnerWrapper}>
          {mobileData.currentProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
        <ArrowPagination
          currentPage={currentPage}
          totalPages={mobileData.totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <div className={style.newBottomWrapperDesktop}>
        <div className={style.newInnerWrapper}>
          {desktopData.currentProducts.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
        <ArrowPagination
          currentPage={currentPage}
          totalPages={desktopData.totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default SmallGrid;
