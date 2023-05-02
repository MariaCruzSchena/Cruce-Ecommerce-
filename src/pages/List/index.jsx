import React, { useState } from "react";
import { useSelector } from "react-redux";
import { listPagination } from "../../utils/pagnationHandler";
import style from "./style.module.scss";
import modal from "../../assets/images/ui/modal.png";
import cross from "../../assets/images/ui/cross.svg";
import Banner from "./Banner";
import Filters from "./Filters";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import ListCard from "./Card/ListCard";
import NumberPagination from "../../components/Pagination/NumberPagination";
import HalfCircleBtn from "../../components/UI/Buttons/HalfCircleBtn";

const List = () => {
  const filter = useSelector((state) => state.filters);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(true);

  const dataMobile = listPagination(filter.array, "mobile", currentPage);
  const dataDesktop = listPagination(filter.array, "desktop", currentPage);

  return (
    <>
      <div>
        <div className={modalOpen ? style.listModal : style.listModalClosed}>
          <img
            src={modal}
            alt="modal"
            className={modalOpen ? style.modal : style.listModalClosed}
          />
          <p className={modalOpen ? null : style.listModalClosed}>
            Aprovechá hasta 18 cuotas sin interés
          </p>
          <img
            src={cross}
            alt="close"
            className={modalOpen ? style.cross : style.listModalClosed}
            onClick={() => setModalOpen(false)}
          />
        </div>
        <div className={style.listHeader} id="listUp">
          <Filters />
          <Banner />
        </div>
        <div className={style.listMobile}>
          {dataMobile.currentProducts[0]
            ? dataMobile.currentProducts.map((item, i) => (
                <div key={i}>
                  <ProductCard product={item} column={false} />
                  <div className={style.listDivider}></div>
                </div>
              ))
            : null}
          <HalfCircleBtn id="#listUp" />
          <NumberPagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            totalPages={dataMobile.totalPages}
          />
        </div>
        <div className={style.listDesktop}>
          <div className={style.listProducts}>
            {dataDesktop.currentProducts[0]
              ? dataDesktop.currentProducts.map((item, i) => (
                  <div key={i}>
                    <ListCard product={item} />
                    <div className={style.listDivider}></div>
                  </div>
                ))
              : null}
          </div>
          <NumberPagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            totalPages={dataDesktop.totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default List;
