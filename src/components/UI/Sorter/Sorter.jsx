import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter, setQuery } from "../../../state/filters";
import style from "./style.module.scss";
import arrowBottom from "../../../assets/images/arrows/arrowBottom.svg";
import arrowTop2 from "../../../assets/images/arrows/arrowTop2.svg";

const Filter = () => {
  const dispatch = useDispatch();
  const [isSorterOpen, setIsSorterOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { name: "Precio asc", query: "priceASC" },
    { name: "Precio desc", query: "priceDESC" },
    { name: "Nombre asc", query: "nameASC" },
    { name: "Nombre desc", query: "nameDESC" },
  ];

  const handleDropdownToggle = () => {
    setIsSorterOpen(!isSorterOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    setIsSorterOpen(false);
    dispatch(setFilter("sort"));
    dispatch(setQuery(option.query));
  };

  return (
    <div className={style.sorterContainer}>
      <button className={style.sorterBtn} onClick={handleDropdownToggle}>
        {selectedOption || "Ordenar por"}
      </button>
      <img
        className={style.sorterIcon}
        src={!isSorterOpen ? arrowBottom : arrowTop2}
        alt="arrow"
      />

      {isSorterOpen && (
        <ul className={style.sorterMenu}>
          {options.map((option) => (
            <li
              className={style.sorterOption}
              key={option.query}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
