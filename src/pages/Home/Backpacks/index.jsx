import React, { useState } from "react";
import BackpackCard from "./BackpackCard";
import { fakeDataHandler } from "../../../utils/fakeDataHandler";
import jansport from "../../../assets/images/backpacks/jansport.jpg";
import jansport2 from "../../../assets/images/backpacks/jansport2.jpg"
import style from "./style.module.scss";
import Pagination from "../../../components/Pagination/Pagination";
import { carrouselPagination } from "../../../utils/pagnationHandler";

const Backpacks = () => {
  const products = fakeDataHandler();
  const [currentPage, setCurrentPage] = useState(1);
  const data = carrouselPagination(products, "mobile", currentPage);
  return (
    <div className={style.jansportContainer}>
      <div className={style.jansportImages}>
        <div className={style.jansportImage}>
          <img src={jansport} alt="jp" />
        </div>
        <img className={style.jansportImage2} src={jansport2} alt="jp" />
      </div>
      <div className={style.jansportBottomWrapper}>
        {data.currentProducts.map((product) => (
          <BackpackCard product={product} />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={data.totalPages}
          onPageChange={(page) => setCurrentPage(page)}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default Backpacks;
