import React from "react";
import style from "./style.module.scss"
import Banner from "./Banner";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";

const List = () => {
  const list = useSelector(state=> state.list) 
  return (
    <div>
      <div className={style.listHeader}>
        <Filters />
        <Banner />
        <div>
          {
            list.map(item=>(
              <>
              <ProductCard product={item} column={false}/>
              <div className={style.listDivider}></div>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default List;
