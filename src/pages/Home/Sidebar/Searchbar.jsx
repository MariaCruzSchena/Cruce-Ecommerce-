import React from "react";
import style from "./style.module.scss"
import magnifiyingGlass from "../../../assets/images/navbar/magnifyingGlass.svg";

const Searchbar = () => {
  return (
    <div className={style.searchbarContainer}>
      <img className={style.searchbarIcon} src={magnifiyingGlass} alt="maginifiying glass"/>
      <input className={style.searchbarInput} type="text" placeholder="¿Qué estás buscando?"/>
      
    </div>
  )
};

export default Searchbar;
