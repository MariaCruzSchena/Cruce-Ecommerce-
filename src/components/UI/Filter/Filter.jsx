import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter, setQuery } from "../../../state/filters";
import style from "./style.module.scss";
import filter from "../../../assets/images/ui/filter.svg";
import arrowRight from "../../../assets/images/arrows/arrowRight.svg";
import arrowBottom from "../../../assets/images/arrows/arrowBottom.svg";

const Filter = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { name: "Todos", query: "discountOFF" },
    { name: "Sale", query: "discountON" },
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    setIsDropdownOpen(false);
    dispatch(setFilter(option.name === "Todos" ? null : "filter"));
    dispatch(setQuery(option.name === "Todos" ? null : option.query));
  };

  return (
    <div className={style.filterContainer}>
      <img className={style.filterIcon} src={filter} alt="filter" />
      <button className={style.filterBtn} onClick={handleDropdownToggle}>
        {selectedOption || "Filtrar por"}
      </button>
      <img
        className={style.filterIconDiff}
        src={!isDropdownOpen ? arrowRight : arrowBottom}
        alt="arrow"
      />

      {isDropdownOpen && (
        <ul className={style.filterMenu}>
          {options.map((option) => (
            <li
              className={style.filterOption}
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
