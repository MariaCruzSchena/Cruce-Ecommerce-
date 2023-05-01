import React from "react";
import style from "./style.module.scss"
import Banner from "./Banner";
import Filters from "./Filters";

const List = () => {
  return (
    <div>
      <div className={style.listHeader}>
        <Filters />
        <Banner />
      </div>
    </div>
  );
};

export default List;
