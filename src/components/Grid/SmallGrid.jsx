import React from "react";
import ProductCard from "../Cards/ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import { newPagination } from "../../utils/newPagnation";
import style from "./style.module.scss"

const SmallGrid = ({products, currentPage, setCurrentPage, title}) => {
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
          {mobileData.currentProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={mobileData.totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      <div className={style.newBottomWrapperDesktop}>
        <div className={style.newInnerWrapper}>
          {desktopData.currentProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={desktopData.totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default SmallGrid;
