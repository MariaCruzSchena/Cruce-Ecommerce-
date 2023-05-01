import React from "react";
import style from "./style.module.scss";
import Filter from "../../../components/UI/Filter/Filter";
import Sorter from "../../../components/UI/Sorter/Sorter";
import Breadcrumbs from "../../../components/UI/Breadcrumbs/Breadcrumbs";

const Filters = () => {
  return (
    <div className={style.filtersContainer}>
      <Breadcrumbs />
      <Filter />
      <Sorter />
    </div>
  );
};

export default Filters;
